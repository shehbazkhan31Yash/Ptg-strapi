'use strict';

/**
 * file-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::file-type.file-type');
