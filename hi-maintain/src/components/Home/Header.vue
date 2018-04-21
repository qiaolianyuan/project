<template>
    <div class="header">
        <nav class="indextop">
            <span  class="dingwei">北京</span>
            <span  class="dengluword">登录</span>
        </nav>
    </div>
</template>
<script>
export default {
  name: "Header"
}
</script>
<style scoped>
.indextop {
    height: 44px;
    background: url("http://pic.hiweixiu.com/hiweixiu-mobile/img/logo.png") center center no-repeat #fff;
    background-size: 69px 21px;
}
.dingwei {
    float: left;
    height: 44px;
    line-height: 44px;
    color: #666;
    font-size: 15px;
    width: 120px;
    background: url("http://pic.hiweixiu.com/hiweixiu-mobile/img/add.png") 11px center no-repeat;
    background-size: 16px 16px;
    text-indent: 30px;
}
.dengluword {
    float: right;
    line-height: 44px;
    width: 49px;
    color: #888;
    font-size: 15px;
}   
</style>
