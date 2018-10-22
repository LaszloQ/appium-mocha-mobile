# Setup
## Tools needed to be installed
* [NodeJS](https://nodejs.org/en/download/current/)
* For Mac: 
  * To install homebrew, enter the following line in the terminal  
  ```javascript 
  /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  ```
* For running tests on iOS simulators:
  * [Carthage](https://github.com/Carthage/Carthage)
  * [Xcode](https://developer.apple.com/xcode/)
* For running tests on Android emulators:
  *  [Android Studio](https://developer.android.com/studio/)
* [Appium](https://github.com/appium/appium-desktop/releases)
* [Appium doctor](https://github.com/appium/appium-doctor)
* Platform specific drivers
  * XCUIT
  * Espresso
* [Webdriverio](https://www.npmjs.com/package/webdriverio)
* [Mocha](https://www.npmjs.com/package/mocha)
### Steps
* Install
* Adding environment variables
  * on MacOS
    * Run `vi ~/.bash_profile` in the terminal
    * Add ANDROID_HOME to environment variable
    ```javascript
    export ANDROID_HOME=/Users/laszlokiss/Library/Android/sdk
    export PATH=$ANDROID_HOME/platform-tools:$PATH
    export PATH=$ANDROID_HOME/tools:$PATH
    ```
    * Add JAVA_HOME to enviroment variable
    ```javascript
    export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-9.0.4.jdk/Contents/Home
    export PATH=$JAVA_HOME/bin:$PATH
    ```
    * Save the file ( _Ctrl + X_ & _Enter_ )
* dependencies
### Write a test
* Define the required capabilities
```javascript
  //desiredCapabilities.js
  
  exports.options = {
    desiredCapabilities: {
     platformName: "Android",
     platformVersion: "8.0",
     app: "/Users/laszlokiss/Desktop/Apps/app-brand_mssngr-debug.apk",
     deviceName: "Pixel 2 XL"
    },
    host: "localhost",
    port: 4723
  };
```
* Define the client
  * importing necessary components
  ```javascript
  const webdriverio = require( "webdriverio" );
  const config = require( "../../helpers/desiredCapabilities-android" ).options;
  ```
  * configuring the client
  ```javascript
    const client = webdriverio.remote( config );
  ```
* How to start the Appium inspector
  * Start an emulator
  * Open Appium
  * Set the dependencies
  * Start server
  * Open the Appium inspector
* How to define Selectors
  * By accessibility ID
  * By xpath
  * By CSS selector?
* Hooks ( client init / end )
  * before
    ```javascript
      before( function( ) {
        return client.init( );
      });
    ```
  * after
  ```javascript
     after( function( ) {
      return client.end( );
     });
  ```
* Tests
### Run a test
 * npm run mocha
