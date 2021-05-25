const os = require('os');
const user = os.userInfo();
console.log(user);

console.log(`The System Uptime is ${os.uptime()} seconds`);

const sysinfo = {
    name: os.type(),
    totalmemory: os.totalmem(),
    freememory: os.freemem(),
    release: os.release()
}
console.log(sysinfo);