export class Question {
  /**
   *
   * @param {string} text this is the text of the question
   * @param {string[]} choices this is the array with the options of answers
   * @param {string} answer this is the answer of the question
   */
  //properties
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  /**
   * @param {string} choice some text to guess
   * @returns {boolean} return true if the answers is correct
   */
  //methods
  rightAnswer(choice) {
    return choice === this.answer ? true : false;
  }
}

const question = new Question(
  "testing the question class",
  ["choice1", "choice2"],
  "choice2"
);
console.log(question.rightAnswer("choice1"));
