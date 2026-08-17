# Source: https://kb.hosting.com/docs/changing-the-time-zone-on-an-unmanaged-hosting-account

This article describes how to change the time zone on an unmanaged hosting account, including unmanaged VPS and dedicated servers.

- You must have root access to the server to change the time zone.
- For information about changing the time zone on a managed hosting account, please see [this article](https://kb.hosting.com/docs/changing-the-time-zone-on-a-managed-hosting-account).

## 

[​](https://kb.hosting.com/docs/changing-the-time-zone-on-an-unmanaged-hosting-account#almalinux-and-ubuntu-servers)

AlmaLinux and Ubuntu servers

To change the time zone on a server running AlmaLinux or Ubuntu, follow these steps:

1. Log in to the server [using SSH](https://kb.hosting.com/docs/using-ssh-secure-shell).
2. To view the current time zone, type the following command:

    ```
    timedatectl
    ```

3. To view a list of available time zones, type the following command:

    ```
    timedatectl list-timezones
    ```

4. As the root user, type the following command to change the time zone. Replace _**timezone**_ with the name of the time zone you obtained in step 3:

    ```
    timedatectl set-timezone timezone
    ```

 For example, to set the time zone to Paris, France, type `timedatectl set-timezone Europe/Paris`.

 > 📘 Note Alternatively, as a non-root user you can type the following command if the account has _sudo_ privileges:
 > 
    > ```
    > sudo timedatectl set-timezone timezone
    > ```

5. To verify the new time zone change, type the following command:

    ```
    timedatectl
    ```

## 

[​](https://kb.hosting.com/docs/changing-the-time-zone-on-an-unmanaged-hosting-account#debian-servers)

Debian servers

To change the time zone on a server running Debian, follow these steps:

1. Log in to the server [using SSH](https://kb.hosting.com/docs/using-ssh-secure-shell).
2. As the root user, type the following command:

    ```
    dpkg-reconfigure TZDATA
    ```

 > 📘 Note Alternatively, as a non-root user you can type the following command if the account has _sudo_ privileges:
 > 
    > ```
    > sudo dpkg-reconfigure TZDATA
    > ```

3. Use the arrow keys to select the geographic area, and then press Enter.
4. Use the arrow keys to select the city or region in the time zone that you want, and then press Enter.

## 

[​](https://kb.hosting.com/docs/changing-the-time-zone-on-an-unmanaged-hosting-account#related-articles)

Related articles

- [Changing the time zone on a managed hosting account](https://kb.hosting.com/docs/changing-the-time-zone-on-a-managed-hosting-account)
- [Changing the time zone in the Linux shell](https://kb.hosting.com/docs/changing-the-time-zone-in-the-linux-shell)
- [Changing the PHP time zone setting](https://kb.hosting.com/docs/php-time-zones)
- [Converting the MySQL time zone](https://kb.hosting.com/docs/convert-the-mysql-time-zone)
- [Changing the time zone in webmail](https://kb.hosting.com/docs/changing-the-time-zone-in-webmail)

Was this page helpful?

YesNo

Ctrl+I