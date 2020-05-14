# TypeScript challenges

## Setup

Execute the following commands:

```
npm install
npm run test
```

A Chome window should pop up telling you that no test specs were found.
If you are ready, go to any subfolder of `src` and read the `readme.md` there for instructions. The challenge [simple-changes](./src/simple-changes/readme.md) is a good start.

## Tools

If you use Visual Studio Code, I added a launch profile that can attach to the test window that Karma starts.
Click on the big *Debug* button, and then F5 in VSCode.
It should then be attached to the window.
Then use the refresh button in VSCode itself to execute all tests again.

Note that refreshing the Chrome window manually might result VSCode losing connection without telling you.
If you have a breakpoint that is not hit when it should be run, disconnect and reconnect VSCode.

If VSCode does not want to connect, you most likely forgot to open the debug window. Otherwise, you'll have to debug in Chrome itself.