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
    A("@", "185.199.108.153"),
    A("@", "185.199.109.153"),
    A("@", "185.199.110.153"),
    A("@", "185.199.111.153"),
    CNAME("3pqdmswyrdx", "gv-ytfsijbzrnf57l.dv.googlehosted.com."),
    CNAME("wwww", "cdupree.github.io."),
    MX("@", 1, "aspmx.l.google.com."),
    MX("@", 10, "aspmx2.googlemail.com."),
    MX("@", 10, "aspmx3.googlemail.com."),
    MX("@", 5, "alt1.aspmx.l.google.com."),
    MX("@", 5, "alt2.aspmx.l.google.com."),
    TXT("google-site-verification", "google-site-verification=dj4m9-LxBkg6pQNfgAtHx47nw2og26MqGQPZyjePq9U"),
    TXT("@", "v=spf1 include:_spf.google.com ~all"),
    TXT("_github-pages-challenge-cdupree", "ba492ce9ca8fc1341f7157a2722a58")
);
