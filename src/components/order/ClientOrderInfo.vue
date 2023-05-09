<template>
    <div>

    </div>
</template>

<script>
import axios from 'axios' 
import cookies from 'vue-cookies'
    export default {
        methods: {
            client_order_handler: function( ) {
                axios.request({ 
                    url: 'https://foodie.bymoen.codes/api/client-order',
                    headers: {
                        "x-api-key": `rnA2v1qeHqSIjeL98kXk`,
                    }

                })
            }
        }
    }
</script>

<style scoped>

</style>