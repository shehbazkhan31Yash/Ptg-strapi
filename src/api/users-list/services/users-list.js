'use strict';

/**
 * users-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::users-list.users-list');
