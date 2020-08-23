interface Validator<T> {
    validate<FName extends Methods<T>>(funcName: FName, params: Parameters<T[FName]>): void;
}

type AnyFunction = (...args: any) => any;
type Methods<T> = {
    [K in keyof T]: T[K] extends AnyFunction ? K : never;
}[keyof T];

function validate<FName extends Methods<Calculator>>(funcName: 'divide', params: [number, number]): asserts params is [number, Exclude<number, 0>];
function validate<FName extends Methods<Calculator>>(funcName: 'add', params: [string, string]): asserts params is [Exclude<string, ''>, Exclude<string, ''>];
function validate<FName extends Methods<Calculator>>(funcName: FName, params: Parameters<Calculator[FName]>): void;
function validate<FName extends Methods<Calculator>>(funcName: FName, params: Parameters<Calculator[FName]>): void {
    switch (funcName) {
        case 'divide':
            var [_, rhs] = params;
            if (rhs === 0)
                throw 'rhs cannot be zero';
            break;    
    }        
}    



class Calculator {
    public test: number;

    public add(lhs: string, rhs: string): string {
        validate('add', [lhs, rhs]);
        
        return lhs + rhs;
    }

    public divide(lhs: number, rhs: number): number {
        validate<Methods<Calculator>>('divide', [lhs, rhs]);
        
        return lhs / rhs;
    }
}

type bleh = Methods<Calculator>;