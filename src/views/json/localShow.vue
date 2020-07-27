<template>
    <div>
        JSON.string:
        <xmp>
            {{ JSON.stringify(this.json, null, 2) }}
        </xmp>
    </div>
</template>

<script>
    export default {
        name: "LocalShow",
        data() {
            return {
                json: {
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
                },
                str: `{
                    string: 'string',
                    number: 112233,
                    bool: true,
                    symbol: Symbol(),
                    NULL: null,
                    UNDEFINED: undefined,
                    NAN: NaN,
                    Infinity: Infinity,
                    date: new Date(),
                    regex: /\\w+/,
                    map: new Map([[1, 'one']]),
                    set: new Set([1, 2, 3]),
                    func: function () {}
                }`
            }
        },
        created() {
            // console.log('parse:', JSON.parse(this.str)) // Error
        }
    }
</script>