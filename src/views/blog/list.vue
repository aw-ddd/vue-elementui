<template>
  <div>
    <div
      v-for="e in textList"
      :key="e.id"
      style="margin-bottom: 20px"
    >
      <list-card :blog="e" />
    </div>
  </div>
</template>

<script>
import ListCard from '@/components/Blog/ListCard'
export default {
  name: 'List',
  components:{ListCard},
  data(){
    return{
      textList:[]
    }
  },
  created() {
    this.findAll()
  },
  methods:{
    findAll(){
      this.$request.get('/blog/findAll').then(e=>{
        this.textList = e.data.data
      })
    }
  }
}
</script>

<style scoped>

</style>
