import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoPrompterComponent } from './components';

import { 
	MainLayoutComponent, 
	NakedLayoutComponent 
} from './../../layout/components';

const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{
				path: '',
				component: VideoPrompterComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class VideoPrompterRoutingModule { }
