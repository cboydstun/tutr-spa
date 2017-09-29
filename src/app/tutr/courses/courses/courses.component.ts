import { Component, OnInit } from '@angular/core';

import { Course } from '../../models';

@Component({
	selector: 'tutr-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
	public courses: Course[] = [];

	constructor() { }

	ngOnInit() {
		this.courses = [
			{
				name: 'ES6 Javascript: The Complete Developer\'s Guide',
				description: 'Learn iOS 11 App Development From Beginning to End. Using Xcode 9 and Swift 4. Includes Full ARKit and CoreML',
				image: 'https://udemy-images.udemy.com/course/240x135/1109980_21a6.jpg',
				url: ''
			},
			{
				name: 'React Native: Advanced Concepts',
				description: 'Learn Vue JS, and become a VueJS professional. Build complex SPAs with Vue.js, a simple and popular JavaScript ',
				image: 'https://udemy-images.udemy.com/course/240x135/1080408_2645_3.jpg',
				url: ''
			},
			{
				name: 'Modern React with Redux',
				description: 'Detailed walkthroughs on advanced React and Redux concepts - Authentication, Testing, Middlewares, HOC\'s',
				image: 'https://udemy-images.udemy.com/course/240x135/714978_0783_2.jpg',
				url: ''
			},
			{
				name: 'The Complete JavaScript Course: Build a Real-World Project',
				description: 'Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!',
				image: 'https://udemy-images.udemy.com/course/240x135/1047968_aff4_2.jpg',
				url: ''
			},
			{
				name: 'Become an Android Developer from Scratch',
				description: 'Master data visualization in tableau using Real data exercises. Content covers tableau certification syllabus and more',
				image: 'https://udemy-images.udemy.com/course/240x135/781532_8b4d_6.jpg',
				url: ''
			}
		]
	}

}
