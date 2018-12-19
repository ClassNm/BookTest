<template>
    <div class="til_box">
        {{til}}
        <!-- <slot></slot> -->
    </div>
</template>

<script>
    export default {
        props:['til']
    }
</script>

<style lang='less' scoped>
    @r:75rem;
    .til_box{
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        width: 100%;
        height: 100/@r;
        background: blueviolet;
        text-align: center;
        line-height: 100/@r;
        font-size: 50/@r;
    }
</style>