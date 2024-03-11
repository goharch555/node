#!/bin/bash

# Navigate to the directory of the Jenkins workspace
cd /var/lib/Jenkins/workspace/nodeapp

# Copy files to the project directory
cp -r * /var/nodeapp/ni-api-gateway

# Navigate to the project directory
cd /var/nodeapp/ni-api-gateway

# Find the process PID of instance 2443
PID=$(lsof -t -i :2443)

# If the PID is not empty, then kill it
if [ -n "$PID" ]; then
    kill $PID
fi

# Stop the PM2 process
/usr/local/bin/pm2 stop ni-api-gateway

# Install Node.js dependencies
npm install

# Start the app with PM2
/usr/local/bin/pm2 start ni-api-gateway --name ni-api-gateway

# Output
echo "Deployment successful. The app is running on port 2443 with a new PID."
