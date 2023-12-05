'use strict';

/**
 * download-file-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::download-file-list.download-file-list');
