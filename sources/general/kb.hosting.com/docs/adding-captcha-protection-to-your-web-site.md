# Source: https://kb.hosting.com/docs/adding-captcha-protection-to-your-web-site

This article describes what CAPTCHA protection is, when you might use it, and some implementations for various programming languages that you can add to your own web site.

## 

[​](https://kb.hosting.com/docs/adding-captcha-protection-to-your-web-site#what-is-a-captcha)

What is a CAPTCHA?

A CAPTCHA (**C**ompletely **A**utomated **P**ublic **T**uring test to tell **C**omputers and **H**umans **A**part) is a test that tries to determine if a user is a human or a computer. The most common type of CAPTCHA is an image of obscured letters or numbers displayed in a box. A user must type the letter or number sequence correctly before he or she can access web site content or submit data. Because automated bots usually cannot read these images, they are prevented from misusing a web site’s resources. The following image is an example of a common type of CAPTCHA: 
![Example CAPTCHA image](https://static.hosting.com/kb/kb-captcha-example.png)

## 

[​](https://kb.hosting.com/docs/adding-captcha-protection-to-your-web-site#when-to-use-captcha-protection)

When to use CAPTCHA protection

You should consider adding CAPTCHA protection to your web site if it has any of the following:

- Forms that process user-submitted data, including e-mail forms, comment forms, and registration forms.
- Surveys or polls.
- Pages that accept file uploads or downloads by users.
- Any other pages that accept user-submitted data.

## 

[​](https://kb.hosting.com/docs/adding-captcha-protection-to-your-web-site#captcha-implementations)

CAPTCHA implementations

There are several free and open source CAPTCHA implementations available, depending on the programming language that your web site uses.

### 

[​](https://kb.hosting.com/docs/adding-captcha-protection-to-your-web-site#php)

PHP

These are some of the numerous CAPTCHA implementations available for PHP:

- The Securimage script enables you to easily add PHP-based CAPTCHAs to a web site. For more information, please visit [http://www.phpcaptcha.org](http://www.phpcaptcha.org).
- The captchas.net service provides CAPTCHA implementations for several languages, including PHP. For more information, please visit [http://captchas.net/sample/php](http://captchas.net/sample/php).
- Google provides the reCAPTCHA service. For general information about reCAPTCHA, please visit [http://www.google.com/recaptcha](https://www.google.com/recaptcha). For specific information about implementing reCAPTCHA with PHP, please visit [https://developers.google.com/recaptcha/intro](https://developers.google.com/recaptcha/intro).
- If you are a programmer and would like to write your own CAPTCHA implementation, you can use the Text\_CAPTCHA PEAR package in PHP. For more information, please visit [http://pear.php.net/package/Text\_CAPTCHA](http://pear.php.net/package/Text_CAPTCHA).

### 

[​](https://kb.hosting.com/docs/adding-captcha-protection-to-your-web-site#python)

Python

The captchas.net service listed above for PHP also has a Python implementation. For more information, please visit [http://captchas.net/sample/python](http://captchas.net/sample/python).

## 

[​](https://kb.hosting.com/docs/adding-captcha-protection-to-your-web-site#more-information)

More information

For more information about CAPTCHAs, please visit [http://en.wikipedia.org/wiki/CAPTCHA](https://en.wikipedia.org/wiki/CAPTCHA).

## 

[​](https://kb.hosting.com/docs/adding-captcha-protection-to-your-web-site#related-articles)

Related articles

- [Adding CAPTCHA protection to a WordPress site](https://kb.hosting.com/docs/adding-captcha-protection-to-a-wordpress-site)
- [Adding CAPTCHA protection to an Elgg site](https://kb.hosting.com/docs/adding-captcha-protection-to-an-elgg-site)

Was this page helpful?

YesNo

Ctrl+I