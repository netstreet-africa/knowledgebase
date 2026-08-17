# Source: https://kb.hosting.com/docs/securing-a-cpanel-enabled-account-with-a-lets-encrypt-ssl-certificate

This article discusses how Let’s Encrypt can automatically generate, install, and renew SSL certificates on a cPanel-enabled hosting account.

**Important**Please note that hosting.com, in order to provide consistent and reliable user experience, is switching from Let’s Encrypt to cPanel SSL for all newly provisioned accounts. Existing accounts will also make the change to cPanel SSL certificates in the near future. The certificates are equivalent in terms of trust level, validity, and how they are used. You should see no impact on your site, and the only difference is that the padlock in your browser will say “cPanel Inc” instead of “Let’s Encrypt.”📘 NoteLet’s Encrypt is also available for hosting plans using the Plesk control panel, though it is not enabled automatically. For information about managing Let’s Encrypt with Plesk, please see [this article](https://kb.hosting.com/docs/generating-and-renewing-lets-encrypt-ssl-certificates-in-plesk).

## 

[​](https://kb.hosting.com/docs/securing-a-cpanel-enabled-account-with-a-lets-encrypt-ssl-certificate#about-let%E2%80%99s-encrypt)

About Let’s Encrypt

Let’s Encrypt is part of an initiative to encrypt as much World Wide Web traffic as possible. It is designed to make creating, installing, and renewing SSL certificates a simple and straightforward process.

**Important**Although Let’s Encrypt SSL certificates are signed by a valid CA (certificate authority), there are some significant differences these certificates and those issued by a traditional CA. For more information about these differences, please see [this article](https://kb.hosting.com/docs/differences-between-lets-encrypt-certificates-and-traditional-ca-issued-certificates).

## 

[​](https://kb.hosting.com/docs/securing-a-cpanel-enabled-account-with-a-lets-encrypt-ssl-certificate#using-let%E2%80%99s-encrypt)

Using Let’s Encrypt

Let’s Encrypt is enabled for all new and most existing shared and reseller cPanel accounts. To see if Let’s Encrypt is enabled for your account, follow these steps:

1. Log in to cPanel.

 > 📘 Note If you do not know how to log in to your cPanel account, please see [this article](https://kb.hosting.com/docs/accessing-cpanel).

2. On the **Tools** page, in the **Security** section, click **SSL/TLS**: 
 ![cPanel - Security - SSL/TLS icon](https://static.hosting.com/kb/kb-cpanel-jupiter-ssltls.png)
3. In the **SECURITY** section of the cPanel home screen, click **SSL/TLS**:
4. Under **CERTIFICATES (CRT)**, click **Generate, view, upload, or delete SSL certificates**.
5. Under **Certificates on Server**, look in the **Issuer** column for **Let’s Encrypt**.

When Let’s Encrypt is enabled for your account, you do not have to do anything else. The entire process of generating, installing, and renewing SSL certificates is done automatically. (The server has a process running that automatically renews Let’s Encrypt certificates every 90 days so they stay valid.)

Certificates can take up to four hours to generate for a new domain. If your site needs a certificate sooner, please reach out to our support team at [https://my.hosting.com](https://my.hosting.com) who will be happy to assist with publishing the certificate as soon as possible.

When Let’s Encrypt is activated for a cPanel account, certificates are created for every existing domain and any domain that is added later.

When Let’s Encrypt is enabled for an account, it does **not** overwrite any existing SSL certificates that are already installed on the account. Any non-Let’s Encrypt certificates take precedence, and are enabled before any Let’s Encrypt certificates.

## 

[​](https://kb.hosting.com/docs/securing-a-cpanel-enabled-account-with-a-lets-encrypt-ssl-certificate#troubleshooting)

Troubleshooting

Let’s Encrypt is enabled by default, but there are instances when it cannot automatically generate an SSL certificate for an account. These include:

- **Other SSL certificates installed:** If there is another SSL certificate of any type already installed (for example, valid, expired, or self-signed certificates), the Let’s Encrypt installer skips the domain and does not generate a certificate.
- **URL rewrites:** Any URL rewrite rules that interfere with access to the _public\_html/.well-known_ directory can prevent Let’s Encrypt from generating a certificate. If you use URL rewrite rules, you can add the following line to your _.htaccess_ file to make sure the _.well-known_ directory remains accessible:

```
RewriteRule ^.well-known - [L]
```

For more information about URL rewrites, please see [this article](https://kb.hosting.com/docs/rewriting-urls-with-the-mod-rewrite-module).

## 

[​](https://kb.hosting.com/docs/securing-a-cpanel-enabled-account-with-a-lets-encrypt-ssl-certificate#more-information)

More information

For more information about Let’s Encrypt, please visit [https://letsencrypt.org](https://letsencrypt.org).

## 

[​](https://kb.hosting.com/docs/securing-a-cpanel-enabled-account-with-a-lets-encrypt-ssl-certificate#related-articles)

Related articles

- [Differences between Let’s Encrypt certificates and traditional CA-issued certificates](https://kb.hosting.com/docs/differences-between-lets-encrypt-certificates-and-traditional-ca-issued-certificates)
- [Configuring WordPress to always use SSL](https://kb.hosting.com/docs/configuring-wordpress-to-always-use-ssl)
- [Generating and renewing Let’s Encrypt SSL certificates in Plesk](https://kb.hosting.com/docs/generating-and-renewing-lets-encrypt-ssl-certificates-in-plesk)
- [Getting started with cPanel](https://kb.hosting.com/docs/getting-started-with-cpanel)

Was this page helpful?

YesNo

Ctrl+I