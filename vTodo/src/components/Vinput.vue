<template>
    <div>    
        <span class="title">昵称：</span>    
        <input type="text" placeholder="你的大名......" v-model="username" />   
    </div>
</template>
<script>
export default {
    name:"Vinput",
    data(){
        return{
            username: ""
        }
    },
     methods: {
    getName() {
      // 该方法里面要做的事儿：将该组件上面的数据传递给父组件
      this.$emit("getname", this.username);
      this.username = "";
    }
  }
}
</script>