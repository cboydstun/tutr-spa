import { PreloadCategoriesResolve } from './_resolvers/preload-categories.resolver';
import { CategoryCoursesResolve } from './_resolvers/category-courses.resolver';
import { CategoryResolve } from './_resolvers/category.resolver';
import { CourseResolve } from './_resolvers/course.resolver';
import { InstructorCoursesResolve } from './_resolvers/instructor-courses.resolver';
import { InstructorCourseResolve } from './_resolvers/instructor-course.resolver';

import { InstructorWebinarsResolve } from './_resolvers/instructor-webinars.resolver';
import { InstructorWebinarResolve } from './_resolvers/instructor-webinar.resolver';

import { UserProfileResolve } from './_resolvers/user-profile.resolver';

import { AllWebinarsResolve } from './_resolvers/all-webinars.resolver';
import { ArchivedWebinarsResolve } from './_resolvers/archived-webinars.resolver';

export {
	PreloadCategoriesResolve,
	CategoryCoursesResolve,
	CategoryResolve,
	CourseResolve,
	InstructorCoursesResolve,
	InstructorCourseResolve,
	UserProfileResolve,
	InstructorWebinarsResolve,
	InstructorWebinarResolve,
	AllWebinarsResolve,
	ArchivedWebinarsResolve
};