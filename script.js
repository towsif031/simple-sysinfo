console.log(process);
let output = `
    <h6 class="page-header">App Version Data</h6>
    <ul class="list-group">
        <li class="list-group-item">Node: &nbsp; ${process.versions.node}</li>
        <li class="list-group-item">Electron: &nbsp; ${process.versions.electron}</li>
        <li class="list-group-item">Chrome: &nbsp; ${process.versions.chrome}</li>
    </ul>
    &nbsp;
    <h6 class="page-header">System Specification</h6>
    <ul class="list-group">
        <li class="list-group-item">System Architecture: &nbsp; ${process.arch}</li>
        <li class="list-group-item">Processor Indetifier: &nbsp; ${process.env.PROCESSOR_IDENTIFIER}</li>
        <li class="list-group-item">Number of Processors: &nbsp; ${process.env.NUMBER_OF_PROCESSORS}</li>
        <li class="list-group-item">Processor Architecture: &nbsp; ${process.env.PROCESSOR_ARCHITECTURE}</li>
        <li class="list-group-item">Processor Level: &nbsp; ${process.env.PROCESSOR_LEVEL}</li>
        <li class="list-group-item">Hostname: &nbsp; ${process.env.HOSTNAME}</li>
        <li class="list-group-item">OS: &nbsp; ${process.env.OS}</li>
    </ul>
    &nbsp
    <h6 class="page-header">Computer Info</h6>
    <ul class="list-group">
        <li class="list-group-item">Windows Directory: &nbsp; ${process.env.WINDIR}</li>
        <li class="list-group-item">HomeDrive: &nbsp; ${process.env.HOMEDRIVE}</li>
        <li class="list-group-item">System Drive: &nbsp; ${process.env.SYSTEMDRIVE}</li>
        <li class="list-group-item">System Root: &nbsp; ${process.env.SYSTEMROOT}</li>
        <li class="list-group-item">User Domain: &nbsp; ${process.env.USERDOMAIN}</li>
        <li class="list-group-item">Username: &nbsp; ${process.env.USERNAME}</li>
    </ul>
    &nbsp
    <h6 class="page-header">System Memory Info</h6>
    <ul class="list-group">
        <li class="list-group-item">Total: &nbsp ${process.getSystemMemoryInfo().total} &nbsp KB</li>
        <li class="list-group-item">Free: &nbsp ${process.getSystemMemoryInfo().free} &nbsp KB</li>
    </ul>
    &nbsp
`
document.getElementById('output').innerHTML = output;
require('./renderer.js');