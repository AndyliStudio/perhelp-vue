<template>
  <div class="app-header">
    <nav class="header-inner">
      <router-link :to="{name: 'index'}"><img src="../../assets/images/logotype.png" alt="Perhelp" /></router-link>
      <ul class="header-nav">
        <li><icon name="cube">{{ $t("nav.worker") }}</icon></li>
        <li><icon name="list-alt">xxx</icon></li>
        <li><icon name="user">xxx</icon></li>
        <li><icon name="connectdevelop">xxx</icon></li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.app-header {
  background: red;
  .header-inner{
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 1000px;
    height: 52px;
    padding: 0 16px;
    margin: 0 auto;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s,-webkit-transform .3s;
  }
}
</style>
