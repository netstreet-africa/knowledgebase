# Source: https://kb.hosting.com/docs/automatic-updates-for-unmanaged-vps

This article discusses a change to unmanaged VPS plans. As of mid-June 2024, on unmanaged VPS accounts, operating system updates are automatically installed by default. You can opt out of this change if you want. Enabling automatic updates helps ensure server security and the overall stability of our network.

## 

[​](https://kb.hosting.com/docs/automatic-updates-for-unmanaged-vps#viewing-update-logs)

Viewing update logs

You can view recent update activity on your VPS at any time. To do this, follow these steps:

1. Log in to your VPS [using SSH](https://kb.hosting.com/docs/using-ssh-secure-shell).
2. At the command prompt, type the appropriate command for your Linux distribution:
 - If your VPS is running AlmaLinux, type:

        ```
        more /var/log/yum.log
        ```

 - If your VPS is running Debian or Ubuntu, type:

        ```
        more /var/log/apt/history.log
        ```

## 

[​](https://kb.hosting.com/docs/automatic-updates-for-unmanaged-vps#rolling-back-recently-installed-updates)

Rolling back recently installed updates

If you want to roll back (revert) a recently installed update, follow the appropriate procedure for your Linux distribution:

- If your VPS is running AlmaLinux, use the **yum history undo** command.
- If your VPS is running Debian or Ubuntu, manually install the package version you want.

## 

[​](https://kb.hosting.com/docs/automatic-updates-for-unmanaged-vps#opting-out-of-automatic-updates)

Opting out of automatic updates

You can opt out of automatic update installation on your VPS if you want. To do this, follow these steps:

1. Log in to your VPS [using SSH](https://kb.hosting.com/docs/using-ssh-secure-shell).
2. At the command prompt, type the following commands:

    ```
    sudo mkdir -p /opt
    sudo touch /opt/.noautoupdates
    ```

 > 🚧 Important We do not recommend opting out of automatic updates, because doing so may leave your server vulnerable to security risks. Make sure you keep your server updated to safeguard your data and ensure the reliability of your services.

## 

[​](https://kb.hosting.com/docs/automatic-updates-for-unmanaged-vps#related-articles)

Related articles

- [Unmanaged VPS Quick Start Guide](https://kb.hosting.com/docs/unmanaged-vps-quick-start-guide)

Was this page helpful?

YesNo

Ctrl+I