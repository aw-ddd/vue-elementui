<template>
  <div>
    <el-card class="box-card">
      <el-link
        type="primary"
      >
        <span
          class="title-font"
          @click="toEdit(blog.id)"
        >{{ blog.title }}</span>
      </el-link>
      <div class="update-time">
        <i class="el-icon-pie-chart" />
        {{
          blog.updateTime ? $dateUtils.formatStandardDate(blog.updateTime) : $dateUtils.formatStandardDate(blog.createTime)
        }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'ListCard',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    blog: {
      type: Object
    }
  },
  created() {
  },
  methods: {
    toEdit(id) {
      console.log(id)
      this.$router.push({ path: `/blog/write`, query: { id } })
    }
  }
}
</script>

<style scoped>
.box-card {
  width: 70%;
  margin: 0 auto;
  box-sizing: border-box;
  border-radius: 5px;
}

.update-time {
  margin: 15px 0 -10px 0;
  font-size: 10px;
  color: #d7b5aa;
}

.title-font {
  color: #6f495e;
  font-size: 16px;
  font-weight: 600;
}
</style>
