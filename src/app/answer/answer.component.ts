import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import {AppComponent} from '../app.component';
@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
 
export class AnswerComponent implements OnInit {
rightAnswer1: number;
exampleTest1: string;
  constructor(
    public quiz: QuizService, public myapp: AppComponent
  ) { }

  ngOnInit() {
    this.rightAnswer1= this.quiz.rightAnswer;
    this.exampleTest1 = this.quiz.exampleTest;
  }
gotoBack(){
  this.quiz.reset();
  this.myapp.HomePage();
}
}