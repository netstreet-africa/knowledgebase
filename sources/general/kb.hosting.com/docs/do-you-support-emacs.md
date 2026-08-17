# Source: https://kb.hosting.com/docs/do-you-support-emacs

Yes, we support Emacs. However, not all of our servers have it installed. To determine if Emacs is installed on your server, type the following command:

```
ls /usr/bin/emacs*
```

If Emacs is installed, you see a file named _/usr/bin/emacs-xx.y_, where_xx.y_ represents the version number.

If your server does not have Emacs installed, please open a support ticket at [https://my.hosting.com](https://my.hosting.com), and we will install it for you.

When Emacs is installed, you can link to the executable binary from your home _bin_ directory. To do this, type the following command. Replace _**xx.y**_ with the version number installed on your server (for example, _23.1_ ):

```
ln -s /usr/bin/emacs-xx.y ~/bin/emacs
```

Now to start Emacs, all you have to do is type the following command:

```
emacs
```

## 

[​](https://kb.hosting.com/docs/do-you-support-emacs#more-information)

More information

For more information about Emacs, please visit [https://www.gnu.org/software/emacs](https://www.gnu.org/software/emacs).

Was this page helpful?

YesNo

Ctrl+I