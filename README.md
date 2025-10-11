# MTR Token Project

## Project Overview

MTR Token is a revolutionary reward token system designed for frequent travelers with investment opportunities. Earn tokens for your travels and invest in your next adventure.

## Getting Started

### Prerequisites

Make sure you have Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

Follow these steps to set up the project locally:

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies
npm install

# Step 4: Start the development server
npm run dev
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run build:dev` - Build the project in development mode
- `npm run lint` - Run ESLint to check for code issues
- `npm run preview` - Preview the production build locally

## Technologies Used

This project is built with modern web technologies:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library for building interactive interfaces
- **shadcn-ui** - High-quality React components
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Query** - Data fetching and caching

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
└── assets/         # Images and static assets
```

## Development

The development server runs on `http://localhost:8080` by default. The application will automatically reload when you make changes to the source code.

## Building for Production

To create a production build:

```sh
npm run build
```

The optimized files will be generated in the `dist` directory.

## Contributing

Feel free to submit issues and pull requests to improve the project.

## License

This project is private and not open for public distribution.
