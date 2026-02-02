# Portfolio Setup Script (PowerShell)
# Automates the initial setup process for the portfolio

Write-Host "🎨 Portfolio Setup Script" -ForegroundColor Cyan
Write-Host "=========================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed. Please install Node.js 18+ first." -ForegroundColor Red
    exit 1
}

Write-Host ""

# Check if npm is installed
try {
    $npmVersion = npm --version
    Write-Host "✅ npm version: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ npm is not installed. Please install npm first." -ForegroundColor Red
    exit 1
}

Write-Host ""

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install

Write-Host ""
Write-Host "✅ Dependencies installed successfully!" -ForegroundColor Green
Write-Host ""

# Create .env.local if it doesn't exist
if (-not (Test-Path .env.local)) {
    Write-Host "📝 Creating .env.local file..." -ForegroundColor Yellow
    
    $envContent = @"
# SendGrid Configuration
SENDGRID_API_KEY=your_sendgrid_api_key_here
SENDGRID_VERIFIED_SENDER=your_verified_email@example.com
SENDGRID_RECIPIENT_EMAIL=recipient@example.com
"@
    
    $envContent | Out-File -FilePath .env.local -Encoding UTF8
    Write-Host "✅ .env.local created! Please update with your SendGrid credentials." -ForegroundColor Green
} else {
    Write-Host "ℹ️  .env.local already exists. Skipping creation." -ForegroundColor Blue
}

Write-Host ""

# Build the project
Write-Host "🔨 Building the project..." -ForegroundColor Yellow
npm run build

Write-Host ""
Write-Host "✅ Build successful!" -ForegroundColor Green
Write-Host ""

# Display next steps
Write-Host "🎉 Setup Complete!" -ForegroundColor Cyan
Write-Host "==================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Update .env.local with your SendGrid credentials"
Write-Host "2. Run 'npm run dev' to start the development server"
Write-Host "3. Open http://localhost:3000 in your browser"
Write-Host ""
Write-Host "For testing:" -ForegroundColor Yellow
Write-Host "- See tests/README.md for testing instructions"
Write-Host "- Run test scripts in browser DevTools console"
Write-Host ""
Write-Host "For deployment:" -ForegroundColor Yellow
Write-Host "- See README.md for deployment instructions"
Write-Host "- Deploy to Vercel, Netlify, or your preferred platform"
Write-Host ""
Write-Host "Happy coding! 🚀" -ForegroundColor Cyan
