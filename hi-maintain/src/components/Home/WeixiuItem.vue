<template>
    <router-link
        :to="{name:'wenti'}"
        tag="div"
    >
        <div class="typeListItem">
            <img :src="phone.src"><span>{{phone.title}}</span>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'WeixiuItem',
    props: ['phone']
}
</script>

<style scoped>
    
    .typeListItem{
        display: -webkit-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .typeListItem img{
        height: .4rem;
        width: .4rem;
    }
    .typeListItem span{
        margin-top: 0.05rem;
        font-size: 0.15rem;
        color: #444;
    }
</style>
