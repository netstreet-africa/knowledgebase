# Source: https://kb.hosting.com/docs/generating-and-renewing-lets-encrypt-ssl-certificates-in-plesk

This article describes how to generate and renew Let’s Encrypt SSL certificates in Plesk.

Plesk is no longer included with new hosting.com plans, but it is still available on legacy Managed WordPress accounts. You can install Plesk manually on unmanaged VPS and Dedicated servers.

## 

[​](https://kb.hosting.com/docs/generating-and-renewing-lets-encrypt-ssl-certificates-in-plesk#about-let%E2%80%99s-encrypt)

About Let’s Encrypt

[Let’s Encrypt](https://letsencrypt.org/) is a free, automated, and open certificate authority (CA) from the Internet Security Research Group (ISRG). It enables anyone to install a free, trusted SSL certificate on their website and benefit from the enhanced security an encrypted connection provides. Unlike a self-signed SSL certificate, which is also free and secure but not verified, a Let’s Encrypt certificate is recognized as fully verified, and displays the padlock icon in the address bar of modern web browsers. Plesk provides a plugin that enables you to manage Let’s Encrypt SSL certificates.

**Important**

- The domain name for which you want to install a Let’s Encrypt SSL certificate **must** resolve in a web browser (even if the site has no content). You cannot obtain a Let’s Encrypt certificate for a domain name that does not pass validation.
- If you prefer to use a standard paid SSL certificate, please see [this article](https://kb.hosting.com/docs/generating-a-csr-and-installing-an-ssl-certificate-in-plesk).

## 

[​](https://kb.hosting.com/docs/generating-and-renewing-lets-encrypt-ssl-certificates-in-plesk#installing-a-let%E2%80%99s-encrypt-ssl-certificate-on-your-domain)

Installing a Let’s Encrypt SSL certificate on your domain

To install a Let’s Encrypt SSL certificate on your domain, follow these steps:

1. Log in to Plesk.

 > 📘 Note If you do not know how to log in to your Plesk account, please see [this article](https://kb.hosting.com/docs/logging-in-and-out-of-plesk).

2. In the left sidebar, click **Websites & Domains**: 
 ![Plesk - Sidebar - Websites and Domains](https://static.hosting.com/kb/kb-plesk-sidebar-websites-and-domains.png)
3. Click the **Let’s Encrypt** icon: 
 ![Plesk - Lets Encrypt icon](https://static.hosting.com/kb/kb-plesk-lets-encrypt-icon.png)

The **Let’s Encrypt SSL Certificate** page appears: 
![Plesk - Lets Encrypt SSL Certificate page](https://static.hosting.com/kb/kb-plesk-lets-encrypt-page.png)

4. In the E-mail address text box, type a valid e-mail address.
5. Select the **Include[www.example.com](http://www.example.com) as an alternative domain name** check box if you want the SSL certificate to protect your domain with and without the _www_ prefix.

If you do not select the check box, the certificate is only valid for _example.com_. If you select the check box, the certificate will be valid for _example.com_ and _[www.example.com](http://www.example.com)_.

6. Click **Install**. When installation is complete, you receive a **Let’s Encrypt SSL certificate was successfully installed onexample.com** message.

If installation fails, make sure that the domain name is valid. Check also that the domain:

- Is spelled correctly.
- Is registered and active.
- Resolves in a web browser.

If you have just created or added a domain to the server, also make sure that you have added the appropriate DNS records (at a minimum, an A record pointing to the server IP address), and allowed sufficient time for the DNS changes to propagate.

7. In the left sidebar, click **Websites & Domains**: 
 ![Plesk - Sidebar - Websites and Domains](https://static.hosting.com/kb/kb-plesk-sidebar-websites-and-domains.png)
8. Click **Hosting Settings**.
9. Under **Security**, confirm the **SSL support** check box is selected, and the Let’s Encrypt SSL certificate is selected in the **Certificate** list box.

## 

[​](https://kb.hosting.com/docs/generating-and-renewing-lets-encrypt-ssl-certificates-in-plesk#renewing-a-let%E2%80%99s-encrypt-ssl-certificate-for-your-domain)

Renewing a Let’s Encrypt SSL certificate for your domain

Plesk automatically renews Let’s Encrypt certificates, with no action necessary on your part. By default, Let’s Encrypt SSL certificates are valid for 90 days. However, Plesk automatically renews certificates once a month, as recommended by the Let’s Encrypt developers. The shorter renewal period helps ensure your site’s security, and is completely transparent to you and your site’s visitors. Additionally, if a renewal attempt fails for any reason, you have sufficient time to troubleshoot the problem before the certificate expires. If you need to renew a certificate manually for some reason, follow these steps:

1. Log in to Plesk.

 > 📘 Note If you do not know how to log in to your Plesk account, please see [this article](https://kb.hosting.com/docs/logging-in-and-out-of-plesk).

2. In the left sidebar, click **Websites & Domains**: 
 ![Plesk - Sidebar - Websites and Domains](https://static.hosting.com/kb/kb-plesk-sidebar-websites-and-domains.png)
3. Click the **Let’s Encrypt** icon: 
 ![Plesk - Lets Encrypt icon](https://static.hosting.com/kb/kb-plesk-lets-encrypt-icon.png)
4. Click **Renew**.

## 

[​](https://kb.hosting.com/docs/generating-and-renewing-lets-encrypt-ssl-certificates-in-plesk#more-information)

More information

For more information about Plesk, please visit [https://www.plesk.com](https://www.plesk.com).

## 

[​](https://kb.hosting.com/docs/generating-and-renewing-lets-encrypt-ssl-certificates-in-plesk#related-articles)

Related articles

- [Introduction to SSL](https://kb.hosting.com/docs/introduction-to-ssl)
- [Generating a CSR and installing an SSL certificate in Plesk](https://kb.hosting.com/docs/generating-a-csr-and-installing-an-ssl-certificate-in-plesk)
- [Securing a cPanel-enabled account with a Let’s Encrypt SSL certificate](https://kb.hosting.com/docs/securing-a-cpanel-enabled-account-with-a-lets-encrypt-ssl-certificate)
- [Securing an unmanaged server with a Let’s Encrypt SSL certificate](https://kb.hosting.com/docs/securing-your-site-with-a-lets-encrypt-ssl-certificate)

Was this page helpful?

YesNo

Ctrl+I