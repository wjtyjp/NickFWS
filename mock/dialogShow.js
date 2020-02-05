import Mock from 'mockjs'

export default {
  treeData: () => {
    const items = Mock.mock({
      'items':
      [{
        label: '综合医疗服务',
        icon: 'el-icon-message',
        children: [{
          label: '一般医疗服务',
          icon: 'el-icon-news',
          children: [{
            icon: 'el-icon-tickets',
            label: '普通门诊诊察费'
          },
          {
            icon: 'el-icon-tickets',
            label: '副主任医师门诊诊察费'
          },
          {
            icon: 'el-icon-tickets',
            label: '主任医师门诊诊察费'
          },
          {
            icon: 'el-icon-tickets',
            label: '门/急诊留观诊察费'
          }
          ]
        },
        {
          label: '一般治疗操作',
          icon: 'el-icon-news',
          children: [{
            icon: 'el-icon-tickets',
            label: '经烧伤创面静脉穿刺术'
          },
          {
            icon: 'el-icon-tickets',
            label: '加压快速输血'
          },
          {
            icon: 'el-icon-tickets',
            label: '外周静脉营养输注'
          },
          {
            icon: 'el-icon-tickets',
            label: '新生儿换血术'
          }
          ]
        }
        ]
      },
      {
        label: '病理学诊断',
        icon: 'el-icon-message',
        children: [{
          icon: 'el-icon-news',
          label: '非妇科液基薄层细胞学检查与诊断'
        },
        {
          icon: 'el-icon-news',
          label: '手术标本病理诊断'
        }
        ]
      },
      {
        label: '实验室诊断',
        icon: 'el-icon-message',
        children: [{
          icon: 'el-icon-news',
          label: '血块收缩时间测定'
        },
        {
          icon: 'el-icon-news',
          label: '骨髓有核细胞计数'
        }
        ]
      },
      {
        label: '影像学诊断',
        icon: 'el-icon-message',
        children: [{
          icon: 'el-icon-news',
          label: '鞍区磁共振增强成像'
        },
        {
          icon: 'el-icon-news',
          label: '眶磁共振增强成像'
        }
        ]
      },
      {
        label: '临床诊断',
        icon: 'el-icon-message',
        children: [{
          icon: 'el-icon-news',
          label: '运动单位计数'
        },
        {
          icon: 'el-icon-news',
          label: '周围神经活检术'
        }
        ]
      },
      {
        label: '临床手术治疗',
        icon: 'el-icon-message',
        children: [{
          icon: 'el-icon-news',
          label: '经皮穿刺骶神经囊肿治疗'
        },
        {
          icon: 'el-icon-news',
          label: '腰脊神经后支阻滞术'
        }
        ]
      },
      {
        label: '临床非手术治疗',
        icon: 'el-icon-message',
        children: [{
          icon: 'el-icon-news',
          label: '瘢痕激光治疗'
        },
        {
          icon: 'el-icon-news',
          label: '体表肿瘤电化学治疗'
        }
        ]
      },
      {
        label: '临床物理治疗',
        icon: 'el-icon-message',
        children: [{
          icon: 'el-icon-news',
          label: '肢体加压治疗'
        },
        {
          icon: 'el-icon-news',
          label: '局部电热按摩'
        }
        ]
      },
      {
        label: '康复医疗',
        icon: 'el-icon-message',
        children: [{
          icon: 'el-icon-news',
          label: '步态分析检查'
        },
        {
          icon: 'el-icon-news',
          label: '步态动力学分析检查'
        }
        ]
      },
      {
        label: '辅助操作',
        icon: 'el-icon-message',
        children: [{
          icon: 'el-icon-news',
          label: '腹腔镜辅助操作'
        },
        {
          icon: 'el-icon-news',
          label: '激光辅助操作'
        }
        ]
      },
      {
        label: '中医医疗服务',
        icon: 'el-icon-message',
        children: [{
          icon: 'el-icon-news',
          label: '体表窦道切开搔爬术'
        },
        {
          icon: 'el-icon-news',
          label: '锁骨骨折手法整复术'
        }
        ]
      }

      ]
    })
    return {
      code: 20000,
      data: items
    }
  },
  tableData: () => {
    const items = Mock.mock({
      'items': [{
        'HOSPITAL_NAME': '中南大学湘雅附二医院',
        'CATALOG_KIND': '综合医疗服务',
        'CATALOG_NAME': '静脉输液',
        'LIMIT_PRICE': '5',
        'GUIDE_PRICE': '4.55',
        'MARKET_PRICE': '4.66',
        'CATALOG_CODE': 'ABCA0001',
        'JJDW': '次',
        'XMNH': '评估患者及穿刺部位等，核对医嘱及患者信息，用无菌注射器配制药物，连接无菌输液器或避光输液器，取适当体位使用无菌压脉带，选择穿刺部位，皮肤消毒(直径大于5厘米)，排气，再次核对患者信息，头皮针穿刺，用无菌敷料进行固定，调节滴速并第3次核对患者信息，协助患者恢复舒适体位，处理用物，观察输液反应。必要时留置针置管护理、健康教育及心理护理，记录。如需连续输注几组液体，要核对患者信息，注意药物之间的配伍禁忌，密切观察输液反应，协助患者舒适体位。含输液过程中各种药物注入。',
        'CWNR': '留置针，专用输液器',
        'TRIAL_START_DATE': '20190101',
        'TRIAL_END_DATE': '20190131',
        'EFF_DATE': '20190101',
        'EXP_DATE': '20191231'
      },
      {
        'HOSPITAL_NAME': '中南大学湘雅附二医院',
        'CATALOG_KIND': '综合医疗服务',
        'CATALOG_NAME': '导尿管留置',
        'LIMIT_PRICE': '3',
        'GUIDE_PRICE': '2.6',
        'MARKET_PRICE': '2.8',
        'CATALOG_CODE': 'ABHA0002',
        'JJDW': '日',
        'XMNH': '评估患者病情，膀胱充盈情况等，核对患者信息，解释其目的取得配合，屏风遮挡，取适当体位，会阴擦洗，打开无菌导尿包，戴无菌手套，用麻醉润滑剂润滑导尿管，按顺序消毒，确定尿道口，插入尿管，并注入5-10毫升无菌注射用水再回抽2毫升待有阻力后固定，接通无菌尿袋，观察尿液颜色，量及性质等，及时倾倒尿液。必要时更换无菌尿袋，协助患者恢复舒适体位，处理用物，评价并记录，做好健康教育及心理护理。',
        'CWNR': '专用导尿管',
        'TRIAL_START_DATE': '20190101',
        'TRIAL_END_DATE': '20190131',
        'EFF_DATE': '20190101',
        'EXP_DATE': '20191231'
      },
      {
        'HOSPITAL_NAME': '中南大学湘雅附二医院',
        'CATALOG_KIND': '综合医疗服务',
        'CATALOG_NAME': '导引法导尿术',
        'LIMIT_PRICE': '14',
        'GUIDE_PRICE': '13.55',
        'MARKET_PRICE': '13.66',
        'CATALOG_CODE': 'ABHA0003',
        'JJDW': '次',
        'XMNH': '常规消毒，铺无菌巾，应用前端有孔的金属导尿管插进膀胱，通过内腔放入一根细的导丝，拔出金属导尿管，通过导丝放入双腔气囊导尿管，置入后导尿管球囊注水固定。',
        'CWNR': '',
        'TRIAL_START_DATE': '20190101',
        'TRIAL_END_DATE': '20190131',
        'EFF_DATE': '20190101',
        'EXP_DATE': '20191231'
      },
      {
        'HOSPITAL_NAME': '中南大学湘雅附二医院',
        'CATALOG_KIND': '综合医疗服务',
        'CATALOG_NAME': '胃肠减压',
        'LIMIT_PRICE': '10',
        'GUIDE_PRICE': '8.55',
        'MARKET_PRICE': '9.66',
        'CATALOG_CODE': 'ABGA0001',
        'JJDW': '次',
        'XMNH': '根据病情需要连续观察，评估患者病情及腹部体征等，核对医嘱及患者信息，解释其目的取得配合，取适当体位，插入胃肠减压管，连接胃肠减压装置，调节负压，协助患者恢复舒适体位，随时观察患者症状体征，观察胃液的量及性质，记录，做好健康教育及心理护理。',
        'CWNR': '',
        'TRIAL_START_DATE': '20190101',
        'TRIAL_END_DATE': '20190131',
        'EFF_DATE': '20190101',
        'EXP_DATE': '20191231'
      }
      ]
    })
    return {
      code: 20000,
      data: items
    }
  }
}
