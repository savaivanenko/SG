// import refs from "./refs";

// const questions = [
//   {
//     "What is your marital status?": ["Single", "Married"],
//   },
//   {
//     "Are you planning on getting married next year?": ["Yes", "No"],
//   },
//   {
//     "How long you have been married?": ["Less then a year", "More then a year"],
//   },
//   { "Have you celebrated your one year anniversary?": ["Yes", "No"] },
// ];
// const state = {
//   path = 0,

// }

const data = [
  {
    question_1: "What is your marital status?",
    id_Question: 1,
    answer: {
      answer1: {
        value: "Married",
        id: 2,
      },
      answer2: {
        value: "Single",
        id: 3,
      },
    },
  },
  {
    question_2: "Are you planning on getting married next year?",
    id_Question: 3,
    answer: {
      answer1: {
        value: "Yes/No",
        id: "last question",
      },
      answer2: {
        value: "No/Yes",
        id: "last question",
      },
    },
  },
  {
    question_3: "How long you have been married?",
    id_Question: 2,
    answer: {
      answer1: {
        value: "Less then a year",
        id: "last question",
      },
      answer2: {
        value: "More then a year",
        id: 7,
      },
    },
  },
  {
    question_4: "Have you celebrated your one year anniversary?",
    id_Question: "7",
    answer: {
      answer1: {
        value: "Yes/No",
        id: "last question",
      },
      answer2: {
        value: "No/Yes",
        id: "last question",
      },
    },
  },
];

console.log(data[0].question_1, `id вопроса = `, data[0].id_Question);
//ВОПРОС-1 если ответ input соответствует значению data[0].answer.answer1.value
console.log(`ответ =`, data[0].answer.answer1.value);
console.log(`id ответа = id следующуго вопроса =`, data[0].answer.answer1.id);

console.log(data[2].question_3, `id вопроса = `, data[2].id_Question);
// ВОПРОС-2 если ответ input соответствует значению data[2].answer.answer2.value
console.log(`ответ =`, data[2].answer.answer2.value);
console.log(`id ответа = id следующуго вопроса =`, data[2].answer.answer2.id);

console.log(data[3].question_4, `id вопроса = `, data[3].id_Question);
// ВОПРОС-3 если ответ input соответствует значению data[3].answer.answer2.value
console.log(`ответ =`, data[3].answer.answer2.value);
console.log(`id ответа = id следующуго вопроса =`, data[3].answer.answer2.id);
// }

console.log(data[2].question_3, `id вопроса = `, data[2].id_Question);
// если ответ input соответствует значению data[2].answer.answer1.value
console.log(`ответ =`, data[2].answer.answer1.value);
console.log(`id ответа = id следующуго вопроса =`, data[2].answer.answer1.id);

console.log(data[0].question_1, `id вопроса = `, data[0].id_Question);
// если ответ input соответствует значению data[0].answer.answer2.value
console.log(`ответ =`, data[0].answer.answer2.value);
console.log(`id ответа = id следующуго вопроса =`, data[0].answer.answer2.id);

console.log(data[1].question_2, `id вопроса = `, data[1].id_Question);
// если ответ input соответствует значению data[1].answer.answer2.value
console.log(`ответ =`, data[1].answer.answer2.value);
console.log(`id ответа = id следующуго вопроса =`, data[1].answer.answer2.id);
