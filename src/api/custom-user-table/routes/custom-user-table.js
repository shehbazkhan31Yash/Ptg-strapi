module.exports = {
  routes: [
    {
      method: "POST",
      path: "/custom-user-table/create-custom-user",
      handler: "custom-user-table.createCustomUser",
      config: {
        policies: [], // You can add role-based policies here
        auth: false, // Set to true if you want auth
      },
    },
  ],
};
