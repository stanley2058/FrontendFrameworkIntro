import { Component, ViewChild } from '@angular/core';
import { ReasonComponent } from './components/reason/reason.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('reason') reasonRef!: ReasonComponent;

  onImageClicked() {
    this.reasonRef.generateRandomText();
  }
}
