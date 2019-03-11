import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  isQuestionCardShow = false;
  isWelcomeScreen=true;
  name = 'Smart Quiz App';

  startTest(){
  this.isQuestionCardShow = true;
  this.isWelcomeScreen = false;
}
  HomePage() {
		this.isQuestionCardShow = false;
    this.isWelcomeScreen = true;
	}
}
