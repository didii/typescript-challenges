import { OnChanges } from '@angular/core';
import { SimpleChanges } from './simple-changes';

// This code below should compile and provide intellisense
export class MyComponent implements OnChanges {
    public id!: number;
    public name!: string;

    public ngOnChanges(changes: SimpleChanges<MyComponent>) {

        if (changes.id) { //<- intellisense
            let binary = changes.id.currentValue.toString(2); //<- intellisense on every property
            console.log('Binary: ', binary);
        }

        if (changes.name) { //<- intellisense
            let allCaps = changes.name.currentValue.toUpperCase(); //<- intellisense on every property
            console.log('Uppcased: ', allCaps);
        }

        // // This should give a compilation error
        // if (changes.someNonExistingProperty) {
        //     //this can never be reached in 'normal' Angular code
        // }
    }
}
