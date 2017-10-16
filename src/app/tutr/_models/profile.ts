import { environment } from "../../../environments/environment";

export class Profile {
	id: string;
	email: string;
	given_name: string;
	family_name: string;
	headline: string;
	bio: string;

	constructor(data: any) {
		this.id = data.id;
		this.email = data.email;
		this.given_name = data.given_name;
		this.family_name = data.family_name;
		this.headline = data.headline;
		this.bio = data.bio;
	}

	public get picture(): string {
		return `http://${environment.userContentBucket}.s3-website-${environment.region}.amazonaws.com/fly/150x150/user-picture/${this.id}.png`;
	}

	public get biggerpicture(): string {
		return `http://${environment.userContentBucket}.s3-website-${environment.region}.amazonaws.com/fly/200x200/user-picture/${this.id}.png`;
	}
}