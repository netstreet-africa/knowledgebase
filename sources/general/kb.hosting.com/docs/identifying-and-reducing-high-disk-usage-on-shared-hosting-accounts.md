# Source: https://kb.hosting.com/docs/identifying-and-reducing-high-disk-usage-on-shared-hosting-accounts

This article discusses high disk usage on shared hosting accounts, including:

- Common file locations for high disk usage.
- How to identify high disk usage locations.
- How to reduce high disk usage.

## 

[​](https://kb.hosting.com/docs/identifying-and-reducing-high-disk-usage-on-shared-hosting-accounts#common-high-disk-usage-locations)

Common high disk usage locations

High disk usage can occur anywhere in a hosting account. However, there are some common places to check:

- **Databases** : Databases can grow to very large sizes, particularly when they are part of a web application like WordPress or Magento. For information about how to optimize various web applications, please see [these articles](https://kb.hosting.com/docs/optimization-and-configuration).
- **Backups** : Backups are another common cause of high disk usage. Rotating backups and transferring them to another location (not on your account) is a good way to help reduce disk usage.
- **Media files** : MP3, video, and other types of multimedia files can take up very large amounts of disk space.
- **Email messages** : Email messages can accumulate for years, with no one ever cleaning them out. Consider downloading and archiving old messages so you can delete them on the server and free up disk space.
- **Cron jobs** : Automated scripts and cron jobs can quickly use up disk space. For example, consider a recursive backup, such as a script that creates a backup of a backup. This type of runaway process will quickly create files of increasing size and fill the disk.

If your web site storage needs are increasing, please contact us at [https://my.hosting.com](https://my.hosting.com) to discuss upgrade options. Common upgrades for shared hosting accounts are a managed VPS or a dedicated server. These packages offer dedicated resources that can streamline your site’s performance. They also include full management and the cPanel control panel.

## 

[​](https://kb.hosting.com/docs/identifying-and-reducing-high-disk-usage-on-shared-hosting-accounts#viewing-and-identifying-high-disk-usage-locations)

Viewing and identifying high disk usage locations

Viewing and identifying high disk usage locations is easy with the Disk Usage tool in cPanel. The Disk Usage tool calculates how much disk space your account’s directories and databases are using. You can also sort directories by disk space usage, which makes it easy to find high disk usage locations. For detailed information about how to use the Disk Usage tool in cPanel, please see [this article](https://kb.hosting.com/docs/disk-space-usage).

You can also determine high disk usage locations using [SSH (Secure Shell)](https://kb.hosting.com/docs/using-ssh-secure-shell) and the command prompt. For information about how to do this, please see [this article](https://kb.hosting.com/docs/determining-high-disk-usage-locations).

## 

[​](https://kb.hosting.com/docs/identifying-and-reducing-high-disk-usage-on-shared-hosting-accounts#reducing-high-disk-usage)

Reducing high disk usage

After you have identified locations of high disk usage, you are ready to reclaim disk space by cleaning out unneeded files and directories. The [cPanel File Manager](https://kb.hosting.com/docs/cpanel-file-manager) makes this easy to do:

1. Log in to cPanel.

 > 📘 Note If you do not know how to log in to your cPanel account, please see [this article](https://kb.hosting.com/docs/accessing-cpanel).

2. On the **Tools** page, in the **Files** section, click **File Manager**: 
 ![cPanel - File Manager icon (Jupiter theme)](https://static.hosting.com/kb/kb-cpanel-jupiter-file-manager-icon.png)
3. In the left sidebar, click the name of the directory that you want to open. The directory’s contents appear in the right pane: 
 ![cPanel - File Manager - Select folder](https://static.hosting.com/kb/kb-cpanel-file-manager-select-folder.png)
4. To delete a file, follow these steps:
 - Right-click the file, and then click **Delete**: 
 ![cPanel - File Manager - Select file to delete](https://static.hosting.com/kb/kb-cpanel-file-manager-delete-file.png)
 - Select the **Skip the trash and permanently delete the files** check box, and then click **Confirm**: 
 ![cPanel - File Manager - Confirm file to delete](https://static.hosting.com/kb/kb-cpanel-file-manager-delete-file-confirm.png)
5. To delete an entire directory, follow these steps:

 - Right-click the directory, and then click **Delete**: 
 ![cPanel - File Manager - Select directory to delete](https://static.hosting.com/kb/kb-cpanel-file-manager-delete-folder.png)
 - Select the **Skip the trash and permanently delete the files** check box, and then click **Confirm**: 
 ![cPanel - File Manager - Confirm directory to delete](https://static.hosting.com/kb/kb-cpanel-file-manager-delete-folder-confirm.png)

 > 📘 Note For more information about how to use the File Manager in cPanel, please see [these articles](https://kb.hosting.com/docs/cpanel-file-manager).

## 

[​](https://kb.hosting.com/docs/identifying-and-reducing-high-disk-usage-on-shared-hosting-accounts#related-articles)

Related articles

- [Determining high disk usage locations](https://kb.hosting.com/docs/determining-high-disk-usage-locations)
- [Managing account bandwidth and disk usage](https://kb.hosting.com/docs/managing-account-bandwidth-and-disk-usage)
- [Managing e-mail disk usage in cPanel](https://kb.hosting.com/docs/managing-e-mail-disk-usage-in-cpanel)
- [Viewing disk usage information](https://kb.hosting.com/docs/disk-space-usage)

Was this page helpful?

YesNo

Ctrl+I