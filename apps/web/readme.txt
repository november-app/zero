@november/web

tech:
- next.js        (-> standalone server )
- prisma         (-> postgres in docker)
- tailwindcss
- shadcn-ui

struct:
- src/
    - app/
        - _/: page-specific components
        - api/: Next.js API routing
        - dash/: November main app route
            - colleges/
            - essays/
            - letters/
    - components/: globally reused components
        - theme/: Light/dark theming-specific
        - ui/: shadcn-ui install directory
    - lib/: non-jsx global providers, utils, etc.
- public/
    - (static assets)
- prisma/
    - prisma.schema
    - migrations/

(C) 2024 legacy codes incorporated limited inc.
