<template>
    <div>
        <span class="title">留言：</span>
        <textarea placeholder="请输入....." v-model="inputContent"></textarea>
        </div>
</template>
<script>
export default {
    name:"Vtextarea",
    data(){
        return{
            inputcontent: ""
        }
    },
     methods: {
    getContent() {
      // 该方法里面要做的事儿：将该组件上面的数据传递给父组件
      this.$emit("getContent", this.inputcontent);
      this.inputcontent = "";
    }
  }
}
</script>