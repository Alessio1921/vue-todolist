const app=new Vue({
  el:"#app",
  data:{
    userText:"",
    list:[],
  },
  methods:{
    addItem(userText){
      if(userText!==""){
        this.list.push({
          text:userText.trim(),
          done:false
        }),
        this.userText=""
      }
    },
    removeItem(index){
      this.list.splice(index, 1)
    },
    checked(index){
      this.list[index].done=!this.list[index].done,
      console.log(this.list[index].done)
    }
  }
})