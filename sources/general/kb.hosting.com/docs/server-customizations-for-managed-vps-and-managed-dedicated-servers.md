# Source: https://kb.hosting.com/docs/server-customizations-for-managed-vps-and-managed-dedicated-servers

This article discusses server customizations for managed VPS and managed Dedicated Server platforms.

## 

[​](https://kb.hosting.com/docs/server-customizations-for-managed-vps-and-managed-dedicated-servers#supported-customizations)

Supported customizations

The following customizations are supported on managed VPS and managed Dedicated Server platforms:

- Standard Yum repositories (AlmaLinux, EPEL, RPMForge, Dag)
- Languages from repositories
- Anything within EasyApache
- Cloudflare
- APF rules
- PostGIS
- Memcached
- Redis
- APC / eAccelerator
- New Relic plugins

If you need assistance, or have a question regarding supported customizations for managed packages, please open a support ticket at [https://my.hosting.com](https://my.hosting.com).

## 

[​](https://kb.hosting.com/docs/server-customizations-for-managed-vps-and-managed-dedicated-servers#customizations-not-currently-supported)

Customizations not currently supported

The following customizations are not currently supported on managed VPS or managed Dedicated Server platforms:

- Database replication
- MySQL performance
- Java after a yum install (including Tomcat)
- Alternatives to the Apache web server, such as Nginx

 > 📘 Note This applies to standalone installations of Nginx, which are not supported. Nginx Reverse Proxy with Apache, however, is available upon request.

- Mail settings not included in cPanel
- Mailman cPanel issues
- VPNs or other tunnels
- PostgreSQL databases with non-default encodings (that is, a non-UTF-8 encoding)
- Varnish and Squid
- Features that are historically incompatible with cPanel (for example, Perl packages, certain SQLite versions)
- PHP features not in EasyApache (or the PHP switcher)
- Sphinx search server

If you are interested in any of the solutions listed above, you should consider an unmanaged VPS. These packages are designed for developers and experienced system administrators. They include root access, so you have complete control over your server’s customization. You also get access to [Webuzo](https://kb.hosting.com/docs/accessing-and-using-webuzo-on-an-unmanaged-server), which enables you to quickly and easily install many popular software applications.

Was this page helpful?

YesNo

Ctrl+I