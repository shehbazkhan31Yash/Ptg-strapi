'use strict';

/**
 * todo-a-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::todo-a-list.todo-a-list');
