# Outfitly - Your Personal AI Outfit Stylist

## 📋 Overview

Outfitly is a Next.js application that uses Google's Gemini 1.5 Pro AI to recommend personalized outfit suggestions based on user preferences. The application helps users solve the common problem of outfit indecision by providing tailored recommendations for different occasions, weather conditions, and style preferences.

## 🚀 Features

- **Personalized Outfit Recommendations**: Get AI-generated outfit suggestions tailored to your specific needs
- **Multi-step Form**: User-friendly interface to collect preferences step by step
- **Responsive Design**: Fully responsive UI that works on mobile, tablet, and desktop devices
- **AI Integration**: Powered by Google's Gemini 1.5 Pro generative AI model

## 🛠️ Tech Stack

- **Frontend**: [Next.js 15](https://nextjs.org/), [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **AI**: [Google Generative AI](https://ai.google.dev/) (Gemini 1.5 Pro)
- **Icons**: [Lucide React](https://lucide.dev/icons/)
- **Development**: [ESLint](https://eslint.org/), [Turbopack](https://turbo.build/pack)

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A Google Gemini API key (get one from [Google AI Studio](https://makersuite.google.com/app/apikey))

### Installation

1. Clone the repository:

   ```bash
   git clone https://your-repository-url/outfitly.git
   cd outfitly
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your Gemini API key:

   ```
   NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📝 Usage

1. Navigate to the home page to learn about Outfitly
2. Click on "Get Started" or "Try Outfitly Now" to access the recommendation form
3. Complete the multi-step form with your preferences:
   - Enter your name
   - Select your gender
   - Choose the current weather conditions
   - Specify the occasion
   - Enter your age
   - Select your style preference
4. Submit the form to receive your personalized outfit recommendation

## 🧩 Project Structure

```
outfitly/
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js App Router files
│   │   ├── recommend/  # Outfit recommendation page
│   │   └── page.tsx    # Home page
│   ├── components/     # React components
│   │   ├── ui/         # UI components
│   │   └── ...         # Other components
│   ├── config/         # Configuration files
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   ├── services/       # Service functions
│   ├── types/          # TypeScript type definitions
│   └── utils/          # Utility functions
├── .env.local          # Environment variables (create this file)
├── next.config.ts      # Next.js configuration
└── ...                 # Other configuration files
```

## 🚢 Deployment

This Next.js application can be deployed on [Vercel](https://vercel.com/) or any other platform that supports Next.js applications.

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Add your `NEXT_PUBLIC_GEMINI_API_KEY` to the environment variables in Vercel
4. Deploy the application

## 🔧 Development

- Run the development server: `npm run dev`
- Build for production: `npm run build`
- Start production server: `npm run start`
- Lint code: `npm run lint`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Google Generative AI](https://ai.google.dev/) for powering the outfit recommendations
- [Next.js](https://nextjs.org/) for the React framework
- [TailwindCSS](https://tailwindcss.com/) for the styling framework
- [Lucide React](https://lucide.dev/) for the beautiful icons
