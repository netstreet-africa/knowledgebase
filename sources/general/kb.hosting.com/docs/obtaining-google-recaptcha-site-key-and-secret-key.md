# Source: https://kb.hosting.com/docs/obtaining-google-recaptcha-site-key-and-secret-key

## 

[​](https://kb.hosting.com/docs/obtaining-google-recaptcha-site-key-and-secret-key#about-google-recaptcha)

About Google reCAPTCHA

[Google reCAPTCHA](https://cloud.google.com/security/products/recaptcha) is a popular service providing anti-abuse security to help protect your web site. To integrate Google reCAPTCHA in an application, you register the app or web domain with Google’s reCAPTCHA service. After the domain is registered, Google provides reCAPTCHA keys. There are two keys, the **Site Key** and the **Secret Key**. The Site Key and the Secret Key are also sometimes called the public and private key, respectively. The Site Key is used to render the reCAPTCHA within a page, and the Secret Key is used for server-side validation. The keys are unique to the domain for which they are registered.

## 

[​](https://kb.hosting.com/docs/obtaining-google-recaptcha-site-key-and-secret-key#how-to-generate-google-recaptcha-keys)

How to generate Google reCAPTCHA keys

To generate the reCAPTCHA keys, follow these steps:

1. If you are not already signed in to your Google account, do so now.
2. Use your web browser to go to [Google’s reCAPTCHA site](https://cloud.google.com/security/products/recaptcha).
3. Click **Get Started**: ![](https://files.readme.io/0c44aa171105da87e006f296888e57ba752b6fa64285a5bb29bfd55897014e17-image.png)
4. On the **Register a new site** page, specify the following information:
 1. **Label:** Create a label for the site keys.
 2. **reCAPTCHA type:** Choose to verify requests with a score or a challenge.
 3. **Domains:** Specify the domain where you will use these keys, such as _example.com_.
5. Click **SUBMIT**. After a few seconds, the Site Key and Secret Key appear: ![](https://files.readme.io/2dc9f9de9ff5f119bedc98f738393f47fc94c27c9d3c29afa3cba5552d3b4850-image.png)

Was this page helpful?

YesNo

Ctrl+I