# Source: https://kb.hosting.com/docs/introduction-to-ssl

This article is an introduction to key SSL concepts. If you plan on installing SSL certificates on your web site, this article provides the background information you need.

## 

[​](https://kb.hosting.com/docs/introduction-to-ssl#what-is-ssl)

What is SSL?

SSL (Secure Sockets Layer) enhances a web site’s security by providing two important features: encryption and authentication.

- _Encryption_ means that the data sent between your web site and users is unreadable by others. When a user accesses your site using an SSL connection (URLs that begin with **https://**), the web server and web browser exchange encrypted information. Contrast this with unencrypted web transactions, which are transmitted as plaintext and subject to eavesdropping.
- _Authentication_ means visitors can trust that you actually are who you claim to be. When users access your site using an SSL connection, they can be confident that they are seeing your site, and not an impostor’s. Whereas encryption helps protect data, authentication helps prove your identity to others.

When users visit an SSL-enabled site, most web browsers display a lock icon (usually in the address bar). To enable SSL for your own web site, you must obtain and install a certificate.

## 

[​](https://kb.hosting.com/docs/introduction-to-ssl#does-my-web-site-need-an-ssl-certificate)

Does my web site need an SSL certificate?

If your web site handles personal data or any kind of payment-related information, you need an SSL certificate. Additionally, if your web site contains login forms where users log in with a username and password, you should protect their information with SSL. This helps prevent malicious actors from eavesdropping and stealing login credentials. Most hosting.com servers support Server Name Indication (SNI), which means SSL certificates do not _require_ a dedicated IP address to work correctly.

## 

[​](https://kb.hosting.com/docs/introduction-to-ssl#how-do-i-obtain-an-ssl-certificate)

How do I obtain an SSL certificate?

There are several ways you can obtain an SSL certificate for your web site:

- You can **order an SSL certificate from hosting.com**. With this method, you first order an SSL certificate on the hosting.com web site. Next, you provide basic information (domain, name, address, and so on) that is used to generate the SSL certificate. You then receive an e-mail message that contains the SSL certificate you install on your web site. 
 For information about how to install an SSL certificate from hosting.com, please see the **Related Articles** section. Please note that it may take a day or two to process an order and generate the SSL certificate.
- You can **use a cPanel SSL certificate**. Using an SSL certificate from a recognized Certificate Authority is recommended for best results when enabling SSL. cPanel SSL certificates are free and automated, and use a certificate authority (CA) that is recognized by most modern browsers. cPanel SSL is supported for almost all new hosting.com accounts and certificates can even be generated automatically for immediate use.
- You can **order an SSL certificate from a third-party provider** (such as VeriSign, Thawte, or others). To obtain an SSL certificate from a third-party provider, you must first create a Certificate Signing Request (CSR). The provider uses the CSR to generate the certificate. After you receive the SSL certificate from the provider, you can install it on your web site. 
 For information about how to install an SSL certificate from a third-party provider, please see [this article](https://kb.hosting.com/docs/installing-a-third-party-ssl-certificate). Please note that it may take a day or two to process an order and generate the SSL certificate.
- You can **use a self-signed certificate**. With a self-signed certificate, your site can provide encryption, but absolutely no authentication. (This is because you, and not a Certificate Authority, have signed the certificate.) As a result, users receive warning messages in their browsers when they try to access secure areas of your site. Self-signed certificates are primarily used for testing or development, and should not be used in a production environment. 
 For information about how to install a self-signed SSL certificate, please see [this article](https://kb.hosting.com/docs/installing-a-self-signed-ssl-certificate).

## 

[​](https://kb.hosting.com/docs/introduction-to-ssl#more-information)

More information

### 

[​](https://kb.hosting.com/docs/introduction-to-ssl#ssl-certificate-options-for-your-websites)

SSL certificate options for your websites

Just as there are a number of different types of websites, there are a number of different types of SSL certificates as well. Here is a breakdown of the different types of SSL certificates available. You’re sure to find a solution that fits your specifics needs.

- **Free SSL Certificates** - There are free SSL Certificates options that help enhance the security of your website and increase the trust from your visitors. The benefits of these certificates include an easy setup as well as automated protection. While free protection is great, there are a few drawbacks including minimal features (learn about additional SSL features below) and the lack of a warranty.
- **Single Site SSL Certificate** - Advantages of a Single Site SSL compared to a free SSL include warranties, domain validation and site seals to display on your website.
- **Premium SSL Certificates**\- Premium SSL Certificates are great for eCommerce and online business. In addition to dynamic site seals, Premium SSL Certificates also feature full business verification. These certificates help build trust with its visitors. Business verified SSLs allow end users to verify the company name, company address and the phone for the site they’re visiting.
- **Wildcard SSL Certificates** - Wildcard SSLs are extremely popular because they allow sites to protect an unlimited number of subdomains. This money saving solution means that site owners do not have to purchase an individual SSL Certificate for each subdomain that they have.
- **Advanced SSL Certificates** - This is the ultimate SSL Certificate option featuring all the best features including a dynamic site seal, full business verification and extended validation (EV). EV offers the highest level of trust because the browser bar on your visitors’ browsers turn green when they visit your site. This makes it clear visually that your site is SSL-protected.

### 

[​](https://kb.hosting.com/docs/introduction-to-ssl#ssl-certificate-features)

SSL certificate features

What are the key features of an SSL certificate? Here is a breakdown of some of the most common terms and features you’ll run across when choosing your SSL certificate:

- **Warranty** - Covers any costs or damages associated with a failure or mis-issuance of the SSL.
- **Site Seals** - Site seals come in two varieties; static and dynamic. Static seals are essentially an image that communicates that the website is secure. A dynamic site seal, on the other hand, can be clicked on and communicates important security details to your website visitor.
- **Domain Validation** - SSL Certificates that are issued only after the SSL applicant has proven ownership of the domain name.
- **Organization Validation** - The SSL is issued once the organization has gone through a more thorough vetting process including business identity and physical address.

Was this page helpful?

YesNo

Ctrl+I