export const environment = {
	production: true,
	/**
	 * AWS API Gateway state root.
	 */
	apiRoot: 'https://roto4ggfed.execute-api.eu-west-1.amazonaws.com/dev',

	sts_endpoint: '',

	/**
	 * AWS Region
	 */
	region: 'eu-west-1',

	identityPoolId: 'eu-west-1:37d9a150-2b32-4506-8da8-dc054c49231e',

	userPoolId: 'eu-west-1_MW81UklJr',

	clientId: '1ekv5kb919hv3f05mlv1hcddce',

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
	userContentBucket: 'smartjob-usercontent-hy2x4kvvzzvx',

	/**
	 * VideoPipelineInput S3 Bucket name.
	 */
	videoPipelineInputBucket: 'smartjob-videopipelineinput-1od6me6fe9o38',

	/**
	 * VideoPipelineOutput S3 Bucket name.
	 */
 	videoPipelineOutputBucket: 'smartjob-videopipelineoutput-rm8ftehw5tu',

	/**
	 * Set to true when CloudSearch is created.
	 */
	searchEnabled: false
};
