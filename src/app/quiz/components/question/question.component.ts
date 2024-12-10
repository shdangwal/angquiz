import { Component } from '@angular/core';
import { AnswerComponent } from '../answer/answer.component';

@Component({
  selector: 'quiz-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
  standalone: true,
  imports: [AnswerComponent],
})
export class QuestionComponent {}
