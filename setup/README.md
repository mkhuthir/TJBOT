# TJBot Setup

## Automated Setup using IBM Bootstrap script

**This is the preferred method for setting up your Raspberry Pi for TJBot.**

```bash
curl -sL http://ibm.biz/tjbot-bootstrap | sudo sh -
```

> Note that this script requires root access and must be run with `sudo`.


## Manual Setup

#### Change host name if you wish:

```bash
hostname <enter your hostname here>
```

> The default hostname is `raspberrypi`.


#### _Optional_ Disable ipv6. In some networking environments, disabling ipv6 may help your Pi get on the network.

```
echo " ipv6.disable=1" | sudo tee -a /boot/cmdline.txt
```

> It is safe to skip this step. We only recommend doing this step if necessary.

#### _Optional_. Enable Quad9 DNS. In some networking environments, using Quad9's nameservers may speed up DNS queries and provide extra security and privacy..

```
echo "nameserver 9.9.9.9" | sudo tee -a /etc/resolv.conf
echo "nameserver 149.112.112.112" | sudo tee -a /etc/resolv.conf
```

> It is safe to skip this step. We only recommend doing this step if necessary.

#### _Optional_. Set the locale to US English (en-US). You can use `raspi-config` to set the locale of your Raspberry Pi, but if you would like to force it to US English, you can run these commands.

```
export LC_ALL="en_US.UTF-8"
echo "en_US.UTF-8 UTF-8" | sudo tee -a /etc/locale.gen
sudo locale-gen en_US.UTF-8
```

> It is safe to skip this step. We only recommend doing this step if necessary.

#### Update your Raspberry Pi's operating system software.

```
sudo apt-get update
sudo apt-get -y dist-upgrade
```

> You’ll need to do `apt-get update` first because that updates the repository cache. Otherwise, `apt-get dist-upgrade` won't do anything because it doesn't know there is a distribution upgrade.

> During the upgrade, if you are asked about replacing the `lightdm.conf` file with the package maintainers version, say "Y".

#### Install Node.js.

Install Node.js 9 for Raspian (Stretch)

```bash
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sudo apt-get install -y nodejs
```


#### Install additional software packages (Jessie only).

```bash
sudo apt-get install -y alsa-base alsa-utils libasound2-dev git pigpio
```

#### _Optional_. Remove outdated software packages.

```bash
sudo apt-get -y autoremove
```

> This step removes old, outdated software from your Raspberry Pi and will free up some storage space. It is safe to skip this step.

#### _Optional_. Enable the Raspberry Pi camera.

If your Raspberry Pi has a camera, you can enable it by running the `raspi-config` command and navigating through the menus.

```bash
sudo raspi-config
```

> choose option 5: Interfacing Options
> choose option P1: Camera
> select Yes and press Enter
> select OK and press Enter
> press tab to navigate to the Select button
> press the right arrow key to navigate to the Exit button
> press Enter

If your Raspberry Pi doesn't have a camera, it is safe to skip this step.


### _Optional_. Disable the audio kernel modules.

In order for the LED to work, we need to disable certain kernel modules to avoid a conflict with the built-in audio jack. If you have plugged in a speaker via HDMI, USB, or Bluetooth, this is a safe operation and you will be able to play sound and use the LED at the same time. If you plan to use the built-in audio jack, we recommend **NOT** disabling the sound kernel modules.

If you are interested in playing audio over USB, we recommend purchasing a [USB sound card](https://www.amazon.com/Virtual-Channel-Audio-Adapter-Notebook/dp/B00M3UWE3Q/)).

```
sudo cp ~/Desktop/tjbot/setup/tjbot-blacklist-snd.conf /etc/modprobe.d/
```

> This command assumes you have cloned the tjbot git repository to your Desktop. If you have cloned it to a different directory, be sure to update the path in the above command.

If you would like to re-enable the kernel modules for built-in audio, you can do so with the following command.

```bash
sudo rm /etc/modprobe.d/tjbot-blacklist-snd.conf
```

> Note: you will need to reboot for these changes to take effect.

#### Reboot your Raspberry Pi.

Congratulations, your Raspberry Pi is now set up for TJBot!  You'll just need to reboot to have all these changes take effect. After your Pi restarts, try running your first recipe!

```bash
sudo reboot
```

## Notice about Watson credentials

Before running any recipes, you will need to obtain credentials for the Watson services used by those recipes. You can obtain these credentials as follows:

1. Sign up for a free IBM Bluemix account at https://bluemix.net if you do not have one already.
2. Log in to Bluemix and create an instance of the Watson services you plan to use. The Watson services are listed on the Bluemix dashboard, under "Catalog". The full list of Watson services used by TJBot are: Conversation (renamed to Assistant), Language Translator, Speech to Text, Text to Speech, Tone Analyzer, and Visual Recognition.
3. For each Watson service, click the "Create" button on the bottom right of the page to create an instance of the service.
4. Click "Service Credentials" in the left-hand sidebar. Next, click "View Credentials" under the Actions menu.
5. Make note of the credentials for each Watson service. You will need to save these in the `config.js` files for each recipe you wish to run.

For more detailed guides on setting up service credentials, please see the README file of each recipe, or search [Instructables](http://instructables.com) for "tjbot".

