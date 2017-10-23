// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,

	/**
	 * AWS API Gateway state root.
	 */
	apiRoot: 'https://w40xs05cqa.execute-api.eu-west-1.amazonaws.com/dev',

	sts_endpoint: '',

	/**
	 * AWS Region
	 */
	region: 'eu-west-1',

	identityPoolId: 'eu-west-1:eb105ee7-c257-495e-bf71-cdd38a07e315',

	userPoolId: 'eu-west-1_XScweZozO',

	clientId: '7mtdudjqqqquh3v61uglvj5qf9',

	cognito_idp_endpoint: '',

	cognito_identity_endpoint: '',

	s3Endpoint: '',

	/**
	 * Default image for a new course.
	 * Displayed in instructor dashboard.
	 */
	defaultCourseImage: '/assets/images/default-course-image.png',

	/**
	 * Default image for a new user.
	 * Displayed in account settings tab.
	 */
	defaultUserPicture: '/assets/images/default-user-picture.png',

	/**
	 * Logo displayed in navbar.
	 * Make it transparent.
	 */
	headerLogo: '/assets/images/default-logo.png',

	/**
	 * Logo displayed in footer.
	 * Usually it will be the same as in header.
	 */
	footerLogo: '/assets/images/default-logo.png',

	/**
	 * Logo displayed in auth screens: login, register, reset password, etc.
	 */
	authScreensLogo: '/assets/images/default-auth-logo.png',

	/**
	 * Support email address.
	 */
	supportEmail: 'support@domain.tld',

	/**
	 * UserContent S3 Bucket name.
	 */
	userContentBucket: 'aaaaaa008-usercontent-19jfxqkcvsfav',

	/**
	 * VideoPipelineInput S3 Bucket name.
	 */
	videoPipelineInputBucket: 'aaaaaa008-videopipelineinput-1f4tna9im7tms',

	/**
	 * VideoPipelineOutput S3 Bucket name.
	 */
 	videoPipelineOutputBucket: 'aaaaaa008-videopipelineoutput-dlh8wohyg07l',

	/**
	 * Set to true when CloudSearch is created.
	 */
	searchEnabled: false,

	wsServerAddress: 'wss://signaling.tutr.work:443/',

	disqusShortName: 'tutrio'
};
