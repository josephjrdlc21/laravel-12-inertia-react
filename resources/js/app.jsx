import './bootstrap';

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('/app/Laravel/Views/**/*.jsx', { eager: true })
        return pages[`/app/Laravel/Views/${name}.jsx`]
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
})