#!/bin/bash
# Script to download technology and tool logos
# Run this script from the project root directory

LOGO_DIR="assets/images/logos-others"
mkdir -p "$LOGO_DIR"

echo "Downloading technology logos..."
echo "Note: Some logos may need to be downloaded manually from official sources"
echo ""

# Python Logo
echo "Downloading Python logo..."
curl -L "https://www.python.org/static/community_logos/python-logo.png" -o "$LOGO_DIR/python-logo.png" 2>/dev/null || echo "  ⚠️  Python logo - Download manually from: https://www.python.org/community/logos/"

# RStudio Logo
echo "Downloading RStudio logo..."
curl -L "https://www.rstudio.com/wp-content/uploads/2018/10/RStudio-Logo.png" -o "$LOGO_DIR/rstudio-logo.png" 2>/dev/null || echo "  ⚠️  RStudio logo - Download manually from: https://www.rstudio.com/about/"

# GitHub Logo
echo "Downloading GitHub logo..."
curl -L "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" -o "$LOGO_DIR/github-logo.png" 2>/dev/null || echo "  ⚠️  GitHub logo - Download manually from: https://github.com/logos"

# Tableau Logo
echo "Downloading Tableau logo..."
curl -L "https://www.tableau.com/sites/default/files/2021-05/tableau-logo-tableau-software.png" -o "$LOGO_DIR/tableau-logo.png" 2>/dev/null || echo "  ⚠️  Tableau logo - Download manually from: https://www.tableau.com/"

# Power BI Logo
echo "Downloading Power BI logo..."
curl -L "https://powerbi.microsoft.com/pictures/application-logos/svg/powerbi.svg" -o "$LOGO_DIR/powerbi-logo.png" 2>/dev/null || echo "  ⚠️  Power BI logo - Download manually from Microsoft brand center"

# Apache Airflow Logo
echo "Downloading Apache Airflow logo..."
curl -L "https://airflow.apache.org/images/feature-image.png" -o "$LOGO_DIR/airflow-logo.png" 2>/dev/null || echo "  ⚠️  Airflow logo - Download manually from: https://airflow.apache.org/"

echo ""
echo "✅ Download script completed!"
echo ""
echo "For logos that couldn't be downloaded automatically, please:"
echo "1. Visit the official websites listed above"
echo "2. Download the logos in PNG format"
echo "3. Save them to: $LOGO_DIR/"
echo "4. Use the exact filenames specified in the README.md"
echo ""
echo "Alternative: Use Simple Icons (https://simpleicons.org/) for SVG versions"

