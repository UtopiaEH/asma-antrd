module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            /* typescript: {
                alwaysTryTypes: true,
            }, */
            node: {
                //"paths": ["src"],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    env: {
        browser: true,
        amd: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended', // Make sure this is always the last element in the array.
    ],
    plugins: [
        'simple-import-sort',
        'prettier',
        '@typescript-eslint',
        'react',
        'react-hooks',
        'import',
        'unused-imports',
    ],
    rules: {
        'prettier/prettier': ['warn', {}, { usePrettierrc: true }],
        'react/react-in-jsx-scope': 'off',
        'react/display-name': 'off',
        'jsx-a11y/accessible-emoji': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',

        'react/prop-types': 'off',
        //'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton'],
            },
        ],
        //    "space-in-parens": ["error", "always"],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
        ],
        /* "unused-imports/no-unused-imports-ts": "error",
  "unused-imports/no-unused-vars-ts": [
    "warn",
    { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
  ], */
        'no-debugger': 'off',
        /*  "with-tsc-error/all": ["warn",
        {
            "reportOnly": false
        }
    ], */
        'prefer-const': 'error',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'import/no-duplicates': 'off',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        'react-hooks/exhaustive-deps': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'no-extra-boolean-cast': 'off',
        '@typescript-eslint/no-extra-semi': 'off',
        'react/jsx-curly-newline': [
            'off',
            {
                multiline: 'consistent',
                singleline: 'consistent',
            },
        ],
        '@typescript-eslint/ban-types': [
            'error',
            {
                extendDefaults: true,
                types: {
                    '{}': false,
                },
            },
        ],
        'no-prototype-builtins': 'off',
        'import/order': [
            'warn',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always',
            },
        ],
    },
}
