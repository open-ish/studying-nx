module.exports = {
  displayName: 'packages-third-module',

  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/packages/third-module',
  preset: '../../../jest.preset.ts',
};
