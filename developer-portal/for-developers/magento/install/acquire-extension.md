---
title: "Fast Magento Docs: Acquiring Fast Module"
description: Acquiring the Fast Module for Magento
keywords: Fast Magento extension, Fast Magneto Module, Fast Magento install
---

# Install Step 1: Acquiring the Fast Module for Magento

The latest version of the Fast Module for Magento is publicly available via Composer or from [Fast's Magento Module GitHub repo](https://github.com/fast-af/magento2).



## Install with Composer


Using [Composer](https://getcomposer.org/) navigate to your Magento webroot and **issue the following commands**:

```bash
composer require fast-af/module-checkout
php bin/magento module:enable Fast_Checkout
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy
```

## Install with GitHub

Though Composer is encouraged for managing Magento modules, if you don't have access to Composer or otherwise have issues with Composer during module installation you can use the module code available on GitHub.

* Download the Fast Module for Magento from our GitHub repo as a ZIP Archive.
  * [Direct Download Link for ZIP](https://github.com/fast-af/magento2/archive/refs/heads/master.zip)
* If it does not already exist, create the `app/code/Fast/Checkout` folder (for standard Magento installations this will be in `/var/www/html/magento2/app/code/Fast/Checkout`).
* Extract the files from the ZIP archive to the `app/code/Fast/Checkout` folder.
* navigate to your Magento webroot and **issue the following commands**:

```bash
php bin/magento module:enable Fast_Checkout
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy
```
