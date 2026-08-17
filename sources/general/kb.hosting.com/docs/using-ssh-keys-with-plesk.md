# Source: https://kb.hosting.com/docs/using-ssh-keys-with-plesk

The Plesk control panel does not have graphical tools to manage ssh keys. This article provides step-by-step instruction to create and manage ssh keys from the command line.

Plesk is no longer included with new hosting.com plans, but it is still available on legacy Managed WordPress accounts. You can install Plesk manually on unmanaged VPS and Dedicated servers.📘 NoteThe following instructions work with the Windows Subsystem for Linux, the Macintosh terminal, or the Linux command line.

## 

[​](https://kb.hosting.com/docs/using-ssh-keys-with-plesk#creating-ssh-keys)

Creating SSH keys

The following steps show how to create an SSH key on your local computer and upload the public key to the server.

1. At the command prompt on the local computer, change to the .ssh directory with this command.

```
user@computer ~$ cd ~/.ssh
```

If the .ssh directory does not exist, you can create it with this command:

```
user@computer ~$ mkdir ~/.ssh
```

2. When you have changed to the .ssh directory, type this command, replacing _mykey_ with a file name of your choice.

```
user@computer ~$ ssh-keygen -t rsa -b 2048 -f mykey
```

The command will prompt for a passphrase during creation of the key. Adding a passphrase makes the key more secure but keys with passphrases cannot be used for automation. When the command completes, a public key named **mykey.pub** and a private key named **mykey** will be created in the .ssh directory.

3. Copy the public key to your server using the ssh-copy-id command. Replace _mykey.pub_ with the name you chose in the previous step. Replace _user_ with your username on the server and replace _example.com_ with your domain name or the IP address of the server.

```
user@computer ~$ ssh-copy-id -i mykey.pub -p 7822 user@example.com
```

You will be prompted for your password to log in. The public key will be copied to the ~/.ssh/authorized\_keys file on the server.

4. Once the file has been copied, you should be able to login using the following command without typing your password: Replace _mykey_ with the name of your key file, replace _user_ with your username on the server and replace _example.com_ with your domain name or the IP address of the server.

```
user@computer ~$ ssh -i ~/.ssh/mykey -p 7822 user@example.com
```

## 

[​](https://kb.hosting.com/docs/using-ssh-keys-with-plesk#appending-ssh-keys)

Appending SSH keys

You may want to allow others to access your account or provide access to a remote service that provides their own public key. The public key may be provided as a file or you may need to cut and paste it into a file. If the file is created by pasting the key into a file, be sure there are no extra characters before or after the key. The key must be appended to the authorized\_keys file on the server. To append a key, follow these steps.

1. Save or create the public key file in any convenient directory. In this example the users home directory is used. The filename should have the.pub extension.
2. Open the command prompt to the users home directory and use the ssh-copy-id command to copy the key to the server. Replace _somekey.pub_ with the name of the file created in the previous step. Replace _user_ with your username on the server and replace _example.com_ with your domain name or the IP address of the server.

```
user@computer ~$ ssh-copy-id -i somekey.pub -p 7822 user@example.com
```

## 

[​](https://kb.hosting.com/docs/using-ssh-keys-with-plesk#related-articles)

Related articles

- [Using SSH (Secure Shell)](https://kb.hosting.com/docs/using-ssh-secure-shell)
- [Using SSH keys](https://kb.hosting.com/docs/using-ssh-keys)
- [Configuring SSH keys with cPanel](https://kb.hosting.com/docs/configuring-ssh-keys-with-cpanel)

Was this page helpful?

YesNo

Ctrl+I