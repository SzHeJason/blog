import Component, { Data } from './process'

// type A = Material.ArrayDataSet | Material.MenuDataSet
// type B = Material.DataSet
// type AB = Exclude<B, A>

// type C = Utils.DistributiveOmit<AB, 'key'>[]

// const a: A

// const b: B

// const ab: AB

// const c: C = [{t}]

const config: Material.ConfigModel<Data> = {
  // 组件类型
  type: 'Process',
  // 组件名称
  name: '进度控制',
  // 描述
  desc: '进度控制',
  // 组件对象
  component: Component,
  // 组件预览图片
  icon: 'https://sola.gtimg.cn/aoi/sola/20200511204827_hkSgxfnHwn.jpg',
  /**
   * 可编辑配置
   */
  dataSets: [
    {
      type: 'date',
      key: 'startTime',
    },
    {
      type: 'select',
      key: 'type',
      title: '展示类型',
      placeholder: '请选择你的展示类型',
      options: [
        {
          label: '向导',
          value: 'wizard',
        },
        {
          label: '时间轴',
          value: 'timeline',
        },
      ],
    },
    {
      type: 'array',
      key: 'dataSource',
      title: '数据源',
      properties: [
        {
          type: 'object',
          properties: [
            {
              key: 'title',
              type: 'string',
              title: '标题',
            },
            {
              key: 'desc',
              type: 'string',
              title: '描述',
            },
            {
              key: 'icon',
              type: 'string',
              title: '图标',
            },
          ],
        },
      ],
    },
  ],
  /**
   * 组件联动配置
   */
  eventSets: [],
  /**
   * 新建组件默认数据
   */
  create: () => {
    return {
      style: {
        width: 375,
        height: 230,
      },
      data: {
        type: 'wizard',
        dataSource: [
          {
            title: 'Text Text Text',
            desc: 'Text Text Text',
          },
          {
            title: 'Text Text Text',
            desc: 'Text Text Text',
          },
        ],
      },
    }
  },
}

export default config
