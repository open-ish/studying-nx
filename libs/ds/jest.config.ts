module.exports = {
  displayName: 'ds',

  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/ds',
  preset: '../../jest.preset.ts',
};
