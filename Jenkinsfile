node {
    stage('Checkout Code') {
        git branch: 'react-app', url: 'https://github.com/Ziddma/a428-cicd-labs.git'
    }


    stage('Build') {
        docker.image('node:16-buster-slim').inside('-p 3000:3000') {
            sh 'export NODE_OPTIONS=--openssl-legacy-provider && npm run build'
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
            def userInput = input(
                message: 'Lanjutkan ke tahap Deploy?',
                parameters: [
                    choice(name: 'Approval', choices: ['Proceed', 'Abort'], description: 'Pilih apakah ingin melanjutkan atau tidak')
                ]
            )
            if (userInput == 'Abort') {
                error("Pipeline dihentikan oleh pengguna.")
            }
        }
    }

    stage('Deploy') {
        docker.image('node:16-buster-slim').inside('-p 3000:3000') {
            sh 'npm run build'
            sh 'npm start &'
        }
        script {
            echo "Menjalankan aplikasi selama 1 menit sebelum pipeline berakhir..."
            sh 'sleep 60'
        }
    }
}