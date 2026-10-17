import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { imagetools } from 'vite-imagetools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    // Every imported image is converted at build time:
    // - `import photo from './x.jpg?gallery'` gives { src, srcset, w, h }:
    //   a 600px WebP for grid tiles and a 1600px WebP for the full view.
    // - any other `import photo from './x.jpg'` stays a plain URL string,
    //   pointing at a WebP no wider than 1280px.
    imagetools({
      // camera files are often .JPG; the default pattern is lowercase-only
      include: /\.(jpe?g|png|webp|avif)(\?.*)?$/i,
      defaultDirectives: (url) =>
        url.searchParams.has('gallery')
          ? new URLSearchParams('w=600;1600&format=webp&quality=78&withoutEnlargement=true&as=img')
          : new URLSearchParams('w=1280&format=webp&quality=76&withoutEnlargement=true'),
    }),
  ],
})
