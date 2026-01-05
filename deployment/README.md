# Deployment Directory

This directory contains all deployment-related scripts, configuration files, and documentation.

## 📁 Contents

- **`deploy.sh`** - Production deployment script (prepares files for traditional hosting)
- **`deploy-dev.sh`** - Dev/staging deployment script (prepares for Netlify)
- **`DEPLOYMENT_GUIDE.md`** - Complete production deployment guide
- **`DEV_DEPLOYMENT_GUIDE.md`** - Dev/staging deployment guide (Netlify)
- **`QUICK_START_DEPLOY.md`** - Quick 5-minute deployment guide

## 🚀 Quick Start

### For Dev/Staging (Client Review):
```bash
./deployment/deploy-dev.sh
```

### For Production:
```bash
./deployment/deploy.sh
```

Or use npm:
```bash
npm run deploy
```

## ⚙️ Configuration Files

**Note:** `netlify.toml` must remain in the **project root** directory (not in this folder) because Netlify requires it to be in the root to detect and use it.

## 📚 Documentation

- **Quick Start:** See `QUICK_START_DEPLOY.md` for fastest deployment
- **Dev Deployment:** See `DEV_DEPLOYMENT_GUIDE.md` for detailed Netlify setup
- **Production:** See `DEPLOYMENT_GUIDE.md` for production deployment options

---

**Last Updated:** January 2025

