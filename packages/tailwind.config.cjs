const defaultConfig = require('tailwindcss/defaultConfig')

// if you use any key-pair from tailwind.config.js wrap the style in module!
module.exports = {
    mode: 'jit',
    content: ['index.html', 'src/**/*.{ts, tsx}'],
    theme: {
        fontFamily: {
            sans: ['Source Sans Pro', defaultConfig.theme.fontFamily.sans],
        },
        extend: {
            // do not create "black" "white", it affects headless ui components
            colors: {
                'color-inherit': 'inherit',
                'textcolor-default': 'var(--colors-text-default)',
                // color themming variables
                // fretex-slate
                'alpha-100': 'var(--colors-alpha-100)',
                'alpha-500': 'var(--colors-alpha-500)',
                'alpha-600': 'var(--colors-alpha-600)',
                'alpha-700': 'var(--colors-alpha-700)',
                // fretex-red
                'beta-100': 'var(--colors-beta-100)',
                'beta-500': 'var(--colors-beta-500)',
                'beta-700': 'var(--colors-beta-700)',
                // fretex-green
                'gama-100': 'var(--colors-gama-100)',
                'gama-200': 'var(--colors-gama-200)',
                'gama-300': 'var(--colors-gama-300)',
                'gama-500': 'var(--colors-gama-500)', // default #1E7F4D //fretex #ADC6BC
                'gama-600': 'var(--colors-gama-600)', // default #1b7245 //fretex #9BB1A8
                'gama-700': 'var(--colors-gama-700)',
                // fretex-gray
                'delta-100': 'var(--colors-delta-100)',
                'delta-200': 'var(--colors-delta-200)',
                'delta-250': 'var(--colors-delta-250)',
                'delta-300': 'var(--colors-delta-300)',
                'delta-500': 'var(--colors-delta-500)',
                'delta-700': 'var(--colors-delta-700)',
                'delta-800': 'var(--colors-delta-800)',
                'delta-900': 'var(--colors-delta-900)',
                'delta-9000': 'var(--colors-gray-9000)',
                //
                'textcolor-component': 'var(--colors-text-component)',
                inherit: 'inherit',
                //  // // // //

                //  // // // // // //
                // Calendar colors //
                //  // // // // // //

                'custom-ft-light-green': 'var(--color-custom-ft-light-green)',

                'button-primary-background': 'var(--button-primary-background-color)',
                'button-primary-text': 'var(--button-primary-text-color)',

                'button-default-background': 'var(--button-default-background-color)',
                'button-default-border': 'var(--button-default-border-color)',
                'button-default-text': 'var(--button-default-text-color)',

                'modal-overlay-background': 'var(--modal-overlay-background-color)',
                'modal-toolbar-background': 'var(--modal-toolbar-background-color)',
                'modal-toolbar-text': 'var(--modal-toolbar-text-color)',
                'modal-content-background': 'var(--modal-content-background-color)',

                'old-green-light': 'hsl(var(--color-old-green-light) / <alpha-value>)',
                'green-06': 'var(--color-green-06)',
                'green-05': 'var(--color-green-05)',
                'green-04': 'var(--color-green-04)',
                'green-03': 'var(--color-green-03)',
                'green-02': 'var(--color-green-02)',
                'green-01': 'var(--color-green-01)',
                // ---
                'blue-light': 'var(--color-blue-light)',
                'blue-basic': 'var(--color-blue-basic)',
                // ---
                'gray-draker-alt-secondary': 'var(--color-gray-draker-alt-secondary)',
                'gray-darker-alt': 'var(--gray-darker-alt)',
                'gray-darker': 'var(--color-gray-darker)',
                'gray-dark': 'var(--color-gray-dark)',
                'gray-primary': 'var(--color-gray-primary)',
                'gray-lighter': 'var(--color-gray-lighter)',
                'gray-lightest': 'var(--color-gray-lightest)',
                // ---
                'lavender-basic': '#dcd9e6',
                // ----
                'orange-basic': '#FF8400',
                // ----
                'pink-light': '#f2d5f6',
                'pink-basic': '#ca86d3',
                // ---
                lead: '#222222',
                'custom-red-darkest': 'hsl(var(--color-custom-red-darkest) / <alpha-value>)',
                'custom-red-dark': 'hsl(var(--color-custom-red-dark) / <alpha-value>)',
                'custom-text-color': 'hsl(var(--color-custom-text) / <alpha-value>)',

                'custom-grey-01': 'hsl(var(--color-custom-grey-01) / <alpha-value>)',
                'custom-grey-02': 'hsl(var(--color-custom-grey-02) / <alpha-value>)',
                'custom-grey-03': 'var(--color-custom-grey-03)',
                'custom-grey-04': 'var(--color-custom-grey-04)',
                'custom-grey-06': 'hsl(var(--color-custom-grey-06) / <alpha-value>)',
                'custom-dark-grey': 'hsl(var(--color-custom-dark-grey) / <alpha-value>)',

                'custom-gray-95': 'hsl(var(--color-gray-95) / <alpha-value>)',
                'custom-light-green': 'hsl(var(--color-custom-light-green) / <alpha-value>)',
                'custom-dark-green': 'hsl(var(--color-custom-dark-green) / <alpha-value>)',
                'custom-blue-10': 'hsl(var(--color-custom-blue-10) / <alpha-value>)',
            },
            boxShadow: {
                blue: '0px 0px 5px #1890ff',
                red: '0px 0px 5px red',
                ash: '-1px 8px 18px -20px black',
                cardbox: '0 2px 4px 0 rgba(0, 0, 0, 0.12)',
                popper: '0 4px 15px 0 rgba(0, 0, 0, 0.44)',
                modal: '0px 0px 16px rgba(0, 0, 0, 0.1)',
                'mobile-box': '0 2px 4px rgba(0, 0, 0, 0.12)',
                'x-shadow': '2px 2px 8px rgba(0, 0, 0, 0.2)',
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
            animation: {
                'slide-in': 'slide-in 0.3s linear',
                'slide-out': 'slide-out 0.3s linear',
                'opacity-in': 'opacity-in 0.1s linear',
                'opacity-in-md': 'opacity-in 0.3s linear',
                'opacity-out': 'opacity-out 0.3s linear',
            },
            keyframes: {
                'slide-in': {
                    '0%': { margin: '0 0 0 -320px' },
                    '100%': { margin: '0' },
                },
                'slide-out': {
                    '0%': { margin: '0' },
                    '100%': { margin: '0 0 0 -320px' },
                },
                'opacity-in': {
                    '0%': { opacity: '0', height: '100%' },
                    '100%': { opacity: '1', height: '100%' },
                },
                'opacity-out': {
                    '0%': { opacity: '1', height: '100%' },
                    '60%': { opacity: '1', height: '100%' },
                    '100%': { opacity: '0', height: '100%' },
                },
            },
        },
    },
    darkMode: 'media',
}
