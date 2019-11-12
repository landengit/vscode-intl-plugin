/**
 * 国际化
 * landen
 */

import * as vscode from 'vscode';

/**
 * 国际化主函数
 */
export const intl = () => {
    
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showInformationMessage('Open a file first to manipulate text selections');
        return;
    }

    // 获取选中的文本
    const selections = editor.selections;
    const range = new vscode.Range(selections[0].start, selections[selections.length - 1].end);
    const text = editor.document.getText(range) || '';
    if (!text) {
        return;
    }

    editor.edit(edit => edit.replace(range, `<FormattedMessage id="${text}" />`));
} 