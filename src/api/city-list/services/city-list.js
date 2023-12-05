'use strict';

/**
 * city-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::city-list.city-list');
