const defaultConfig = require('tailwindcss/defaultConfig')

module.exports = {
    important: true,
    mode: 'jit',
    content: ['index.html', './src/**/*.{js,jsx,ts,tsx,scss}'],
    theme: {
        fontFamily: {
            sans: ['Source Sans Pro', defaultConfig.theme.fontFamily.serif],
        },
        extend: {
            // do not create "black" "white", it affects headless ui components
            colors: {
                // color themming variables
                // fretex-slate
                'alpha-100': 'var(--colors-alpha-100)',
                'alpha-500': 'var(--colors-alpha-500)',
                'alpha-700': 'var(--colors-alpha-700)',
                // fretex-red
                'beta-100': 'var(--colors-beta-100)',
                'beta-500': 'var(--colors-beta-500)',
                'beta-700': 'var(--colors-beta-700)',
                // fretex-green
                'gama-100': 'var(--colors-gama-100)',
                'gama-500': 'var(--colors-gama-500)',
                'gama-700': 'var(--colors-gama-700)',
                // fretex-gray
                'delta-100': 'var(--colors-delta-100)',
                'delta-500': 'var(--colors-delta-500)',
                'delta-700': 'var(--colors-delta-700)',
                //
                textcolor: 'var(--colors-text)',
                inherit: 'inherit',
            },
            boxShadow: {
                ash: '0 18px 27px -22px #8B8B8B',
                'ash-2': '-1px 8px 18px -20px black',
                blue: '0px 0px 5px #1890ff',
                red: '0px 0px 5px red',
                cardbox: '0 2px 4px 0 rgba(0, 0, 0, 0.12)',
                popper: '0 4px 15px 0 rgba(0, 0, 0, 0.44)',
                modal: '0px 0px 16px rgba(0, 0, 0, 0.1)',
            },
            margin: {
                n3px: '-3px',
                n6px: '-6px',
            },
            insert: {
                n4: '-4px',
            },
            minHeight: {
                1: '1rem',
                1.25: '1.25rem',
                0.25: '0.25rem',
                error: '20px',
            },
            minWidth: {
                100: '100px',
            },
        },
    },
    darkMode: 'media',
}
