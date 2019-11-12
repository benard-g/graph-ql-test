import { envOrThrow } from "./envOrThrow";

describe("envOrThrow", () => {
    const OLD_ENV = process.env;

    const DEFINED_KEY = "DEFINED_KEY";
    const UNDEFINED_KEY = "UNDEFINED_KEY";
    const DEFAULT_VALUE = "PROVIDED_VALUE";
    const VALUE_FROM_ENV = "VALUE_FROM_ENV";

    beforeAll(() => {
        jest.resetModules();
        process.env = {};
    });

    afterAll(() => {
        process.env = OLD_ENV;
    });

    test("Should retrieve environment variable when exists", () => {
        process.env[DEFINED_KEY] = VALUE_FROM_ENV;

        const value = envOrThrow(DEFINED_KEY);

        expect(value).toBe(VALUE_FROM_ENV);
    });

    test("Should throw when environment variable does not exists", () => {
        expect(() => {
            envOrThrow(UNDEFINED_KEY);
        }).toThrow();
    });

    test("Should use 'default' parameter if provided", () => {
        const value = envOrThrow(UNDEFINED_KEY, DEFAULT_VALUE);

        expect(value).toBe(DEFAULT_VALUE);
    });

    test("Should not use 'default' parameter when the environment variable is defined", () => {
        process.env[DEFINED_KEY] = VALUE_FROM_ENV;

        const value = envOrThrow(DEFINED_KEY, DEFAULT_VALUE);

        expect(value).toBe(VALUE_FROM_ENV);
    });
});
