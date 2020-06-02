import { greeting } from '../main/greeting';
import { expect } from 'chai';
import 'mocha';

describe("Greeting function", (): void => {
    it("should return 'Hello World!'", (): void => {
        const result = greeting();
        expect(result).to.equal("Hello World!");
    });
});
