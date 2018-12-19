<template>
    <div>
        <myTil til='收藏页'></myTil>
        <div class="list_box_out">
            <list v-for="(item,i) in list" :key="i" :data='item'></list>
        </div>
    </div>
</template>

<script>
    import myTil from '@/components/common/title.vue';
    import list  from './list'
    export default {
        components:{
            myTil,
            list
        },
        computed:{
            list(){
                return this.$store.state.collectData;
            }
        }
    }
</script>

<style scoped lang='less'>
    @r:75rem;
    .list_box_out{
        margin: 100/@r 0 200/@r 0;
    }
</style>