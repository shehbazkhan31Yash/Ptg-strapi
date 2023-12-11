'use strict';

/**
 * done-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::done-list.done-list');
