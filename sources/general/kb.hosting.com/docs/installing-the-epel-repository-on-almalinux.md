# Source: https://kb.hosting.com/docs/installing-the-epel-repository-on-almalinux

This article describes how to install the Extra Packages for Enterprise Linux (EPEL) repository on an unmanaged server running AlmaLinux. The EPEL repository enables you to install additional Fedora-based packages on AlmaLinux servers.

You must have root access to the server to follow the procedures in this article.

## 

[​](https://kb.hosting.com/docs/installing-the-epel-repository-on-almalinux#installing-the-epel-repository)

Installing the EPEL repository

To install the EPEL repository on your AlmaLinux unmanaged server, follow these steps:

1. Log in to the server as the root user.
2. At the command prompt, type the following command to update the server:

    ```
    yum -y update
    ```

3. To install the EPEL repository, type the following command:

    ```
    yum -y install epel-release
    ```

4. To verify that the EPEL repository has been added, type the following command:

    ```
    yum repolist
    ```

 A line similar to the following line should appear in the list of repositories:

    ```
    epel         Extra Packages for Enterprise Linux 6 - x86_64
    ```

5. You can now install any of the packages in the EPEL repository.

## 

[​](https://kb.hosting.com/docs/installing-the-epel-repository-on-almalinux#more-information)

More information

For more information about the EPEL repository, please visit [http://fedoraproject.org/wiki/EPEL](https://fedoraproject.org/wiki/EPEL).

Was this page helpful?

YesNo

Ctrl+I