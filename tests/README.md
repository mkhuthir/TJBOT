
# Testing TJBOT

## Running hardware tests

Hardware tests are included to ensure the TJBot hardware is set up correctly. Tests are included for the `camera`, `led`, `servo`, and `speaker`. For speaker there are two additonal tests specfic for Bluetooth type.

### Install dependencies

Install the dependencies for the hardware tests.

```bash
npm install ~/TJBOT/tests
```

> This command assumes you have cloned the TJBOT git repository to your home folder. If you have cloned it to a different directory, be sure to update the path in the above command.

### Running all the tests

Use the `test.sh` script to run all of the hardware tests.

```bash
cd ~/TJBOT/tests
./test_All.sh
```
> Note that this script uses `sudo` internally to run each individual test.

Each test is interactive and will ask you whether or not TJBot performed a certain action. If you say "N", the test will fail.


### Running specific tests

If you need to test a specific hardware component, you can run each individual test script separately.

```bash
cd ~/TJBOT/tests
sudo ./test.camera.js
sudo ./test.led.js
sudo ./test.servo.js
sudo ./test.speaker.js
sudo ./test.BT.speaker.js
sudo ./test.BT.speaker.sh
```
