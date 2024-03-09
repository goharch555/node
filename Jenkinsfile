pipeline {
    agent { label "dev-server" }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the specified Git repository and branch
                git branch: 'main', url: 'https://github.com/goharch555/node.git'
            }
        }
        stage('Move to Project Directory') {
            steps {
                // Move to the project directory
                sh 'cd /var/nodeapp/'
            }
        }
        stage('Execute Script') {
            steps {
                // Execute the script
                sh 'sudo sh ./deploy.sh'
            }
        }
    }
}
