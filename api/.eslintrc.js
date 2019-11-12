module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/no-unused-vars": [
            "error", { "argsIgnorePattern": "^_" }
        ],
        "curly": "error",
        "default-case": "error",
        "default-param-last": "error",
        "eqeqeq": "error",
        "indent": ["error", 4],
        "no-alert": "error",
        "no-console": "error",
        "no-invalid-this": "error",
        "no-magic-numbers": "error",
        "no-return-assign": "error",
        "no-return-await": "error",
        "no-shadow": "error",
        "no-throw-literal": "error",
        "no-unused-vars": "off",
        "no-use-before-define": "error",
        "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],
        "quotes": ["error", "double"],
        "radix": "error",
        "semi": ["error", "always"],
        "use-isnan": "error"
    }
};
