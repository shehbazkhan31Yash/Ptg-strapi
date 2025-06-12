'use strict';

/**
 * user-check service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-check.user-check');
