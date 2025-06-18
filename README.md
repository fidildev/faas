# 🖕 Fuck You as a Service (FaaS)

> Because friends don't let friends live fuck you free

A humorous web service that generates shareable links containing random "fuck you" memes. Perfect for when you need to express your feelings in a creative and memorable way.

## ✨ Features

- 🎲 **Random Meme Generation** - Curated collection of 44+ "fuck you" themed memes
- 🔗 **Shareable Links** - Generate unique, shareable URLs for each meme
- 📊 **View Tracking** - Track how many times your shared meme has been viewed
- 📱 **Responsive Design** - Works beautifully on desktop and mobile devices
- 🎨 **Modern UI** - Clean, gradient-based design with Tailwind CSS
- 🚀 **Fast & Lightweight** - Built with Express.js and TypeScript
- 📤 **Social Media Ready** - Includes Open Graph and Twitter Card meta tags
- 🔄 **Auto-cleanup** - Expired links are automatically cleaned up

## 🛠 Technology Stack

- **Backend**: Node.js with Express.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tools**: TypeScript Compiler, PostCSS
- **Development**: Nodemon for hot reloading

## 📋 Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd faas
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the application**
   ```bash
   npm run build
   ```

## 🏃‍♂️ Running the Application

### Development Mode
```bash
npm run dev
```
This starts the development server with hot reloading on `http://localhost:3000`

### Production Mode
```bash
npm start
```
This runs the compiled application from the `dist` folder.

### Build Commands
```bash
# Build everything (CSS + TypeScript)
npm run build

# Build only TypeScript
npm run build:ts

# Build only CSS
npm run build:css

# Watch CSS changes during development
npm run build:css:watch

# Clean build directory
npm run clean
```

## 🌐 Usage

1. **Visit the homepage** at `http://localhost:3000`
2. **Click "Generate Fuck You Link"** to create a new shareable meme link
3. **Copy and share** the generated URL with your target recipient
4. **Track views** - Each time someone visits your link, the view count increases

## 📡 API Endpoints

### Main Routes
- `GET /` - Homepage with meme generator interface
- `POST /generate` - Generate a new shareable meme link
- `GET /:id` - View a specific meme by link ID
- `GET /stats/:id` - Get statistics for a specific link

### Meme API
- `GET /api/memes` - Get all available memes
- `GET /api/memes/random` - Get a random meme

### Example API Usage

**Generate a new link:**
```bash
curl -X POST http://localhost:3000/generate
```

**Get random meme:**
```bash
curl http://localhost:3000/api/memes/random
```

## 📁 Project Structure

```
faas/
├── src/                    # Source code
│   ├── app.ts             # Express app configuration
│   ├── server.ts          # Server startup and configuration
│   ├── models/            # Data models
│   │   ├── Link.ts        # Link management and storage
│   │   └── Meme.ts        # Meme collection and utilities
│   ├── routes/            # Route handlers
│   │   ├── index.ts       # Main routes (homepage, generate, view)
│   │   └── memes.ts       # Meme API routes
│   ├── views/             # HTML templates
│   │   ├── index.html     # Homepage template
│   │   └── meme.html      # Meme display template
│   └── public/            # Static assets
│       ├── css/           # Stylesheets
│       └── js/            # Client-side JavaScript
├── dist/                  # Compiled output (generated)
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── nodemon.json           # Nodemon configuration
```

## 🔧 Development

### Adding New Memes
Edit `src/models/Meme.ts` and add new meme objects to the `memes` array:

```typescript
{ id: 'new_id', url: 'https://example.com/meme.jpg' }
```

### Customizing Styles
- Edit `src/public/css/input.css` for custom CSS
- Modify `tailwind.config.js` for Tailwind configuration
- Run `npm run build:css:watch` during development

### Environment Configuration
The application runs on port 3000 by default. You can modify this in `src/server.ts`.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ⚠️ Disclaimer

This application is intended for humorous purposes only. Please use responsibly and be mindful of your audience when sharing generated links.

---

Made with 💀 and a sense of humor
