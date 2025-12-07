#!/usr/bin/env bash
set -euo pipefail

echo "🔍 Checking for package.json..."
if [ ! -f "package.json" ]; then
  echo "❌ No package.json found. Please run this script from your Next.js project root."
  exit 1
fi

echo "📂 Project: $(pwd)"

# Optional: quick git safety check
if command -v git >/dev/null 2>&1; then
  CHANGES=$(git status --porcelain || true)
  if [ -n "$CHANGES" ]; then
    echo "⚠️  You have uncommitted changes. It is strongly recommended to commit or stash before upgrading."
  else
    echo "✅ Working tree is clean."
  fi
fi

echo "⬆️  Attempting automated upgrade with 'npx fix-react2shell-next'..."
if npx fix-react2shell-next; then
  echo "✅ fix-react2shell-next completed."
else
  echo "⚠️ fix-react2shell-next failed or is not available."
  echo "➡️ Falling back to manual dependency upgrade to latest Next + React."

  # Detect package manager
  if [ -f "yarn.lock" ]; then
    PM="yarn"
  elif [ -f "pnpm-lock.yaml" ]; then
    PM="pnpm"
  else
    PM="npm"
  fi

  echo "📦 Detected package manager: $PM"

  case "$PM" in
    yarn)
      yarn add next@latest react@latest react-dom@latest
      ;;
    pnpm)
      pnpm add next@latest react@latest react-dom@latest
      ;;
    npm)
      npm install next@latest react@latest react-dom@latest
      ;;
  esac
fi

echo "📥 Installing dependencies..."
if [ -f "yarn.lock" ]; then
  yarn install
elif [ -f "pnpm-lock.yaml" ]; then
  pnpm install
else
  npm install
fi

echo "🏗️  Building project to verify..."
if npm run build 2>/dev/null; then
  echo "✅ Build succeeded via 'npm run build'."
else
  if yarn build 2>/dev/null; then
    echo "✅ Build succeeded via 'yarn build'."
  elif pnpm build 2>/dev/null; then
    echo "✅ Build succeeded via 'pnpm build'."
  else
    echo "❌ Build failed. Please investigate build errors before deploying."
    exit 1
  fi
fi

echo "✅ Upgrade complete."
echo "👉 Next steps:"
echo "   1. Run your tests (if any)."
echo "   2. Commit changes (package.json, lockfile, etc)."
echo "   3. Push and trigger a new Vercel deployment."
