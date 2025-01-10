const { contextBridge } = require('electron');
const si = require('systeminformation');

contextBridge.exposeInMainWorld('systemInfo', {
    getStats: async () => {
        return {
            date: new Date().toLocaleString(),
            cpu: await si.cpu(),
            gpu: await si.graphics(),
            memory: await si.mem(),
            battery: await si.battery(),
            network: await si.networkStats(),
            volume: 50, // Placeholder for volume (needs additional APIs)
            vpn: false // Placeholder for VPN status
        };
    }
});
