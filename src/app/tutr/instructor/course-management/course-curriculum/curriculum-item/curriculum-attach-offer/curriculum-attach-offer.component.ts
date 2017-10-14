import { 
	Component, 
	OnInit, 
	Input, 
	Output, 
	EventEmitter 
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'uikit-curriculum-attach-offer',
	templateUrl: './curriculum-attach-offer.component.html',
	styleUrls: ['./curriculum-attach-offer.component.css']
})
export class CurriculumAttachOfferComponent implements OnInit {
	@Output() attachVideo = new EventEmitter<void>();
	@Output() attachArticle = new EventEmitter<void>();

	constructor() { }

	ngOnInit() {
	}

	public doAttachVideo() {
		this.attachVideo.emit();
	}

	public doAttachArticle() {
		this.attachArticle.emit();	
	}

}
