// @ts-check
import { Question } from "./Question.js";

export class Quiz {
  questionIndex = 0;
  score = 0;

  /**
   * @param {Question[]} questions with one correct answer
   */

  constructor(questions) {
    this.questions = questions;
  }

  /**
   *
   * @returns {Question} the question found
   */
  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

  isEnded() {
    return this.questions.length === this.questionIndex;
  }

  /**
   * @param {string} answer right answer to the current questions
   */
  guess(answer) {
    console.log(answer);
    if (this.getQuestionIndex().rightAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }
}
