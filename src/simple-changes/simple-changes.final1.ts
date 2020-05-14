/*************
 * First proper implementation of typed SimpleChanges. This adheres to every requirement.
 */

/**
 * Sub-type of SimpleChanges to denote changes to a single property
 */
export type SimpleChange<T> = {
    previousValue: T; // T instead of any
    currentValue: T;  // T instead of any
    firstChange: boolean;
    isFirstChange(): boolean;
};

/**
 * The type we need want to see
 * @example
 * class MyComponent {
 *     ngOnChanges(changes: SimpleChanges<MyComponent>) {
 *         // some logic...
 *     }
 * }
 */
export type SimpleChanges<T> = {
    // Take all keys of T and make them optional (?)
    // The type of any such property is of type SimpleChange<T[K]>
    //    where T[K] the type of property K represents
    [K in keyof T]?: SimpleChange<T[K]>;
};
