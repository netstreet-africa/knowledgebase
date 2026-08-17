# Source: https://kb.hosting.com/docs/hardening-a-server-with-fail2ban

This article demonstrates how to install and configure fail2ban to help secure a server. With fail2ban, you can configure your server to automatically block IP addresses that engage in suspicious activity.

**Important**You must have root access to the server to follow the procedures described below.📘 NoteInformation in this article about unmanaged dedicated servers is only for customers who purchased those plans before May 27, 2024. As of that date, unmanaged dedicated servers are no longer available.

## 

[​](https://kb.hosting.com/docs/hardening-a-server-with-fail2ban#about-fail2ban)

About fail2ban

The fail2ban application monitors server log files for intrusion attempts and other suspicious activity. After a predefined number of failures from a host, fail2ban blocks its IP address automatically for a specific duration. With fail2ban, you can help secure your server against unauthorized access attempts. It is particularly effective in reducing the risk from scripted attacks and botnets.

**Important**Although fail2ban can help secure your server, it cannot eliminate all threats. Make sure you take additional security precautions, such as those described in [this article](https://kb.hosting.com/docs/securing-an-unmanaged-server).

## 

[​](https://kb.hosting.com/docs/hardening-a-server-with-fail2ban#installing-fail2ban)

Installing fail2ban

To install the fail2ban package for your Linux distribution:

- For Debian and Ubuntu, type the following command:

```
apt-get install fail2ban
```

- For AlmaLinux and Fedora, type the following command:

```
yum install fail2ban
```

To download and install the _fail2ban_ package on AlmaLinux and Fedora, you must have the EPEL (Extra Packages for Enterprise Linux) repository enabled for your system. For more information about this repository and how to enable it, please see [this article](https://kb.hosting.com/docs/installing-the-epel-repository-on-almalinux).

## 

[​](https://kb.hosting.com/docs/hardening-a-server-with-fail2ban#configuring-fail2ban)

Configuring fail2ban

After you install fail2ban, you are ready to configure it. To do this, follow these steps:

1. Log in to your server [using SSH](https://kb.hosting.com/docs/using-ssh-secure-shell).
2. At the command prompt, type the following command:

```
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
```

The _jail.conf_ file contains a basic configuration that you can use as a starting point, but it may be overwritten during updates. Fail2ban uses the separate _jail.local_ file to actually read your configuration settings.

3. Open the _jail.local_ file in your preferred text editor.
4. Locate the **\[DEFAULT\]** section, which contains the following global options:

- **ignoreip:** This option enables you to specify IP addresses or hostnames that fail2ban will ignore. For example, you could add your home or office IP address so fail2ban does not prevent you from accessing your own server. To specify multiple addresses, separate them with a space. For example:

```
ignoreip = 127.0.0.1/8 93.184.216.34
```

- **bantime:** This option defines in seconds how long an IP address or host is banned. The default is 600 seconds (10 minutes).
- **maxretry:** This option defines the number of failures a host is allowed before it is banned.
- **findtime:** This option is used together with the **maxretry** option. If a host exceeds the **maxretry** setting within the time period specified by the **findtime** option, it is banned for the length of time specified by the **bantime** option.

5. With fail2ban’s global options configured, you are now ready to enable and disable jails for the specific protocols and services you want to protect. By default, fail2ban monitors SSH login attempts (you can search for the **\[ssh-iptables\]** section in the _jail.local_ file to view the specific settings for the SSH jail).

The _jail.local_ file includes default jail settings for several protocols. Often, all you need to do to enable a jail is change its **enabled = false** line to **enabled = true** and restart fail2ban. You can also define custom jails and filters for additional flexibility. For more information about how to do this, please visit [http://www.fail2ban.org/wiki/index.php/MANUAL\_0\_8](http://www.fail2ban.org/wiki/index.php/MANUAL_0_8).

6. Save your changes to the _jail.local_ file.
7. To restart the fail2ban service and load the new configuration, type the following command:

```
service fail2ban restart
```

To display a list of IP addresses currently banned by fail2ban, type the following command:

```
iptables -S
```

For example, the following line shows an IP address that the SSH jail has banned:

```
-A fail2ban-SSH -s 10.0.1.124/32 -j REJECT --reject-with icmp-port-unreachable
```

## 

[​](https://kb.hosting.com/docs/hardening-a-server-with-fail2ban#more-information)

More information

- For general information about fail2ban, please visit [http://www.fail2ban.org/wiki/index.php/Main\_Page](http://www.fail2ban.org/wiki/index.php/Main_Page).
- To view the official fail2ban documentation, please visit [http://www.fail2ban.org/wiki/index.php/Manual](http://www.fail2ban.org/wiki/index.php/Manual).

## 

[​](https://kb.hosting.com/docs/hardening-a-server-with-fail2ban#related-articles)

Related articles

- [Configuring a firewall using iptables](https://kb.hosting.com/docs/configuring-a-firewall-using-iptables)

Was this page helpful?

YesNo

Ctrl+I