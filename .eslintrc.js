module.exports = {
  parserOptions: {
    ecmaVersion: 2022, // or 6, 7, 8, 9, 10, 11, depending on your ECMAScript version
    sourceType: 'module', // this is important for using import/export syntax
    ecmaFeatures: {
      jsx: true, // this enables JSX
    },
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  extends: [
    'plugin:react/recommended', // this applies the recommended rules from eslint-plugin-react
  ],
  rules: {
    'global-require': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
};