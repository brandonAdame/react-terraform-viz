import Editor from '@monaco-editor/react';

function CodeEditor() {
    return (
        <Editor 
            height="90vh" 
            theme="vs-dark"
            defaultLanguage="hcl"
            defaultValue="// some comment" />
    )
}

export default CodeEditor;