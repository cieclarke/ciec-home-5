const backgroundImageURL =
  'https://live.staticflickr.com/4777/38983619730_220155925a_k.jpg';

module.exports = {
  content: ['./*.{ts,tsx}', './index.html'],
  theme: {
    extend: {
      flex: {
        2: '1 1 50%'
      },
      colors: {
        brand: '#EED335',
        goldenrod: {
          50: '#f9f7ea',
          100: '#faf3c6',
          200: '#f5eb83',
          300: '#efda3e',
          400: '#e1be13',
          500: '#d49f06',
          600: '#bb7b04',
          700: '#975d07',
          800: '#78470d',
          900: '#5f390e'
        },
        olive: {
          50: '#fafaf3',
          100: '#f9f8d8',
          200: '#f2f197',
          300: '#e8e34e',
          400: '#cdc918',
          500: '#aaac07',
          600: '#838904',
          700: '#646907',
          800: '#4b4f0b',
          900: '#3a3d0d'
        },
        limegreen: {
          50: '#f2f9f7',
          100: '#e3f8ed',
          200: '#c2f2d4',
          300: '#8ee8b2',
          400: '#3dd57f',
          500: '#17bd4f',
          600: '#12a037',
          700: '#188133',
          800: '#196430',
          900: '#17502b'
        },
        lightseagreen: {
          50: '#edf9f9',
          100: '#d4f7f5',
          200: '#a5f0eb',
          300: '#68e5df',
          400: '#24d1ce',
          500: '#0bb6b6',
          600: '#0a9999',
          700: '#107b7b',
          800: '#12605f',
          900: '#114d4c'
        },
        cornflowerblue: {
          50: '#f2fafc',
          100: '#def7fa',
          200: '#b6ebf5',
          300: '#83dbf2',
          400: '#41bdee',
          500: '#1b98e7',
          600: '#1475d7',
          700: '#175cb4',
          800: '#174785',
          900: '#143966'
        },
        royalblue: {
          50: '#f4f9fc',
          100: '#e5f5fc',
          200: '#c3e5f9',
          300: '#9ccff8',
          400: '#65a9f7',
          500: '#377df5',
          600: '#275aed',
          700: '#2446d2',
          800: '#1f37a1',
          900: '#1a2d7c'
        },
        darkorchid: {
          50: '#f5f6fa',
          100: '#edebfa',
          200: '#dbd2f8',
          300: '#c9b4f7',
          400: '#b588f7',
          500: '#9f5bf6',
          600: '#823cf0',
          700: '#6530da',
          800: '#4d28af',
          900: '#3e228a'
        },
        mediumorchid: {
          50: '#f8f6fa',
          100: '#f5ebf8',
          200: '#eccef5',
          300: '#e4adf1',
          400: '#df7ded',
          500: '#da51e9',
          600: '#c234dc',
          700: '#9629bc',
          800: '#70228f',
          900: '#581e6e'
        },
        crimson: {
          50: '#fcf8f7',
          100: '#fcf0ef',
          200: '#f9d7de',
          300: '#f8b4c1',
          400: '#f88090',
          500: '#f85463',
          600: '#ef3443',
          700: '#cc283a',
          800: '#9f2032',
          900: '#7c1b29'
        },
        darkorange: {
          50: '#fbf6ef',
          100: '#fbefd9',
          200: '#f8dfad',
          300: '#f5c66f',
          400: '#f29f32',
          500: '#f17716',
          600: '#e4530e',
          700: '#c23e13',
          800: '#9b3118',
          900: '#7d2818'
        }
      },
      fontFamily: {
        sans: ['courier new', 'sans-serif'],
        serif: ['courier new', 'serif'],
        stencil: ['Stencil']
      },
      backgroundImage: (theme) => ({
        hero: `url(${backgroundImageURL})`
      })
    }
  }
};
