# C-Status 状态组件

二次封装`Element-Plus`tag组件。

## Tag 类型

:::demo

```vue

<template>
  <c-status>默认状态</c-status>
  <c-status type="info">默认状态</c-status>
  <c-status type="warning">默认状态</c-status>
  <c-status type="success">默认状态</c-status>
  <c-status type="danger">默认状态</c-status>
</template>
```

:::

## Dot 类型

:::demo

```vue

<template>
  <c-status shape="dot">默认状态</c-status>
  <c-status shape="dot" type="info">默认状态</c-status>
  <c-status shape="dot" type="warning">默认状态</c-status>
  <c-status shape="dot" type="success">默认状态</c-status>
  <c-status shape="dot" type="danger">默认状态</c-status>
</template>
```

:::

## Text 类型

:::demo

```vue

<template>
  <c-status shape="text">默认状态</c-status>
  <c-status shape="text" type="info">默认状态</c-status>
  <c-status shape="text" type="warning">默认状态</c-status>
  <c-status shape="text" type="success">默认状态</c-status>
  <c-status shape="text" type="danger">默认状态</c-status>
</template>
```

:::

## Element自带属性

:::demo

```vue

<template>
  <c-status color="#fff" closable size="large" @close="onClose">默认状态</c-status>
</template>
<script>
export default {
  setup() {
    const onClose = () => {
      console.log('close')
    }
    return {onClose}
  }
}

</script>
```

:::

## Status 属性

| 参数      | 说明 | 类型    | 可选值                                             | 默认值  |
|---------|--| ------- | -------------------------------------------------- | ------- |
| shape   | 形状 | string  | tag / dot / text                            | tag |
|  ...element-plus   | 自带属性 | any  | - | - |

