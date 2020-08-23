import { Type } from '@angular/core'

export type SimplePropertyMap<T> = {
    column: string;
} | 'default';

export type ComplexPropertyOptions<T, U = any> = {
    foreignKeyTo?: {
        schema: string;
        table: string;
        type: Type<U>;
    },
    flatten?: Options<T>,
};

export type SimpleTypes = string | number | Date;

export type PropertyMap<T> = T extends SimpleTypes ? SimplePropertyMap<T> : ComplexPropertyOptions<T>;

export type Options<T> = {
    [K in keyof T]: PropertyMap<T[K]>;
};

export interface ObjectOptions<T> {
    schema: string;
    table: string;
    type: Type<T>,
    options: Options<T>;
}


// Test
export class Address {
    id: number;
    street: string;
    number: number;
    extra: string;
    postalCode: number;
    city: string;
}
export class Person {
    id: number;
    name: string;
    address: Address;
}

let personOptions: ObjectOptions<Person> = {
    schema: 'dbo',
    table: 'Person',
    type: Person,
    options: {
        id: {
            column: 'Id',
        },
        address: {
            foreignKeyTo: {
                schema: 'dbo',
                table: 'Address',
                type: Address,
            },
        },
        name: {
            column: 'Name',
        },
    },
};

let addressOptions: ObjectOptions<Address> = {
    schema: 'dbo',
    table: 'Address',
    type: Address,
    options: {
        city: 'default',
        extra: 'default',
        //etc...
    },
};