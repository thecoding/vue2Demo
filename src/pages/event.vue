<template>
  <div id="example-2" style="text-align:center;margin-top:20%">
    <!-- `greet` 是在下面定义的方法名 -->
    <button v-on:click.native="test">Greet</button>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  data(){
    return {
      name: "V"
    }
  },
  // 在 `methods` 对象中定义方法
    methods: {
      greet: function(event) {
        // `this` 在方法里指向当前 Vue 实例
        alert("Hello " + this.name + "!");
        // `event` 是原生 DOM 事件
        if (event) {
          alert(event.target.tagName);
        }
      },
      test: function(){
        alert("ok");
      }
    }
}
</script>



