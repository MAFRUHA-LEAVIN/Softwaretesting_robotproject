const {defaults} = require('jest-config');

/** @type {import('jest').Config} */
const config = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts', 'cts'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
};

module.exports = config;