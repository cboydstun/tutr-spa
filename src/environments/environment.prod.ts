// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: true,

	/**
	 * AWS API Gateway state root.
	 */
	apiRoot: '',

	sts_endpoint: '',

	/**
	 * AWS Region
	 */
	region: '',

	identityPoolId: '',

	userPoolId: '',

	clientId: '',

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
	userContentBucket: '',

	/**
	 * VideoPipelineInput S3 Bucket name.
	 */
	videoPipelineInputBucket: '',

	/**
	 * VideoPipelineOutput S3 Bucket name.
	 */
 	videoPipelineOutputBucket: '',

	/**
	 * Set to true when CloudSearch is created.
	 */
	searchEnabled: false,

	wsServerAddress: '',

	disqusShortName: ''
};
