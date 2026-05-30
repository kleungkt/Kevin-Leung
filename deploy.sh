#!/bin/bash
# Deploy kevinleung-portfolio to Cloudflare Pages
# Usage: ./deploy.sh
#
# Prerequisites:
# - CLOUDFLARE_API_TOKEN env var set (or edit below)
# - SSH access to bohai-hk1 for building
# - wrangler installed (npm i -g wrangler)

set -e

PROJECT="kevinleung-portfolio"
BUILD_DIR="/tmp/kevinleung-build"
REMOTE_DIR="/www/wwwroot/kevinleung_portfolio_website"

echo "🔨 Building on bohai-hk1..."
ssh bohai-hk1 "cd $REMOTE_DIR && npm run build" 2>&1

echo "📦 Copying build..."
rm -rf $BUILD_DIR
scp -r bohai-hk1:${REMOTE_DIR}/build $BUILD_DIR

echo "🚀 Deploying to Cloudflare Pages..."
unset http_proxy https_proxy HTTP_PROXY HTTPS_PROXY all_proxy
CLOUDFLARE_API_TOKEN="${CLOUDFLARE_API_TOKEN:-cfut_lPo0KtyC0GHfXV0J04XnfPEpdYaI5dd2gjDjudMR13e14403}" \
wrangler pages deploy $BUILD_DIR --project-name $PROJECT --branch main --commit-dirty=true

echo "✅ Done! https://kevinleung.tech"
