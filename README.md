# Setup
## Tools needed to be installed
* Node
* Homebrew
* Carthage
* Appium
* Appium doctor
* Platform specific drivers
* Webdriverio
* Mocha
* Xcode
* Android SDK
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
