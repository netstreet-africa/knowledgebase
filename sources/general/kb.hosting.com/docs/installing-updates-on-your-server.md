# Source: https://kb.hosting.com/docs/installing-updates-on-your-server

This article describes how to install updates on an unmanaged server. Maintaining an up-to-date server with the latest patches and fixes is one of the most important things you can do to make your server more secure. Follow the appropriate procedures below for your server’s operating system.

**Important**You must have root access to the server to follow the procedures described below.📘 NoteInformation in this article about unmanaged dedicated servers is only for customers who purchased those plans before May 27, 2024. As of that date, unmanaged dedicated servers are no longer available.

## 

[​](https://kb.hosting.com/docs/installing-updates-on-your-server#almalinux-and-fedora)

AlmaLinux and Fedora

To download and install the latest updates immediately, type the following command as the root user:

```
yum update
```

The previous command runs in interactive mode, which means you are asked at certain points during the update process whether or not you want to continue. To install updates without any user intervention, type the following command instead:

```
yum -y update
```

You can add this command to a cron job to automatically update your server at specific intervals.

## 

[​](https://kb.hosting.com/docs/installing-updates-on-your-server#debian-and-ubuntu)

Debian and Ubuntu

To search the repositories for updates and then install them immediately, type the following command as the root user:

```
apt-get update && apt-get upgrade
```

The previous command runs in interactive mode, which means you are asked at certain points during the update process whether or not you want to continue. To install updates without any user intervention, type the following command instead:

```
apt-get -y update && apt-get -y upgrade
```

You can add this command to a cron job to automatically update your server at specific intervals.

## 

[​](https://kb.hosting.com/docs/installing-updates-on-your-server#other-linux-distributions)

Other Linux distributions

For other Linux distributions, consult its documentation for the steps to install updates.

Was this page helpful?

YesNo

Ctrl+I