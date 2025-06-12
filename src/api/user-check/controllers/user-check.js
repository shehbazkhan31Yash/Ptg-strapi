/**
 * user-check controller
 */

const { factories } = require("@strapi/strapi");

module.exports = factories.createCoreController(
  "api::user-check.user-check",
  ({ strapi }) => ({
    async findByEmail(ctx) {
      const { email } = ctx.query;

      if (!email) {
        return ctx.badRequest("Email is required");
      }

      const user = await strapi.db
        .query("api::custom-user-table.custom-user-table")
        .findOne({
          where: { email },
        });

      return ctx.send({ exists: !!user });
    },
  })
);
