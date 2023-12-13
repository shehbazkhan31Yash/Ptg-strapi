'use strict';

/**
 * users-list controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::users-list.users-list');
