module.exports = {
  displayName: 'my-ds',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/my-ds',
};
// "build": {
//   "executor": "@nrwl/web:rollup",
//   "outputs": ["{options.outputPath}"],
//   "options": {
//     "outputPath": "dist/libs/my-ds",
//     "tsConfig": "libs/my-ds/tsconfig.lib.json",
//     "project": "libs/my-ds/package.json",
//     "entryFile": "libs/my-ds/src/index.ts",
//     "external": ["react/jsx-runtime"],
//     "rollupConfig": "@nrwl/react/plugins/bundle-rollup",
//     "compiler": "babel",
//     "assets": [
//       {
//         "glob": "libs/my-ds/README.md",
//         "input": ".",
//         "output": "."
//       }
//     ]
//   }
// },
