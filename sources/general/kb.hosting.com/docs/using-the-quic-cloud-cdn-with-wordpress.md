# Source: https://kb.hosting.com/docs/using-the-quic-cloud-cdn-with-wordpress

This article describes how to create a QUIC.cloud account so you can use the QUIC.cloud CDN with your WordPress site.

## 

[​](https://kb.hosting.com/docs/using-the-quic-cloud-cdn-with-wordpress#about-quic-cloud)

About QUIC.cloud

QUIC.cloud is the only Content Delivery Network (CDN) available that caches static **and** dynamic WordPress content. Most CDNs only cache static content, but the QUIC.cloud CDN caches an entire site, including:

- Images.
- CSS.
- JavaScript.
- The dynamic HTML page itself.

The QUIC.cloud CDN is built on top of the state-of-the-art LiteSpeed server stack. By taking advantage of LiteSpeed Cache’s Smart Purge technology, QUIC.cloud CDN accurately serves a site’s most current content, and purges old content when necessary. Additionally, the QUIC.cloud CDN:

- Caches complex dynamic content with ESI (Edge Side Includes) support.
- Promptly and accurately purges the cache as content changes.
- Serves WordPress sites at the network edge with a low TTFB (Time to First Byte).
- Has less than 10ms average latency in North America and Europe.
- Supports HTTP/3 end to end, from the client to the backend server.
- Provides global coverage with a growing network of 79 PoPs (Points of Presence).

## 

[​](https://kb.hosting.com/docs/using-the-quic-cloud-cdn-with-wordpress#enabling-quic-cloud)

Enabling QUIC.cloud

To enable the QUIC.cloud CDN for your WordPress site, you must create a QUIC.cloud account. To do this, follow these steps:

1. Use your web browser to go to [https://my.quic.cloud/u/login](https://my.quic.cloud/u/login).
2. In the **Email address** text box, type your email address: 
 ![QUIC.cloud - Register - Email address](https://static.hosting.com/kb/kb-quic-cloud-register-email.png)
3. Click **Log in / Register**.
4. In the **Password** text box, type the password you want to use: 
 ![QUIC.cloud - Register - Password](https://static.hosting.com/kb/kb-quic-cloud-register-password.png)
5. Select the **I agree to QUIC.cloud’s Service Agreement** check box.
6. Click **Register**: 
 ![QUIC.cloud - Register - Register button](https://static.hosting.com/kb/kb-quic-cloud-register-register-button.png)
7. QUIC.cloud sends you a validation email: 
 ![QUIC.cloud - Register - Sent validation email](https://static.hosting.com/kb/kb-quic-cloud-register-email-sent.png)
8. You receive the validation message at the email address you specified. In the message, click **Activate Account**: 
 ![QUIC.cloud - Register - Activate Account](https://static.hosting.com/kb/kb-quic-cloud-register-activate-account.png)
9. QUIC.cloud activates the account: 
 ![QUIC.cloud - Register - Activation successful](https://static.hosting.com/kb/kb-quic-cloud-register-activation-success.png)

## 

[​](https://kb.hosting.com/docs/using-the-quic-cloud-cdn-with-wordpress#linking-your-wordpress-site-to-quic-cloud)

Linking your WordPress site to QUIC.cloud

After you create a QUIC.cloud account, you are ready to link it to your WordPress site. To do this, follow these steps:

1. Log in to your WordPress site as the administrator.
2. In the left sidebar, click **LiteSpeed Cache**, and then click **General**: 
 ![WordPress - sidebar - LiteSpeed Cache - General](https://static.hosting.com/kb/kb-quic-cloud-sidebar-lscache-general.png)
3. In the **Domain Key** section, click **Request Domain Key**.
4. Refresh the page, and then in the **Domain Key** section, click **Visit My Dashboard on QUIC.cloud**: 
 ![WordPress - LiteSpeed Cache - Visit My Dashboard on QUIC.cloud](https://static.hosting.com/kb/kb-quic-cloud-visit-my-dashboard.png)
5. Your QUIC.cloud dashboard appears, and in the **Domains** section your domain is listed with an **OK** status: 
 ![QUIC.cloud dashboard - Status OK](https://static.hosting.com/kb/kb-quic-cloud-dashboard-status-OK.png)

## 

[​](https://kb.hosting.com/docs/using-the-quic-cloud-cdn-with-wordpress#more-information)

More information

For more information about QUIC.cloud, please visit [https://www.quic.cloud](https://www.quic.cloud).

## 

[​](https://kb.hosting.com/docs/using-the-quic-cloud-cdn-with-wordpress#related-articles)

Related articles

- [Installing and configuring the LiteSpeed Cache for WordPress plugin](https://kb.hosting.com/docs/installing-and-configuring-the-litespeed-cache-for-wordpress-plugin)
- [Clearing the LiteSpeed cache](https://kb.hosting.com/docs/clearing-the-litespeed-cache)
- [LiteSpeed Web Cache Manager](https://kb.hosting.com/docs/litespeed-web-cache-manager)

Was this page helpful?

YesNo

Ctrl+I