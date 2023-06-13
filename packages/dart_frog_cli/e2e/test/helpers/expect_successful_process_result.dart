import 'dart:io';

import 'package:test/test.dart';

Future<ProcessResult> expectSuccessfulProcessResult(
  String executable,
  List<String> arguments, {
  required String workingDirectory,
  bool validateStderr = true,
}) async {
  final result = await Process.run(
    executable,
    arguments,
    workingDirectory: workingDirectory,
    runInShell: true,
  );
  expect(
    result.exitCode,
    equals(0),
    reason:
        '''`$executable ${arguments.join(' ')}` in $workingDirectory failed with "${result.stderr}" and "${result.stdout}"''',
  );
  if (validateStderr) {
    expect(result.stderr, isEmpty);
  }

  return result;
}
