import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppBox } from './app/box'
import './style/main.css'

const container = document.getElementById('root')
if (container === null)
  throw new Error('Failed to find the root element')

const app = (
  <StrictMode>
    <AppBox />
  </StrictMode>
)

createRoot(container).render(app)
