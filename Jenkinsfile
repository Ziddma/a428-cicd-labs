node {
    stage('Build') {
        docker.image('node:20-buster-slim').inside('-p 3000:3000') {
            sh 'pwd'  // Debugging: Cek direktori kerja
            sh 'ls -l'  // Debugging: Cek apakah package.json ada
            sh 'cd app && npm install'
        }
    }

    stage('Test') {
        docker.image('node:20-buster-slim').inside('-p 3000:3000') {
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
        docker.image('node:20-buster-slim').inside('-p 3000:3000') {
            sh 'npm run build'
            sh 'npm start &'
        }
        script {
            echo "Menjalankan aplikasi selama 1 menit sebelum pipeline berakhir..."
            sh 'sleep 60'
        }
    }
}