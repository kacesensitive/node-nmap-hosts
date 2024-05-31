import { exec } from 'child_process';
import { parseString } from 'xml2js';
import { runNmapScan } from '../src/runNmap';

// placeholder, doesn't test anything yet

jest.mock('child_process', () => ({
    exec: jest.fn(),
}));

jest.mock('xml2js', () => ({
    parseString: jest.fn(),
}));

describe('runNmapScan', () => {
    it('should correctly parse the nmap output', async () => {
        (exec as unknown as jest.Mock).mockImplementation((command, callback) => {
            callback(null, '', '');
        });

        (parseString as jest.Mock).mockImplementation((data, options, callback) => {
            callback(null, {
                nmaprun: {
                    host: {
                        address: [{ $: { addrtype: 'ipv4', addr: '192.168.1.1' } }],
                        hostnames: { hostname: { $: { name: 'test-hostname' } } },
                        ports: { port: { $: { portid: '80' }, state: { $: { state: 'open' } }, service: { $: { name: 'http', product: 'Apache' } } } },
                        os: { osmatch: [{ $: { name: 'Linux' } }] }
                    }
                }
            });
        });

        const result = await runNmapScan('192.168.1.1', [80]);

        expect(result).toEqual([{
            ip: '192.168.1.1',
            hostname: 'test-hostname',
            ports: [{
                port: 80,
                state: 'open',
                serviceName: 'http',
                serviceProduct: 'Apache'
            }],
            os: 'Linux'
        }]);
    });
});