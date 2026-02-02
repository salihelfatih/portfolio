#!/bin/bash

# Portfolio Setup Script
# Automates the initial setup process for the portfolio

set -e

echo "🎨 Portfolio Setup Script"
echo "========================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo ""
echo "✅ Dependencies installed successfully!"
echo ""

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local file..."
    cat > .env.local << EOF
# SendGrid Configuration
SENDGRID_API_KEY=your_sendgrid_api_key_here
SENDGRID_VERIFIED_SENDER=your_verified_email@example.com
SENDGRID_RECIPIENT_EMAIL=recipient@example.com
EOF
    echo "✅ .env.local created! Please update with your SendGrid credentials."
else
    echo "ℹ️  .env.local already exists. Skipping creation."
fi

echo ""

# Build the project
echo "🔨 Building the project..."
npm run build

echo ""
echo "✅ Build successful!"
echo ""

# Display next steps
echo "🎉 Setup Complete!"
echo "=================="
echo ""
echo "Next steps:"
echo "1. Update .env.local with your SendGrid credentials"
echo "2. Run 'npm run dev' to start the development server"
echo "3. Open http://localhost:3000 in your browser"
echo ""
echo "For testing:"
echo "- See tests/README.md for testing instructions"
echo "- Run test scripts in browser DevTools console"
echo ""
echo "For deployment:"
echo "- See README.md for deployment instructions"
echo "- Deploy to Vercel, Netlify, or your preferred platform"
echo ""
echo "Happy coding! 🚀"
