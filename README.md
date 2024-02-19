## init project

yarn install (or npm install)
cd ios/ && pod install

## how to run

Run with following command
npx react-native run-ios
And it somehow calls the other console as well…select “i” for iOS

## How to run Android app on Windows 11

To run the app on Android, you need to install Android Studio and set up the environment.
Here are the steps to set up the environment.

1. [Install Android Studio, and add environment variables for SDK and Platform tools](https://reactnative.dev/docs/environment-setup?guide=native).
   - Use the Android 13 (Tiramisu) emulator.
2. Install JDK 11, since it only works with JDK 11.
   - For switching the default JDK version, please see the [StackOverFlow post](https://stackoverflow.com/questions/54422632/default-java-on-windows-machine).
3. `yarn install` all dependencies and do not update them.
4. `yarn react-native run-android` to open the emulator and the JS server. Two command lines will be opened. If it doesn't, kill the command line tools and re-run the command.
   - When receiving the error `Execution failed for task ':app:installDebug'`, keep the command lines open, and run `yarn react-native run-android` again.
