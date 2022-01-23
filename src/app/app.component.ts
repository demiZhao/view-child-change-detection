import {
  Component,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
   <button (click)="onButtonClick()">Display</button>

   <div #contentPlaceholder *ngIf="display" class="content"></div>

    <div class="error" *ngIf="!ref">Reference is undefined</div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  display = false;
  dynamicContent = '';

  @ViewChild('contentPlaceholder', { static: false })
  ref: ElementRef;

  constructor(private changeDetector: ChangeDetectorRef) {}

  onButtonClick() {
    this.display = true;
    this.changeDetector.detectChanges();
    this.ref.nativeElement.textContent = 'This is the dynamic content';
  }
}
