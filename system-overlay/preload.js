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
            volume: 50, 
        };
    }
});
