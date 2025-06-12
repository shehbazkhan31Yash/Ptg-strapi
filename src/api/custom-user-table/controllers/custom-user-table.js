/**
 * cutom-user-table controller
 */

const { factories } = require("@strapi/strapi");

module.exports = factories.createCoreController(
  "api::custom-user-table.custom-user-table",
  ({ strapi }) => ({
    async createCustomUser(ctx) {
      const { data } = ctx.request.body;

      if (!data?.email || !data?.username) {
        return ctx.badRequest("Email, username, and password are required.");
      }

      try {
        const existingUser = await strapi.db
          .query("api::cutom-user-table.cutom-user-table")
          .findOne({
            where: { email: data.email },
          });

        if (existingUser) {
          return ctx.conflict("User with this email already exists.");
        }

        const newUser = await strapi.entityService.create(
          "api::cutom-user-table.cutom-user-table",
          {
            data: {
              email: data.email,
              username: data.username,
              age: data.age,
              phone: data.phone,
            },
          }
        );

        return ctx.created({ user: newUser });
      } catch (err) {
        console.error("Error creating custom user:", err);
        return ctx.internalServerError("Something went wrong");
      }
    },
  })
);
