'use strict';

/**
 * demo-data-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::demo-data-list.demo-data-list');
