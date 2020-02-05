<template>
  <div>
    <!-- dddd -->
    <el-cascader
      :options="options"
      :props="props"
      :show-all-levels="false"
      v-model="selectedOptions3"
      style="width:100%"
      placeholder="试试搜索：项目"
      filterable
      clearable
      collapse-tags
      change-on-select
      @change="changeServitem"
    />
  </div>
</template>

<script>
import { queryServitemTypeTreeData } from '../../api/commonApi/commonApi'
export default {
  name: '',
  components: {

  },
  mixins: [

  ],
  props: {
    dataObjservitems: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      props: {
        multiple: true,
        value: 'servitemTypeId',
        label: 'servitemType'
      },
      options: [],
      selectedOptions3: []
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    this.getTreeData()
  },
  mounted() {

  },
  methods: {
    assignmentTree(data) {
      console.log(data)
      this.selectedOptions3 = data
    },
    // 获取级联数据
    getTreeData() {
      let params = {}
      queryServitemTypeTreeData(params).then(res => {
        if (res.data.code === 0) {
          this.options = res.data.data
        }
      })
    },
    // 选择ie
    changeServitem(value) {
      // console.log(value[value.length - 1])

      // let data = value[value.length - 1]
      this.$emit('getServitemType', value)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
