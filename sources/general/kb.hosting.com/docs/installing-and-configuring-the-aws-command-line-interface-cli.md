# Source: https://kb.hosting.com/docs/installing-and-configuring-the-aws-command-line-interface-cli

This article describes how to install the Amazon Web Services Command Line Interface (AWS CLI) on your account.

If you have not already set up an Amazon Web Services (AWS) account, you must do so before following the procedures below. To set up an Amazon AWS account, please visit [http://aws.amazon.com](http://aws.amazon.com).

## 

[​](https://kb.hosting.com/docs/installing-and-configuring-the-aws-command-line-interface-cli#using-aws-cli-at-hosting-com)

Using AWS CLI at Hosting.com

To access an AWS account from your Hosting.com account, you set up a virtual environment for Python, and then install and configure the **awscli** package. Before you do this, however, you must log in to the AWS console and create a user group and a user. When you do this, AWS generates the user’s **Access key** and **Secret key**. You must provide both of these keys during the **awscli** package configuration process.

- For information about how to create an AWS user group and user, please visit the official Amazon documentation site at [http://docs.aws.amazon.com/IAM/latest/UserGuide/Using\_WorkingWithGroupsAndUsers.html](http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_WorkingWithGroupsAndUsers.html).
- For information about how to obtain a user’s Access key and Secret key, please visit the official Amazon documentation site at [http://docs.aws.amazon.com/IAM/latest/UserGuide/ManagingCredentials.html](http://docs.aws.amazon.com/IAM/latest/UserGuide/ManagingCredentials.html).

## 

[​](https://kb.hosting.com/docs/installing-and-configuring-the-aws-command-line-interface-cli#installing-and-configuring-the-awscli-package)

Installing and configuring the awscli package

The **awscli** Python package enables you to access an AWS account from the command line. To install and configure the **awscli** package on your hosting.com account, follow these steps:

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

 > 📘 Note The command prompt changes to _(amazon)[username@example.com](mailto:username@example.com)_ to indicate that you are running within a virtual environment.

4. To install the **awscli** package, type the following command:

    ```
    pip install awscli
    ```

5. To make the **awscli** program executable, type the following command:

    ```
    chmod +x ~/amazon/bin/aws
    ```

6. To configure the **awscli** package for access to your AWS account, type the following command:

    ```
    aws configure
    ```

7. At the **AWS Access Key ID** prompt, type the AWS user’s Access key and then press Enter.
8. At the **AWS Secret Access Key** prompt, type the AWS user’s Secret key and then press Enter.
9. At the **Default region name** prompt, press Enter.
10. At the **Default output format** prompt, press Enter. The AWS CLI is now configured for your account.

 > 👍 Tip To view a list of commands available with the AWS CLI, type the following command at the command prompt:
 > 
     > ```
     > aws help
     > ```

## 

[​](https://kb.hosting.com/docs/installing-and-configuring-the-aws-command-line-interface-cli#more-information)

More information

For more information about the AWS CLI, please visit [https://aws.amazon.com/cli](https://aws.amazon.com/cli).

## 

[​](https://kb.hosting.com/docs/installing-and-configuring-the-aws-command-line-interface-cli#related-articles)

Related articles

- [Using Amazon S3 to back up and restore data](https://kb.hosting.com/docs/using-amazon-s3-to-back-up-and-restore-data)

Was this page helpful?

YesNo

Ctrl+I