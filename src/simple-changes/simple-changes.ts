import { OnChanges, SimpleChanges as AngularSimpleChanges } from '@angular/core';

// TODO: implement this type to be better than that of Angular
export type SimpleChanges<T> = AngularSimpleChanges;

// This code below should compile after swapping the commented lines
class MyComponent implements OnChanges {
    public id: number;
    public name: string;
    public date: Date;

    public ngOnChanges(changes: SimpleChanges<MyComponent>) {

        if (changes.id) { //<- intellisense
            let binary = changes.id.currentValue.toString(2); //<- intellisense on every property
            console.log('Binary: ', binary);
        }

        if (changes.name) { //<- intellisense
            let allCaps = changes.name.currentValue.toUpperCase(); //<- intellisense on every property
            console.log('Uppcased: ', allCaps);
        }

        //NOTE: this should give a compilation error
        if (changes.someNonExistingProperty) {
            //this can never be reached in 'normal' Angular code
        }
    }
}
