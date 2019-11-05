<template>
    <div id="app">
        <VList></VList>
        <div class="messAge">
            <Vinput @getName="getName"></Vinput>
            <Vtextarea @getContent="getContent"></Vtextarea>
            <button @click="handleSend">发布</button>
        </div>
    </div>
</template>




<script>
import Vinput from "./components/Vinput"
import Vtextarea from "./components/Vtextarea"
import VList from "./components/Vlist"
export default {
    name: "App",
    data() {
        return {
            newContent: {
                username: "",
                content: "",
            }
        }
    },
    components:{
        Vinput,
        Vtextarea,
        VList
    }
}
</script>




<style>
#app {
    width: 600px;
    height: 500px;
    border: 1px solid black;
    margin: 100px auto;
}
.messAge{
    width: 300px;
    height: 200px;
    margin: 10px auto;
}
</style>