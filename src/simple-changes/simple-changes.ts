import { OnChanges, SimpleChanges as AngularSimpleChanges } from '@angular/core';

// TODO: implement this type to be better than that of Angular
export type SimpleChanges<T> = AngularSimpleChanges;

// This code below should compile after swapping the commented lines
class MyComponent implements OnChanges {
    public id: number;
    public name: string;
    public date: Date;

    public ngOnChanges(changes: SimpleChanges<MyComponent>) {

        if (changes.id) { //<- no intellisense
            let binary = changes.id.currentValue.toString(2); //<- currentValue is of type any
            console.log('Binary: ', binary);
        }

        if (changes.name) { //<- no intellisense
            let allCaps = changes.name.currentValue.toUpperCase(); //<- currentValue is of type any
            console.log('Uppcased: ', allCaps);
        }

    }
}

