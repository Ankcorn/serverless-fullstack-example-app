import Auth from '@aws-amplify/auth'

console.log(process.env)
export const config = {
	Auth: {
		mandatorySignIn: true,
		region: process.env.REACT_APP_AWS_REGION,
		userPoolId: process.env.REACT_APP_USER_POOL_ID,
		userPoolWebClientId: process.env.REACT_APP_USER_POOL_WEB_CLIENT_ID,
		identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
		oauth: {
			domain: `${process.env.REACT_APP_LOGIN_SUB_DOMAIN}.auth.${process.env.REACT_APP_AWS_REGION}.amazoncognito.com`,
			scope: ["email", "openid", "profile"],
			redirectSignIn: `${window.origin}/app`,
			redirectSignOut: window.origin,
			responseType: "code"
		}
	}
};

Auth.configure(config);
