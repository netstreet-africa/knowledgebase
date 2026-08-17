# Source: https://kb.hosting.com/docs/redirecting-users-to-ssl-connections-in-plesk

This article demonstrates how to redirect users to secure (_https://_ ) web site connections, even if they type a non-secure URL (_http://_ ) in their web browser. This article applies to Managed WordPress plans. For Linux servers using Apache or Apache compatible web servers see [this article](https://kb.hosting.com/docs/redirecting-users-to-ssl-connections).

Plesk is no longer included with new hosting.com plans, but it is still available on legacy Managed WordPress accounts. You can install Plesk manually on unmanaged VPS and Dedicated servers.📘 NoteThis article assumes that you already have a valid, functioning SSL certificate on your web site.

## 

[​](https://kb.hosting.com/docs/redirecting-users-to-ssl-connections-in-plesk#redirecting-users-to-ssl-enabled-connections)

Redirecting users to SSL-enabled connections

You may want to ensure that visitors to your web site always use a secure connection. To do this, follow these steps:

1. Log in to Plesk.

 > 📘 Note If you do not know how to log in to your Plesk account, please see [this article](https://kb.hosting.com/docs/logging-in-and-out-of-plesk).

2. In the left sidebar, click **Websites & Domains**: 
 ![Plesk - Sidebar - Websites and Domains](https://static.hosting.com/kb/kb-plesk-sidebar-websites-and-domains.png)
3. Locate the domain you want to configure, and then click **Hosting Settings**: 
 ![Plesk - Hosting Settings](https://static.hosting.com/kb/kb-plesk-hosting-settings.png)
4. Under **Security**, select the **SSL/TLS support** and **Permanent SEO-safe 301 redirect from HTTP to HTTPS** check boxes: 
 ![Plesk - Hosting Settings - Security settings](https://static.hosting.com/kb/kb-plesk-hosting-settings-security-checkboxes.png)
5. In the **Certificate** list box, select the SSL certificate that you want to use for the site.
6. Click **OK**. Your site now uses a secure connection for all web page requests.

## 

[​](https://kb.hosting.com/docs/redirecting-users-to-ssl-connections-in-plesk#more-information)

More information

For more information about Plesk, please visit [https://www.plesk.com](https://www.plesk.com).

## 

[​](https://kb.hosting.com/docs/redirecting-users-to-ssl-connections-in-plesk#related-articles)

Related articles

- [Redirecting visitors to SSL connections](https://kb.hosting.com/docs/redirecting-users-to-ssl-connections)
- [Getting started with Plesk](https://kb.hosting.com/docs/getting-started-with-plesk)

Was this page helpful?

YesNo

Ctrl+I