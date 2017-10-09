// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,

	/**
	 * AWS API Gateway state root.
	 */
	apiRoot: 'https://jkebm4exxg.execute-api.eu-west-1.amazonaws.com/dev',

	sts_endpoint: '',

	/**
	 * AWS Region
	 */
	region: 'eu-west-1',

	identityPoolId: 'eu-west-1:eebb3b9b-f6d1-4f53-ae89-1c22f1629ca8',

	userPoolId: 'eu-west-1_FoepLm8PL',

	clientId: '5tls26eh2n2lg530492tvqp58l',

	cognito_idp_endpoint: '',

	cognito_identity_endpoint: '',

	staticFilesBucket: '',

	staticFilesKeyPrefix: '',

	staticFilesRoot: '',

	s3Endpoint: '',

	/**
	 * Default image for a new course.
	 * Displayed in instructor dashboard.
	 */
	defaultCourseImage: '/assets/images/default-course-image.png'
};
