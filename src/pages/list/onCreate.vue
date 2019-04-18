<template>
  <div style="text-align:center;margin-top:30%">
    <div>{{msg}}</div>
    <button v-on:click="comeBack">返回</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      msg: "生命周期"
    }
  },
  methods: {
    comeBack: function(){
      this.$router.go(-1);
    }
  },
  created: function(){
    alert("初始化方法");
  }
}
</script>
