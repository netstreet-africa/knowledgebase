# Source: https://kb.hosting.com/docs/backing-up-and-restoring-data-with-webhost-manager

This article describes how to configure and restore backups in WebHost Manager (WHM).

You must have root access to the server to access the **Backup Configuration** and **Restore Configuration** menu options in WebHost Manager. Alternatively, you can open a support ticket on the Hosting Panel at [https://my.hosting.com](https://my.hosting.com) and we can configure backups for you.

## 

[​](https://kb.hosting.com/docs/backing-up-and-restoring-data-with-webhost-manager#configuring-backups)

Configuring backups

To configure backups in WHM, follow these steps:

1. Log in to WebHost Manager.

 > 📘 Note If you do not know how to log in to your WebHost Manager account, please see [this article](https://kb.hosting.com/docs/accessing-webhost-manager).

2. In the search box at the upper left of the WHM screen, start typing **backup**, and then click **Backup Configuration** when it appears: 
 ![WebHost Manager - Backup Configuration](https://static.hosting.com/kb/kb-whm-106-backup-configuration.png)
3. On the **Backup Settings** tab, under **Backup Status**, select the **Enable Backups** check box to enable backups: 
 ![WHM - Backup Configuration - Enable Backups check box](https://static.hosting.com/kb/kb-whm78-backup-enable-backups-checkbox.png)
4. Under **Global Settings**, under **Backup Type**, select the type of backups you want WHM to create:
 - **Compressed**: Compressed backups take up less disk space, but also take more time to create.
 - **Uncompressed**: Uncompressed backups take less time to create, but also take up more disk space.
 - **Incremental**: Incremental backups only save files that have changed since the previous backup.
5. To have WHM check for available space before creating a backup, select the **Check the Available Disk Space** check box.
6. Under **Scheduling and Retention**, select the backup schedule you want.
7. Under **Files**, select the files you want to include in the backups:
 - To back up user account files, select the **Back up User Accounts** check box, and then click **Select Users**. Select the users you want to include in the backups.
 - To back up system files, select the **Back up System Files** check box.
8. Under **Databases**, select the MySQL databases you want to include in the backups.
9. Under **Configure the Backup Directory**, you can change the default backup directory path if you want.
10. Click **Save Configuration**.

### 

[​](https://kb.hosting.com/docs/backing-up-and-restoring-data-with-webhost-manager#enabling-remote-offsite-backups)

Enabling remote (offsite) backups

The previous procedure configures backups for local storage on your account’s server. You can also configure WHM to store backups at a remote location. WHM currently supports the following offsite storage services:

- Amazon S3
- Backblaze B2
- Google Drive
- FTP, rsync, SFTP, and WebDAV

To enable remote backups, follow these steps:

1. Log in to WebHost Manager.

 > 📘 Note If you do not know how to log in to your WebHost Manager account, please see [this article](https://kb.hosting.com/docs/accessing-webhost-manager).

2. In the search box at the upper left of the WHM screen, start typing **backup**, and then click **Backup Configuration** when it appears: 
 ![WebHost Manager - Backup Configuration](https://static.hosting.com/kb/kb-whm-106-backup-configuration.png)
3. Click the **Additional Destinations** tab: 
 ![WHM - Backup Configuration - Additional Destinations tab](https://static.hosting.com/kb/kb-whm78-backup-additional-destinations-tab.png)
4. In the **Destination Type** list box, select the storage service you want to use, and then click **Create New Destination**.
5. The configuration options differ based on the service you select. Complete the options with the correct information for your account.
6. Click **Save and Validate Destination**. After WHM validates the destination, backups are stored with the service you configured.

## 

[​](https://kb.hosting.com/docs/backing-up-and-restoring-data-with-webhost-manager#restoring-data-from-backups)

Restoring data from backups

You can restore data from a specific account, or from a specific date.

### 

[​](https://kb.hosting.com/docs/backing-up-and-restoring-data-with-webhost-manager#restoring-data-from-a-specific-account)

Restoring data from a specific account

To restore data from a specific account, follow these steps:

1. Log in to WebHost Manager.

 > 📘 Note If you do not know how to log in to your WebHost Manager account, please see [this article](https://kb.hosting.com/docs/accessing-webhost-manager).

2. In the search box at the upper left of the WHM screen, start typing **backup**, and then click **Backup Restoration** when it appears: 
 ![WebHost Manager - Backup Restoration](https://static.hosting.com/kb/kb-whm-106-backup-restoration.png)
3. On the **Backup Restoration** page, click the **Restore by Account** tab.
4. In the **Select User** box, select the user of the data you want to restore.
5. In the **Available Backup Dates** calendar, select the date of the backup to restore.
6. Under **Options**, select if you want to restore subdomains, mail files, and MySQL databases.
7. Click **Add Account to Queue**, and then click **Restore**.
8. When the restore is finished, click **View Log** to view details of the restoration.

### 

[​](https://kb.hosting.com/docs/backing-up-and-restoring-data-with-webhost-manager#restoring-data-from-a-specific-date)

Restoring data from a specific date

To restore data from a specific date, follow these steps:

1. Log in to WebHost Manager.

 > 📘 Note If you do not know how to log in to your WebHost Manager account, please see [this article](https://kb.hosting.com/docs/accessing-webhost-manager).

2. In the search box at the upper left of the WHM screen, start typing **backup**, and then click **Backup Restoration** when it appears: 
 ![WebHost Manager - Backup Restoration](https://static.hosting.com/kb/kb-whm-106-backup-restoration.png)
3. On the **Backup Restoration** page, click the **Restore by Date** tab.
4. In the **Available Backup Dates** calendar, select the date of the backup to restore.
5. In the **Select User** box, select the user of the data you want to restore.
6. Under **Options**, select if you want to restore subdomains, mail files, and MySQL databases.
7. Click **Add Account to Queue**, and then click **Restore**.
8. When the restore is finished, click **View Log** to view details of the restoration.

## 

[​](https://kb.hosting.com/docs/backing-up-and-restoring-data-with-webhost-manager#more-information)

More information

- To view the official WHM documentation for backup configuration, please visit [https://docs.cpanel.net/whm/backup/backup-configuration](https://docs.cpanel.net/whm/backup/backup-configuration).
- To view the official WHM documentation for backup restoration, please visit [https://docs.cpanel.net/whm/backup/backup-restoration](https://docs.cpanel.net/whm/backup/backup-restoration).

## 

[​](https://kb.hosting.com/docs/backing-up-and-restoring-data-with-webhost-manager#related-articles)

Related articles

- [Backups on dedicated servers and VPS](https://kb.hosting.com/docs/backups-on-dedicated-servers-and-vps)
- [Excluding files and directories from cPanel backups](https://kb.hosting.com/docs/excluding-files-and-directories-from-cpanel-backups)
- [Using hosting.com Cloud Backup](https://kb.hosting.com/docs/using-hosting-com-cloud-backup)
- [Backups on shared hosting and reseller accounts](https://kb.hosting.com/docs/backups-on-shared-hosting-and-reseller-accounts)

Was this page helpful?

YesNo

Ctrl+I