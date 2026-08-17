# Source: https://kb.hosting.com/docs/securing-your-site-with-a-lets-encrypt-ssl-certificate

This article describes how to use Let’s Encrypt to automatically generate and install an SSL certificate on an unmanaged server.

## 

[​](https://kb.hosting.com/docs/securing-your-site-with-a-lets-encrypt-ssl-certificate#about-let%E2%80%99s-encrypt)

About Let’s Encrypt

Let’s Encrypt is part of an initiative to encrypt as much World Wide Web traffic as possible. It is designed to make the creation and installation of SSL certificates a simple process that can be done with just a few commands.

## 

[​](https://kb.hosting.com/docs/securing-your-site-with-a-lets-encrypt-ssl-certificate#generating-and-installing-an-ssl-certificate)

Generating and installing an SSL certificate

On an unmanaged server, you generate and install SSL certificates at the command line. There are numerous client applications that enable you to do this for Let’s Encrypt. However, Let’s Encrypt recommends the **Certbot** client. Certbot is easy to use, and supports a wide range of web servers and operating systems. You can install Certbot using your Linux distribution’s package manager (for example, _yum_ or _apt_ ).

**Important**The Certbot documentation at [https://certbot.eff.org](https://certbot.eff.org) recommends using _snapd_ for Certbot installation. However, _snapd_ is incompatible with our VPS infrastructure, so you should use your Linux distribution’s package manager to install Certbot directly. Alternatively, you can use one of the many other client applications available for managing Let’s Encrypt certificates. For more information, please visit [https://letsencrypt.org/docs/client-options](https://letsencrypt.org/docs/client-options).

## 

[​](https://kb.hosting.com/docs/securing-your-site-with-a-lets-encrypt-ssl-certificate#more-information)

More information

For more information about Let’s Encrypt, please visit [https://letsencrypt.org](https://letsencrypt.org).

Was this page helpful?

YesNo

Ctrl+I