const si = require('systeminformation');
const loudness = require('loudness');

let timePlayed = 0;

// Update Date
function updateDate() {
    const now = new Date();
    const date = now.toLocaleDateString();
    document.getElementById('date').textContent = `Date: ${date}`;
}

// Update Time (H:MM AM/PM format)
function updateTime() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12; // Convert to 12-hour format
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    document.getElementById('date-time').textContent = `Time: ${hours}:${minutes} ${ampm}`;
}

// Update Time Played
function updateTimePlayed() {
    timePlayed++;
    const minutes = Math.floor(timePlayed / 60);
    const seconds = timePlayed % 60;
    document.getElementById('time-played').textContent = `Time Played: ${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Update FPS (placeholder logic; replace with actual FPS if available)
function updateFPS() {
    document.getElementById('fps').textContent = `FPS: ${Math.floor(Math.random() * 60) + 30}`;
}

// Update CPU Usage
async function updateCPU() {
    const load = await si.currentLoad();
    document.getElementById('cpu').textContent = `CPU: ${Math.round(load.currentLoad)}%`;
}

// Update GPU Usage (if available)
async function updateGPU() {
    const graphics = await si.graphics();
    if (graphics.controllers.length > 0) {
        document.getElementById('gpu').textContent = `GPU: ${Math.round(graphics.controllers[0].utilizationGpu || 0)}%`;
    } else {
        document.getElementById('gpu').textContent = `GPU: N/A`;
    }
}

// Update Battery
async function updateBattery() {
    const battery = await si.battery();
    document.getElementById('battery').textContent = `Battery: ${battery.percent}%`;
}

// Update Volume (using loudness package)
async function updateVolume() {
    const volume = await loudness.getVolume();
    document.getElementById('volume').textContent = `Volume: ${volume}%`;
}

// Update All Stats
function updateStats() {
    updateDate();
    updateTime();
    updateTimePlayed();
    updateFPS();
    updateCPU();
    updateGPU();
    updateBattery();
    updateVolume();
}

// Update every second
setInterval(updateStats, 1000);
