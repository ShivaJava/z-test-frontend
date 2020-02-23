<template src="./index.html"></template>

<script>
import {mapGetters} from 'vuex'
import Search from '../Search'
import NewsItem from '../NewsItem'
import LoadMore from '../LoadMore/LoadMore'

export default {
    name: 'list',
    mounted () {
        this.$store.dispatch('GetNews')
    },
    computed: {
        ...mapGetters(['news'])
    },
    components: {
        Search,
        NewsItem,
        LoadMore
    }
}
</script>

<style lang="scss" src="./index.scss"></style>
