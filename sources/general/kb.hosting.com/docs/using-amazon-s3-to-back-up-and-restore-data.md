# Source: https://kb.hosting.com/docs/using-amazon-s3-to-back-up-and-restore-data

This article describes how to back up data on your hosting.com account to Amazon S3 (Simple Storage Service), as well as how to restore data from Amazon S3 to your account. Using this configuration, your data is backed up securely to an off-site storage location.

If you have not already set up an Amazon Web Services (AWS) account, you must do so before following the procedures below. To set up an Amazon AWS account, please visit [https://aws.amazon.com](https://aws.amazon.com).

## 

[​](https://kb.hosting.com/docs/using-amazon-s3-to-back-up-and-restore-data#using-amazon-s3-at-hosting-com)

Using Amazon S3 at hosting.com

To access Amazon S3 services on your hosting.com account, you set up a virtual environment for Python, and then install and configure the **s3cmd** package. Before you do this, however, you must log in to the AWS console and create a user group and a user. When you do this, AWS generates the user’s **Access key** and **Secret key**. You must provide both of these keys during the **s3cmd** package configuration process.

- For information about how to create an AWS user group and user, please visit the official Amazon S3 documentation site at [http://docs.aws.amazon.com/IAM/latest/UserGuide/Using\_WorkingWithGroupsAndUsers.html](http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_WorkingWithGroupsAndUsers.html).
- For information about how to obtain a user’s Access key and Secret key, please visit the official Amazon S3 documentation site at [http://docs.aws.amazon.com/IAM/latest/UserGuide/ManagingCredentials.html](http://docs.aws.amazon.com/IAM/latest/UserGuide/ManagingCredentials.html).

## 

[​](https://kb.hosting.com/docs/using-amazon-s3-to-back-up-and-restore-data#installing-and-configuring-the-s3cmd-package)

Installing and configuring the s3cmd package

The **s3cmd** Python package enables you to access and manipulate files that are in an Amazon S3 storage bucket by using the command line. To install and configure the **s3cmd** package, follow these steps:

1. Log in to your account [using SSH](https://kb.hosting.com/docs/using-ssh-secure-shell).
2. To create the Python virtual environment, type the following commands at the command prompt:

```
cd ~
virtualenv amazon
```

3. To activate the virtual environment, type the following command:

```
source ~/amazon/bin/activate
```

The command prompt changes to _(amazon)[username@example.com](mailto:username@example.com)_ to indicate that you are running within a virtual environment.

4. To install the **s3cmd** package and its dependencies, type the following command:

```
pip install s3cmd python-magic
```

5. To make the **s3cmd** program executable, type the following command:

```
chmod +x ~/amazon/bin/s3cmd
```

6. To configure the **s3cmd** package for access to your Amazon S3 account, type the following command:

```
s3cmd --configure
```

7. At the **Access Key** prompt, type the AWS user’s Access key and then press Enter.
8. At the **Secret Key** prompt, type the AWS user’s Secret key and then press Enter.
9. At the **Encryption password** prompt, press Enter.
10. At the **Path to GPG program** prompt, press Enter.
11. At the **Use HTTPS protocol** prompt, type `Yes` and then press Enter.
12. At the **Test access with supplied credentials?** prompt, type `Y` and then press Enter. If s3cmd is configured correctly, you receive the following message:

```
Success. Your access key and secret key worked fine: )
```

If you do not receive this message, s3cmd reviews the configuration settings. Make any necessary changes, and then try again.

13. At the **Save settings?** prompt, type `Y` and then press Enter.

By default, the s3cmd program saves its configuration settings in the _/home/username/.s3cfg_ file, where _**username**_ represents your account username. For basic use scenarios, you should not have to edit any of the settings in this file.

## 

[​](https://kb.hosting.com/docs/using-amazon-s3-to-back-up-and-restore-data#backing-up-data-to-amazon-s3)

Backing up data to Amazon S3

After you install and configure the **s3cmd** package and have verified that s3cmd can connect to Amazon S3, you are ready to create an Amazon S3 storage bucket, and a cron job to do the actual backup. To do this, follow these steps:

1. At the command prompt, make sure that you are running within the virtual environment. If the command prompt does **not** begin with _(amazon)_, type the following command to activate the virtual environment:

```
source ~/amazon/bin/activate
```

2. Type the following commands to create an Amazon S3 storage bucket. Replace _**bucket**_ with the name of the bucket that you want to create:

```
cd ~
s3cmd mb s3://bucket
```

Bucket names must be unique. If you try to create a bucket with a name that is already in use (either by you or by someone else), you receive the following error message:

```
ERROR: Bucket 'bucketname' already exists
```

If this occurs, run the **s3cmd mb** command with a different bucket name until the command succeeds.

3. To verify that the bucket was created successfully, type the following command:

```
s3cmd ls
```

You should see a date/time stamp and the name of the bucket. For example:

```
2014-05-02 17:48  s3://bucketname
```

4. After you verify that the Amazon S3 bucket was created successfully, you are ready to set up a cron job that backs up files to the bucket automatically. To do this, the cron command must activate the virtual environment and then run the s3cmd program.For example, the following command demonstrates how to back up the entire_public\_html_ directory to an S3 bucket daily at 2:30 AM. You should replace _**username**_ with your own hosting.com account username, and _**bucket**_ with the name of your own bucket:

```
30 2 * * * source /home/username/amazon/bin/activate; s3cmd put --preserve --recursive /home/username/public_html s3://bucket
```

- You can set up the cron job using the _crontab_ command line program, or by using cPanel (if your account includes cPanel access). For information about how to set up a cron job in cPanel, please see [this article](https://kb.hosting.com/docs/cron-jobs).
- The s3cmd command shown above uses the **put** option, which transfers all files regardless of whether or not there are newer or older versions already stored on the bucket. After you have established a baseline backup on the bucket, you may want to use the **sync** option instead to transfer files more efficiently. For more information about the **sync** option, type the following command at the command prompt:

```
s3cmd --help
```

- You cannot copy empty directories to an Amazon S3 bucket. This is because Amazon S3 (as well as Git and some other file repository mechanisms) only handles actual “objects” such as files. If a directory does not contain any files, it is not an object, and is not transferred.

## 

[​](https://kb.hosting.com/docs/using-amazon-s3-to-back-up-and-restore-data#restoring-data-from-amazon-s3)

Restoring data from Amazon S3

To restore data from an Amazon S3 bucket to your hosting.com account, follow these steps:

1. At the command prompt, make sure that you are running within the virtual environment. If the command prompt does not begin with the name of your virtual environment in parentheses, type the following command to activate the virtual environment:

```
source ~/amazon/bin/activate
```

2. Type the following command to restore data. Replace _**bucket**_ with the name of your bucket, _**path**_ with the path to the files in the bucket that you want to transfer, and _**destination**_ with the destination directory on your hosting.com account:

```
s3cmd get --recursive s3://bucket/path destination
```

You can also use the **sync** option to transfer files from the bucket to your hosting.com account. For more information about the **sync** option, type the following command at the command prompt:

```
s3cmd --help
```

## 

[​](https://kb.hosting.com/docs/using-amazon-s3-to-back-up-and-restore-data#more-information)

More information

- For general information about Amazon S3, please visit [https://aws.amazon.com/s3](http://aws.amazon.com/s3).
- To view the official Amazon S3 documentation, please visit [https://aws.amazon.com/documentation/s3](http://aws.amazon.com/documentation/s3).

## 

[​](https://kb.hosting.com/docs/using-amazon-s3-to-back-up-and-restore-data#related-articles)

Related articles

- [Backups on dedicated servers and VPS](https://kb.hosting.com/docs/backups-on-dedicated-servers-and-vps)
- [Backups on shared hosting and reseller accounts](https://kb.hosting.com/docs/backups-on-shared-hosting-and-reseller-accounts)
- [Installing and configuring the AWS Command Line Interface (CLI)](https://kb.hosting.com/docs/installing-and-configuring-the-aws-command-line-interface-cli)
- [Using Google Drive to back up and restore data](https://kb.hosting.com/docs/using-google-drive-to-back-up-and-restore-data)

Was this page helpful?

YesNo

Ctrl+I