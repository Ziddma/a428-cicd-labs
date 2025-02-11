node {

    stage('Checkout Code') {
        git branch: 'react-app', url: 'https://github.com/Ziddma/a428-cicd-labs.git'
    }

    stage('Build') {
        docker.image('node:16-buster-slim').inside('-p 3000:3000') {
            sh 'npm install'
        }
    }

    stage('Test') {
        docker.image('node:16-buster-slim').inside('-p 3000:3000') {
            sh 'chmod +x ./jenkins/scripts/test.sh'
            sh './jenkins/scripts/test.sh'
        }
    }

    stage('Manual Approval') {
        script {
            input message: 'Melanjutkan tahap deploy? (Klik "Proceed" untuk menlanjutkan)' 
        }
    }

    stage('Deploy') {
        docker.image('node:16-buster-slim').inside('-p 3000:3000') {
            sh 'chmod +x ./jenkins/scripts/deliver.sh'
            sh './jenkins/scripts/deliver.sh'
            sh 'sleep 60'

            // sh 'chmod +x ./jenkins/scripts/kill.sh'
            // sh './jenkins/scripts/kill.sh'
            
        }
    }
}
