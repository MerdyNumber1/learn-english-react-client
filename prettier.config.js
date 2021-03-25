module.exports = {
  printWidth: 100,
  singleQuote: true,
  'trailing-comma': [
    true,
    {
      multiline: {
        objects: 'always',
        arrays: 'always',
        functions: 'never',
        typeLiterals: 'ignore',
      },
      esSpecCompliant: true,
    },
  ],
  bracketSpacing: true,
  jsxBracketSameLine: false,
  tabWidth: 2,
  semi: true,
  endOfLine: 'auto',
};
