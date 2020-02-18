const merge = require('lodash.merge');

const healthResolvers = require('./health');

module.exports = merge(healthResolvers);

