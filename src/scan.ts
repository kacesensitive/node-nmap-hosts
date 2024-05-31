import { runNmapScan } from "./runNmap";
import { writeFileSync } from 'fs';

runNmapScan('192.168.1.1/24', [22, 80, 443, 8080])
    .then(data => {
        console.log("Nmap Scan Data:", data);
        // write to json file 
        writeFileSync('scan.json', JSON.stringify(data, null, 2));

    })
    .catch(error => {
        console.error("Error during Nmap Scan:", error);
    });
