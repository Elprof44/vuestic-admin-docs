<template>
  <div>
    <h1>{{ quizTitle }}</h1>
    <div v-if="!quizCompleted">
      <div v-for="(question, index) in questions" :key="index">
        <h3>{{ question.question }}</h3>
        <ul>
          <li v-for="(choice, choiceIndex) in question.choices" :key="choiceIndex">
            <input type="radio" :id="'q' + index + 'c' + choiceIndex" :value="choice" v-model="selectedAnswers[index]">
            <label :for="'q' + index + 'c' + choiceIndex">{{ choice }}</label>
          </li>
        </ul>
      </div>
      <button @click="submitQuiz">Submit</button>
    </div>
    <div v-else>
      <h2>Quiz Completed!</h2>
      <p>Your score is: {{ calculateScore() }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const quizTitle = 'Quiz Title';
    const questions = ref([]);
    const selectedAnswers = ref([]);
    const quizCompleted = ref(false);

    const fetchQuestions = () => {
      // Simulated API call or database fetch
      // For simplicity, let's assume questions are hardcoded here
      questions.value = [
        {
          question: 'Question 1',
          choices: ['Choice 1', 'Choice 2', 'Choice 3'],
          correctAnswer: 'Choice 1'
        },
        {
          question: 'Question 2',
          choices: ['Choice 1', 'Choice 2', 'Choice 3'],
          correctAnswer: 'Choice 2'
        },
        // Add more questions here
      ];
    };

    const submitQuiz = () => {
      if (selectedAnswers.value.length === questions.value.length) {
        quizCompleted.value = true;
      } else {
        alert('Please answer all questions before submitting.');
      }
    };

    const calculateScore = () => {
      let score = 0;
      for (let i = 0; i < questions.value.length; i++) {
        if (selectedAnswers.value[i] === questions.value[i].correctAnswer) {
          score++;
        }
      }
      return score;
    };

    fetchQuestions(); // Fetch questions when component is mounted

    return { quizTitle, questions, selectedAnswers, quizCompleted, submitQuiz, calculateScore };
  }
};
</script>