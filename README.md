# undiegravity p 7

Theme and template provided by undiegravity

## Project Features

* Dynamic surgical implantology medical landing page template
* Server rendered content hydration with typed API service layer and automatic mock fallback
* Interactive consultation booking modal with async form state management
* Three dimensional navigational surgical guide viewer with interactive anatomical hotspots
* Three step immediate loading suitability calculator with backend submission integration
* Horizontal scrollable clinical condition intervention cards with expandable diagnostics modal
* Full dentition restoration diagnostic criteria indicators
* Verified patient outcomes and reviews section with live average rating aggregation
* Global CSS variable theme system with Tailwind CSS 4 design tokens
* Fully responsive layout with mobile navigation drawer and desktop sticky header

## Tech Stack and Versions

* Next.js 16.4.3
* React 19.3.0
* React DOM 19.3.0
* Tailwind CSS 4.0
* Lucide React 1.16.0
* TypeScript 5.0
* ESLint 9.0

## Backend API Endpoint List

* GET /site/content: Retrieve brand metadata, navigation links, doctor profile, clinical conditions, 3D model specs, diagnostic criteria, quiz configuration, value assurances, and footer content
* GET /reviews: Retrieve verified patient reviews, ratings, treatment categories, and dates
* POST /consultations: Submit patient consultation booking requests (`fullName`, `contact`, `concern`)
* POST /evaluations: Submit candidate immediate loading quiz evaluations (`fullName`, `phone`, `answers`)
