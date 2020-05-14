/** Set this to true to enable validation tests */
export let TEST = false;

export class DiContainer {
    public register(...args: any[]): void {
        // TODO: register the service
    }

    public resolve(...args: any[]): any {
        // TODO: resolve the service
    }
}

// Replace the 'x' with a 'f' to execute only the code below
// Remove the 'x' if you want to execute this code together with other tests
xdescribe('You', () => {
    it('can test your implementation here', () => {
        // Use 'fit' instead of 'it' to solo this test
        // Use 'xit' instead of 'it' to exclude this test from running

        let container = new DiContainer();
        // Any code you wish to test can be put here
        // You can use the services in ./services.ts

        expect().nothing();
    });
});