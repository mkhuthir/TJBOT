## Bash Scripts to test Watson Services

This folder contains bash scripts that are using **curl** to call watson APIs as explained on Watson getting started pages.

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
