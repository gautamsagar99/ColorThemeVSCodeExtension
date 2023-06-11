import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('extension.myCustomTheme', async () => {
    const themeId = 'my-custom-theme-extension.myCustomTheme';
  
    // Update the color theme settings dynamically
    await vscode.workspace.getConfiguration().update('workbench.colorTheme', themeId, vscode.ConfigurationTarget.Global);
  
    // Reload the window to apply the new theme
    await vscode.commands.executeCommand('workbench.action.reloadWindow');
  });
  
  context.subscriptions.push(disposable);
}


// using the free icon from <a href="https://www.flaticon.com/free-icons/theme" title="theme icons">Theme icons created by Good Ware - Flaticon</a>
export function deactivate() {}
