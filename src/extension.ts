import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('code-summary.summarizeCode', () => {
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        let selectedText = editor.document.getText(editor.selection);

        // prompt the user to select a breaking point
        vscode.window.showQuickPick(['Line Count', 'Function Count', 'Character Count'])
        .then((selectedOption) => {
            if(selectedOption === 'Line Count') {
				// perform line count logic

				let lineCount = selectedText.split(/\r\n|\r|\n/).length;
				vscode.window.showInformationMessage(`Selected text has ${lineCount} lines.`);
			} else if(selectedOption === 'Function Count') {
                // perform function count logic

				let functionCount = selectedText.split('function').length - 1;
				vscode.window.showInformationMessage(`Selected text has ${functionCount} functions.`);

            } else if(selectedOption === 'Character Count') {
                // perform character count logic

				let characterCount = selectedText.length;
				vscode.window.showInformationMessage(`Selected text has ${characterCount} characters.`);
            }
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
