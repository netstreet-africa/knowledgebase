# Source: https://kb.hosting.com/docs/backing-up-and-restoring-databases-with-plesk

This article describes how to back up and restore your databases using Plesk.

Plesk is no longer included with new hosting.com plans, but it is still available on legacy Managed WordPress accounts. You can install Plesk manually on unmanaged VPS and Dedicated servers.

## 

[​](https://kb.hosting.com/docs/backing-up-and-restoring-databases-with-plesk#backing-up-a-database)

Backing up a database

You can quickly and easily create a database backup using Plesk. When you do this, Plesk exports the database as an SQL file. To back up a database using Plesk, follow these steps:

1. Log in to Plesk.

 > 📘 Note If you do not know how to log in to your Plesk account, please see [this article](https://kb.hosting.com/docs/logging-in-and-out-of-plesk).

2. In the left sidebar, click **Databases**.
3. Locate the database you want to back up, and then click **Export Dump**: 
 ![Plesk - Databases - Export Dump](https://static.hosting.com/kb/kb-plesk-databases-export-dump.png)
4. Select a destination directory for the backup file, specify a filename, and then click **OK**. Plesk creates the backup file.

To download the backup file to your local computer automatically, select the **Automatically download dump after creation** check box.

## 

[​](https://kb.hosting.com/docs/backing-up-and-restoring-databases-with-plesk#restoring-a-database)

Restoring a database

You can quickly and easily restore a database using Plesk.

**️ Warning**To avoid potential data loss, you should always back up the existing database to a different filename before you try to restore from a previous backup.

To do this, follow these steps:

1. Log in to Plesk.

 > 📘 Note If you do not know how to log in to your Plesk account, please see [this article](https://kb.hosting.com/docs/logging-in-and-out-of-plesk).

2. In the left sidebar, click **Databases**.
3. Locate the database you want to restore, and then click **Import Dump**: 
 ![Plesk - Databases - Import Dump](https://static.hosting.com/kb/kb-plesk-databases-import-dump.png)
4. Browse to the backup file location, select the file, and then click **OK**.

## 

[​](https://kb.hosting.com/docs/backing-up-and-restoring-databases-with-plesk#more-information)

More information

For more information about Plesk, please visit [https://www.plesk.com](https://www.plesk.com).

Was this page helpful?

YesNo

Ctrl+I