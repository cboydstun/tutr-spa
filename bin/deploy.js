#!/usr/bin/env node
const s3 = require('s3');

const client = s3.createClient({
	s3Options: {
		region: 'eu-west-1',
		sslEnabled: true,
	},
});

const uploader = client.uploadDir({
	localDir: 'dist',
	deleteRemoved: true,
	s3Params: { 
		Bucket: 'smartjob-spa-app-gyrq2l8svm2a' //test
		//Bucket: 'smartjob-spa-app-xt1124qe9hug', //prod
	}, 
});

uploader.on('error', console.log);
uploader.on('end', console.log);