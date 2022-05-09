module.exports = {
  displayName: 'packages-home',

  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/packages/affected',
  preset: '../../../jest.preset.ts',
};
