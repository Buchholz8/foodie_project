<template>
    <div>
        <p> {{message}} </p>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        data(){
            return{
                message: undefined,
            }
        },
      mounted( ) {
        axios.request({
            url:`https:foodie.bymoen.codes/api/validate`,
            headers: {
            'x-api-key' : 'rnA2v1qeHqSIjeL98kXk'
            },
        }).then((response) => {
            this.message = response[`data`]
        }).catch((error) => {
            error;
        })
      }  
    }
</script>

<style scoped>

</style>