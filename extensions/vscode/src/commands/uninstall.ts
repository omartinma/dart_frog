const cp = require("child_process");

import { window, ProgressOptions } from "vscode";

export const uninstall = async () => {
  if (hasDartFrogCliInstalled()) {
    const shouldUninstallDartFrogCLI =
      (await window.showInformationMessage(
        "Do you want to uninstall Dart Frog CLI?",
        "Yes",
        "No"
      )) === "Yes";

    if (shouldUninstallDartFrogCLI) {
      const options: ProgressOptions = {
        location: 15,
        title: "Uninstalling Dart Frog CLI...",
      };
      window.withProgress(options, uninstallDartFrogCLI);
    }
  }

  const shouldUninstallDartFrogExtension =
    (await window.showInformationMessage(
      "Do you want to uninstall Dart Frog extension?",
      "Yes",
      "No"
    )) === "Yes";
  if (shouldUninstallDartFrogExtension) {
    const options: ProgressOptions = {
      location: 15,
      title: "Uninstalling Dart Frog extension...",
    };
    window.withProgress(options, uninstallDartFrogExtension);
  }
};

/**
 * Whether the user has dart_frog_cli installed in their system.
 *
 * @returns {boolean} Whether the user has dart_frog_cli installed in their system.
 */
function hasDartFrogCliInstalled(): boolean {
  try {
    cp.execSync(`dart_frog --version`);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Uninstalls Dart Frog CLI and its completion files.
 *
 * Shows an error message if the uninstallation fails.
 *
 * @returns { Promise<void> }
 */
async function uninstallDartFrogCLI(): Promise<void> {
  await cp.exec(
    `dart_frog uninstall-completion-files`,
    function (error: Error, stdout: String, stderr: String) {
      if (error) {
        window.showErrorMessage(error.message);
      }
    }
  );
  await cp.exec(
    `dart pub global deactivate dart_frog_cli`,
    function (error: Error, stdout: String, stderr: String) {
      if (error) {
        window.showErrorMessage(error.message);
      }
    }
  );
}

/**
 * Uninstalls Dart Frog extension.
 *
 * @returns { Promise<void> }
 */
async function uninstallDartFrogExtension(): Promise<void> {
  await cp.exec(
    `code --uninstall-extension VeryGoodVentures.dart-frog`,
    function (error: Error, stdout: String, stderr: String) {
      if (error) {
        window.showErrorMessage(error.message);
      }
    }
  );
}
