module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: ['eslint:recommended', 'plugin:vue/essential'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 8,
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
        indent: ['error', 2],
        'linebreak-style': ['warn', 'unix'],
        quotes: ['warn', 'single'],
        semi: ['warn', 'always'],
    },
};
