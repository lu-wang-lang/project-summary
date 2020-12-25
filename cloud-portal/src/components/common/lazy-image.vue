<template>
  <el-image :src="src" lazy></el-image>
</template>

<script>
import { Image } from "element-ui";
export default {
  name:'LazyImg',
  props:{
    src:{
      default:'../../assets/images/slack-square.svg',
      type:String
    }
  },
  components:{
    'el-image':Image
  }
}
</script>