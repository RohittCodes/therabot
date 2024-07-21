[![Hack To The Future](https://img.shields.io/badge/Hack%20To%20The%20Future-2024-blue?style=for-the-badge)](https://hack-to-the-future.devfolio.co/)

# TheraBot

![GitHub repo size](https://img.shields.io/github/repo-size/RohittCodes/therabot?style=for-the-badge) ![GitHub](https://img.shields.io/github/license/RohittCodes/therabot?style=for-the-badge) ![GitHub last commit](https://img.shields.io/github/last-commit/RohittCodes/therabot?style=for-the-badge)

TheraBot is a mental health chatbot that provides a safe space for users to talk about their mental health and receive support. It is designed to help users feel heard, understood, and supported. TheraBot uses Google's gemini API to provide users with personalized mental health resources and support.

## Table of Contents

- [TheraBot](#therabot)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Installation](#installation)
  - [Setup](#setup)
  - [License](#license)

## Features

- **Safe Space**: TheraBot provides a safe space for users to talk about their mental health and receive support.
- **Personalized Support**: TheraBot uses Google's gemini API to provide users with personalized mental health resources and support.
- **Spotify Integration**: TheraBot integrates with Spotify to provide users with personalized music recommendations based on their mood, emotions, and mental health needs.
- **Secure Authentication**: TheraBot uses secure authentication to protect user data and ensure privacy.
- **Real-time Chat**: TheraBot provides real-time chat support to help users feel heard, understood, and supported. It uses pusher to provide real-time chat functionality.

## Tech Stack
- **Frontend**: React.js, Next.js, Tailwind CSS, Shadcn UI
- **Database**: MySQL
- **Authentication**: Auth.js
- **Core packages**: pusher-js, uploadthing, resend, Google's gemini API

## Installation

1. Clone the repository
```bash
git clone https://github.com/RohittCodes/therabot.git
```

2. Change the directory
```bash
cd heymate
```

3. Install the dependencies
```bash
yarn
```

4. Run the application
```bash
yarn dev
```

## Setup

1. Create a `.env` file in the root directory of the project and add the following environment variables

```env

DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public" # replace with your database url
AUTH_SECRET="your-secret-here"

GITHUB_CLIENT_ID="your-github-client-id-here"
GITHUB_CLIENT_SECRET="your-github-client-secret-here"
GOOGLE_CLIENT_ID="your-google-client-id-here"
GOOGLE_CLIENT_SECRET="your-google-client-secret-here"

RESEND_API_KEY="your-resend-api-key-here"
RESEND_FROM_EMAIL="your-resend-from-email-here" # default: onboarding@resend.dev

NEXT_PUBLIC_URL="http://localhost:3000"

NEXT_PUBLIC_PUSHER_APP_KEY="your-pusher-app-key"
PUSHER_APP_ID="your-pusher-app-id"
PUSHER_SECRET="your-pusher-secret-key"
PUSHER_CLUSTER="your-pusher-cluster"

GOOGLE_API_KEY="your-google-api-key-here"

SPOTIFY_API_URI="https://api.spotify.com/v1"
SPOTIFY_CLIENT_ID="your-spotify-client-id-here"
SPOTIFY_CLIENT_SECRET="your-spotify-client-secret-here"
SPOTIFY_REDIRECT_URI="http://localhost:3000/api/spotify/callback"
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

