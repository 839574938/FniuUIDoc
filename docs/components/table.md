# C-Table 组件

二次封装`Element-Plus`表格组件，可通过column直接配置，新增表格分页可通过pagination配置

由于`vitepress`默认样式导致 默认样式请参考`el-table`

## OverStep

:::demo 默认超过三个后显示更多操作，个数可通过`over-step-count`配制

```vue
<template>
  <div>
    <c-table
      border
      :columns="columns"
      :data="data"
      :pagination="pagination"
      @paginationChange="handlePaginationChanged"
    >
      <template #expand>
        <div>
          <h3>Family</h3>
          <div>66666</div>
        </div>
      </template>
    </c-table>
  </div>
</template>
<script>
export default {
  setup() {
    const columns = [
      {
        label: '序号',
        type: 'index',
        align: "center",
        width: 60,
      },
      {
        label: '详情',
        type: 'expand',
        width: 60,
      },
      {
        label: 'date',
        prop: 'date',
        renderText: (scope) => {
          return scope.row.date
        },
        width: '196',
      },
      {
        label: 'name',
        prop: 'name'
      },
      {
        label: 'empty text',
      },
      {
        label: '状态',
        type: 'status',
        renderText: () => {
          return '成功';
        },
        status: 'danger',
        statusType: 'dot'
      },
      {
        label: '状态',
        type: 'status',
        renderText: () => {
          return '成功';
        },
        status: () => 'transparent',
        statusType: 'tag'
      },
      {
        type: 'operate',
        label: '操作',
        width: 250,
        btnList: [
          {
            name: '查看0',
            onClick: () => {
              console.log(0)
            },
          },
          {
            name: '查看1',
            onClick: () => {
              console.log(1)
            },
          },
          {
            name: '查看2',
            onClick: () => {
              console.log(2)
            },
          },
          {
            name: '查看3',
            onClick: () => {
              console.log(3)
            },
          }
        ]
      }
    ]
    const data = [
      {
        id: 1,
        date: '2016-05-02',
        name: 'wangxiaohu',
      },
      {
        id: 2,
        date: '2016-05-04',
        name: 'wangxiaohu',
      },
      {
        id: 3,
        date: '2016-05-01',
        name: 'wangxiaohu',
        children: [
          {
            id: 31,
            date: '2016-05-01',
            name: 'wangxiaohu',
          },
          {
            id: 32,
            date: '2016-05-01',
            name: 'wangxiaohu',
          },
        ],
      },
      {
        id: 4,
        date: '2016-05-03',
        name: 'wangxiaohu',
      },
    ]
    const pagination = {
      currentPage: 2,
      pageSize: 20,
      total: 100,
    }

    const handlePaginationChanged = (data) => {
      console.log(data)
      pagination.currentPage = data.currentPage
      pagination.pageSize = data.pageSize
    }
    return {
      columns,
      data,
      handlePaginationChanged,
      pagination
    }
  }
}
</script>
```

:::

## Operate属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------|-----|-------|--|---------|
| columns | [配置项](#columns属性) | Array | - | []      |
| data | 数据 | Array | - | [] |
| pagination | 参考element-plus [pagination](https://element-plus.gitee.io/zh-CN/component/pagination.html#%E5%B1%9E%E6%80%A7) | Object | Boolean | - | - |
| align | 表格中所有的除了单独配置align外的会修改对其方式 | string | left / center / right | left | - |
| empty-text | 数据为空值所显示的文本 | string | - | '--' |


## Operate事件
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------|-----|-------|--|---------|
| paginationChange | pagination切换 返回 {currentPage, pageSize} | Function | - | - | - |
| el-table自带事件 | [el-table](https://element-plus.gitee.io/zh-CN/component/table.html#table-%E6%96%B9%E6%B3%95) | Function | - | - | - |

## columns属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------|-----|-------|--|---------|
| prop | 数据对应的key | string | - | - | - |
| renderText | 可自定义输出结果， 优先于prop | Function(scope): string | - | - | - |
| label | 标题 | string | - | - | - |
| width | 宽度 | string | - | - | - |
| type | 类型 | string | expand / operate / status / index / selection | - | - |
| fixed | 固定 | boolean / string | true / 'left' / 'right' | - | - |
| align | 对齐方式 | string  | 'left' / 'center' / 'right' | - | - |
| btnList | c-operate columns | Array  | - | - |
| status | 状态 | string / Function(scope): string  | info, success, warning, danger | - |
| statusType | 状态类型 | string  | dot / tag / text | tag |
| ...el-table-column | el-table-column自带参数 | any  | - | - |



