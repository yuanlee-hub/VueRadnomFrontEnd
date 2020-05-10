<template>
    <div id="test">
        <ul>
            <li v-for="item of list" :key="item.id">
                <router-link :to="{ name: 'TestDetail', params:{ id: item.id, data: item } }">
                    Id: {{ item.id }} | Title: {{ item.title }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'Test',
    data() {
      return {
        list: [
          { id: 1, title: 'Test-1' },
          { id: 2, title: 'Test-2' },
          { id: 3, title: 'Test-3' }
        ]
      }
    }
  }
</script>
