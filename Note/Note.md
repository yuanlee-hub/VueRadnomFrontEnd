# cookie (读写)同源策略
    只受域名和 path 限制（即域名或 path 有任一不同，即为不同的 cookie）
    不受端口限制
    子域名（访问时）可以共享（携带）父域名下的 cookie  



# 组件内 <style>

*离开当前组件（页面），样式表不会自动删除，刷新后会删除*

### scoped

只对当前组件起作用

### 非 scoped

对整个应用起作用



# JSON

## 值（*value*）可以是双引号括起来的字符串（*string*）、数值(number)、`true`、`false`、 `null`、对象（object）或者数组（array）。这些结构可以嵌套。



### 非法值序列化处理规则：

#### Date 会序列化成 ISO格式

#### Symbol / Function / undefined 值会直接剔除

#### RegExp / Map / Set / Infinity  值会转换为空对象字面量 ({})

### HTTP 客户端发送 / 服务端响应 非法值，都会遵守以上处理规则



### 非法值解析时，会报错

