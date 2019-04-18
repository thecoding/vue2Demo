<template>
    <div>
      <!-- <img class="logo" src="../assets/u35.png"> -->
      {{msg}}
    </div>
</template>

<script>

import { Group, Cell } from "vux";

export default {
  components: {
    Group,
    Cell
  },
  data() {
    return {
      msg: "Hello World!"
    };
  },
  created: function(){
    console.info(" hello is create ");
  }
};
</script>

<style>
.logo {
  margin: 30% 30% 10% 30%;
  width: 40%;
}
</style>
