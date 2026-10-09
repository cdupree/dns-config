/// <reference path="types-dnscontrol.d.ts" />
// To update types-dnscontrol.d.ts run: dnscontrol write-types

// Keep this pretty:
// $ brew install prettier
// $ prettier --write dnsconfig.js

// Services:

var DSP = NewDnsProvider("cloudflare");
var REG = NewRegistrar("none");

D("craigmdupree.info", REG,
    DnsProvider(DSP),
    // DNS records
);