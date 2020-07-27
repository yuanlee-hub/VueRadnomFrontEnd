<template>
    <div>
        <button @click="handleGetJSON">Get JSON</button>
        <br>
        <hr>
        <xmp>
            {{ JSON.stringify(this.getRes, null, 2) }}
        </xmp>

        <br>
        <br>
        <hr>
        <br>
        <br>


        <button @click="handlePostJSON">Post JSON</button>
        <br>
        <hr>
        <br>
        <xmp>
            {{ JSON.stringify(this.postRes, null, 2) }}
        </xmp>
    </div>
</template>

<script>
  import { getJSON, postJSON } from '@/api/json'

  export default {
    name: 'QRCode',
    data() {
      return {
        getRes: null,
        postRes: null
      }
    },

    methods: {
        handleGetJSON() {
            getJSON().then(res => {
                this.getRes = res
            })
        },
        handlePostJSON() {
            postJSON({
                    string: 'string',
                    number: 112233,
                    bool: true,
                    symbol: Symbol(),
                    NULL: null,
                    UNDEFINED: undefined,
                    NAN: NaN,
                    Infinity: Infinity,
                    date: new Date(),
                    regex: /\w+/,
                    map: new Map([[1, 'one']]),
                    set: new Set([1, 2, 3]),
                    func: function () {}
                }
            ).then(res => {
                console.log('post>res:', res)
                this.postRes = res
            })
        }
    }
  }
</script>
