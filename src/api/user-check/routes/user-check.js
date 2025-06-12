"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/user-check/email",
      handler: "user-check.findByEmail",
      config: {
        auth: false, // set to true if you want JWT protection
        policies: [],
        middlewares: [],
      },
    },
  ],
};
