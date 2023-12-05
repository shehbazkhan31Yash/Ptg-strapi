'use strict';

/**
 * gender-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gender-list.gender-list');
