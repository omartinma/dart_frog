import 'dart:async';
import 'dart:io' as io;

import 'package:dart_frog_gen/dart_frog_gen.dart';
import 'package:mason/mason.dart';
import 'package:path/path.dart' as path;
import 'package:stream_transform/stream_transform.dart';
import 'package:watcher/watcher.dart';

/// Monitors a dart frog project for changes on its route configuration.
class RouteConfigMonitor {
  RouteConfigMonitor({
    required this.workingDirectory,
    required this.logger,
    required this.onRouteConfigurationChanged,
  });

  final String workingDirectory;
  final Logger logger;

  final void Function(RouteConfiguration) onRouteConfigurationChanged;

  bool _isRunning = false;

  StreamSubscription<WatchEvent>? _subscription;

  final Completer<ExitCode> _exitCodeCompleter = Completer<ExitCode>();

  Future<ExitCode> get exitCode => _exitCodeCompleter.future;

  Future<void> start() async {
    if (_isRunning) {
      return;
    }
    _isRunning = true;
    logger.info('Starting project monitor');

    // this is duplicated from DevServerRunner
    final entrypoint = path.join(workingDirectory, 'main.dart');
    final pubspec = path.join(workingDirectory, 'pubspec.yaml');
    final public = path.join(workingDirectory, 'public');
    final routes = path.join(workingDirectory, 'routes');

    bool shouldReload(WatchEvent event) {
      logger.detail('[watcher] $event');
      return path.equals(entrypoint, event.path) ||
          path.equals(pubspec, event.path) ||
          path.isWithin(routes, event.path) ||
          path.isWithin(public, event.path);
    }

    // todo: parametrize DirectoryWatcher.new
    final watcher = DirectoryWatcher(path.join(workingDirectory));

    _subscription = watcher.events
        .where(shouldReload)
        .debounce(Duration.zero)
        .listen((_) => regenerateRouteConfig());

    unawaited(
      _subscription!.asFuture<void>().then((value) async {
        await _subscription?.cancel();
        _isRunning = false;
        _exitCodeCompleter.complete(ExitCode.success);
      }),
    );
  }

  void terminate() {
    _subscription?.cancel();
    _subscription = null;
    _isRunning = false;
  }

  RouteConfiguration? regenerateRouteConfig() {
    final RouteConfiguration routeConfiguration;
    final projectDirectory = io.Directory(workingDirectory);
    try {
      routeConfiguration = buildRouteConfiguration(projectDirectory);
    } catch (error) {
      logger.err('$error');
      return null;
    }

    onRouteConfigurationChanged(routeConfiguration);
    return routeConfiguration;
  }
}