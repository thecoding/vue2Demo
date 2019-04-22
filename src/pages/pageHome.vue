<template>
  <div>
    <div class="title_name">控件列表</div>
     <group>
       <cell title="component_head" ><router-link to="/page1">page1</router-link></cell>
        <cell title="router-link" value="value"><router-link to="/pages/list/linkPage">linkPage</router-link></cell>
        <cell title="v-on:click.native" v-on:click.native="titleClick">titleClick</cell>
        <cell title="v-if"  v-if="valueIf" v-on:click.native="nativeClick">{{valueIf}}</cell>
        <cell title="v-else" v-else="!valueIf" v-on:click.native="nativeClick">{{valueIf}}</cell>
        <cell title="v-if:eg"><router-link to="/pages/list/v-if">v-if</router-link></cell>
        <cell title="v-show"  v-if="valueShow" @click.native="valueShowClick">{{valueShow}}</cell>
        <cell title="created" ><router-link to="/pages/list/onCreate">生命周期</router-link></cell>
        <cell title="v-for循环" ><router-link to="/pages/list/vfor">v-for循环</router-link></cell>
    </group>
    <router-view></router-view>
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
      msg: "Hello World!",
      valueShow: true,
      valueIf: true,
    };
  },
  methods:{
    titleClick: function(){
      alert(" v-on:click.native click");
    },
    nativeClick: function(){
      this.valueIf = !this.valueIf;
    },
    valueShowClick: function(){
      alert("this.valueShow is " + this.valueShow);
    }
  },
  created: function(){
    console.info(" hello is create ");
  },
};
</script>

<style>
.title_name{
  margin-top: 20px;
  text-align: center;
  color: blue;
}
</style>

