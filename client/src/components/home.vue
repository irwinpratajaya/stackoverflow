<template lang="html">
  <div class="container">
    <h2>{{msg}}</h2>
    <question-post></question-post>
    <table class="table" id="stackoverflow">
      <thead>
        <tr>
          <th>Title</th>
          <th>Votes</th>
        </tr>
      </thead>
      <question-list v-bind:questions="questions" v-on:loaded="getData"></question-list>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import QuestionPost from './QuestionPost';
import QuestionList from './QuestionList';
import QuestionDetail from './QuestionDetail';


export default {
  name: 'home',
  data() {
    return {
      msg: 'STACKOVERFLOW',
      questions: ''
    }
  },
  components: {
    QuestionPost,
    QuestionList,
    QuestionDetail
  },
  methods: {
    getData() {
      var self = this;
      axios.get('http://localhost:3000/question')
        .then(function (response) {
          // console.log(response.data);
          self.questions = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
  // mounted() {
  //   this.getData()
  // }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
