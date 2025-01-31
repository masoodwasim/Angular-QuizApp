import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';


import { QuizService } from './quiz.service';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';

const routes: Route[] = [
  { path: 'question/:questionId', component: QuestionComponent },
  { path: 'answers', component: AnswerComponent },
  { path: '', redirectTo: '/question/0', pathMatch: 'prefix' }
];

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
  declarations: [ AppComponent,  QuestionComponent, AnswerComponent ],
  bootstrap:    [ AppComponent ],
  providers: [QuizService]
})
export class AppModule { }
