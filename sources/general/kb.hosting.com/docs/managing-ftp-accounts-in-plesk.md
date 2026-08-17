# Source: https://kb.hosting.com/docs/managing-ftp-accounts-in-plesk

his article describes how to add, modify, and delete FTP accounts for your Plesk site.

Plesk is no longer included with new hosting.com plans, but it is still available on legacy Managed WordPress accounts. You can install Plesk manually on unmanaged VPS and Dedicated servers.

## 

[​](https://kb.hosting.com/docs/managing-ftp-accounts-in-plesk#about-the-file-transfer-protocol-ftp)

About the File Transfer Protocol (FTP)

The File Transfer Protocol (FTP) is a standard network protocol that is used to transfer files between computers. To download or upload files, a user uses an FTP client to connect to an FTP server. There are many FTP clients available for all of the major operating systems. There are standalone FTP clients, such as FileZilla, and most web browsers have integrated FTP functionality. Generally, if you have a large amount of files to upload or download, using a dedicated FTP client is the easiest and preferred method. For more information about how to use an FTP client with your hosting account, please see [this article](https://kb.hosting.com/docs/using-ftp-file-transfer-protocol). Using Plesk, you can set up FTP accounts so that specific external users can access a restricted part of your web site.

**️ Warning**By its very nature, FTP allows external users to modify files on your web site (although only in the directory or directories for which you have granted access). External users can upload, download, and delete files. Please keep this in mind when you set up an FTP account for a user.

## 

[​](https://kb.hosting.com/docs/managing-ftp-accounts-in-plesk#creating-an-ftp-account)

Creating an FTP account

To watch a video that demonstrates the following procedure, please click below: To create an FTP account, follow these steps:

1. Log in to Plesk.

 > 📘 Note If you do not know how to log in to your Plesk account, please see [this article](https://kb.hosting.com/docs/logging-in-and-out-of-plesk).

2. In the left sidebar, click **Websites & Domains**: 
 ![Plesk - Sidebar - Websites and Domains](https://static.hosting.com/kb/kb-plesk-sidebar-websites-and-domains.png)
3. Locate the domain for which you want to add an account, and then click **FTP Access**: 
 ![Plesk - FTP Access icon](https://static.hosting.com/kb/kb-plesk-ftp-access-icon.png)
4. On the **FTP Accounts** page, click **Add an FTP Account**: 
 ![Plesk - FTP Accounts page](https://static.hosting.com/kb/kb-plesk-ftp-accounts-page.png)
5. On the **Add an Additional FTP Account** page, under **General**, in the **FTP account name** text box, type a username for the account: 
 ![Plesk - Add an Additional FTP Account page](https://static.hosting.com/kb/kb_managingftpaccountsplesk_adduser.PNG)
6. In the **Home directory** text box, type the root (home) directory for the user. Alternatively, click the folder ![Plesk - FTP - Folder icon](https://static.hosting.com/kb/kb-plesk-ftp-folder-icon.png) icon, and then select the directory.

**️ Warning**If you specify the top level of the web site by typing a slash ( _/_ ), then all users who enter a valid username and password will be able to add, edit, and delete all files on your web site. We strongly advise you to limit an FTP account to a subdirectory on your web site.

7. In the **New password** text box, type the account password.
8. In the **Confirm password** text box, retype the account password.

You can click **Generate** and Plesk generates a random, strong password for you.

9. Click **OK**. Plesk creates the account.

## 

[​](https://kb.hosting.com/docs/managing-ftp-accounts-in-plesk#modifying-an-ftp-account)

Modifying an FTP account

You may want to change the settings for an existing FTP account. For example, it is a good security practice to regularly change FTP account passwords. To modify an FTP account, follow these steps:

1. Log in to Plesk.

 > 📘 Note If you do not know how to log in to your Plesk account, please see [this article](https://kb.hosting.com/docs/logging-in-and-out-of-plesk).

2. In the left sidebar, click **Websites & Domains**: 
 ![Plesk - Sidebar - Websites and Domains](https://static.hosting.com/kb/kb-plesk-sidebar-websites-and-domains.png)
3. Locate the domain for which you want to modify an account, and then click **FTP Access**: 
 ![Plesk - FTP Access icon](https://static.hosting.com/kb/kb-plesk-ftp-access-icon.png)
4. On the **FTP Accounts** page, click the name of the account you want to modify: 
 ![Plesk - FTP Accounts page - Select user](https://static.hosting.com/kb/kb-plesk-ftp-accounts-page-select-user.png)
5. Change the values in the fields you want to modify. For example, to change the user’s password, type a new password in the **New password** and **Confirm password** text boxes.
6. Click **OK**. Plesk saves the account changes.

## 

[​](https://kb.hosting.com/docs/managing-ftp-accounts-in-plesk#deleting-an-ftp-account)

Deleting an FTP account

To delete an FTP account, follow these steps:

1. Log in to Plesk.

 > 📘 Note If you do not know how to log in to your Plesk account, please see [this article](https://kb.hosting.com/docs/logging-in-and-out-of-plesk).

2. In the left sidebar, click **Websites & Domains**: 
 ![Plesk - Sidebar - Websites and Domains](https://static.hosting.com/kb/kb-plesk-sidebar-websites-and-domains.png)
3. Locate the domain for which you want to delete an account, and then click **FTP Access**: 
 ![Plesk - FTP Access icon](https://static.hosting.com/kb/kb-plesk-ftp-access-icon.png)
4. On the **FTP Accounts** page, locate the account you want to delete, and then select the check box next to its name: 
 ![Plesk - FTP Accounts page - Select user check box](https://static.hosting.com/kb/kb-plesk-ftp-accounts-page-select-user2.png)

To delete multiple accounts at once, select multiple check boxes.

5. Click **Remove**.
6. At the **Remove the selected FTP accounts?** prompt, click **Yes**. Plesk deletes the account (or accounts) you selected.

## 

[​](https://kb.hosting.com/docs/managing-ftp-accounts-in-plesk#more-information)

More information

For more information about FTP, please visit [http://en.wikipedia.org/wiki/File\_Transfer\_Protocol](https://en.wikipedia.org/wiki/File_Transfer_Protocol).

## 

[​](https://kb.hosting.com/docs/managing-ftp-accounts-in-plesk#related-articles)

Related articles

- [Using FTP (File Transfer Protocol)](https://kb.hosting.com/docs/using-ftp-file-transfer-protocol)

Was this page helpful?

YesNo

Ctrl+I