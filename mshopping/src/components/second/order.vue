<template>
  <div class="page">
    <div class="header">
      <!-- <a href="#"><em></em></a> -->
      <go-back></go-back>
      <h3>确认订单</h3>
      <!-- <p class="menu">
        <span></span>
        <span></span>
        <span></span>
      </p> -->
      <v-menu></v-menu>
    </div>
    <div class="main">
      <div class="top">
        <div class="text">
          <p class="who">收货人：YouSu<span>10000000000</span></p>
          <p class="addr">
            收货地址：北京市海淀区隐泉路清林苑6号楼中公教育优就业
            <span>总部3层</span>
          </p>
        </div>
        <div class="right"><em></em></div>
      </div>
      <div class="guige">
        <div class="shop">
          <img src="../../assets/images/shop_4.jpg" alt="pic" />
          <div class="text">
            <div class="te">
              <p class="name">雅诗兰黛护肤霜</p>
              <p class="gui">规格：50g</p>
            </div>
            <p class="pric">&yen;123.00</p>
          </div>
        </div>
        <div class="num">
          <p>购买数量：</p>
          <div class="n">
            <div class="down">-</div>
            <input type="text" value="1" />
            <div class="up">+</div>
          </div>
        </div>
        <div class="song">
          <p>配送方式</p>
          <p>xx快递</p>
        </div>
      </div>
      <div class="youhui">
        <div class="juan">
          <p>优惠券</p>
          <p>无可用</p>
        </div>
        <div class="jifen">
          <p>使用积分</p>
          <div class="fenshu">
            <input type="text" placeholder="输入积分" />
            <a href="#">使用</a>
            <span>可用积分<span class="red">50</span>积分</span>
          </div>
        </div>
      </div>
      <div class="txt">
        <p class="fle mar">
          <span>商品金额</span><span class="pric">&yen;123.00</span>
        </p>
        <p class="fle"><span>运费</span><span class="pric">+&yen;0.00</span></p>
        <p class="fle">
          <span>优惠券</span><span class="pric">-&yen;0.00</span>
        </p>
        <p class="fle">
          <span>会员优惠</span><span class="pric">-&yen;0.00</span>
        </p>
        <p class="fle">
          <span>积分折扣</span><span class="pric">-&yen;0.00</span>
        </p>
      </div>
      <div class="pay">
        <p>实付金额：<span>&yen;123.00</span></p>
        <button>提交订单</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="" scoped>
@import "../../assets/css/order.css";
</style>