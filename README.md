# TypeScript challenges

This is a simple collection of some relatively exotic usages of TypeScripts stupidly powerful typing system.
It is designed to show the power of TypeScript.
Whether this power is a good or bad thing, is up to you to decide.

If you do plan to make use of the most complex parts of its type system, please only do such that you can reduce the complexity to any client of your code.
That is probably the only valid use-case for any exotic usage of this typing system.

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

## Challenges

These challenges are sort-of ordered from easy to hard.
Your experience might vary, depending on your knowledge of Java- and TypeScript.
Click the title to navigate to the relevant readme.

### [Typed SimpleChanges](./src/simple-changes/readme.md)

Make Angulars `SimpleChanges` type, that `ngOnChanges` accept, properly typed.

### [Simple Dependency Injection container](src/di-container/readme.md)

Create a simple DI container that can resolve classes without dependencies by its own type, a different type, a factory function or plain value.
