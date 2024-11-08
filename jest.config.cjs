module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '^@reduxjs/toolkit$': '<rootDir>/node_modules/@reduxjs/toolkit',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
};