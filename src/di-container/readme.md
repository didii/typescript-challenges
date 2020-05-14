## Challenge: Dependency Injection container

Try to make a Dependency Injection Container.
Use the file `di-container.ts` for your own implementation.

### Requirements

* <input type="checkbox"> The method register accepts a plain type
* <input type="checkbox"> The method resolve resolves any registered service to a concrete type
* <input type="checkbox"> Refrain from using a symbol or plain string as identifier
* <input type="checkbox"> (Optional) Allow resolves using a factory function
* <input type="checkbox"> (Optional) Allow resolves using a given value
* <input type="checkbox"> (Optional) Allow resolves using another/substitute type

### Notes

* You can test the code using the `describe`/`it` methods, run `npm start test` to start testing
* There are simple test services defined for you in `./services.ts`
* Don't forget to set the variable `TEST` to `true` if you want to validate your implementation against the requirements