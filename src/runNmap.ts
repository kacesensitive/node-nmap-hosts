import { exec } from 'child_process';
import { parseString } from 'xml2js';

export interface HostInfo {
    ip: string;
    mac?: string;
    vendor?: string;
    hostname?: string;
    ports: {
        port: number;
        state: string;
        serviceName?: string;
        serviceProduct?: string;
    }[];
    os?: string;
}

/**
 * Runs a detailed nmap scan on a given IP range or specific IP and returns structured host information.
 * @param target The target IP range or specific IP for the nmap scan.
 * @param ports Array of ports to scan.
 * @returns A Promise that resolves with a detailed list of host information.
 */
export function runNmapScan(target: string, ports: number[]): Promise<HostInfo[]> {
    const portList = ports.join(',');
    return new Promise((resolve, reject) => {
        exec(`nmap -sS -T2 -O --osscan-guess -p ${portList} -sV -oX - ${target}`, (error, stdout, stderr) => {
            if (error) {
                console.error("Execution Error:", error);
                return reject(error);
            }
            if (stderr && !stderr.includes("max_parallel_sockets")) {
                console.error("Standard Error Output:", stderr);
                return reject(new Error(stderr));
            }
            parseString(stdout, { explicitArray: false, ignoreAttrs: false }, (err: any, result: any) => {
                if (err) {
                    console.error("Parsing Error:", err);
                    reject(err);
                } else if (!result?.nmaprun?.host) {
                    console.log("No hosts found.");
                    resolve([]);
                } else {
                    const hosts = Array.isArray(result.nmaprun.host) ? result.nmaprun.host : [result.nmaprun.host];
                    const hostInfos: HostInfo[] = hosts.map((host: any) => {
                        const addresses = Array.isArray(host.address) ? host.address : [host.address];
                        const ipAddress = addresses.find((addr: any) => addr.$.addrtype === "ipv4")?.$.addr;
                        const macAddress = addresses.find((addr: any) => addr.$.addrtype === "mac");
                        return {
                            ip: ipAddress,
                            mac: macAddress?.$.addr,
                            vendor: macAddress?.$.vendor,
                            hostname: host.hostnames?.hostname?.$.name,
                            ports: host.ports?.port ? (Array.isArray(host.ports.port) ? host.ports.port : [host.ports.port]).map((port: any) => ({
                                port: parseInt(port.$.portid),
                                state: port.state.$.state,
                                serviceName: port.service?.$.name,
                                serviceProduct: port.service?.$.product
                            })) : [],
                            os: host.os?.osmatch?.[0]?.$.name
                        };
                    });
                    resolve(hostInfos);
                }
            });
        });
    });
}
