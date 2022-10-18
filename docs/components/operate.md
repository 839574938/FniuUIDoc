# C-Operate 组件

操作按钮的组件

## OverStep

:::demo 默认超过三个后显示更多操作，个数可通过`over-step-count`配制

```vue

<template>
  <c-operate :columns="columns"></c-operate>
  <c-operate :columns="columns" :over-step-count="2"></c-operate>
</template>
<script>
export default {
  setup() {
    const columns = [
      {
        name: '查看0',
        loading: true,
        size: 'small',
        onClick: () => {
          console.log(0)
        },
      },
      {
        name: '查看1',
        disabled: true,
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
        disabled: true,
        onClick: () => {
          console.log(3)
        },
      }
    ]
    return {columns}
  }
}
</script>
```

:::

## Custom

:::demo 默认超过三个后显示更多操作，个数可通过`over-step-count`配制

```vue

<template>
  <c-operate :columns="columns" type="custom"></c-operate>
</template>
<script>
export default {
  setup() {
    const columns = [
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
        children: [
          {
            name: '查看1-1',
            onClick: () => {
              console.log('1-1')
            },
          },
          {
            name: '查看1-2',
            onClick: () => {
              console.log('1-2')
            },
          }
        ]
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
    
    return {columns}
  }
}
</script>
```

:::

## Operate属性

| 参数      | 说明  | 类型    | 可选值 | 默认值     |
|---------|-----|-------|--|---------|
| columns | 配置项 | Array | - | []      |
| type    | 类型  | string | overStep / custom | overStep |
| over-step-count | type为overStep生效, 超出个数 | number | - | 3 |

## columns属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------|-----|-------|--|---------|
| name | 按钮名称 | string | - | - |
| disabled | 是否禁用 | boolean | - | - |
| type | 状态 | string | - | - |
| loading | 加载 | boolean | - | - |
| children | 子项 | Array | - | - |
| bg | 背景 | string | - | - |
| autoInsertSpace | 自动补充空格 | boolean | - | - | 

