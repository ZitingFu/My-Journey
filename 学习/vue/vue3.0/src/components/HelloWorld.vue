<template>
  <div class="hello">
    <h1>{{ msg }}{{"哈哈"}}{{"hfdjklshfjklh"}}</h1>
    <h2>Essential Links</h2>
    <h3>{{msg.split('').reverse().join('')}}</h3>
      <button v-on:click= "sa('你好')" class="dian">按钮</button>
     <p>{{num}}</p>
     <p title="css">123132</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      num:1,
      msg: '哈哈',
      g:"<p>他们的区别</p>",
      dsf:"class",
      tg:"我是提示",
      show:false,
      d:true,
      name:['name','age','hg'],
      user:[
        {
          id:0,
          name:"里",
          age:200
        },
        {
          id:1,
          name:"张",
          age:200
        },
        {
          id:2,
          name:"王",
          age:200
        }
      ]
    }
  },
  methods:{
    sa(es){
      alert(es)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dian{
  width:300px;
  margin: 0 auto;
  height: 30px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.dsf{
  color: red;
}
</style>
