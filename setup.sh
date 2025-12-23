#!/bin/bash

# Create project
mkdir socialflow && cd socialflow
git init

# Create .gitignore
cat > .gitignore << 'EOF'
node_modules/
.env
logs/
dist/
.DS_Store
EOF

# Create structure
mkdir -p backend/src/{config,controllers,models,routes,middleware,services,utils,migrations,scripts}
mkdir -p frontend/src/{components,pages,hooks,context,services}
mkdir -p docker .github/workflows

# Now copy all files from artifacts, then:
git add .
git commit -m "Initial commit: Complete SocialFlow application"

# Push to GitHub
gh repo create socialflow --private --source=. --remote=origin --push