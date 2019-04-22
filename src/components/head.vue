<template>
  <div class="content">
    <div class="left" @click="comBack"><返回</div>
    <div class="center">中间
      <slot name="testslot"></slot>
    </div>
    <div class="right">
      <span v-if="propsvalue">{{propsvalue}}></span>
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return {
      msg: "title"
    }
  },
  methods: {
    comBack: function(){
      this.$router.go(-1);
    }
  },
  props: ['propsvalue'],
  created: function(){
    console.info("propsvalue type is "+typeof(this.propsvalue));
    console.info("propsvalue--->"+this.propsvalue);
    
  }
}
</script>


<style>
.content{
  width: 100%;
  height: 60px;
  background: #4285f4;
  line-height: 60px;
}
.left{
  width:20%;
  float:left;
  text-align: center;
}
.center{
  width:60%;
  float:left;
  text-align: center;
}
.right{
  width:20%;
  float:left;
  text-align: center;
}
</style>


