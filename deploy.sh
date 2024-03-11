#!/bin/bash

# Navigate to the directory of the Jenkins workspace
cd /var/www/ni-api-gateway-jenkins

# Copy files to the project directory
cp -r * /var/www/ni-api-gateway-jenkins

# Navigate to the project directory
cd /var/www/ni-api-gateway-jenkins

# NPM install new modules.
npm i

# BUILD THE PROJECT
npm run build

# Check if the PM2 process is running
/usr/local/bin/pm2 list | grep ni-api-gateway > /dev/null

if [ $? -eq 0 ]; then
    # Restart the PM2 process
    /usr/local/bin/pm2 restart ni-api-gateway
else
    # Start the PM2 process
    /usr/local/bin/pm2 start dist/src/main.js --name ni-api-gateway
fi

# Output
echo "Deployment successful. The app is running via PM2."
