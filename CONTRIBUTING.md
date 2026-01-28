# Contributing to JCD Voice Studio

Thank you for your interest in contributing to JCD Voice Studio! 🙏

## How to Contribute

### Reporting Bugs

If you find a bug:
1. Check if the issue already exists in [Issues](https://github.com/kelylo/JCD-voice-studio/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if applicable)
   - Browser/OS information

### Suggesting Enhancements

We welcome feature suggestions! Please:
1. Search existing issues to avoid duplicates
2. Create a new issue with the "enhancement" label
3. Describe the feature clearly
4. Explain why it would be useful
5. Provide examples if possible

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
   - Follow the existing code style
   - Add comments where necessary
   - Test your changes thoroughly
4. **Commit with clear messages**
   ```bash
   git commit -m "Add: Amazing feature description"
   ```
5. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**
   - Describe your changes clearly
   - Reference related issues
   - Include screenshots if UI changes

## Development Setup

```bash
# Clone your fork
git clone https://github.com/your-username/JCD-voice-studio.git

# Install dependencies
npm install

# Create .env.local from example
cp .env.local.example .env.local

# Add your Gemini API key to .env.local

# Start development server
npm run dev
```

## Code Style

- Use TypeScript for type safety
- Follow React best practices
- Use functional components and hooks
- Keep components small and focused
- Use meaningful variable names
- Add comments for complex logic

## Commit Message Guidelines

- **Add:** New feature
- **Fix:** Bug fix
- **Update:** Changes to existing features
- **Remove:** Deprecated feature removal
- **Refactor:** Code restructuring
- **Docs:** Documentation changes
- **Style:** Formatting, no code change

## Testing

Before submitting a PR:
- [ ] Test all user flows
- [ ] Check responsive design (mobile/tablet/desktop)
- [ ] Verify keyboard shortcuts work
- [ ] Test with different browsers
- [ ] Ensure no console errors

## Community Guidelines

- Be respectful and inclusive
- Help others when you can
- Accept constructive feedback
- Follow our [Code of Conduct](CODE_OF_CONDUCT.md)

## Questions?

Feel free to reach out:
- Open an issue for discussion
- Comment on existing issues
- Join our community on social media

---

Thank you for contributing! 💚
