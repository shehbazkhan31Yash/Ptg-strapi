// config/plugins.js

module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'strapi-provider-upload-azure-sa',
      providerOptions: {
        account: env('AZURE_ACCOUNT_NAME'),
        accountKey: env('AZURE_ACCOUNT_KEY'),
        containerName: env('AZURE_CONTAINER_NAME'),
        defaultPath: env('AZURE_DEFAULT_PATH', 'uploads'),
      },
    },
  },
});