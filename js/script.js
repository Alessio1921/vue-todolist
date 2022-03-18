const app=new Vue({
  el:"#app",
  data:{
    userText:"",
    selected: '',
    list:[]
  },
  methods:{
    addItem(userText,selected){
      if(userText!=="" && selected!==""){
        this.list.push({
          text:userText.trim(),
          done:false,
          category:this.selected
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
    },
  }
})