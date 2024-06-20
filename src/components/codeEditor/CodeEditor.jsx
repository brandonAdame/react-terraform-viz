import Editor from '@monaco-editor/react';
import './codeEditor.css'

function CodeEditor() {
    return (
        <Editor
            className='code-editor'
            height="90vh"
            width="50vw"
            theme="vs-dark"
            defaultLanguage="hcl"
            // path='./initial-file.tf'
        />
    )
}

export default CodeEditor;