
## Running hardware tests

Hardware tests are included with bootstrap to ensure the TJBot hardware is set up correctly. Tests are included for the `camera`, `led`, `servo`, and `speaker` in the `tjbot/bootstrap/tests` folder.

### Install dependencies

Install the dependencies for the hardware tests.

```
npm install ~/Desktop/tjbot/tests
```

> This command assumes you have cloned the tjbot git repository to your Desktop. If you have cloned it to a different directory, be sure to update the path in the above command.

### Running all the tests

Use the `test.sh` script to run all of the hardware tests.

```
cd ~/Desktop/tjbot/bootstrap
./runTests.sh
```

> This command assumes you have cloned the tjbot git repository to your Desktop. If you have cloned it to a different directory, be sure to update the path in the above command.

> Note that this script uses `sudo` internally to run each individual test.

Each test is interactive and will ask you whether or not TJBot performed a certain action. If you say "N", the test will fail.



### Running specific tests

If you need to test a specific hardware component, you can run each individual test script separately.

```
cd ~/Desktop/tjbot/bootstrap/tests
sudo node test.camera.js
sudo node test.led.js
sudo node test.servo.js
sudo node test.speaker.js
```

> This command assumes you have cloned the tjbot git repository to your Desktop. If you have cloned it to a different directory, be sure to update the path in the above command.
