<template>
    <div>
        <p> {{response.data.username}} </p>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
    export default {
       mounted(){
        let client_id = cookies.get('client_id')
        axios.request({
            url: `https://foodie.bymoen.codes/api/client`,
            headers: {
                "x-api-key": "rnA2v1qeHqSIjeL98kXk",
            },
            params: {
                client_id: client_id
            }
        }).then((response) => {
            response;
        }).catch((error) => {
            error;
        })
       } 
    }
</script>

<style scoped>

</style>