module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  // moduleDirectories: ['src', 'node_modules', '_override'],
  moduleNameMapper: {
    '^@redocly/ui(.*)$': '<rootDir>/node_modules/@redocly/developer-portal/dist/engine/src/ui$1',
    '^Content(.*)$': '<rootDir>$1',
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/file-mock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/file-mock.js", // or identity-obj-proxy
  },
  testMatch: [
    '<rootDir>/src/**/?(*.)(spec|test).ts?(x)',
    '<rootDir>/src/**/__tests__/**/*.ts?(x)',
    '<rootDir>/_override/**/?(*.)(spec|test).ts?(x)',
  ],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(ts|tsx|js)$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!@redocly/developer-portal/*)'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '_override/**/*.{js,jsx,ts,tsx}',
    '!_override/**/*test.{js,jsx,ts,tsx}',
    '!src/**/(config|setup|index).ts?(x)',
    '!src/**/*.types.ts',
    '!src/**/landing.tsx',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'text-summary', 'lcov'],
  coverageThreshold: {
    // Do NOT lower these coverage thresholds
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  globals: {
    // 'ts-jest': {
    //   tsConfig: 'tsconfig.test.json',
    // },
    __DEV__: true,
    TAL: {
      config: {},
    },
  },
  verbose: true,
  // setupFilesAfterEnv: ['<rootDir>/src/setuptests.ts'],
};