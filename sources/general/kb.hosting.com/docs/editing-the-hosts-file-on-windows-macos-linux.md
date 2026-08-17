# Source: https://kb.hosting.com/docs/editing-the-hosts-file-on-windows-macos-linux

A _hosts_ file contains mappings of hostnames to IP addresses. It is frequently used to test a website when the domain’s DNS settings have not been updated yet. This article explains how to edit the _hosts_ file on the following operating systems:

- Microsoft Windows
- Apple macOS
- Linux

**Important**The _hosts_ file is a plain text file, so you should use a plain text editor like Notepad or nano to edit it. Do **not** use a word processor like Microsoft Word, which can add additional formatting and cause more problems than it solves!

## 

[​](https://kb.hosting.com/docs/editing-the-hosts-file-on-windows-macos-linux#microsoft-windows)

Microsoft Windows

To edit the _hosts_ file on Microsoft Windows, follow these steps:

1. Click **Start**, type `notepad`, and then click **Run as administrator**.
2. Click **Yes** to allow the app to make changes to your device.
3. On the **File** menu, click **Open**.
4. In the **Open** dialog box, in the location bar, type `\%SystemRoot%\system32\drivers\etc` and then press Enter.
5. In the **Text Documents (\*.txt)** list box, select **All Files (\*.\*)**.
6. In the list of files, double-click **hosts**.
7. Move the cursor to the end of the file, and then type the following text. Replace _xxx.xxx.xxx.xxx_ with the IP address you want to use, and replace _example.com_ with the domain name:

    ```
    xxx.xxx.xxx.xxx example.com
    ```

 > 🚧 Important There must be at least one space between the IP address and the domain name.

8. To save your changes, press **Ctrl-S**.

## 

[​](https://kb.hosting.com/docs/editing-the-hosts-file-on-windows-macos-linux#apple-macos)

Apple macOS

To edit the _hosts_ file on macOS, follow these steps:

1. Open a terminal window. In the dock, click the **Launchpad** icon, and then in the **Search** box, type `terminal` and press Return.
2. At the command prompt, type the following command, and then press Return:

    ```
    sudo nano /etc/hosts
    ```

 ![](https://files.readme.io/f38a9dc1d8297211fbda9dc938a5f3ec5b10bbd1c1ab9f9cf09431f80226fba1-image.png)
3. Type your password.
4. In the nano editor, move the cursor to the end of the file, and then type the following text. Replace _xxx.xxx.xxx.xxx_ with the IP address you want to use, and replace _example.com_ with the domain name:

    ```
    xxx.xxx.xxx.xxx example.com
    ```

 > 🚧 Important There must be at least one space between the IP address and the domain name.

5. To save your changes, press **Ctrl-O**, and then press Return.
6. To exit the nano editor, press **Ctrl-X**.

 > 🚧 Important To ensure the new hostname mapping works correctly, you should also clear the DNS cache. For information about how to do this, please see [Clearing the DNS cache on your computer](https://kb.hosting.com/docs/clearing-the-dns-cache-on-your-computer).

## 

[​](https://kb.hosting.com/docs/editing-the-hosts-file-on-windows-macos-linux#linux)

Linux

To edit the _hosts_ file on Linux, follow these steps:

1. In your preferred text editor, open the _/etc/hosts_ file with administrator privileges. For example, at the command prompt, type the following command:

    ```
    sudo vi /etc/hosts
    ```

2. Move the cursor to the end of the file, and then type the following text. Replace _xxx.xxx.xxx.xxx_ with the IP address you want to use, and replace _example.com_ with the domain name:

    ```
    xxx.xxx.xxx.xxx example.com
    ```

 > 🚧 Important There must be at least one space between the IP address and the domain name.

3. Save your changes to the _/etc/hosts_ file.

## 

[​](https://kb.hosting.com/docs/editing-the-hosts-file-on-windows-macos-linux#related-articles)

Related articles

- [Accessing your web site before DNS propagation is complete](https://kb.hosting.com/docs/accessing-your-web-site-before-dns-propagation-is-complete)
- [Accessing cPanel](https://kb.hosting.com/docs/accessing-cpanel)
- [Accessing WebHost Manager](https://kb.hosting.com/docs/accessing-webhost-manager)

Was this page helpful?

YesNo

Ctrl+I