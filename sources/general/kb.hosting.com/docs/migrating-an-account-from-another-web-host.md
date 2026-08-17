# Source: https://kb.hosting.com/docs/migrating-an-account-from-another-web-host

This article describes how to migrate data from another web hosting provider to your hosting.com account. When you migrate from another hosting provider, we recommend that you leave plenty of overlap time (no less than 7 days) between opening your hosting.com account and closing your previous account. Doing so helps ensure that your web site’s downtime is minimal during migration. Our migrations are processed in the order in which they are received. We take great pride in providing fast migrations. However, several factors, such as the current host’s network speed, the number of sites being migrated, and migration complexity can all influence the migration speed. Our Migrations team will keep you informed of your migration’s progress.

## 

[​](https://kb.hosting.com/docs/migrating-an-account-from-another-web-host#cpanel-migration)

cPanel migration

If your current web hosting provider uses cPanel, we can migrate your existing site for you by doing an account transfer. Account transfers are available for the following types of accounts:

- Shared hosting accounts.
- Reseller hosting accounts.
- Managed WordPress hosting accounts.

 > 📘 Note WordPress sites are included with migrations to Managed WordPress hosting accounts. Your WordPress sites appear automatically in cPanel’s [WP Toolkit](https://kb.hosting.com/docs/wordpress-toolkit) for quick and easy site management.

- Managed VPS accounts.
- Managed Dedicated Server accounts.

**Important**We strongly recommend that you do not cancel your old hosting account until you have changed your DNS settings and thoroughly tested your new hosting.com account to make sure the migration has been completed to your satisfaction.

To transfer your account, follow these steps:

1. If you have not already done so, sign up for your hosting.com account.

 > 🚧 Important We recommend you provide an e-mail address that does **not** belong to the domain that you want to migrate. This minimizes the possibility of messages getting lost during the migration.

2. Log in to the Hosting Panel at [https://my.hosting.com](https://my.hosting.com).
3. On the home page, click **Manage support tickets**: ![](https://files.readme.io/0f70144b0d00c6f8e574d83901586e66dfd5d47dd0abe3d817abccfaa3b631dd-image.png)
4. The **Support** page appears: ![](https://files.readme.io/60d4b1a1a4bc94d2dca002677b227e6b47f7d695db27f20808d6155abcfa1125-image.png)
5. Click **Open Support Ticket**, and then in the **Submit a support ticket** section, complete the following information:

 - In the **Subject** text box, type **Site migration request**.
 - In the **Department** list box, select **Migrations**.
 - In the **Message** text box, please specify the following:
 - Destination product or service for the migration.
 - The domain(s) for the migration.
 - Any SSL certificates you may have.
 - Access methods for your account, including any cPanel, FTP, or SSH connection details.
 - Any other special directions or information you want us to know about your account.

 ![](https://files.readme.io/d73dc7c423a3db74b811203956a312e748bee6e20b2334bd93bf605f72df4125-image.png)
6. Click **Submit ticket**. We will notify you when the account transfer is complete.
7. Test your web site on the hosting.com server **before** you change the domain’s name server settings. To do this, you can use a custom hosts file. For more information about how to do this, please see [this article](https://kb.hosting.com/docs/accessing-your-web-site-before-dns-propagation-is-complete).
8. Change your domain’s name server settings to use hosting.com name servers. For more information about how to do this, please see [this article](https://kb.hosting.com/docs/setting-the-name-servers-dns-for-a-domain).
9. Wait 24 hours for DNS propagation to complete.
10. After you verify that the web site on the hosting.com server is accessible and working correctly, you can cancel your account with the other hosting provider.

## 

[​](https://kb.hosting.com/docs/migrating-an-account-from-another-web-host#manual-migration)

Manual migration

If your current hosting provider does not support cPanel, you can migrate your data manually. To do this, follow these steps:

1. If you have not already done so, sign up for your hosting.com account.

 > 🚧 Important When you sign up with hosting.com, we recommend you provide an e-mail address that does **not** belong to the domain that you want to migrate. This minimizes the possibility of messages getting lost during the migration.

2. Migrate your files, e-mail accounts, and databases to your hosting.com account:
 - Your web site files should go in the public\_html directory of your hosting.com account. For information about how to use FTP to transfer files, please see [this article](https://kb.hosting.com/docs/using-ftp-file-transfer-protocol).
 - For information about how to migrate e-mail accounts and data to your hosting.com account, please see [this article](https://kb.hosting.com/docs/migrating-e-mail-from-another-web-host).
 - For information about how to export and import MySQL databases, please see [this article](https://kb.hosting.com/docs/import-and-export-a-mysql-database).
 - For information about how to export and import PostgreSQL databases, please see [this article](https://kb.hosting.com/docs/import-and-export-a-postgresql-database).
3. Test your web site on the hosting.com server **before** you change the domain’s name server settings. To do this, you can use the shared URL for your account provided in the hosting.com Hosting Panel at [https://my.hosting.com](https://my.hosting.com), or you can use a custom hosts file. For more information about how to do this, please see [this article](https://kb.hosting.com/docs/accessing-your-web-site-before-dns-propagation-is-complete).
4. Change your domain’s name server settings to use hosting.com name servers. For more information about how to do this, please see [this article](https://kb.hosting.com/docs/setting-the-name-servers-dns-for-a-domain).
5. Wait 24 hours for DNS propagation to complete.
6. After you verify that the web site on the hosting.com server is accessible and working correctly, you can cancel your account with the other hosting provider.

## 

[​](https://kb.hosting.com/docs/migrating-an-account-from-another-web-host#related-articles)

Related articles

- [Using FTP (File Transfer Protocol)](https://kb.hosting.com/docs/using-ftp-file-transfer-protocol)
- [Using SSH (Secure Shell)](https://kb.hosting.com/docs/using-ssh-secure-shell)
- [Importing and exporting a MySQL database](https://kb.hosting.com/docs/import-and-export-a-mysql-database)
- [Importing and exporting a PostgreSQL database](https://kb.hosting.com/docs/import-and-export-a-postgresql-database)
- [Accessing your web site before DNS propagation is complete](https://kb.hosting.com/docs/accessing-your-web-site-before-dns-propagation-is-complete)
- [Setting the name servers for a domain](https://kb.hosting.com/docs/setting-the-name-servers-dns-for-a-domain)

Was this page helpful?

YesNo

Ctrl+I