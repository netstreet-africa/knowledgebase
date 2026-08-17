# Source: https://kb.hosting.com/docs/how-to-reset-the-root-password-for-your-self-managed-server

# 

[​](https://kb.hosting.com/docs/how-to-reset-the-root-password-for-your-self-managed-server#step-1-access-the-server-console-vnc)

Step 1: Access the Server Console (VNC)

1. Log in to [https://my.hosting.com/](https://my.hosting.com/)

2. Go to Products and Services -> Hosting and Services

![](https://files.readme.io/3e28239fe62fec8e90391895567ef5b9630441c4d4b7547e325a3ee3e1630356-image.png) 

3. Click on **Manage**

![](https://files.readme.io/9692668e5ce3fff5870bd7d5405fd1dc70a4572f3815e7c4247dceb56e4cedd5-image.png)

4. Click the **Login** button

![](https://files.readme.io/55d00ffebbff44f60f50f411b810a9f8195e14b41b03dc23f87919d3f9957228-image.png) Now you are in your Console ![](https://files.readme.io/da4c07e5d51d0d2e6c08c151dfbf8f798d4cefbe0c5c0afc015fa44cb094cbbe-image.png)

# 

[​](https://kb.hosting.com/docs/how-to-reset-the-root-password-for-your-self-managed-server#step-2-boot-into-grub-menu)

Step 2: Boot into GRUB Menu

1. Reboot the system.

![](https://files.readme.io/583f5a44cb919c0b095d3117db7a82fb858a6a59ce237646582bc084a53cbdd2-image.png) 

2. When the GRUB menu appears, select the default kernel entry. You should navigate with the arrows

![](https://files.readme.io/7d057ecfa56a892ca0abc213606e59115ac26efaf80c0edcd66d37e46decdeda-image.png) 

3. Press `e` to edit the boot parameters.

# 

[​](https://kb.hosting.com/docs/how-to-reset-the-root-password-for-your-self-managed-server#step-3-modify-kernel-boot-parameters)

Step 3: Modify Kernel Boot Parameters

1. Locate the line starting with linux or linuxefi.
2. At the end of that line, add:

```
rd.break
```

![](https://files.readme.io/cce741a7ad9f166364e00f60e629302ca7c14e33f3eb2105a99e8086755ee1b5-image.png)

3. Press Ctrl + X (or F10) to boot with the modified parameters.

# 

[​](https://kb.hosting.com/docs/how-to-reset-the-root-password-for-your-self-managed-server#step-4-enter-emergency-mode-shell)

Step 4: Enter Emergency Mode Shell

After booting, the system will drop into an emergency shell with a prompt similar to:

```
switch_root:/#
```

# 

[​](https://kb.hosting.com/docs/how-to-reset-the-root-password-for-your-self-managed-server#step-5-remount-the-system-as-writable)

Step 5: Remount the System as Writable

```
mount -o remount,rw /sysroot
```

# 

[​](https://kb.hosting.com/docs/how-to-reset-the-root-password-for-your-self-managed-server#step-6-chroot-into-the-installed-system)

Step 6: Chroot into the Installed System

Switch into the actual system environment:

```
chroot /sysroot
```

# 

[​](https://kb.hosting.com/docs/how-to-reset-the-root-password-for-your-self-managed-server#step-7-reset-the-root-password)

Step 7: Reset the Root Password

Run the password utility:

```
passwd root
```

- Enter a new password when prompted.
- Confirm the new password.

# 

[​](https://kb.hosting.com/docs/how-to-reset-the-root-password-for-your-self-managed-server#step-8-enable-selinux-relabeling)

Step 8: Enable SELinux Relabeling

This step should be performed only if you are using AlmaLinux

To ensure proper SELinux context restoration, create the autorelabel file:

```
touch /.autorelabel
```

# 

[​](https://kb.hosting.com/docs/how-to-reset-the-root-password-for-your-self-managed-server#step-9-exit-and-reboot)

Step 9: Exit and Reboot

Exit the chroot environment and reboot the system:

```
exit
exit
```

Was this page helpful?

YesNo

Ctrl+I