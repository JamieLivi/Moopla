const config = {
  verbose: true,
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ['amplify/*'],
  setupFiles: ['<rootDir>/jest.setup.js'],
};

module.exports = config;
