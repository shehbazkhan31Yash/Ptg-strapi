'use strict';

/**
 * state-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::state-list.state-list');
