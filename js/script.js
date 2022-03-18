const app=new Vue({
  el:"#app",
  data:{
    userText:"",
    list:[],
  },
  methods:{
    addItem(userText){
      if(userText!==""){
        this.list.push({text:userText.trim()}),
        this.userText=""
      }
    },
    removeItem(index){
      this.list.splice(index, 1)
    }
  }
})