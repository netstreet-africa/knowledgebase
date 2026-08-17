# Source: https://kb.hosting.com/docs/configuring-your-domain-to-use-ezoic

This article explains how to configure a domain to use Ezoic.

## 

[​](https://kb.hosting.com/docs/configuring-your-domain-to-use-ezoic#about-ezoic)

About Ezoic

Ezoic is an advertising platform and Content Delivery Network (CDN). When your site is integrated with Ezoic, it acts as a proxy between your site and visitors, customizing what they see based on machine learning algorithms. To use Ezoic, you must change the nameservers for your domain to integrate with its network.

## 

[​](https://kb.hosting.com/docs/configuring-your-domain-to-use-ezoic#configuring-your-domain)

Configuring your domain

To configure your domain to use Ezoic, follow these steps:

1. Log in to cPanel.

 > 📘 Note If you do not know how to log in to your cPanel account, please see [this article](https://kb.hosting.com/docs/accessing-cpanel).

2. On the **Tools** page, in the **Domains** section, click **Zone Editor**, locate your domain, and then click **Manage**.
3. Note the DNS records for your domain. You will need this information later to verify that Ezoic imported your DNS records correctly.
4. Log in to your Ezoic account. If you do not already have an Ezoic account, go to [https://www.ezoic.com/join-ezoic](https://www.ezoic.com/join-ezoic) and create one.
5. Under **Integrate Your Site**, click **Get Started**: 
 ![Ezoic - Get Started](https://static.hosting.com/kb/kb-ezoic-get-started.png) Alternatively, click **Settings**, click **Connection**, click the **Nameservers** tab, and then click **View Instructions**: 
 ![Ezoic - View Instructions](https://static.hosting.com/kb/kb-ezoic-view-instructions.png)
6. Note the nameservers provided by Ezoic to use with your account: 
 ![Ezoic - Nameservers](https://static.hosting.com/kb/kb-ezoic-dns-nameservers.png)
7. Change the nameserver records for your domain to the nameserver values you obtained in the previous step. The exact procedure to change your nameservers varies based on the registrar you have for your domain:

 - For information about how to change the nameservers for a domain hosted at hosting.com, please see [this article](https://kb.hosting.com/docs/setting-the-name-servers-dns-for-a-domain).
 - For information about how to change the nameservers for a domain hosted at a third-party registrar, please see [this article](https://kb.hosting.com/docs/updating-nameservers-at-third-party-registrars).

 > 🚧 Important It can take up to 24 hours for DNS changes to fully propagate across the internet (though the process is usually much faster).

8. After DNS propagation is complete, click **Settings**, and then click **DNS**. Compare the records imported by Ezoic to the DNS records in cPanel you obtained in step 3. If you need to add any records, click **ADD DNS RECORD**: 
 ![Ezoic - Add DNS Record](https://static.hosting.com/kb/kb-ezoic-add-dns-record.png)

## 

[​](https://kb.hosting.com/docs/configuring-your-domain-to-use-ezoic#more-information)

More information

For more information about Ezoic, please visit [https://www.ezoic.com](https://www.ezoic.com).

## 

[​](https://kb.hosting.com/docs/configuring-your-domain-to-use-ezoic#related-articles)

Related articles

- [Setting the name servers for a domain](https://kb.hosting.com/docs/setting-the-name-servers-dns-for-a-domain)
- [Setting the name servers for a domain at GoDaddy](https://kb.hosting.com/docs/setting-the-name-servers-for-a-domain-at-godaddy)
- [Setting the name servers for a domain at OpenSRS](https://kb.hosting.com/docs/setting-the-name-servers-for-a-domain-at-opensrs)
- [Updating nameservers at third-party registrars](https://kb.hosting.com/docs/updating-nameservers-at-third-party-registrars)

Was this page helpful?

YesNo

Ctrl+I