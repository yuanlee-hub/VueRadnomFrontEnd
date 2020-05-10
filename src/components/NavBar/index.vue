<template>
    <div class="nav-bar">
        <dl v-for="item of items" :key="item.name">
            <dt>
                <router-link :to="{name: item.name}">{{ item.name }}</router-link>
            </dt>
            <template v-if="item.children">
                <dd v-for="sub of item.children" :key="sub.name">
                    <router-link :to="{name: sub.name}">{{ sub.name }}</router-link>
                </dd>
            </template>
        </dl>
    </div>
</template>

<script>
  import { routes } from '@/router'

  export default {
    name: "NavBar",
    data() {
      return {
        routes
      }
    },
    computed: {
      items() {
        const items = []
        this.routes.filter(item => {
          // console.log('item:', item)
          const subs = item.children && item.children.filter(sub => sub.name && !sub.hidden)
          // console.log('subs:', subs)
          items.push({
            name: item.name,
            children: subs.length && subs.map(sub => ({ name: sub.name })) || null
          })
        })
        console.log('items:', items)
        return items
      }
    },
    created() {
      console.log('routes:', this.routes)
    }
  }
</script>

<style scoped>

</style>
