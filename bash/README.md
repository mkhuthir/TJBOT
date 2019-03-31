## Bash Scripts to test Watson Services

This folder contains bash scripts that are using **curl** to call Watson APIs as explained on Watson getting started pages.

Test whether **curl** is installed. Run the following command on the command line. 

```bash
curl -V
```

If the output lists the curl version with SSL support, you are all set otherwise install it.

```bash
sudo apt install curl
```
To run a script, 
* change to the folder where you have the scripts:
```bash
cd ~/TJBOT/bash
```
* type **./** followed by the name of script file then space then your api-key for the related service

```bash
./stt.sh 0123457c133714df1834b8638bb496e-8f4b3d9a-e931-478d-a994
```

Please note the following:

* api-key is the only parameter that you need to pass to the script
* script output will text in json or a file that will be written to a subfolder
* scripts are modified version from what is given by Watson getting started to make it easier to understand
* service URLs are embedded inside the script, you might need to change it if you are using different service version
* you can get more details/help/examples on Watson Portal.
