<template>
  <div>
    <el-input
      v-model="blog.title"
      placeholder="请输入标题"
    />
    <mavon-editor
      v-model="blog.text"
      class="mavon-edit"
      @save="save"
    />
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      blog: {
        id:'',
        title:'',
        text:'',
        createTime:'',
        updateTime:''
      }
    }
  },
  created() {
    if (this.$route.query.id) {
      this.findById(this.$route.query.id)
    }
  },
  methods:{
    save(){
      this.$request.post('/blog/save',this.blog).then(e=>{
        this.blog = e.data.data
      })
    },
    findById(id){
      this.$request.get('/blog/findById/'+id).then(e=>{
        this.blog = e.data.data
      })
    }
  }
}
</script>

<style scoped>
.mavon-edit{
  height: calc(100vh - 120px);
}
</style>
