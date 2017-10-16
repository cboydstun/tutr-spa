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
		Bucket: 'smartjob-app-ltny07jtaynb'
	}, 
});

uploader.on('error', console.log);
uploader.on('end', console.log);

//http://smartjob-app-ltny07jtaynb.s3-website-eu-west-1.amazonaws.com