import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Greeting} from './Greeting.jsx'
import FavoriteFood from './FavoriteFood.jsx'
import HtmlToJSX from './HtmlToJSX.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HtmlToJSX />
  </StrictMode>,
)
