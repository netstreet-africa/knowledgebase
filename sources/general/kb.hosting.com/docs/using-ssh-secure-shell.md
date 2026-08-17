# Source: https://kb.hosting.com/docs/using-ssh-secure-shell

This article describes how to connect to your hosting.com account securely using SSH.

## 

[​](https://kb.hosting.com/docs/using-ssh-secure-shell#what-is-ssh)

What is SSH?

Secure Shell (SSH) is a protocol that provides secure command-line access to your hosting.com account. By using SSH, you can remotely log in to your account and run commands as if you were sitting right at the server.

SSH is the only protocol that hosting.com supports for access to the command line. For security reasons we do not support _telnet_.

With its simplified interface, the command line allows you to perform tasks with text commands. You’ll also find that SSH is a time-saving solution that can ultimately help speed up many tasks. For example, you can complete tasks at the command line that you cannot do with your account’s control panel.

## 

[​](https://kb.hosting.com/docs/using-ssh-secure-shell#how-ssh-works)

How SSH works

SSH creates a secure connection between two computers. SSH is able to provide a safe, encrypted connection between the client and the server through this encrypted tunnel. From here, you can easily transfer files between connected machines, or run programs and commands that would otherwise require more complicated screen-sharing solutions. It is as if you were right in front of your server, in the data center where it is located.

## 

[​](https://kb.hosting.com/docs/using-ssh-secure-shell#what-you-need-to-create-an-ssh-connection)

What you need to create an SSH connection

Just as you need an FTP client to manage files with FTP, you need an SSH client on your computer to make an SSH connection. PuTTY and WinSCP are two popular SSH solutions for Windows users. Both Linux and macOS have built-in terminals, so it is not necessary to download a separate SSH client. Our step-by-step SSH account access instructions, outlined below, will help you access your account remotely.

## 

[​](https://kb.hosting.com/docs/using-ssh-secure-shell#viewing-ssh-connection-details-for-your-account)

Viewing SSH connection details for your account

To view the SSH connection details for your account, follow these steps:

1. Log in to the Hosting Panel at [https://my.hosting.com](https://my.hosting.com).
2. In the left sidebar, under **Products & Services**, click **Hosting & Servers**: ![](https://files.readme.io/a6b28c954635ea9bd541e1448ac69955c5ba1203fed8409e77621af76ee2853c-image.png)
3. On the **Hosting & Servers** page, locate your account, and then click **Manage**.
4. On the **Overview** tab are the SSH connection details for your account:
 - In the **Account Username** row is your SSH username.
 - In the **Control Panel** row is the SSH hostname. Alternatively, you can use your **Account Domain Name** if your domain name points to our nameservers. ![](https://files.readme.io/dae39a242da01ac8d2dc6056df29ac7ac1f8c3619ba345a81b7a941ca41bb042-image.png)

## 

[​](https://kb.hosting.com/docs/using-ssh-secure-shell#how-to-use-an-ssh-client)

How to use an SSH client

Once you have the connection details for your account, you are ready to use an SSH client to connect to the server. Follow the appropriate procedure below for your computer’s operating system.

### 

[​](https://kb.hosting.com/docs/using-ssh-secure-shell#windows-operating-systems)

Windows operating systems

You can use any SSH client, but we will show how to use PuTTY, which you can [download here](https://www.chiark.greenend.org.uk/~sgtatham/putty/). To connect to your account using PuTTY, follow these steps:

1. Start PuTTY.
2. In the **Host Name (or IP address)** text box, type the hostname or IP address of the server where your account is located.
3. In the **Port** text box, type `22`.

 > 📘 Note Make sure you use the correct SSH port number for your account. For example, some hosting accounts use a different port for SSH, such as 7822.

4. Confirm that the **Connection type** radio button is set to **SSH**.
5. Click **Open**.
6. A PuTTY security alert about the server’s host key appears the first time you connect. Click **Yes**.
7. Enter your account username when prompted, and then press **Enter** .
8. Type your account password when prompted, and then press **Enter** .

 > 📘 Note For security reasons, no characters appear in the terminal as you type the password.

9. When the remote server’s command line prompt appears, you are connected. The initial command line prompt is:

    ```
    username@example.com [~]#
    ```

10. You can now run commands. For example, to see a listing of the current directory, type `ls,` and then press Enter.
11. To close the SSH connection when you are done, type `exit` and then press Enter.

### 

[​](https://kb.hosting.com/docs/using-ssh-secure-shell#macos-and-linux-operating-systems)

macOS and Linux operating systems

Both macOS and Linux include SSH clients, so connecting to your hosting.com account on these operating systems is easy. You do not have to download a special client. To connect to your account, follow these steps:

1. Open a terminal window. The procedure to do this depends on the operating system and desktop environment.
 - On macOS, click **Applications**, click **Utilities** and then click **Terminal**.
2. At the command prompt, type the following command. Replace _username_ with your hosting.com username, and _example.com_ with your site’s domain name:

    ```
    ssh username@example.com
    ```

 > 🚧 Important To use a different port number, use the **\-p** option. For example:
 > 
    > ```
    > ssh -p 7822 username@example.com
    > ```

3. Type your password when you are prompted to do so.

 > 📘 Note For security reasons, no characters appear in the terminal as you type the password.

4. When the remote server’s command line prompt appears, you are connected. The initial command line prompt is:

    ```
    username@example.com [~]#
    ```

5. You can now run commands. For example, to see a listing of the current directory, type `ls,` and then press **Enter** .
6. To close the SSH connection when you are done, type `exit` and then press **Enter** .

 > 👍 Tip In the command in step 2, we explicitly specify the port number, the username, and the hostname. However, you can also define these settings for a remote host in your _~/.ssh/config_ file as follows:
 > 
    > ```
    > Host example
    >     Hostname example.com
    >     Port 22
    >     User username
    > ```
 > 
 > The **Host** value can be any name you want; it is simply a label for the other settings. The **Hostname** value is the remote host you want to access, the port number is 22, and the **User** value specifies your hosting.com account username. With this configuration defined, you can connect to the account by simply using the **Host** value. You do not have to type the port number, username, and hostname each time. The following command demonstrates how to do this:
 > 
    > ```
    > ssh example
    > ```

## 

[​](https://kb.hosting.com/docs/using-ssh-secure-shell#related-articles)

Related articles

- [Using SSH keys](https://kb.hosting.com/docs/using-ssh-keys)
- [Configuring SSH keys with cPanel](https://kb.hosting.com/docs/configuring-ssh-keys-with-cpanel)
- [Using SSHFS (Secure Shell Filesystem)](https://kb.hosting.com/docs/using-sshfs-secure-shell-filesystem)

Was this page helpful?

YesNo

Ctrl+I