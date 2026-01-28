<div align="center">
<img width="1200" height="475" alt="JCD Voice Studio Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 🎙️ JCD Voice Studio v2

> Transform your faith-based scripts into inspiring audio with AI-powered Christian text-to-speech

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/jcd-voice-studio/deploys)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## ✨ Features

- 📝 **Script Refinement** - AI-powered text refinement with multiple devotional styles
- 🎤 **Faith-Focused Voices** - Multiple voices optimized for sermons, testimonies, and inspirational content
- 🎨 **Modern UI/UX** - Beautiful, responsive design with glassmorphism effects
- 🔊 **Studio Quality** - High-quality audio generation with waveform visualization
- ⌨️ **Keyboard Shortcuts** - Fast workflow with comprehensive shortcuts
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- 🔒 **Secure** - Built with security best practices and CSP headers
- ♿ **Accessible** - WCAG compliant with proper ARIA labels

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- Gemini API key ([Get one here](https://aistudio.google.com/app/apikey))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kelylo/JCD-voice-studio.git
   cd JCD-voice-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` and add your Gemini API key:
   ```env
   VITE_GEMINI_API_KEY=your_actual_api_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Navigate to `http://localhost:3000`

## 📦 Build for Production

```bash
npm run build
npm run preview
```

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GEMINI_API_KEY` | Your Gemini API key for AI features | Yes |

## 🎯 Usage

1. **Draft** - Write your script (up to 2000 characters)
2. **Refine** - Choose a tone style and refine with AI
3. **Voice** - Select a voice that matches your content
4. **Studio** - Preview, download, or share your audio

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🌐 Links

- **Live Demo**: [jcd-voice-studio.netlify.app](https://jcd-voice-studio.netlify.app)
- **YouTube**: [@JesusChosenDiary](https://www.youtube.com/@JesusChosenDiary)
- **Support**: [Buy Me a Coffee](https://buymeacoffee.com/jcdfamily)
- **Instagram**: [@jesuschosendiary](https://www.instagram.com/jesuschosendiary)

## 🙏 Acknowledgments

- Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/)
- Powered by [Google Gemini AI](https://ai.google.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

<div align="center">
Made with ❤️ and faith by <a href="https://www.youtube.com/@JesusChosenDiary">Jesus Chosen Diary</a>
</div>
