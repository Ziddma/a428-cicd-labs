#!/usr/bin/env bash

echo 'Deploying React application in Docker-in-Docker (DIND)...'

# Membuat direktori untuk aplikasi di dalam container
mkdir -p /home/jenkins/react-app

# Menyalin seluruh kode aplikasi React ke dalam direktori yang tepat
cp -r ./ /home/jenkins/react-app

# Pindah ke dalam direktori aplikasi
cd /home/jenkins/react-app

# Instalasi dependensi dan build aplikasi React
echo 'Instalasi dependensi aplikasi...'
npm install

echo 'Membangun aplikasi React untuk produksi...'
npm run build

# Menjalankan aplikasi di background pada port 3000
echo 'Menjalankan aplikasi React di background pada port 3000...'
npm start -- --port 3000 &

# Mendapatkan PID aplikasi yang dijalankan
APP_PID=$!

# Memberikan waktu 1 menit agar aplikasi dapat diakses
echo "Aplikasi berjalan di: http://13.215.183.136:3000"
echo "Silakan akses aplikasi selama 1 menit sebelum pipeline berakhir."

# Menunggu selama 1 menit agar aplikasi dapat diakses
sleep 60

# Menghentikan aplikasi yang berjalan
echo "Menghentikan aplikasi..."
pkill -f "npm start" || echo "Proses tidak ditemukan, mungkin sudah berhenti."

# Menyelesaikan deploy
echo "Deploy selesai!"
