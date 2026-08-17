# Source: https://kb.hosting.com/docs/openclaw-guide

# 

[​](https://kb.hosting.com/docs/openclaw-guide#installing-and-configuring-openclaw)

Installing and Configuring OpenClaw

Installing OpenClaw requires initial preparation on the Self-Managed VPS:

- NodeJS
- Homebrew
- Separate use for OpenClaw
- OpenClaw

Optionally, if you intend to expose the AI Agent to the public, you would also require a Web Service installed, such as:

- Nginx
- Caddy
- Traefik

Once your Self Managed VPS has been provisioned, you will be provided with root credentials in the Product notes. This is located on the Product listing in the Client Area, Products -> VPS in question -> Product notes. Connecting to the server can be done via Putty for Windows or directly in your terminal if on Linux/mac. Once connected, in order to setup OpenClaw, it is advisable to start with Homebrew, as some setup steps with Openclaw will require it. To install homebrew simply run:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After installing Homebrew, it is advisable to create a separate user for OpenClaw to use, instead of root. Simply run the following 2 lines:

```
adduser openclaw
usermod -aG sudo openclaw
```

Once Homebrew and the additional user are ready, you can start with the OpenClaw download and then directly run it with:

```
su - openclaw
curl -fsSL https://openclaw.ai/install.sh | bash
```

The installation script will check for minimum requirements and then proceed with installing NodeJS, unless you have installed it prior to starting the install script.

Note 

Please note that, if the AI agent is installed via root user, it can have access to its own environment and even core files of the server.Doing a bad prompt can trick the bot into doing unsafe things on the server.

Once the installation of OpenClaw is complete, you can use the arrow keys to navigate the various options the onboarding process will ask and show. After agreeing to the security notice, you will be presented with 2 initial setup options:

- QuickStart (recommended) (Recommended local setup. Change details later with openclaw configure.)
- Manual setup (Choose Gateway port, network exposure, Tailscale, and auth.)

![Image](https://mintcdn.com/hosting-9143814e/f7CLm_FJLyCE7yw4/images/image-16.png?fit=max&auto=format&n=f7CLm_FJLyCE7yw4&q=85&s=d3a1b9b719b256f532d0ef2f46f74a9e)

When choosing Quick start, the installation will list Gateway information such as Port, bind and what type of token its going to be used.

![Image](https://mintcdn.com/hosting-9143814e/f7CLm_FJLyCE7yw4/images/image-17.png?fit=max&auto=format&n=f7CLm_FJLyCE7yw4&q=85&s=dff035a8a19ee8f6cb5fa4f0a297afee)

You will be presented with the most common AI model providers. For this guide, we will be using Google/Gemini:

- OpenAI (ChatGPT/Codex sign-in or API key)
- Anthropic (Claude CLI + API key)
- xAI (Grok) (API key or browser OAuth)
- Google (Gemini API key + OAuth)
- OpenRouter (OAuth or API key)

![Image](https://mintcdn.com/hosting-9143814e/brJqvCXKudL8CM2U/images/image-2.png?fit=max&auto=format&n=brJqvCXKudL8CM2U&q=85&s=a00b367c2d0636950a3309540e6edb00)

Alternatively, if the model you intend to use is not listed, you can use “More…”, which will lest every AI model.

![Image](https://mintcdn.com/hosting-9143814e/brJqvCXKudL8CM2U/images/image-3.png?fit=max&auto=format&n=brJqvCXKudL8CM2U&q=85&s=5b620e03c4b7c40b3752aaecb2c7b668)

Once you have chosen your model, the onboarding with ask either for OAUTH or API token to be provided.

![Image](https://mintcdn.com/hosting-9143814e/tS54NjJqxQGjeS_j/images/image-5.png?fit=max&auto=format&n=tS54NjJqxQGjeS_j&q=85&s=60921476a55366a721c312c3729df562)

Choosing API key will prompt for the API created here: [https://aistudio.google.com/app/api-keys](https://aistudio.google.com/app/api-keys) When the Token is provided, the onboarding will show a default model that can be used, alternatively you can enter a model name manually or enter the model name manually.

![Image](https://mintcdn.com/hosting-9143814e/tS54NjJqxQGjeS_j/images/image-6.png?fit=max&auto=format&n=tS54NjJqxQGjeS_j&q=85&s=83e2f75c8cd181eaef4b78638d5f01fd)

NotePlease note that even after onboarding is complete and there are issues with connecting with the desired model, you can use the following CLI command to list the available models and the subsequent command to set the model, without the need to go through the onboarding process again:`openclaw models list --provider [PROVIDER]` Example:`openclaw models list --provider google openclaw models set [MODEL NAME]` Example:`openclaw models set google/gemini-2.5-flash`

Next, you will have to choose how you would like to communicate with your AI Agent.

![Image](https://mintcdn.com/hosting-9143814e/tS54NjJqxQGjeS_j/images/image-7.png?fit=max&auto=format&n=tS54NjJqxQGjeS_j&q=85&s=986297abbc4843206f6ec1612a2b5b5c)

This is personal preference. You can always set this later via “openclaw channels add”. This is shown if you choose “Skip for now”. When skipped, you can still communicate with the AI Agent via SSH commands when typing “openclaw” and then “talk to agent” to switch from “crestodian” mode to the AI Agent. Next, you will have to set up which web search engine the AI agent should use.

![Image](https://mintcdn.com/hosting-9143814e/tS54NjJqxQGjeS_j/images/image-8.png?fit=max&auto=format&n=tS54NjJqxQGjeS_j&q=85&s=ae13c12547dbeeacacc607f572e8ae0b)

This is again personal preference, which can be setup later if “Skip for now” is chosen with:

```
openclaw configure --section web
```

In the case of our example of using Gemini, the API key had to be verified after choosing the Web Search engine Google. Next, you will have to configure additional skills. This is where Homebrew will be used by the onboarding to install any missing skills. Skills essentially allow you to customize how memory, speed, and searchability work for your AI agent. It does grow over time on its own. You can proceed with “Yes” on the configuring skills, and this will list additional skills that can be enabled for the AI Agent.

![Image](https://mintcdn.com/hosting-9143814e/tS54NjJqxQGjeS_j/images/image-9.png?fit=max&auto=format&n=tS54NjJqxQGjeS_j&q=85&s=290a107435ed6d65c2278c14d1939050)

NotePlease note that the screenshot above lists available skills for Gemini, so depending on the AI Model you are using, it will list different compatible skills.

You can use SPACE to mark the skills you want to add. On the next prompt, depending on the requirements of the desired skills, additional API keys will be requested from the relevant providers.

![Image](https://mintcdn.com/hosting-9143814e/tS54NjJqxQGjeS_j/images/image-10.png?fit=max&auto=format&n=tS54NjJqxQGjeS_j&q=85&s=111f7d596e491928ab6ea4e5f2d01bca)

In the next step in the onboarding process, you will be presented with various hooks you can use. These can still be dependent on the AI model, but it helps solidify how the AI agent acts with memory or in case the server has been rebooted.

![Image](https://mintcdn.com/hosting-9143814e/tS54NjJqxQGjeS_j/images/image-11.png?fit=max&auto=format&n=tS54NjJqxQGjeS_j&q=85&s=5136b862dcd0973938113efefd6f1886)

At this stage, the installation and onboarding are being finalized, with which you will be presented with various information such as: **ControlUI** This is a localhost only. If you want to expose the ControlUI to the public, you will have to install a web service and a domain name ( See below for Nginx installation steps and setting up your domain)

![Image](https://mintcdn.com/hosting-9143814e/tS54NjJqxQGjeS_j/images/image-12.png?fit=max&auto=format&n=tS54NjJqxQGjeS_j&q=85&s=0d026103e9174f7b78d97b3179bdff87)

You can change how the agent introduces itself This can be changed either manually via editing the BOOTSTRAP.md file or interacting with the AI Agent

![Image](https://mintcdn.com/hosting-9143814e/tS54NjJqxQGjeS_j/images/image-14.png?fit=max&auto=format&n=tS54NjJqxQGjeS_j&q=85&s=ac19ee2e0581b523e878e15ec6a4e726)

Main installation and onboarding are complete. You can interact right away with the agent by either using “openclaw” or the onboarding will leave you with the initial message.

![Image](https://mintcdn.com/hosting-9143814e/tS54NjJqxQGjeS_j/images/image-15.png?fit=max&auto=format&n=tS54NjJqxQGjeS_j&q=85&s=3f3208771f5655dc57b5b569c27a32b3)

The AI agent will provide a response and also a status bellow to show current status such as tokens used and which model is being used.

# 

[​](https://kb.hosting.com/docs/openclaw-guide#opening-the-controlui-to-the-public)

Opening the ControlUI to the public

To open the ControlUI to the public, which is currently set up for localhost only, you will have to start by installing Nginx Reverse Proxy with SSL for OpenClaw. The following steps are for Ubuntu 24.04:

## 

[​](https://kb.hosting.com/docs/openclaw-guide#1-install-nginx-certbot)

1\. Install Nginx, Certbot

```
sudo apt install -y nginx certbot python3-certbot-nginx
```

## 

[​](https://kb.hosting.com/docs/openclaw-guide#create-nginx-config)

Create Nginx config

```
nano /etc/nginx/sites-available/openclaw
```

Paste the following block:

```
server {
    listen 80;
    server_name your-domain.com;

  location / {
      proxy_pass http://127.0.0.1:18789;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection "upgrade";
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Proto $scheme; proxy_read_timeout 86400;
  }
}
```

Make sure the proxy\_pass matches the one provided during the OpenClaw onboarding if the port is different. Save and exit the text editor (CTRL + C -> Y -> hit Enter) Follow the next prompts one after the other:

```
ln -s /etc/nginx/sites-available/openclaw /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

## 

[​](https://kb.hosting.com/docs/openclaw-guide#3-open-firewall-ports)

3\. Open Firewall ports

```
ufw allow 80/tcp
ufw allow 443/tcp
ufw allow 22/tcp
ufw allow from [YOUR IP]
ufw enable
```

Make sure to allow both 22 port and to allow your own IP, to ensure access is allowed from your side once the firewall is enabled.

## 

[​](https://kb.hosting.com/docs/openclaw-guide#4-setting-up-ssl)

4\. Setting up SSL

```
bashcertbot --nginx -d your-domain.com
```

Certbot will auto-update Nginx config and will setup auto-renewal with Let’s Encrypt Free SSL. Make sure to replace “your-domain.com” with your actual domain.

## 

[​](https://kb.hosting.com/docs/openclaw-guide#5-configurate-openclaw)

5\. Configurate OpenClaw

You will have to locate the openclaw config file. This can easily be done by doing: `openclaw config file` In our case the path is: `~/.openclaw/openclaw.json` `nano ~/.openclaw/openclaw.json` Under “Gateway” section, locate “mode” section and add the following: `"trustedProxies": ["127.0.0.1"],` And then under “ControlUi” section:

```
"controlUi": {

   "allowInsecureAuth": true,

   "allowedOrigins": [

"https://your-domain.com"

  ]

}
```

Make sure to save the file when exiting.

## 

[​](https://kb.hosting.com/docs/openclaw-guide#6-restart-the-gateway)

6\. Restart the gateway

```
openclaw gateway stop
openclaw gateway start
```

## 

[​](https://kb.hosting.com/docs/openclaw-guide#7-open-the-controlui)

7\. Open the ControlUI

Open:

```
https://your-domain.com/#token=[YOUR_TOKEN_FROM_CONFIG]
```

The token in question can be located from the same OpenCLAW config file `(~/.openclaw/openclaw.json)` in the “Gateway” section. You can easily grep for it with the following pattern:

```
grep -o '"token": "[^"]*"' ~/.openclaw/openclaw.json
```

## 

[​](https://kb.hosting.com/docs/openclaw-guide#8-allowing-your-device)

8\. Allowing your device

On first-time opening the ControlUI page, you will be prompted to pair your device with the agent. On the server, you get the current pending devices with:

```
openclaw devices list
```

Copy the request ID and use the following to approve:

```
openclaw devices approve [request-id]
```

In case you want to skip the device approval, simply run this:

```
openclaw config set gateway.controlUi.dangerouslyDisableDeviceAuth tru
```

NotePlease note that this can cause anyone who finds your domain or AI agent page to use it without authentication. Use at your own risk.

InformationFor more information on OpenClaw and how you can customize it, you can check out OpenClaw’s documentation here:[https://docs.openclaw.ai/](https://docs.openclaw.ai/)

Was this page helpful?

YesNo

Ctrl+I