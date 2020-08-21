<template>
    <div>
        <button @click="send('contentType=form&dataType=object&format=json')">contentType=form&dataType=object&format=json</button>
        <hr>

        <button @click="send('contentType=form&dataType=string&format=json')">contentType=form&dataType=string&format=json</button>
        <hr>

        <button @click="send('contentType=json&dataType=object&format=json')">contentType=json&dataType=object&format=json</button>
        <hr>

        <button @click="send('contentType=json&dataType=string&format=json')">contentType=json&dataType=string&format=json</button>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "RequestPayload",
        methods: {
            send(type) {
                console.warn('send>type:', type)

                switch (type) {
                    case 'contentType=form&dataType=object&format=json':
                        // contentType=form&dataType=object
                        axios({
                            url: 'http://localhost:3602/api/v1/json?send=axios&contentType=form&dataType=object&format=json',
                            method: 'post',
                            headers: { 'content-type': 'application/x-www-form-urlencoded' },
                            data: {
                                request: 'request',
                                payload: 'payload'
                            }
                        }).then(res => {
                            // console.warn('send=axios&contentType=form&dataType=object>res:', res)

                        }).catch(err => {
                            // console.error('error:', err)
                        })
                        break

                    case 'contentType=form&dataType=string&format=json':
                        // contentType=form&dataType=string
                        // contentType=form&dataType=string
                        axios({
                            url: 'http://localhost:3602/api/v1/json?send=axios&contentType=form&dataType=string&format=json',
                            method: 'post',
                            headers: { 'content-type': 'application/x-www-form-urlencoded' },
                            data: JSON.stringify({
                                request: 'request',
                                payload: 'payload'
                            })
                        }).then(res => {
                            // console.warn('send=axios&contentType=form&dataType=string>res:', res)

                        }).catch(err => {
                            // console.error('error:', err)
                        })
                        break

                    case 'contentType=json&dataType=object&format=json':
                        // contentType=json&dataType=object
                        // contentType=json&dataType=object
                        axios({
                            url: 'http://localhost:3602/api/v1/json?send=axios&contentType=json&dataType=object&format=json',
                            method: 'post',
                            headers: { 'content-type': 'application/json; charset=utf-8' },
                            data: {
                                request: 'request',
                                payload: 'payload'
                            }
                        }).then(res => {
                            // console.warn('send=axios&contentType=json&dataType=object>res:', res)

                        }).catch(err => {
                            // console.error('error:', err)
                        })
                        break

                    case 'contentType=json&dataType=string&format=json':
                        // contentType=json&dataType=string
                        // contentType=json&dataType=string
                        axios({
                            url: 'http://localhost:3602/api/v1/json?send=axios&contentType=json&dataType=string&format=json',
                            method: 'post',
                            headers: { 'content-type': 'application/json; charset=utf-8' },
                            data: JSON.stringify({
                                request: 'request',
                                payload: 'payload'
                            })
                        }).then(res => {
                            // console.warn('send=axios&contentType=json&dataType=string>res:', res)

                        }).catch(err => {
                            // console.error('error:', err)
                        })
                        break
                }

            }
        }
    }
</script>

<style scoped>

</style>