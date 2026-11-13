import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { inject } from '@vercel/analytics'
import './styles/index.css'
import App from './App.jsx'

// Vercel Web Analytics: cookie-free page views (enable it in the Vercel
// project's Analytics tab). Only runs in the browser, never in prerender.
inject()

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Production pages are prerendered (see scripts/prerender.mjs), so hydrate
// them. `npm run dev` serves an empty root, so render from scratch there.
const root = document.getElementById('root')
if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
