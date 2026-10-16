import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.jsx'

// Build-time entry (scripts/prerender.mjs); never hot-reloaded.
// eslint-disable-next-line react-refresh/only-export-components
export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  )
}

export { ROUTES, NOT_FOUND, SITE_URL, OG_IMAGE } from './seo.js'
