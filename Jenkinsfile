node {

    stage('Checkout Code') {
        git branch: 'react-app', url: 'https://github.com/Ziddma/a428-cicd-labs.git'
    }


    def isDeployApproved = false

    stage('Build') {
        docker.image('node:16-buster-slim').inside('-p 3000:3000') {
            echo '🔧 Installing dependencies...'
            sh 'npm install'
        }
    }

    stage('Test') {
        docker.image('node:16-buster-slim').inside('-p 3000:3000') {
            echo '🧪 Running tests...'
            sh 'chmod +x ./jenkins/scripts/test.sh'
            sh './jenkins/scripts/test.sh'
        }
    }

    stage('Manual Approval') {
        input message: 'Lanjutkan ke tahap Deploy?', parameters: [
            choice(name: 'Proceed or Abort', choices: ['Proceed', 'Abort'], description: 'Click Proceed to deploy or Abort to stop.')
        ]
        
        if (params.'Proceed or Abort' == 'Proceed') {
            isDeployApproved = true
            echo "Deploy Approved"
        } else {
            error "Pipeline Aborted"
        }
    }

    stage('Deploy') {
        when {
            expression { isDeployApproved }
        }
        docker.image('node:16-buster-slim').inside('-p 3000:3000') {
            echo '📦 Deploying application...'
            sh 'chmod +x ./jenkins/scripts/deliver.sh'
            sh './jenkins/scripts/deliver.sh'
            
            // Menjeda eksekusi selama 1 menit sebelum melanjutkan ke tahap berikutnya
            echo '⏳ Waiting for 1 minute to let the React App run...'
            sleep time: 1, unit: 'MINUTES'
            
            // Setelah 1 menit, aplikasi akan otomatis berhenti dan pipeline berhasil
            echo '✅ React App has been running for 1 minute. Proceeding to complete pipeline.'
            
            // Jalankan script untuk menghentikan aplikasi
            sh './jenkins/scripts/kill.sh'
        }
    }
}
