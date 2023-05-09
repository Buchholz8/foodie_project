<template>
    <div>
        <p> {{menu_item[`name`]}} </p>
        <p> {{menu_item[`description`]}} </p>
        <img :src="menu_item[`image_url`]" alt="">
        <p> {{menu_item[`price`]}} </p>
    </div>
</template>

<script>
    export default {
    props: {
        menu_item: Object
    }    
    }
</script>

<style scoped>
    div{
        border: 2px solid black;
    }
    img{
        max-height: 120px;
        max-width: 120px;
    }
</style>