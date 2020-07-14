# Authentication

The 6 yml files in this folder define the configuration for a user authentication system using AWS Cognito. The Cognito setup allows users to sign up and login to your application managed withing the [Hosted UI](HostedUi.yml).

Once the user has signed in via the hosted UI they are redirected to the Application where you will have access to an [Id Token](https://auth0.com/docs/tokens/concepts/id-tokens) to make authenticated requests to your application.

When the user signs in they also put in an [Identity Pool](IdentityPool.yml). This provides temporary credentails with which the user can do a set of actions which are defined in the [Cognito Authorized Role](CognitoAuthorizedRole.yml). You can also have an unauthorized role that gives visitors to the applications a different set of permissions. This can be useful if you want to collect metrics on there behaviour on the site. To do this add an [Unauthorized Role](https://gist.github.com/singledigit/2c4d7232fa96d9e98a3de89cf6ebe7a5#file-cognito-yaml-L80) to the [Identity Role Mapping](IdentityRoleMapping.yml)


