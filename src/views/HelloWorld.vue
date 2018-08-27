<template>
  <div class="hello">
    <ul>
      <li>数据实时变动：{{ msg }}</li>
      <li v-once>数据只变动一次：{{ msg }}</li>
    </ul>

    <ul>
      <li><b>原始HTML:</b></li>
      <li>using mustaches: {{ htmlData }}</li>
      <li>Using v-html directive: <span v-html="htmlData"></span></li>
    </ul>
    
    <ul>
      <li><b>JavaScript表达式:</b></li>
      <li>仅支持单个表达式: {{ true? 'YES': 'NO' }}</li>
      <li>不支持语句或控制流。</li>
    </ul>

    <ul>
      <li><b>指令:</b></li>
      <li>如v-if指令将根据表达式的真假插入/移除元素</li>
      <li><p v-if="directiveVIF">现在可以看到我了</p></li>
    </ul>

    <ul>
      <li><b>v-bind 和 v-on 缩写</b></li>
      <li>v-bind:href跳转<a v-bind:href='bindUrl'>跳转微证券官网</a></li>
      <li>:href跳转<a :href='bindUrl'>跳转微证券官网</a></li>
      <li><a v-on:click='handleClick'>v-on:click事件</a></li>
      <li><a @click='handleClick'>@click事件</a></li>
    </ul>

    <button-counter></button-counter>
    <button class="btn-blue" v-on:click="spaJump">启动单页面跳转</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Msg Data',
      htmlData: '<span style="color: red;">This is Red color.</span>',
      directiveVIF: true,
      bindUrl: 'https://wzq.tenpay.com'
    }
  },
  methods: {
    handleClick (e) {
      alert(123);
    },
    spaJump () {
      this.$router.push({
        name: "s1",
        param: ""
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  @import url(../assets/css/HelloWorld.scss);
</style>
