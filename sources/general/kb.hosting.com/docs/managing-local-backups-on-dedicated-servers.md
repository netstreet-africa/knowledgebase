# Source: https://kb.hosting.com/docs/managing-local-backups-on-dedicated-servers

This article describes how to manage local backups on Dedicated servers.

Information in this article about unmanaged dedicated servers is only for customers who purchased those plans before May 27, 2024. As of that date, unmanaged dedicated servers are no longer available.

## 

[​](https://kb.hosting.com/docs/managing-local-backups-on-dedicated-servers#about-local-backups)

About local backups

As of March 2023, managed Warp and unmanaged Hyper Dedicated servers include a 1 TB drive for local backups:

- For **Hyper Dedicated servers**, you have complete flexibility to configure backups to the 1 TB drive however you want. For information about how to configure backups on Dedicated servers, please see [this article](https://kb.hosting.com/docs/backups-on-dedicated-servers-and-vps).
- For **Warp Dedicated servers**, these backups are configured automatically, and include cPanel accounts, MySQL databases, and other configuration files. For information about how to access and restore these backups, please see the next section.

Local backup drives provide an additional layer of data protection. Unlike backups to the cloud or other external storage, local backups are stored in the same physical enclosure as the server. This means that data restorations are usually faster. However, local backups should not be used as a replacement for secure, off-site data backups. A complete backup plan includes both local and remote (off-site) backups.

## 

[​](https://kb.hosting.com/docs/managing-local-backups-on-dedicated-servers#accessing-and-restoring-local-backups)

Accessing and restoring local backups

For managed Warp Dedicated servers, the method to access and restore local backups depends on whether or not you have root access.

### 

[​](https://kb.hosting.com/docs/managing-local-backups-on-dedicated-servers#accounts-without-root-access)

Accounts without root access

If you do not have root access to your server, please open a Support ticket at [https://my.hosting.com](https://my.hosting.com), and we will restore the files for you.

### 

[​](https://kb.hosting.com/docs/managing-local-backups-on-dedicated-servers#accounts-with-root-access)

Accounts with root access

If you have root access to your server, you can access and restore your local backups using WebHost Manager (WHM). To do this, follow these steps:

1. Log in to WebHost Manager.

 > 📘 Note If you do not know how to log in to your WebHost Manager account, please see [this article](https://kb.hosting.com/docs/accessing-webhost-manager).

2. In the left sidebar, type `backup`, and then click **Backup Restoration** when it appears: 
 ![WHM - Sidebar - Backup Restoration](https://static.hosting.com/kb/kb-whm-106-backup-restoration.png)
3. Select how you want to restore files:
 - To restore files for a specific account, click the **Restore by Account** tab.
 - To restore files for a specific date, click the **Restore by Date** tab. 
 ![WHM - Backup Restoration - Tabs](https://static.hosting.com/kb/kb-whm-106-backup-restoration-tabs.png)
4. Select any additional items you want to restore. You can restore:
 - Subdomains.
 - Mail configuration files.
 - MySQL databases. 
 ![WHM - Backup Restoration - Options](https://static.hosting.com/kb/kb-whm-106-backup-restoration-options.png)
5. Click **Restore**. The selected restoration appears in the **Restoration Queue** section.

 > 👍 Tip For more information about available backup options, please visit [https://docs.cpanel.net/whm/backup/backup-restoration/](https://docs.cpanel.net/whm/backup/backup-restoration/).

## 

[​](https://kb.hosting.com/docs/managing-local-backups-on-dedicated-servers#related-articles)

Related articles

- [Backups on dedicated servers and VPS](https://kb.hosting.com/docs/backups-on-dedicated-servers-and-vps)
- [E-mail backups](https://kb.hosting.com/docs/e-mail-backups)
- [Managing backups](https://kb.hosting.com/docs/backups-in-cpanel)
- [MySQL database backups using AutoMySQLBackup](https://kb.hosting.com/docs/mysql-database-backups-using-automysqlbackup)
- [MySQL database backups using cron jobs](https://kb.hosting.com/docs/mysql-database-backups-using-cron-jobs)
- [PostgreSQL database backups using cron jobs](https://kb.hosting.com/docs/postgresql-database-backups-using-cron-jobs)
- [Using hosting.com Cloud Backup](https://kb.hosting.com/docs/using-hosting-com-cloud-backup)

Was this page helpful?

YesNo

Ctrl+I