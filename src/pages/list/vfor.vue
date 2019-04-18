<template>
  <div style="text-align:center">
    <ul id="example-2">
      <!-- <li v-for="(value, index) in list">
      {{ value }} - {{ index }}
      </li>-->
      <li v-for="(item,index) in list">
        用户名：{{ item.name }} - 用户年龄：{{ item.age }}-{{index}}
        <button @click="delItem(index)">删除</button>
      </li>name:
      <input type="text" style="width:200px" v-model="name">
      age:
      <input style="width:200px" v-model.number="age" type="number">
      <button @click="addList" style="width:100px">增加</button>

      <li v-for="(value,index) in list2">{{value}} - {{ index }}</li>
    </ul>

    <div>
      <span>一个对象的v-for 对象为{{object}}  value in object</span>
      <ul class="demo">
        <li v-for="value in object">{{ value }}</li>
      </ul>
      <span>v-for : (value,key) in object </span>
      <ul class="demo">
        <li v-for="(value,key) in object">key为：{{key}} -- value为：{{ value }}</li>
      </ul>
    </div>
    <button @click="comeBack" style="width:100px">返回</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: "",
      list: [
        {
          name: "Rose",
          age: 20
        },
        {
          name: "jeck",
          age: 21
        },
        {
          name: "Lucy",
          age: 19
        }
      ],
      list2: ["2", "3", "4", "5"],
      object: {
        firstName: "John",
        lastName: "Don",
        age: 30
      }
    };
  },
  methods: {
    comeBack: function() {
      this.$router.go(-1);
    },
    addList: function() {
      var obj = { name: this.name, age: this.age };
      this.list.push(obj);
    },
    delItem: function(index) {
      this.list.splice(index, 1);
    }
  }
};
</script>
