const contentfulManagement = require('contentful-management');

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: 'CFPAT-G9-3Fbirr5P0DQhykI3Jf3_jNobKdP0oSuZ8XKDyer0',
  });

  return contentfulClient.getSpace('53q3zcca2rft').then(space => space.getEnvironment('master'));
};
