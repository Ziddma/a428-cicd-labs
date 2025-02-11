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
                // Menggunakan boolean parameter untuk dua tombol
                def proceed = input(
                    message: 'Lanjutkan ke tahap Deploy?',
                    parameters: [
                        booleanParam(defaultValue: true, description: 'Klik Proceed untuk melanjutkan atau Abort untuk menghentikan pipeline', name: 'Proceed')
                    ]
                )
                if (!proceed) {
                    error("Pipeline dihentikan oleh pengguna.")
            }
        }
    }

    stage('Deploy') {
        docker.image('node:16-buster-slim').inside('-p 3000:3000') {
            sh 'chmod +x ./jenkins/scripts/deliver.sh'
            sh './jenkins/scripts/deliver.sh'
            sh 'sleep 60'

            // Setelah 1 menit
            echo 'React App has been running for 1 minute. Proceeding to complete pipeline.'
            sh 'chmod +x ./jenkins/scripts/kill.sh'
            sh './jenkins/scripts/kill.sh'
            
        }
    }
}
