module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier/react', 'prettier/flowtype'],
  plugins: ['prettier', 'flowtype'],
  env: {
    browser: true,
    jasmine: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  },
};
