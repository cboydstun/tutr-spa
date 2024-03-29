import * as AWS from "aws-sdk/global";
import * as S3 from "aws-sdk/clients/s3";

import { Injectable, NgZone } from '@angular/core';

import { environment } from "../../../environments/environment";

@Injectable()
export class S3Service {

	constructor() { 
		AWS.config.region = environment.region;
	}

	private getS3(bucket: string = environment.userContentBucket): any {
		AWS.config.update({
			region: environment.region,
		});

		const clientParams: any = {
			region: environment.region,
			apiVersion: '2006-03-01',
			params: {
				Bucket: bucket
			}
		};

		if (environment.s3Endpoint) {
			clientParams.endpoint = environment.s3Endpoint;
		}

		var s3 = new S3(clientParams);

		return s3;
	}

	public uploadVideoLecture(course_id, curriculum_id, file): Promise<{Bucket: string, Key: string, Location: string}> {
		return this.getS3(environment.videoPipelineInputBucket).upload({
			Key: `course/${course_id}/${curriculum_id}.${file.name.split('.').pop()}`,
			ContentType: file.type,
			Body: file,
			Metadata: {
				course_id,
				curriculum_id
			}
		}).promise();
	}

	public uploadProfilePicture(profile_id, file): Promise<any> {
		const deleteOld = () => {
			return new Promise((resolve, reject) => {
				this.getS3().deleteObjects({
					Delete: {
						Objects: [
							{Key: `fly/150x150/user-picture/${profile_id}.png`},
							{Key: `fly/240x135/user-picture/${profile_id}.png`},
							{Key: `fly/100x100/user-picture/${profile_id}.png`},
							{Key: `fly/200x200/user-picture/${profile_id}.png`},
							{Key: `fly/50x50/user-picture/${profile_id}.png`}
						],
						Quiet: true
					}
				}, (err, data) => {
					resolve();
				});
			});
		};

		return this.getS3().upload({
			Key: `user-picture/${profile_id}.png`,
			ContentType: file.type,
			Body: file,
			Metadata: {
				profile_id: profile_id
			}
		}).promise().then(() => deleteOld());
	}

	public uploadProfileAttachment(profile_id, file): Promise<{Bucket: string, Key: string, Location: string}> {
		return this.getS3().upload({
			Key: `user-attachment/${profile_id}/${file.name}`,
			ContentType: file.type,
			Body: file,
			Metadata: {
				profile_id: profile_id
			}
		}).promise();
	}

	public listProfileAttachments(profile_id): Promise<{url: string, name: string}[]> {
		return this.getS3().listObjectsV2({
			Prefix: `user-attachment/${profile_id}/`
		}).promise().then(data => {
			const contents = data.Contents || [];
			return contents.map(content => {
				return {
					url: `http://${environment.userContentBucket}.s3-website-${environment.region}.amazonaws.com/${content.Key}`,
					name: content.Key.split('/').pop()
				};
			});
		});
	}

	public uploadPromoVideo(profile_id, file): Promise<{Bucket: string, Key: string, Location: string}> {
		return this.getS3(environment.videoPipelineInputBucket).upload({
			Key: `user-promo-video/${profile_id}.${file.name.split('.').pop()}`,
			ContentType: file.type,
			Body: file,
			Metadata: {
				profile_id: profile_id
			}
		}).promise();
	}

	public uploadCoursePicture(course_id, file): Promise<{Bucket: string, Key: string, Location: string}> {
		return this.getS3().upload({
			Key: `course-image/${course_id}.png`,
			ContentType: file.type,
			Body: file,
			Metadata: {
				course_id: course_id
			}
		}).promise();
	}
}
