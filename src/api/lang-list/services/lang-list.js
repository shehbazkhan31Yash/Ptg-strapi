'use strict';

/**
 * lang-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lang-list.lang-list');
