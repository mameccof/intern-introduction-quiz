'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  random: async ctx => {
    let entities;
    entities = await strapi.services['template-question'].find(ctx.query);

    const randomId = Math.floor( Math.random() * entities.length );


    return sanitizeEntity(entities [ randomId ] , { model: strapi.models['template-question'] });
  }
};
