<template>
  <div id="app">
    <h1>{{count}}</h1>
    <button @click="increment">Increment</button>
    <hr>
    <button @click="getTodo">Get todo</button>
    <ul>
      <li v-for="(value,key) in todo" :key="key">{{value}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    count: function() {
      return this.$store.state.count;
    },
    todo: function() {
      return this.$store.state.todo;
    }
  },
  methods: {
    increment() {
      this.$store.commit("INCREMENT_COUNT", 2);
    },
    getTodo() {
      this.$store.dispatch("getTodo");
    }
  }
};
</script>

<style>
</style>
