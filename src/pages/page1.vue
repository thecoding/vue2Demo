<template>
  <div>
    <head-top parentShowRight="false">
      <!-- <span slot="testslot">{{editText}}</span> -->
    </head-top>
      page content
  </div>
</template>

<script>
import headTop from "../components/head"

export default {
  data() {
    return {
      editText: "editText....",
      pageMsg: "this is page msg"
    }
  },
  created: function(){
    console.log(" create method run ");
  },
  components: {
    headTop
  }
}
</script>

