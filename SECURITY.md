# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 2.0.x   | :white_check_mark: |
| < 2.0   | :x:                |

## Security Features

JCD Voice Studio implements several security measures:

- **Content Security Policy (CSP)** - Restricts resource loading to trusted sources
- **Security Headers** - X-Frame-Options, X-Content-Type-Options, X-XSS-Protection
- **Secure External Links** - All external links use `rel="noopener noreferrer"`
- **Environment Variables** - API keys stored securely in environment variables
- **HTTPS Only** - Enforced via Strict-Transport-Security header
- **No Sensitive Data Storage** - No user data is stored or transmitted to third parties

## API Key Security

⚠️ **Important**: Never commit your `.env.local` file or expose your Gemini API key publicly.

- API keys should only be stored in `.env.local` (which is gitignored)
- Use environment variables for all sensitive configuration
- Rotate API keys regularly
- Monitor API usage for unusual activity

## Reporting a Vulnerability

If you discover a security vulnerability, please:

1. **Do NOT** open a public issue
2. Email: [Your contact email]
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

We will respond within 48 hours and work with you to address the issue promptly.

## Best Practices for Users

- Keep dependencies updated: `npm update`
- Review the security headers in `netlify.toml`
- Use strong API keys and rotate them regularly
- Monitor your API usage dashboard
- Report suspicious activity immediately

## Third-Party Services

This application uses:
- **Google Gemini AI** - For text refinement and speech generation
- **Netlify** - For hosting (with security headers)

Both services comply with industry-standard security practices.

---

Last Updated: January 29, 2026
