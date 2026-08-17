# Source: https://kb.hosting.com/docs/migrating-multiple-domains-from-cpanel-to-the-new-hosting-panel

When you migrate a hosting account from cPanel to this administration interface, any subdomains, addon domains, and aliases are grouped under the primary domain as mapped domains. However, you can only clone and stage sites on the primary domain — you cannot create staging or cloned sites on mapped domains. To resolve this issue, you can split the mapped domains into separate websites. Then each site has its own file manager, database, staging and cloning options, and so on.

**Important**The control panel may indicate you are using only 1 of 10 websites, but every imported site (including mapped domains) still counts towards the total site limit. To avoid exceeding the site limit sooner than you expect, you should separate the mapped domains into separate websites.

## 

[​](https://kb.hosting.com/docs/migrating-multiple-domains-from-cpanel-to-the-new-hosting-panel#separating-domains-into-individual-sites)

Separating domains into individual sites

To separate your grouped domains into individual sites, follow these steps:

1. **Create a backup of each site.** For example, if this is a WordPress site, you can use a plugin like UpdraftPlus or Duplicator, and then download the backup files to your local computer.
2. **Remove the mapped domains.** To do this, follow these steps:
 - Log in to your account as described in [Managing your website and email in the Hosting Panel](https://kb.hosting.com/docs/managing-your-website-in-the-hosting-panel).
 - When the control panel appears, in the left sidebar, click **Websites**: ![](https://files.readme.io/b2177385a849e7c2a46983574789490dedb0e4783be01bde68783a81b16d2333-image.png)
 - On the **Manage websites** page, click the primary website.
 - Click the **Files** tab.
 - Locate the directory for the subdomain or addon domain. Before you delete anything, make sure you note any database names linked to the site.
 - After you are sure that your backups are safely downloaded and you have the database names, you can delete the files and databases for the mapped domain.
3. **Add each domain as a new, separate website.** To do this, follow these steps:
 - In the Hosting Panel, click **Websites**, and then click **Add website**.
 - In the **Add website** section, click **Production website**.
 - In the **Domain** text box, type the domain name.
 - Click **Add**. The Hosting Panel adds the domain.
 - If this is a WordPress site, click the **Apps** tab, click **Install app**, and install a new WordPress site on the domain.
 - Repeat the previous steps for any additional domains you have.
4. **Restore the backup for each site.** For example, if this is a WordPress site, log in to WordPress as an administrator, install the same backup plugin you used in step 1, and then restore the site using the backup file you downloaded to your local computer.
5. **Verify DNS and IP address settings.** Each new site may have its own IP address. If you are using the default nameservers (_nsX.mysecurecloudhost.com_ or _nsX.stableserver.net_), no DNS update is necessary. If you are using Cloudflare or another DNS provider, follow these steps:
 - In the Hosting Panel, click **Websites**, and then click the new website. In the **At a glance** section, note the site IP address:\\ ![](https://files.readme.io/7858d26f6ba4d415513547fe9e42d469b05f30c13d0d6a2eeab5899e4a6d9338-image.png)
 - Update the **A** record for the site with your DNS provider.
6. Staging and cloning now work for all of the websites.

## 

[​](https://kb.hosting.com/docs/migrating-multiple-domains-from-cpanel-to-the-new-hosting-panel#related-articles)

Related articles

- [Managing your website and email in the Hosting Panel](https://kb.hosting.com/docs/managing-your-website-in-the-hosting-panel)
- [Managing your website files in the Hosting Panel](https://kb.hosting.com/docs/managing-your-website-files-in-the-hosting-panel)
- [Managing your MySQL databases in the Hosting Panel](https://kb.hosting.com/docs/managing-your-mysql-databases-in-the-hosting-panel)
- [Managing your domains in the Hosting Panel](https://kb.hosting.com/docs/managing-your-domains-in-the-hosting-panel)
- [Managing your WordPress site in the Hosting Panel](https://kb.hosting.com/docs/managing-your-wordpress-site-in-the-hosting-panel)

Was this page helpful?

YesNo

Ctrl+I