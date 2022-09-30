module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        commonjs: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:react-hooks/recommended',
        'prettier',
        'plugin:prettier/recommended', // Make sure this is always the last element in the array.
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            tsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    overrides: [],
    plugins: [
        'simple-import-sort',
        'react',
        'react-hooks',
        'import',
        'unused-imports',
        '@typescript-eslint',
        'prettier',
    ],
    rules: {
        camelcase: 'off',
        'no-duplicate-imports': 'error',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 0,
        'react/react-in-jsx-scope': 'off',
        'no-console': 'warn',
        'no-debugger': 'warn',
        'no-alert': 'error',
        'react-hooks/exhaustive-deps': 'off',
        'react/prop-types': 0,
        'react/display-name': 0,
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        '@typescript-eslint/no-empty-function': 'off',
        'react/no-unknown-property': 'off',
        'react/no-unescaped-entities ': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: ['tsconfig.json', 'packages/tsconfig.json'],
            },
            node: {
                project: ['tsconfig.json', 'package/tsconfig.json'],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
}
