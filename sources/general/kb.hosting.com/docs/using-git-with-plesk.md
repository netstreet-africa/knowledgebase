# Source: https://kb.hosting.com/docs/using-git-with-plesk

This article describes how to configure Plesk’s integration with the [Git](https://git-scm.com) version control system.

Plesk is no longer included with new hosting.com plans, but it is still available on legacy Managed WordPress accounts. You can install Plesk manually on unmanaged VPS and Dedicated servers.

## 

[​](https://kb.hosting.com/docs/using-git-with-plesk#setting-up-a-remote-repository)

Setting up a remote repository

In Plesk, you can configure a remote Git repository and pull files to your site. To do this, follow these steps:

1. Log in to Plesk.

 > 📘 Note If you do not know how to log in to your Plesk account, please see [this article](https://kb.hosting.com/docs/logging-in-and-out-of-plesk).

2. In the left sidebar, click **Websites & Domains**: 
 ![Plesk - Sidebar - Websites and Domains](https://static.hosting.com/kb/kb-plesk-sidebar-websites-and-domains.png)
3. Locate the domain you want to configure, and then click the **Git** icon: 
 ![Plesk - Git icon](https://static.hosting.com/kb/kb-plesk-git-icon.png)
4. On the **Add Git Repository** page, confirm the **Remote Git hosting like GitHub or BitBucket** option is selected: 
 ![Plesk - Git - Add remote repository](https://static.hosting.com/kb/kb-plesk-git-add-remote-repository.png)
5. In the **Remote Git repository** text box, type the URL where the remote repository is hosted: 
 ![Plesk - Git - Add remote repository configuration](https://static.hosting.com/kb/kb-plesk-git-add-remote-repository-config.png)

Plesk supports HTTPS and SSH protocols for Git.

6. To select the deployment mode, click **automatically deployed**, select the mode you want, and then click **Ok**.
7. To select the deployment directory on your site, click **/httpdocs/**, select the local directory you want to use, and then click **Ok**.
8. Click **OK**. Plesk clones the remote repository into the local directory you specified in step 7.

To pull updates from the remote repository, click **Pull Updates** .

## 

[​](https://kb.hosting.com/docs/using-git-with-plesk#creating-a-local-repository)

Creating a local repository

In Plesk, you can create a local Git repository. To do this, follow these steps:

1. Log in to Plesk.

 > 📘 Note If you do not know how to log in to your Plesk account, please see [this article](https://kb.hosting.com/docs/logging-in-and-out-of-plesk).

2. In the left sidebar, click **Websites & Domains**: 
 ![Plesk - Sidebar - Websites and Domains](https://static.hosting.com/kb/kb-plesk-sidebar-websites-and-domains.png)
3. Locate the domain you want to configure, and then click the **Git** icon: 
 ![Plesk - Git icon](https://static.hosting.com/kb/kb-plesk-git-icon.png)
4. Click **Add Repository**.
5. Select **Local repository on your workstation**: 
 ![Plesk - Git - Add local repository](https://static.hosting.com/kb/kb-plesk-git-add-local-repository.png)
6. In the **Git Repository in Plesk** text box, type the name of the new repository: 
 ![Plesk - Git - Add local repository configuration](https://static.hosting.com/kb/kb-plesk-git-add-local-repository-config.png)
7. To select the deployment mode, click **automatically deployed**, select the mode you want, and then click **Ok**.
8. To select the deployment directory on your site, click **/httpdocs/**, select the local directory you want to use, and then click **Ok**.
9. Click **OK**. Plesk creates the local repository.

## 

[​](https://kb.hosting.com/docs/using-git-with-plesk#editing-repository-settings)

Editing repository settings

To edit the settings of an existing repository in Plesk, follow these steps:

1. Log in to Plesk.

 > 📘 Note If you do not know how to log in to your Plesk account, please see [this article](https://kb.hosting.com/docs/logging-in-and-out-of-plesk).

2. In the left sidebar, click **Websites & Domains**: 
 ![Plesk - Sidebar - Websites and Domains](https://static.hosting.com/kb/kb-plesk-sidebar-websites-and-domains.png)
3. Locate the domain you want to configure, and then click the **Git** icon: 
 ![Plesk - Git icon](https://static.hosting.com/kb/kb-plesk-git-icon.png)
4. Locate the Git repository you want to edit, and then click **Repository Settings**: 
 ![Plesk - Git - Repository settings](https://static.hosting.com/kb/kb-plesk-git-repository-settings.png)
5. On the settings page, make the changes you want, and then click **OK**. Plesk updates the settings.

## 

[​](https://kb.hosting.com/docs/using-git-with-plesk#more-information)

More information

- For more information about Git, please visit [https://git-scm.com](https://git-scm.com).
- For more information about Plesk, please visit [https://www.plesk.com](https://www.plesk.com).

## 

[​](https://kb.hosting.com/docs/using-git-with-plesk#related-articles)

Related articles

- [Getting started with Plesk](https://kb.hosting.com/docs/getting-started-with-plesk)
- [Getting started with the Plesk File Manager](https://kb.hosting.com/docs/getting-started-with-the-plesk-file-manager)
- [Managing FTP accounts in Plesk](https://kb.hosting.com/docs/managing-ftp-accounts-in-plesk)

Was this page helpful?

YesNo

Ctrl+I