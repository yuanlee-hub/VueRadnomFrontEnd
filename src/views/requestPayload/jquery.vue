<template>
    <div>
        <button @click="send('contentType=form&dataType=object&format=qs')">contentType=form&dataType=object&format=qs</button>
        <hr>

        <button @click="send('contentType=form&dataType=string&format=json')">contentType=form&dataType=string&format=json</button>
        <hr>

        <button @click="send('contentType=json&dataType=object&format=qs')">contentType=json&dataType=object&format=qs</button>
        <hr>

        <button @click="send('contentType=json&dataType=string&format=json')">contentType=json&dataType=string&format=json</button>
    </div>
</template>

<script>
    import $ from 'jquery'

    export default {
        name: "RequestPayload",
        methods: {
            send(type) {
                console.warn('send>type:', type)

                switch (type) {
                    case 'contentType=form&dataType=object&format=qs':
                        // contentType=form&dataType=object
                        $.ajax({
                            url: 'http://localhost:3602/api/v1/json?send=jquery&contentType=form&dataType=object&format=qs',
                            method: 'post',
                            data: {
                                request: 'request',
                                payload: 'payload'
                            },
                            success(res) {
                                // console.warn('send=jquery&contentType=form&dataType=object>res:', res)
                            },
                            error(err) {
                                // console.error('error:', err)
                            }
                        })
                        break

                    case 'contentType=form&dataType=string&format=json':
                        // contentType=form&dataType=string
                        $.ajax({
                            url: 'http://localhost:3602/api/v1/json?send=jquery&contentType=form&dataType=string&format=json',
                            method: 'post',
                            data: JSON.stringify({
                                request: 'request',
                                payload: 'payload'
                            }),
                            success(res) {
                                // console.warn('send=jquery&contentType=form&dataType=string>res:', res)
                            },
                            error(err) {
                                // console.error('error:', err)
                            }
                        })
                        break

                    case 'contentType=json&dataType=object&format=qs':
                        // contentType=json&dataType=object
                        $.ajax({
                            url: 'http://localhost:3602/api/v1/json?send=jquery&contentType=json&dataType=object&format=qs',
                            method: 'post',
                            contentType: 'application/json; charset=utf-8',
                            data: { // Error
                                request: 'request',
                                payload: 'payload'
                            },
                            success(res) {
                                // console.warn('send=jquery&contentType=json&dataType=object>res:', res)
                            },
                            error(err) {
                                // console.error('error:', err)
                            }
                        })
                        break

                    case 'contentType=json&dataType=string&format=json':
                        // contentType=json&dataType=string
                        $.ajax({
                            url: 'http://localhost:3602/api/v1/json?send=jquery&contentType=json&dataType=string&format=json',
                            method: 'post',
                            contentType: 'application/json; charset=utf-8',
                            data: JSON.stringify({
                                request: 'request',
                                payload: 'payload'
                            }),
                            success(res) {
                                // console.warn('send=jquery&contentType=json&dataType=string>res:', res)
                            },
                            error(err) {
                                // console.error('error:', err)
                            }
                        })
                        break
                }

            }
        }
    }
</script>

<style scoped>

</style>