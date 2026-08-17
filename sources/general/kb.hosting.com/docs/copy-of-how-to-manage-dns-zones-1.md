# Source: https://kb.hosting.com/docs/copy-of-how-to-manage-dns-zones-1

# 

[​](https://kb.hosting.com/docs/copy-of-how-to-manage-dns-zones-1#viewing-dns-settings)

Viewing DNS Settings

To view DNS settings for your domains, follow these steps:

1. Log in to your Enhance control panel and navigate to the customer account you want to modify DNS settings for
2. In the left sidebar, under Products & Services, click DNS:

![](https://files.readme.io/c2e8b0afc2784f23f83ba475680de8a4bdbd9f99857cef5bffb9ec6ed143f5db-image.png) The DNS Settings displays a list of your domains along with their DNS configuration. The domain list shows:

- Domain – The domain name
- Active Zone – Where the DNS zone is currently managed
- Name Servers – The current nameserver status
- DNS Records – Opens the DNS editor for the domain

You can quickly see whether a domain is using Client Area DNS or another DNS provider. ![](https://files.readme.io/b70cdbdab45eda47836e38b7130c5afef0da750708f220d4196169936d33bf02-image.png)

# 

[​](https://kb.hosting.com/docs/copy-of-how-to-manage-dns-zones-1#changing-the-dns-master)

Changing the DNS Master

You can now change the DNS master between the Client Area DNS and your active hosting products. To change the DNS master:

1. Go to DNS Settings.
2. Locate the domain you want to manage.
3. Click the three-dot menu (⋯) next to the domain.
4. Select Change Active Product.
5. Choose the DNS source you want to use.

This allows you to decide whether DNS records are managed in the Client Area or by your hosting service. ![](https://files.readme.io/7486f7d5fd09970bf9701180d8f90c334262f4e7499f17a2e797514cabaaa514-image.png)

If you have more than one hosting package and want to switch the DNS zone, you can do this from **Change Active Product**, then choose the right package.

# 

[​](https://kb.hosting.com/docs/copy-of-how-to-manage-dns-zones-1#using-the-dns-editor)

Using the DNS Editor

You can manage your Client Area DNS zone directly from the DNS Editor. To access the DNS Editor:

1. Go to DNS Settings in the Client Area.
2. Locate the domain you want to manage.
3. Click DNS Records to open the DNS Editor.

From the DNS Editor, you can:

- View existing DNS records
- Add new DNS records
- Edit existing records
- Delete records
- Manage HTTP redirects
- Manage email forwards (if available)

![](https://files.readme.io/f570632ff30817ba72be2e5cf399e462384e54d7692ba8cc557097f79dbbe4ba-image.png)

# 

[​](https://kb.hosting.com/docs/copy-of-how-to-manage-dns-zones-1#dns-zone-export)

DNS Zone Export

You can now export the DNS zone directly from the DNS Editor. To export a DNS zone:

1. Open the DNS Editor for your domain
2. Click the Export Zone button
3. A copy of the DNS zone file will be downloaded

This is useful for backups, migrations, or reviewing your DNS configuration. ![](https://files.readme.io/5cb96a7ffa8f8142d1faefc65da5920eeec57e54d5fcf4c1a01a7619e6303666-image.png)

ImportantThe exported zone file reflects the Client Area DNS zone only. If your domain is using a hosting product (for example, cPanel) or external nameservers, those DNS records will not be included in the export.

# 

[​](https://kb.hosting.com/docs/copy-of-how-to-manage-dns-zones-1#delegate-access-for-dns)

Delegate Access for DNS

DNS Manager now supports delegated access. If a domain has been delegated to another user, and the DNS zone is properly configured under the original owner, the delegated user will have access to manage DNS records just like the primary account holder. This ensures consistent DNS management across shared or delegated accounts and allows delegated users to manage DNS without needing full account ownership. 

Was this page helpful?

YesNo

Ctrl+I