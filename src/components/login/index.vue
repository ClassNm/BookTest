<template>
    <div>
        <button @click="add">按钮</button>
        这是个登录页
    </div>
</template>

<script>
    export default {
        data() {
            return {
                key: 123
            }
        },
        created() {
            console.log(this)
        },
        methods: {
            add() {
                this.$store.commit('add');
                // this.$store.dispatch('addFn');
            }
        },
    }
</script>

<style scoped>

</style>