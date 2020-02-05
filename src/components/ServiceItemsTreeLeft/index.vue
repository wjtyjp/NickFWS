<template>
  <div>
    <section class="layer">
      <!-- :style="'height:'+ treeBoxHeight +'px;'" -->
      <div class="tree-box">
        <el-input
          v-model="filterText"
          placeholder="输入关键字进行过滤"/>
        <el-tree
          ref="tree2"
          :data="treeData"
          :props="defaultProps"
          :filter-node-method="filterNode"
          :default-expanded-keys="['1']"
          node-key="servitemType"
          accordion
          @node-click="handleNodeClick"/>
      </div>
    </section>
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
      filterText: '',
      //   treeBoxHeight: window.innerHeight - 124,
      treeData: [],
      defaultProps: {
        value: 'servitemType',
        label: 'servitemTypeName'
      },
      treeExpandData: []
    }
  },
  computed: {

  },
  watch: {

    // 输入框查询对应节点
    filterText(val) {
      this.$refs.tree2.filter(val)
    }
  },
  created() {
    this.getLeftTreeData()
  },
  mounted() {

  },
  methods: {
    //   获取列表数据
    getLeftTreeData() {
      queryServitemTypeTreeData({}).then(res => {
        if (res.data.code === 0) {
          this.treeData = res.data.data
          console.log(res.data.data[0].servitemType)
          this.treeExpandData.push(res.data.data[0].servitemType)
        }
      })
    },
    // 定义节点过滤规则
    filterNode(value, data) {
      if (!value) return true
      return data.servitemTypeName.indexOf(value) !== -1
    },
    // 节点点击事件
    handleNodeClick(data) {
      this.$emit('nodeClick', data)
      // console.log(data)
    //   this.searchForm.servitemType = data.servitemTypeId
    //   this.getConditionList()
    }
  }
}
</script>

<style scoped lang="scss">
    .tree-box{
        // max-height: 400px;
        height: 100%;
        // overflow: auto;
    }
</style>
