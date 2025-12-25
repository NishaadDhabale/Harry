Harry - Cinematic Web Experience
A high-performance, interactive web application built with Next.js and Motion (formerly Framer Motion). This project delivers a unique storytelling experience where visuals, typography, and audio react dynamically to the user's scroll position.

🚀 Features
Scroll-Driven Animations: Utilizes useScroll and useTransform for complex, parallax-style storytelling.

Immersive Audio: Integrated background tracks (e.g., snape.mp3, themee.mp3) that respond to user interaction and scroll depth.

Custom Typography: A rich set of local fonts including Fight Club, Grandmaster, Odachi, and TT Trailers to match the cinematic aesthetic.

State Management: Uses Zustand with session persistence to manage user preferences like audio muting and UI states.

Responsive Experience: Includes a custom landing gate that optimizes the experience for larger screens and handles audio permissions.

🛠️ Tech Stack
Framework: Next.js 15+ (App Router)

Styling: Tailwind CSS 4

Animations: Motion

State Management: Zustand

Language: TypeScript

📋 Prerequisites
Node.js 20 or later

npm, yarn, pnpm, or bun

⚙️ Getting Started
Clone the repository:

Bash

git clone <repository-url>
cd main
Install dependencies:

Bash

npm install
Run the development server:

Bash

npm run dev
Open the app: Navigate to http://localhost:3000 to view the project.

📂 Project Structure
/app: Contains the main routing logic and global layout.

layout.tsx: Configures global fonts and metadata.

page.tsx: The entry point with screen-size checks and audio initialization.

/pages:

Story.tsx: The core component containing the horizontal scroll logic and cinematic sequences.

/components:

store.ts: Global state management for audio and UI toggles.

Navigation.tsx: Site navigation components.

variants.ts: Animation configurations for Motion.

/public: Static assets including local fonts, images, and audio files.

🎨 Design Assets
The project relies on specific local fonts defined in the root layout:

--font-barlow: Barlow (Google Font)

--font-fightclub: FIGHTT3_.ttf

--font-grandmaster: Grandmaster-Regular.otf

--font-Odachi: Odachi.otf

--font-halfdeath: HALF DEATH.ttf

🚢 Deployment
The easiest way to deploy this project is via the Vercel Platform.

Bash

npm run build
Check out the Next.js deployment documentation for more details.
