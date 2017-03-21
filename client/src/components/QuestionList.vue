<template lang="html">
  <tbody >
    <tr v-for="question in questions">
      <td><a :href="'/'+ question.slug">{{ question.title }}</a></td>
      <td>{{question.votes}}</td>
      <!-- <td><a href="#" class="btn btn-info">+</a>
         <a href="#" class="btn btn-danger">-</a> </td> -->
       </td>
    </tr>
  </tbody>
</template>

<script>
import axios from 'axios'

export default {
  props: ['questions'],
  mounted() {
    this.$emit('loaded')
  }
}
</script>

<style lang="css">
</style>
