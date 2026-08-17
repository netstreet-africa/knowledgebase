# Source: https://kb.hosting.com/docs/configuring-a-firewall-using-iptables

This article demonstrates how to configure a basic firewall using iptables. Using the iptables program, you can explicitly grant and deny access to selected services running on your server, as well as to selected IP addresses.

**Important**You must have root access to the server to follow the procedures described below.

## 

[​](https://kb.hosting.com/docs/configuring-a-firewall-using-iptables#about-iptables)

About iptables

The iptables program enables you to view and modify the Linux kernel’s built-in network packet filtering capabilities. You can grant or deny access to specific network services (such as SSH, HTTP, and so on), as well as permit or block specific IP addresses from connecting to the server. To do this, you define sets of rules, which are grouped together into_chains_. By default, iptables uses three chains: **INPUT** (for incoming packets), **FORWARD** (for forwarding packets), and **OUTPUT** (for outgoing packets). In this article we will only work with the **INPUT** chain to selectively block and accept incoming packets to the server. The iptables program is included in most major Linux distributions by default, including Debian, Ubuntu, AlmaLinux and Fedora.

## 

[​](https://kb.hosting.com/docs/configuring-a-firewall-using-iptables#adding-rules)

Adding rules

By default, iptables does not have any rules defined. You can verify this yourself on a new server by typing the following command:

```
iptables -L
```

You should see the following output:

```
Chain INPUT (policy ACCEPT)
target     prot opt source               destination

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination
```

As you can see, there are no targets and no destinations defined. So let’s add some basic rules. At the command prompt, type the following commands:

```
iptables -A INPUT -i lo -j ACCEPT
iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT
iptables -A INPUT -p tcp -m tcp --dport 22 -j ACCEPT
iptables -A INPUT -j DROP
```

In all of these commands, the **\-A** option instructs iptables to append the rule to the end of the specified chain (in this case, the **INPUT** chain). Let’s step through each command:

- The first command permits all packets for the local loopback interface. Many programs use the loopback interface, so it is a good idea to accept packets on it.
- The second command uses the **\-m** option to load the state module. This module determines and monitors a packet’s state, which can be **NEW**, **ESTABLISHED**, or **RELATED**. In this rule, we accept incoming packets that belong to a connection that has already been established.
- The third command accepts incoming TCP connections on port 22 (SSH).

 > 🚧 Important Make sure you use the correct SSH port number for your account. For example, some types of hosting accounts use a different port for SSH, such as 7822.

- The last command drops (rejects) incoming packets that do not match any of the preceding rules.

Now if you type the **iptables -L** command, you should see the following output:

```
Chain INPUT (policy ACCEPT)
target     prot opt source               destination         
ACCEPT     all  --  anywhere             anywhere            
ACCEPT     all  --  anywhere             anywhere             state RELATED,ESTABLISHED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:22
DROP       all  --  anywhere             anywhere            

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination
```

To test the configuration, try connecting to the server using SSH. It should allow you to connect. Connections on any other ports, however (such as an HTTP connection on port 80) will be rejected.

## 

[​](https://kb.hosting.com/docs/configuring-a-firewall-using-iptables#inserting-rules)

Inserting rules

The set of rules we defined above is pretty limited. If SSH is the only incoming connection you want to allow, then you’re all set. Most likely, though, you will need to add access to services as you configure your server. However, if we just add a rule using the **\-A** option shown above, it will be the last rule in the chain, right after our **DROP** rule. Because iptables works through rules in sequence, this means that it will never get to the new rule, because the packet will have already been dropped. Therefore, we need a way to insert new rules into the chain. The **\-I** option enables us to insert a new rule anywhere in the chain. Let’s insert a rule that allows incoming TCP connections on port 80 (HTTP). We want the rule to come just before the **DROP** rule, which is currently the fourth rule in the chain:

```
iptables -I INPUT 4 -p tcp -m tcp --dport 80 -j ACCEPT
```

This inserts our HTTP rule in the fourth line, and pushes the **DROP** rule down to the fifth line. Now if you type the **iptables -L** command, you should see the following output:

```
Chain INPUT (policy ACCEPT)
target     prot opt source               destination         
ACCEPT     all  --  anywhere             anywhere            
ACCEPT     all  --  anywhere             anywhere             state RELATED,ESTABLISHED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:22
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:http
DROP       all  --  anywhere             anywhere            

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination         

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination
```

To quickly view the line numbers for all of the rules in a chain, type the following command:

```
iptables -L --line-numbers
```

## 

[​](https://kb.hosting.com/docs/configuring-a-firewall-using-iptables#blocking-an-ip-address)

Blocking an IP address

The rules above define access by service (SSH, HTTP, etc.). However, you can also set rules that permit or block specific IP addresses. For example, suppose you find in your server log files that there are repeated SSH login attempts from a particular IP address. To block all subsequent SSH connections from the IP address, type the following command. Replace _**rulenum**_ with the rule number in the chain, and replace _**xxx.xxx.xxx.xxx**_ with the IP address to block:

```
iptables -I INPUT rulenum -s xxx.xxx.xxx.xxx -p tcp -m tcp --dport 22 -j DROP
```

To block **all** traffic from an IP address regardless of the service requested, type the following command:

```
iptables -I INPUT rulenum -s xxx.xxx.xxx.xxx -j DROP
```

## 

[​](https://kb.hosting.com/docs/configuring-a-firewall-using-iptables#deleting-rules)

Deleting rules

To delete a rule, use the **\-D** option. You need to know the number of the rule you want to delete (just as you must know the number when you insert a rule). The following command demonstrates how to delete the fifth rule from the **INPUT** chain:

```
iptables -D INPUT 5
```

If you want to delete **all** of the rules at once, type the following command:

```
iptables -F
```

## 

[​](https://kb.hosting.com/docs/configuring-a-firewall-using-iptables#saving-rules)

Saving rules

If you reboot the server now, all of the rules you defined will be erased. To maintain rules across system restarts, you must save them. The steps to do this depend on the Linux distribution you are running.

### 

[​](https://kb.hosting.com/docs/configuring-a-firewall-using-iptables#debian-and-ubuntu)

Debian and Ubuntu

To save the iptables rules on a server running Debian or Ubuntu, follow these steps:

1. At the command prompt, type the following command:

    ```
    apt-get install iptables-persistent
    ```

2. During package installation, at the **Save current IPv4 rules?** prompt, press Enter.
3. At the **Save current IPv6 rules?** prompt, press Tab, and then press Enter.

 > 📘 Note Steps 2 to 3 only appear once during initial package installation. If you make any subsequent modifications to iptables rules, type the following command to save them:
 > 
    > ```
    > iptables-save > /etc/iptables/rules.v4
    > ```

### 

[​](https://kb.hosting.com/docs/configuring-a-firewall-using-iptables#almalinux-and-fedora)

AlmaLinux and Fedora

To save the iptables rules on a server running AlmaLinux or Fedora, type the following command:

```
/sbin/service iptables save
```

## 

[​](https://kb.hosting.com/docs/configuring-a-firewall-using-iptables#more-information)

More information

This article is only a brief introduction to some of iptables’ capabilities. For more information about iptables, type the following command at the command prompt:

```
man iptables
```

## 

[​](https://kb.hosting.com/docs/configuring-a-firewall-using-iptables#related-articles)

Related articles

- [Installing and configuring Advanced Policy Firewall](https://kb.hosting.com/docs/installing-and-configuring-advanced-policy-firewall)

Was this page helpful?

YesNo

Ctrl+I