<template>
    <table width="100%" border="1">
        <thead>
        <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Age</td>
            <td>Sex</td>
            <td>Height</td>
            <td>Width</td>
            <td>SignUp</td>
            <td>LastLoginTime</td>
            <td>CreatedAt</td>
            <td>UpdatedAt</td>
        </tr>
        </thead>
        <tr v-for="item of []" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.sex }}</td>
            <td>{{ item.height }}</td>
            <td>{{ item.width }}</td>
            <td>{{ item.signUp }}</td>
            <td>{{ item.lastLoginTime }}</td>
            <td>{{ item.createdAt }}</td>
            <td>{{ item.updatedAt }}</td>
        </tr>
    </table>
</template>

<script>
    import { getResponsePayload } from '@/api/json'

    export default {
        name: "ResponsePayload",
        data() {
            return {
                list: null
            }
        },
        created() {
            getResponsePayload().then(res => {
                console.warn('res>length:', res.data && res.data.length)
                // this.list = res.data
            }).catch(err => {
                console.error('error:', err)
            })
        }
    }
</script>

<style scoped>

</style>