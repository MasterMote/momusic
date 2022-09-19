import cssnano from 'cssnano'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default function getPostcssPlugins(isBuild: boolean) {
  const plugins = []
  const tailwindconfig = getTailwindconfig()
  // @ts-ignore
  plugins.push(tailwindcss(tailwindconfig))
  if (isBuild) {
    // @ts-ignore
    plugins.push(autoprefixer)
    // @ts-ignore
    plugins.push(cssnano({ preset: 'default' }))
  }
  return plugins
}

function getTailwindconfig() {
  return {
    plugins: [createEnterPlugin()],
    content: ['../**/*.{html,vue,ts,tsx}'],
    theme: {
      extend: {
        screens: {
          sm: '576px',
          md: '768px',
          lg: '992px',
          xl: '1200px',
          '2xl': '1600px',
        },
      },
      borderColor: (theme) => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f',
        angBorderGrey: '#BFC0BF',
      }),
    },
  }
}

function createEnterPlugin(maxOutput = 6) {
  const createCss = (index, d = 'x') => {
    const upd = d.toUpperCase()
    return {
      [`* > .enter-${d}:nth-child(${index})`]: {
        opacity: '0',
        'z-index': `${10 - index}`,
        transform: `translate${upd}(50px)`,
        animation: `enter-${d}-animation 0.4s ease-in-out 0.3s`,
        'animation-fill-mode': 'forwards',
        'animation-delay': `${(index * 1) / 10}s`,
      },
    }
  }
  const handler = ({ addBase }) => {
    const addRawCss = {}
    for (let index = 1; index < maxOutput; index++) {
      Object.assign(addRawCss, {
        ...createCss(index, 'x'),
        ...createCss(index, 'y'),
      })
    }
    addBase({
      ...addRawCss,
      [`@keyframes enter-x-animation`]: {
        to: {
          opacity: '1',
          transform: 'translateX(0)',
        },
      },
      [`@keyframes enter-y-animation`]: {
        to: {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
    })
  }
  return { handler }
}
