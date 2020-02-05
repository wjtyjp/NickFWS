<template>
  <div class="">
    <el-transfer
      :filter-method="filterMethod"
      v-model="value2"
      :data="data2"
      filterable
      filter-placeholder="请输入城市拼音"/>
    <br>
    <el-button class="btn-2text">按钮</el-button>
    <el-button size="small" class="btn-2text">按钮</el-button>
    <el-button size="mini" class="btn-2text">按钮</el-button>
    <el-button type="primary" class="btn-2text">按钮</el-button>
    <el-button type="primary" size="small" class="btn-2text">按钮</el-button>
    <el-button type="primary" size="mini" class="btn-2text">按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="primary" disabled>主要按钮</el-button>
    <br><br>
    <el-button type="success" class="btn-2text">按钮</el-button>
    <el-button type="success" size="small" class="btn-2text">按钮</el-button>
    <el-button type="success" size="mini" class="btn-2text">按钮</el-button>
    <el-button type="success">主要按钮</el-button>
    <el-button type="success" disabled>主要按钮</el-button>
    <br><br>
    <el-button type="warning" class="btn-2text">按钮</el-button>
    <el-button type="warning" size="small" class="btn-2text">按钮</el-button>
    <el-button type="warning" size="mini" class="btn-2text">按钮</el-button>
    <el-button type="warning">主要按钮</el-button>
    <el-button type="warning" disabled>主要按钮</el-button>
    <br><br>
    <el-button type="danger" class="btn-2text">按钮</el-button>
    <el-button type="danger" size="small" class="btn-2text">按钮</el-button>
    <el-button type="danger" size="mini" class="btn-2text">按钮</el-button>
    <el-button type="danger">主要按钮</el-button>
    <el-button type="danger" disabled>主要按钮</el-button>
    <br><br>
    <el-button class="btn-2text btn-ghost">按钮</el-button>
    <el-button size="small" class="btn-2text btn-ghost">按钮</el-button>
    <el-button size="mini" class="btn-2text btn-ghost">按钮</el-button>
    <el-button class="btn-ghost">主要按钮</el-button>
    <el-button class="btn-ghost" disabled>主要按钮</el-button>
    <br><br>
    <el-tabs v-model="activeName">
      <el-tab-pane label="用户管理" name="first"><span style="display: block;padding: 0 24px;">用户管理</span></el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="1">定时任务补偿</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="2">定时任务补偿</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="3">定时任务补偿</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="4">定时任务补偿</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="5">定时任务补偿</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="6">定时任务补偿</el-tab-pane>
    </el-tabs>
    <br><br>
    <el-input
      v-model="input"
      placeholder="请输入内容"
      clearable/>
    <br><br>
    <el-input
      v-model="input1"
      class="input-success"
      placeholder="请输入内容"
      suffix-icon="el-icon-success"/>
    <br><br>
    <el-input
      v-model="input2"
      class="input-warning"
      placeholder="请输入内容"
      suffix-icon="el-icon-warning"/>
    <br><br>
    <el-input
      v-model="input3"
      class="input-error"
      placeholder="请输入内容"
      suffix-icon="el-icon-error"/>
    <br><br>
    <el-input
      v-model="input4"
      class="input-loading"
      placeholder="请输入内容"
      suffix-icon="el-icon-loading"/>
    <br><br>
    <el-input-number v-model="num" :min="1" :max="10" controls-position="right"/>
    <br><br>
    <div>
      <el-radio v-model="radio" label="1">备选项</el-radio>
      <el-radio v-model="radio" label="2">备选项</el-radio>
      <el-radio v-model="radio" label="3" disabled>备选项</el-radio>
    </div>
    <br>
    <el-radio-group v-model="radio1">
      <el-radio-button label="上海"/>
      <el-radio-button label="北京"/>
      <el-radio-button label="广州"/>
      <el-radio-button disabled label="深圳"/>
    </el-radio-group>
    <br><br>
    <el-checkbox v-model="checked">备选项</el-checkbox>
    <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
    <el-checkbox v-model="checked2" disabled>备选项1</el-checkbox>
    <br><br>
    <el-switch
      v-model="value"
      active-color="#1B65B9"
      inactive-color="#C0C4CC"/>
    <br><br>
    <el-switch
      v-model="value1"
      class="switch-mini"
      active-color="#1B65B9"
      inactive-color="#C0C4CC"/>
    <br><br>
    <el-switch
      v-model="value3"
      class="switch-special"
      active-text="开"
      inactive-text="关"
      active-color="#1B65B9"
      inactive-color="#C0C4CC"/>
    <br><br>
    <el-table
      :data="tableData"
      highlight-current-row
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180"
        align="center"/>
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
        align="center"/>
      <el-table-column
        prop="address"
        label="地址"/>
    </el-table>
    <el-pagination
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      :total="400"
      small
      background
      layout="total, sizes, prev, pager, next, jumper"/>
    <br><br>
    <el-date-picker
      v-model="value4"
      :picker-options="pickerOptions"
      align="right"
      type="date"
      placeholder="选择日期"/>
    <el-date-picker
      v-model="value5"
      type="month"
      placeholder="选择月"/>
    <el-date-picker
      v-model="value6"
      type="year"
      placeholder="选择年"/>
    <el-date-picker
      v-model="value7"
      :picker-options="pickerOptions1"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"/>
    <br><br>
    <el-time-picker
      v-model="value8"
      placeholder="任意时间点"/>
    <el-time-picker
      v-model="value9"
      is-range
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder="选择时间范围"/>
    <br><br>
    <el-date-picker
      v-model="value10"
      :picker-options="pickerOptions2"
      type="datetime"
      placeholder="选择日期时间"
      align="right"/>
    <el-date-picker
      v-model="value11"
      :picker-options="pickerOptions3"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right"/>
    <br><br>
    <el-alert
      title="成功提示的文案"
      type="success"/>
    <br>
    <el-alert
      title="消息提示的文案"
      type="info"/>
    <br>
    <el-alert
      title="警告提示的文案"
      type="warning"/>
    <br>
    <el-alert
      title="错误提示的文案"
      type="error"/>
    <br>
    <el-alert
      title="成功提示的文案"
      type="success"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon/>
    <br>
    <el-alert
      title="消息提示的文案"
      type="info"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon/>
    <br>
    <el-alert
      title="警告提示的文案"
      type="warning"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon/>
    <br>
    <el-alert
      title="错误提示的文案"
      type="error"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon/>
    <br><br>
    <el-steps :active="1">
      <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"/>
      <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"/>
      <el-step title="步骤 3" description="这段就没那么长了"/>
    </el-steps>
    <br>
    <el-steps :active="2" finish-status="success" simple>
      <el-step title="步骤 1" />
      <el-step title="步骤 2" />
      <el-step title="步骤 3" />
      <el-step title="步骤 4" />
    </el-steps>
    <br><br>
    <el-badge :value="12" class="item">
      <el-button>评论</el-button>
    </el-badge>
    <el-badge :value="3" class="item">
      <el-button>回复</el-button>
    </el-badge>
    <el-badge :value="1" class="item" type="primary">
      <el-button>评论</el-button>
    </el-badge>
    <el-badge :value="2" class="item" type="warning">
      <el-button>回复</el-button>
    </el-badge>
    <el-badge value="New" class="item">
      <el-button>评论</el-button>
    </el-badge>
    <el-badge value="Hot" class="item">
      <el-button>回复</el-button>
    </el-badge>
    <el-badge is-dot class="item">数据查询</el-badge>
    <el-badge is-dot class="item">
      <el-button class="share-button" icon="el-icon-share" type="primary"/>
    </el-badge>
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        点我查看<i class="el-icon-caret-bottom el-icon--right"/>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item class="clearfix">
          评论
          <el-badge :value="12" class="mark" />
        </el-dropdown-item>
        <el-dropdown-item class="clearfix">
          回复
          <el-badge :value="3" class="mark" />
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <br><br>
    <el-tag>标签一</el-tag>
    <el-tag type="success">标签二</el-tag>
    <el-tag type="warning">标签四</el-tag>
    <el-tag type="danger">标签五</el-tag>
    <br><br>
    <el-table
      v-loading="loading"
      :data="tableData"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-loading"
      element-loading-background="rgba(255, 255, 255, 0.7)"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180"/>
      <el-table-column
        prop="name"
        label="姓名"
        width="180"/>
      <el-table-column
        prop="address"
        label="地址"/>
    </el-table>
    <br><br>
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
    <el-dialog
      :visible.sync="dialogVisible"
      title="提示"
      width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <br><br>
    <el-tree :data="data" :props="defaultProps" show-checkbox/>
    <br><br>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    </el-breadcrumb>
    <br><br>
    <el-progress :percentage="50"/>
    <el-progress :text-inside="true" :stroke-width="26" :percentage="70"/>
    <el-progress :percentage="25" type="circle"/>
    <el-progress :percentage="50" type="circle" status="exception"/>
    <el-slider v-model="value1"/>
  </div>
</template>

<script>
export default {
  data() {
    const generateData2 = _ => {
      const data = []
      const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都']
      const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu']
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index]
        })
      })
      return data
    }
    return {
      data2: generateData2(),
      value2: [],
      filterMethod(query, item) {
        return item.pinyin.indexOf(query) > -1
      },
      activeName: 'second',
      input: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      num: '1',
      radio: '1',
      radio1: '上海',
      checked: true,
      checked1: false,
      checked2: true,
      value: true,
      value1: true,
      value3: true,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      currentPage: 4,
      pickerOptions: {
        disabledDate(time) {
          // return time.getTime() > Date.now()
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      value4: '',
      value5: '',
      value6: '',
      pickerOptions1: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      value7: '',
      value8: '',
      value9: [new Date(2019, 9, 10, 8, 40), new Date(2019, 9, 10, 9, 40)],
      pickerOptions2: {
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      value10: '',
      pickerOptions3: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      value11: [new Date(2019, 10, 10, 10, 10), new Date(2019, 10, 11, 10, 10)],
      loading: true,
      dialogVisible: false,
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.item {
  margin-right: 40px;
}
</style>
