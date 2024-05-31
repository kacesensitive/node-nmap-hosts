

# Node Nmap Hosts

  

This Node.js module provides a simple interface to run detailed nmap scans on a given IP range or specific IP and returns structured host information.

  

## Installation

  

`npm install node-nmap-hosts`
`yarn add node-nmap-hosts`

  

## Usage

  

```
const { runNmapScan } = require('<module-name>');
runNmapScan('192.168.1.1', [80, 443])
	.then(hosts => {
	console.log(hosts);
	})
	.catch(error => {
		console.error(error);		
});
```
  

## runNmapScan

  

`runNmapScan(target: string, ports: number[]): Promise<HostInfo[]>`

  

Runs a detailed nmap scan on a given IP range or specific IP and returns structured host information.

  

`target`: The target IP range or specific IP for the nmap scan.

`ports`: Array of ports to scan.

Returns a Promise that resolves with a detailed list of host information.

  

` HostInfo `

  

The HostInfo interface represents the structured information about a host.

  

```
interface HostInfo { 
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
```

  

## Dependencies

This module requires nmap to be installed on the system where it's being used. You can download nmap from here: https://nmap.org/download.html.

This module depends on the following packages:

  

`child_process`: Used to execute the nmap command.

`xml2js`: Used to parse the XML output of the nmap command.

  

License - Apache 2.0

  

## Contributing

  

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

  

Please make sure to update tests as appropriate.