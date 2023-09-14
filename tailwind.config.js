export default {
  mode: 'jit',
  content: [
    './public/**/*.html',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './modules/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    container: {
      padding: '2rem',
    },
    fontFamily: {
      'jetbrains': ['JetBrains Mono', 'Poppins'],
    },
    variants: {},
    plugins: [],
  }
}
