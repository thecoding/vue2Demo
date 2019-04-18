<template>
  <div style="text-align:center">
    <div>{{msg}}</div>
    <button v-on:click="comeBack">come back</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "link page"
    };
  },
  methods: {
    comeBack: function(){
      this.$router.go(-1);
    }
  }
};
</script>

