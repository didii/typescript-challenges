## Challenge: Typed SimpleChanges

Make a typed implementation of the `SimpleChanges` of Angular (located in `@angular/core`).

### Requirements

* <input type="checkbox"> The type `SimpleChanges<T>` should list all properties of `T` (check using intellisense)
* <input type="checkbox"> The type of such a property is a typed variant of `SimpleChange` (note the lack of a trailing `s`)
* <input type="checkbox"> This type should have `currentValue` and `previousValue` to be of the same type of the selected property (check using intellisense)

### Notes

* When implementing your type, the code in `MyComponent` will most likely not compile anymore. Keep trying until it does!
* There are no tests since this is all compiler-based
* If the requirements aren't clear, check the example below

### Example

```ts
type SomeType = {
    id: int;
    name: string;
};
type SimpleChangesSomeType = {
    id: {
        currentValue: int;
        previousValue: int;
        isFirstChange: boolean;
    };
    name: {
        currentValue: string;
        previousValue: string;
        isFirstChange: boolean;
    };
};
type Assert = SimpleChangesSomeType extends SimpleChanges<SomeType> ? true : false; // Should be the type true
```

So we expect the type `SimpleChanges<SomeType>` to be at least containing all properties of `SimpleChangesSomeType`.
Any property added to `SomeType` should be reflected.