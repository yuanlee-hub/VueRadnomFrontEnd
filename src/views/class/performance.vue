<template>
  <div>
  <h1>实例化 class & 对象字面量性能比较</h1>
  <pre>
    {{ total }} 条数据 & 20 个字段的情况下：
    <hr>
    对象字面量耗时：{{ objectTime }} ms<br/>
    实例化 class耗时：{{ classTime }} ms<br/>
  </pre>

  </div>
</template>

<script>
  export default {
    name: 'ClassPerformance',
    data() {
      return {
        total: 1000,
        objects: null,
        objectTime: null,
        classes: null,
        classTime: null,
      }
    },
    created() {
      let list = Array.from({ length: this.total })
      const objStart = Date.now()
      this.objects = list.map((_, idx) => ({
        id: idx,
        f1: `f1-${idx}`,
        f2: `f2-${idx}`,
        f3: `f3-${idx}`,
        f4: `f4-${idx}`,
        f5: `f5-${idx}`,
        f6: `f6-${idx}`,
        f7: `f7-${idx}`,
        f8: `f8-${idx}`,
        f9: `f9-${idx}`,
        f10: `f10-${idx}`,
        f11: `f11-${idx}`,
        f12: `f12-${idx}`,
        f13: `f13-${idx}`,
        f14: `f14-${idx}`,
        f15: `f15-${idx}`,
        f16: `f16-${idx}`,
        f17: `f17-${idx}`,
        f18: `f18-${idx}`,
        f19: `f19-${idx}`
      }))
      this.objectTime = Date.now() - objStart

      class F {
        constructor(data = {}) {
          this.id = data.id
          this.f1 = data.f1
          this.f2 = data.f2
          this.f3 = data.f3
          this.f4 = data.f4
          this.f5 = data.f5
          this.f6 = data.f6
          this.f7 = data.f7
          this.f8 = data.f8
          this.f9 = data.f9
          this.f10 = data.f10
          this.f11 = data.f11
          this.f12 = data.f12
          this.f13 = data.f13
          this.f14 = data.f14
          this.f15 = data.f15
          this.f16 = data.f16
          this.f17 = data.f17
          this.f18 = data.f18
          this.f19 = data.f19
        }
      }

      list = Array.from({length: this.total})
      const classStart = Date.now()
      this.classes = list.map((_,idx) => new F({
        id: idx,
        f1: `f1-${idx}`,
        f2: `f2-${idx}`,
        f3: `f3-${idx}`,
        f4: `f4-${idx}`,
        f5: `f5-${idx}`,
        f6: `f6-${idx}`,
        f7: `f7-${idx}`,
        f8: `f8-${idx}`,
        f9: `f9-${idx}`,
        f10: `f10-${idx}`,
        f11: `f11-${idx}`,
        f12: `f12-${idx}`,
        f13: `f13-${idx}`,
        f14: `f14-${idx}`,
        f15: `f15-${idx}`,
        f16: `f16-${idx}`,
        f17: `f17-${idx}`,
        f18: `f18-${idx}`,
        f19: `f19-${idx}`
      }))
      this.classTime = Date.now() - classStart
    }
  }
</script>
