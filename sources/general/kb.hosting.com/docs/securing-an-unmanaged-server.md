# Source: https://kb.hosting.com/docs/securing-an-unmanaged-server

This article describes several steps you can take to help secure an unmanaged server.

**Important**You must have root access to the server to follow the procedures described below.

## 

[​](https://kb.hosting.com/docs/securing-an-unmanaged-server#securing-an-unmanaged-server)

Securing an unmanaged server

An unmanaged server provides you with total flexibility. Because you have root access to the server, you can install whatever you want, configure it however you want, and run it however you want. With this freedom comes additional administration tasks, however, and one of the most important of these is security. If you do not take steps to secure your server, you leave it open to attack by malicious actors. A minor attack could be just an annoyance, while a major attack could result in the loss of your entire server configuration and data. Therefore, it is very important that you try to secure your server as much as possible. The following recommendations can help you do this.

### 

[​](https://kb.hosting.com/docs/securing-an-unmanaged-server#use-strong-passwords)

Use strong passwords

Weak passwords can undermine the most carefully configured server. Good security practices start with using strong passwords. For information about how to choose strong passwords, please see [this article](https://kb.hosting.com/docs/choosing-a-strong-password).

### 

[​](https://kb.hosting.com/docs/securing-an-unmanaged-server#disable-root-ssh-access)

Disable root SSH access

The root account is all-powerful, so one of the first things you should do on a new unmanaged server is create a normal user account and disable root SSH access. For information about how to do this, please see [this article](https://kb.hosting.com/docs/disabling-ssh-logins-for-root).

### 

[​](https://kb.hosting.com/docs/securing-an-unmanaged-server#update-the-server-regularly)

Update the server regularly

Security vulnerabilities are constantly being discovered and patched. (One well-publicized example is the [“Heartbleed” OpenSSL vulnerability](https://kb.hosting.com/docs/fixing-the-heartbleed-vulnerability-on-unmanaged-servers) that was disclosed in April 2014.) Maintaining an up-to-date server with the latest patches and fixes is crucial to maintaining a more secure server. For information about how to install updates on an unmanaged server, please see [this article](https://kb.hosting.com/docs/installing-updates-on-your-server).

### 

[​](https://kb.hosting.com/docs/securing-an-unmanaged-server#set-up-a-firewall)

Set up a firewall

A firewall enables you to control incoming and outgoing network packets. For example, you can specify rules that block all incoming packets on port 25, or all outgoing packets to a certain port or host.

- For information about how to set up a firewall using iptables, please see [this article](https://kb.hosting.com/docs/configuring-a-firewall-using-iptables).
- For information about how to set up a firewall using Advanced Policy Firewall, please see [this article](https://kb.hosting.com/docs/installing-and-configuring-advanced-policy-firewall).

### 

[​](https://kb.hosting.com/docs/securing-an-unmanaged-server#set-up-fail2ban)

Set up fail2ban

The fail2ban program helps secure your server against unauthorized access attempts by monitoring log files for suspicious activity. After a predefined number of failed access attempts from an IP address, fail2ban automatically blocks it. For information about how to set up fail2ban on your server, please see [this article](https://kb.hosting.com/docs/hardening-a-server-with-fail2ban).

## 

[​](https://kb.hosting.com/docs/securing-an-unmanaged-server#related-articles)

Related articles

- [Choosing a strong password](https://kb.hosting.com/docs/choosing-a-strong-password)
- [Disabling SSH logins for root](https://kb.hosting.com/docs/disabling-ssh-logins-for-root)
- [Installing updates on your server](https://kb.hosting.com/docs/installing-updates-on-your-server)
- [Configuring a firewall using iptables](https://kb.hosting.com/docs/configuring-a-firewall-using-iptables)
- [Installing and configuring Advanced Policy Firewall](https://kb.hosting.com/docs/installing-and-configuring-advanced-policy-firewall)
- [Hardening a server with fail2ban](https://kb.hosting.com/docs/hardening-a-server-with-fail2ban)

Was this page helpful?

YesNo

Ctrl+I