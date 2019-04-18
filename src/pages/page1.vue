<template>
  <div>
    {{pageMsg}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageMsg: "this is page msg"
    };
  },
  created: function(){
    console.log(" create method run ");
  }
}
</script>

