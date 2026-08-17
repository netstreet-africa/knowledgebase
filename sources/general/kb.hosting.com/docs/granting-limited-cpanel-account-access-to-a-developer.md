# Source: https://kb.hosting.com/docs/granting-limited-cpanel-account-access-to-a-developer

This article describes how to grant limited access to your cPanel account to a third-party contact, such as a developer. Instead of sharing your cPanel username and password (and thereby granting complete access to your account), you can provide select access to just the account areas necessary for website maintenance. The following procedures demonstrate how to do this. By providing access to a specific file directory (using FTP) and to a specific MySQL database (using remote access), you can enable someone to make changes to a single site without affecting other sites on your hosting account.

## 

[​](https://kb.hosting.com/docs/granting-limited-cpanel-account-access-to-a-developer#step-1-configure-file-access)

Step 1: Configure file access

First, create an FTP account in cPanel that has access only to the directory where the website files are located. To do this, follow these steps:

1. Log in to cPanel.

 > 📘 Note If you do not know how to log in to your cPanel account, please see [this article](https://kb.hosting.com/docs/accessing-cpanel).

2. On the **Tools** page, in the **Domains** section, click **Domains**: 
 ![cPanel - Domains - Domains icon](https://static.hosting.com/kb/kb-cpanel-jupiter-domains-domains-icon.png)
3. Locate the domain for which you want to grant access, and note the value in the **Document Root** column for the domain. You will need this information in a few steps.
4. On the **Tools** page, in the **Files** section, click **FTP Accounts**: 
 ![cPanel - Files - FTP Accounts icon](https://static.hosting.com/kb/kb-cpanel-jupiter-files-ftp-accounts-icon.png)
5. Under **Add FTP Account**, in the **Log in** text box, type the username for the FTP account.

 > 📘 Note FTP account usernames are in the format [_user@example.com_](mailto:_user@example.com_), where _user_ represents the value you type in the **Login** text box, and _example.com_ represents your domain name.

6. In the **Password** text box, type the account password.
7. In the **Password (Again)** text box, retype the account password.

 > 👍 Tip
 > 
 > - You can click **Password Generator** and cPanel generates a random, strong password for you.
 > - We recommend backing up the password by storing it in a secure location.

8. Replace the automatically generated text in the **Directory** text box with the document root path that you obtained in step 3.
9. Specify the quota for the FTP account. By default, the quota is unlimited. To set a quota, type the number, in megabytes, for the maximum directory size.
10. Click **Create FTP Account**. cPanel creates the account.

## 

[​](https://kb.hosting.com/docs/granting-limited-cpanel-account-access-to-a-developer#step-2-configure-database-access-optional)

Step 2: Configure database access (optional)

After you configure access to the website’s files, you can configure access to the website’s MySQL database.

If your website does not use a MySQL database, then this step is not necessary.

### 

[​](https://kb.hosting.com/docs/granting-limited-cpanel-account-access-to-a-developer#creating-a-database-user)

Creating a database user

First, create a new database user for the third-party contact, and allow it to access the database. To do this, follow these steps:

1. Get the name of the database that the website uses. The exact steps to do this vary depending on the application you are using. Most sites have a configuration file that specifies the database name. For example, WordPress uses the _wp-config.php_ file to specify the database name.
2. Log in to cPanel.

 > 📘 Note If you do not know how to log in to your cPanel account, please see [this article](https://kb.hosting.com/docs/accessing-cpanel).

3. On the **Tools** page, in the **Databases** section, click **Manage My Databases**: 
 ![cPanel - Databases - Manage My Databases icon](https://static.hosting.com/kb/kb-cpanel-120-databases-manage-my-databases-icon.png)

 > 📘 Note If you are using cPanel version 118 or earlier, click **MySQL Databases** instead: 
 > ![cPanel - Databases - MySQL Databases icon](https://static.hosting.com/kb/kb-cpanel-jupiter-databases-mysql-databases-icon.png)

4. Under **Add New User**, in the **Username** text box, type the MySQL username that you want the third-party contact to use.
5. In the **Password** text box, type the user password.
6. In the **Password (Again)** text box, retype the user password.

 > 👍 Tip
 > 
 > - You can click **Password Generator** and cPanel generates a random, strong password for you.
 > - We recommend backing up the password by storing it in a secure location.

7. Click **Create User**. cPanel creates the database user.
8. Under **Add User to Database**, in the **User** list box, select the user that you just created.
9. In the **Database** list box, select the database name you obtained in step 1.
10. Click **Add**.
11. Select the check boxes to grant the user specific privileges, or select the **ALL PRIVILEGES** check box to grant the user all permissions to the database.
12. Click **Make Changes**. cPanel adds the user to the database.

### 

[​](https://kb.hosting.com/docs/granting-limited-cpanel-account-access-to-a-developer#enabling-remote-mysql-access)

Enabling remote MySQL access

After creating a database user, you must enable remote MySQL access for the third-party contact’s IP address. For information about how to do this, please see [this article](https://kb.hosting.com/docs/remote-mysql-access).

### 

[​](https://kb.hosting.com/docs/granting-limited-cpanel-account-access-to-a-developer#accessing-the-database)

Accessing the database

The third-party contact now has access to the database. They can use any number of applications for access, such as MySQL Workbench. For more information about MySQL client applications, please see [this article](https://kb.hosting.com/docs/mysql-client-applications).

## 

[​](https://kb.hosting.com/docs/granting-limited-cpanel-account-access-to-a-developer#related-articles)

Related articles

- [Using FTP (File Transfer Protocol)](https://kb.hosting.com/docs/using-ftp-file-transfer-protocol)
- [Managing FTP accounts](https://kb.hosting.com/docs/ftp-accounts-and-sessions)
- [Configuring remote MySQL access](https://kb.hosting.com/docs/remote-mysql-access)
- [Remote MySQL connections](https://kb.hosting.com/docs/remote-mysql-connections)
- [MySQL client applications](https://kb.hosting.com/docs/mysql-client-applications)

Was this page helpful?

YesNo

Ctrl+I