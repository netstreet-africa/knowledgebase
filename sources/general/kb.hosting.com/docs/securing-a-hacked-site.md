# Source: https://kb.hosting.com/docs/securing-a-hacked-site

This guide explains how to secure your web site after it has been hacked, and how to help prevent future attacks.

If you are uncomfortable with the idea of managing a web site hack on your own, or simply do not have the time, we can do it for you! Please open a support ticket at [https://my.hosting.com](https://my.hosting.com) and ask our support team about **1-Time Website Cleanup** . This option provides you with a one-stop solution that leaves your website clean, secure, and optimized for peak performance.

## 

[​](https://kb.hosting.com/docs/securing-a-hacked-site#determining-the-cause)

Determining the cause

The first step to securing your web site and getting back to normal operation is determining how it was hacked. In general, most hacks occur for one of the following reasons:

- Your FTP/SSH password has been compromised.
- File permissions for files or directories in the **public\_html** directory are too permissive.
- You have a software application installed on your web site that contains a vulnerability. The vulnerability is being exploited to run arbitrary code on the server.

Software vulnerability hacks are more common than FTP/SSH password hacks, primarily because of the huge growth in pre-bundled software applications. Users often set up an application and then forget to apply security updates, leaving their sites vulnerable to attack. Similarly, if a file or directory in the **public\_html** directory has permissions set to 777 (full access), code or data may be exposed and potentially exploited by an attacker.

### 

[​](https://kb.hosting.com/docs/securing-a-hacked-site#looking-for-ftp/ssh-password-compromises)

Looking for FTP/SSH password compromises

You should first try to determine if someone has compromised your password and logged in to your account. To do this, follow these steps:

1. Log in to your account [using SSH](https://kb.hosting.com/docs/using-ssh-secure-shell).
2. At the command prompt, type the following command:

    ```
    history
    ```

 This command displays the last 1000 commands run on the account, as well as when. Review recent entries in the list for any commands that seem suspicious or that you did not type.

 > 📘 Note This method is not 100% fool-proof, because the command history can be altered or forged by a malicious actor.

3. At the command prompt, type the following command:

    ```
    cat ~/.lastlogin
    ```

 This command displays the IP address of the last user who logged in to your cPanel account. This information is also available from the [cPanel home screen](https://kb.hosting.com/docs/cpanel-home-screen).

 > 👍 Tip To see what your own IP address is, visit [http://ipfinder.us](http://ipfinder.us). 📘 Note You may be familiar with the **last** command, which displays a list of all users who have logged in to the server. However, for security reasons the **last** command is not available on newer hosting.com shared servers.

If you suspect or determine that an unauthorized user is accessing your account:

- Change your account password in cPanel immediately. For information about how to do this, please see [this article](https://kb.hosting.com/docs/changing-your-cpanel-password).
- Stop using FTP. Regular FTP transmits your password over the Internet in unencrypted plaintext and is easily intercepted. Use SFTP or SSH instead. For information about how to do this, please see [these articles](https://kb.hosting.com/docs/accessing-your-account).
- Verify that you are running up-to-date virus and malware protection on any computers you have used to access your account.

After you have followed these steps, go to the **Cleaning up after a hack** section below. Otherwise, if you did not find any suspicious behavior, go to the next section.

### 

[​](https://kb.hosting.com/docs/securing-a-hacked-site#looking-for-software-vulnerabilities)

Looking for software vulnerabilities

Out-of-date software applications often contain well-known security vulnerabilities that malicious actors can exploit using automated scripts. Software applications include anything you have installed using Softaculous, as well as any packages that you have installed manually. Usually these are applications such as blogs, image galleries, forums, shopping carts, content management systems, etc. You should review all of the software applications that are installed on your web site. Make sure you have installed the most recent version and all updates. When you update software applications, make sure you check the plugins as well. If you have any non-standard plugins installed with your applications, do a web search for the plugin name and the term “vulnerability” to see if there are any known issues with your version. If you discover any known vulnerabilities, either update the plugin or disable it. You should also check for recent errors on your web site by using cPanel’s Error Log feature. Error messages can help you determine which software applications or files are vulnerable. For more information about how to access the error log in cPanel, please see [this article](https://kb.hosting.com/docs/error-log). After you have updated your software applications and plugins, go to the **Cleaning up after a hack** section below.

## 

[​](https://kb.hosting.com/docs/securing-a-hacked-site#cleaning-up-after-a-hack)

Cleaning up after a hack

After you have secured your web site, the next step is to clean up the mess left behind by the perpetrators and restore normal operation.

### 

[​](https://kb.hosting.com/docs/securing-a-hacked-site#stopping-malicious-processes)

Stopping malicious processes

The first step in the cleanup process is to ensure there are no malicious processes still running on your account. Otherwise, you may go through all of the following cleanup steps, and these processes will simply wreak havoc all over again. To view the user processes running on your account, follow these steps:

1. Log into your account [using SSH](https://kb.hosting.com/docs/using-ssh-secure-shell).
2. At the command prompt, type the following command:

    ```
    ps faux
    ```

3. Examine the list of running processes and look for anything suspicious. If you do see a suspicious process, note the process ID (PID) number.

 > 🚧 Important Because you ran the **ps** command in step 2 yourself, it is **not** a malicious process and should not be terminated! For example:
 > 
    > ```
    > USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
    > username 2847697  0.0  0.0 108504  1900 pts/2    Ss   16:37   0:00 -bash
    > username 2885143  0.0  0.0 109960  1016 pts/2    R+   16:44   0:00  \_ ps faux
    > ```
 > 
 > These two processes are normal.

4. To kill any suspicious processes that you found, type the following command for each process. Replace _**process\_id**_ with the process ID (PID) that you noted in step 3:

    ```
    kill process_id
    ```

 > 📘 Note If you are uncomfortable using the command line to look for suspicious processes, please open a support ticket at [https://my.hosting.com](https://my.hosting.com) and our support team can assist you further.

### 

[​](https://kb.hosting.com/docs/securing-a-hacked-site#removing-hacked-files)

Removing hacked files

You should go through all of the files in your account and delete anything that you did not put there. If you are using an FTP client, make sure it is set to show hidden files. Similarly, if you are using the command line in SSH, make sure you use the **\-a** option with the **ls** command so it shows all files. (Many malicious files try to “hide” from casual observation by making themselves hidden.) Although we recommend going through all of your files, you can prioritize your search. Look first for file modification timestamps that have changed since you last modified your site, or that occurred around the time the hack took place. If you identify a file that was modified during the hack (such as a defaced index page), you may be able to locate other affected files by searching for similar timestamps. For example, to find all of the files that have been modified in your **public\_html** directory within the last three days, follow these steps:

1. Log in to your account [using SSH](https://kb.hosting.com/docs/using-ssh-secure-shell).
2. At the command prompt, type the following commands:

    ```
    cd ~/public_html
    find . -mtime -3
    ```

 > 📘 Note You can modify the **\-3** option to control how many days in the past the find command searches for modified files. For example, to search back five days instead of three, use **\-5** .

### 

[​](https://kb.hosting.com/docs/securing-a-hacked-site#setting-correct-file-permissions)

Setting correct file permissions

By default, every directory beneath the **public\_html** directory should have its file permissions set to **755** (full access for the owner, and read and execute access for everyone else). Additionally, every file should have its permissions set to **644** (read and write access for the owner, and read access for everyone else). To set these permissions for your account, follow these steps:

1. Log in to your account [using SSH](https://kb.hosting.com/docs/using-ssh-secure-shell).
2. At the command prompt, type the following commands:

    ```
    cd ~/public_html
    find . -type d -exec chmod -c 755 {} \;
    find . -type f -exec chmod -c 644 {} \;
    ```

 > 📘 Note After you make these changes, you may need to adjust permissions for a few individual files, depending on the applications you have installed. Nevertheless, it is a good security practice to set secure permissions initially, and then make any individual adjustments as necessary.

### 

[​](https://kb.hosting.com/docs/securing-a-hacked-site#restoring-databases)

Restoring databases

Some hacks, particularly SQL injection attacks against vulnerable Joomla! installations, may alter the database with malicious code. These modifications can grant an attacker access to your account even after you update applications and remove altered files. Therefore, you should review your databases to see if there are any suspicious changes. You may also want to restore the database from a backup that was completed before the attack occurred. If you need further assistance, please open a support ticket at [https://my.hosting.com](https://my.hosting.com).

### 

[​](https://kb.hosting.com/docs/securing-a-hacked-site#restoring-lost-and-modified-files)

Restoring lost and modified files

You can use the Server Rewind feature in cPanel to restore files in your home directory that have been lost or modified within the past month. For more information about how to use the Server Rewind feature, please see [this article](https://kb.hosting.com/docs/server-rewind).

### 

[​](https://kb.hosting.com/docs/securing-a-hacked-site#reconfiguring-wordpress)

Reconfiguring WordPress

If you use WordPress, there are additional steps you must take to secure your site after an attack. For example, you must reset the WordPress security keys. For more information about WordPress security, please see [this article](https://kb.hosting.com/docs/wordpress-security).

### 

[​](https://kb.hosting.com/docs/securing-a-hacked-site#requesting-a-site-review-from-google)

Requesting a site review from Google

A hacked site can lead to online reputation damage and lower search engine rankings. Or visitors may even see “Deceptive site ahead” warnings in web browsers. When you are confident that you have secured your site, you may want to request a review from Google. If Google determines your site is no longer dangerous or deceptive, it will unflag it and no longer penalize it in search engine rankings. For information about how to request a site review from Google, please visit [https://web.dev/articles/request-a-review](https://web.dev/articles/request-a-review).

### 

[​](https://kb.hosting.com/docs/securing-a-hacked-site#using-cloudflare-to-enhance-security)

Using Cloudflare to enhance security

To help prevent future attacks, you should consider enabling Cloudflare for your account. Cloudflare is a content delivery network (CDN) service. Cloudflare’s network blocks threats and limits abusive bots before they reach the web server. This increases security and reduces wasted bandwidth. You can sign up directly on Cloudflare’s site at [http://www.cloudflare.com](https://www.cloudflare.com).

## 

[​](https://kb.hosting.com/docs/securing-a-hacked-site#more-information)

More information

For additional suggestions about what to do if your web site is hacked, please visit [https://developers.google.com/search/blog/2008/04/my-sites-been-hacked-now-what](https://developers.google.com/search/blog/2008/04/my-sites-been-hacked-now-what).

## 

[​](https://kb.hosting.com/docs/securing-a-hacked-site#related-articles)

Related articles

- [WordPress security](https://kb.hosting.com/docs/wordpress-security)

Was this page helpful?

YesNo

Ctrl+I