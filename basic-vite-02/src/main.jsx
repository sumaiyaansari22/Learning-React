import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const element = (
  <a href="https://www.google.com" target = "_blank">Visit google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com',target: '_blank'},
  'Visit google'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <App />
  </>
)
