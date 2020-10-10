import { Component } from '@angular/core';

@Component({
	selector: 'visit-pt-button',
	templateUrl: 'visit-pt-button.pug',
	styleUrls: ['visit-pt-button.scss'],
})
export class VisitPTButton {
	readonly ptLink = 'https://ossscott40.wixsite.com/derpystown/file-share';
	readonly enableVisitPTButton = true;
	constructor() {
	}
}
