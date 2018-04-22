<template>
    <div class="goods page">
        <buycar-head></buycar-head>
        <cell
            v-for = "good in phones"
            :key = "good.id" 
            :title = "good.model"
            :label = '"￥"+ good.price + "  *  "+good.num '
            :img = 'good.imgUrl'
        >
            <mz-button class="btnbg size" 
                @click="addGoodInCar(good)"
            >+</mz-button>
            <mz-button class="btnbg size" 
                @click="removeIncar(good)"
            >-</mz-button>
        </cell>
        <total></total>
    </div>
</template>

<script>
import BuycarHead from './BuycarHead';
import {mapState,mapActions} from 'vuex';

export default {
    name:"Buycar",
    components:{
       BuycarHead
    },
    computed:{
        ...mapState({
            phones:(state) => {
                return state.buyphone.phones
            }
        })
    },
    methods:{
        ...mapActions(['addGoodInCar']),
        ...mapActions(['removeIncar'])
    }
}
</script>

<style scoped>
    .btnbg {
        background: #ff5000;
        color: #fff;
    }
    .size{
        width: 0.25rem;
        height: 0.25rem;
    }
</style>
