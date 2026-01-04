#!/bin/bash
# Quick start script for local development server

echo "🚀 Starting PRODATALYTICS website server..."
echo ""
echo "Server will start on: http://localhost:8000"
echo "Press Ctrl+C to stop the server"
echo ""
echo "Available pages:"
echo "  - Homepage: http://localhost:8000/pages/homepage.html"
echo "  - About: http://localhost:8000/pages/about.html"
echo "  - Services: http://localhost:8000/pages/services.html"
echo "  - Contact: http://localhost:8000/pages/contact.html"
echo "  - Internship: http://localhost:8000/pages/internship_program.html"
echo ""

python3 -m http.server 8000
