<template lang="html">
  <div class="" id="question">
      <h2>Question</h2>
      <h4>{{question[0].title}}</h4>
      <article >
        {{question[0].content}}
      </article>

      <h2>Answer</h2>
      <article class="" v-for="">
        {{question[0].answer}}
      </article>
      <a href="#"><span class="glyphicon glyphicon-chevron-down"></span></a>
      {{question[0].votes}}
      <a href="#"><span class="glyphicon glyphicon-chevron-up"></span></a>

      <h3>Your Answer</h3>
      <textarea name="name" rows="8" cols="80"></textarea>
      <br>
      <button v-on:click="answerPost" class="btn btn-success">send</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'QuestionDetail',
  data() {
    return {
      question: '',
      answer: ''
    }
  },
  methods: {
    getData() {
      var self = this;
      axios.get(`http://localhost:3000/question/${this.$route.params.slug}`)
        .then(function (response) {
          console.log(response.data);
          self.question = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    answerPost() {
      // console.log("test-------------");
      var self = this;
      axios.post('http://localhost:3000/question/answer', {
        answer: this.answer
      })
        .then(function (response) {
          // console.log(response.data);
          self.answer = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style lang="css">
</style>
