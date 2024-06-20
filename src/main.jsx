import React from 'react'
import ReactDOM from 'react-dom/client'
import CodeEditor from './components/codeEditor/CodeEditor'
import Visualizer from './components/visualizer/visualizer'
import Header from './components/header/header'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <CodeEditor />
    <Visualizer />
  </React.StrictMode>
)
