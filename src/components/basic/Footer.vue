<template>
  <div class="app-footer">
    <ul>
      <li><router-link :to="{ name: 'home' }">{{ $t('footer.about_us') }}</router-link></li>
      <li><router-link :to="{ name: 'home' }">{{ $t('footer.terms') }}</router-link></li>
      <li><router-link :to="{ name: 'home' }">{{ $t('footer.privite_policy') }}</router-link></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.app-footer {
  background: #101010;
  color: #ffffff;
  height: 70px;
  margin-top: -70px;
  width: 100%;
  box-sizing: border-box;
  -webkit-font-smoothing: subpixel-antialiased;
  min-width: 1032px;
  overflow: hidden;
  &>ul {
    line-height: 70px;
    list-style: none;
    margin: 0 auto;
    max-width: 1100px;
    padding: 0;
    text-align: left;
    li {
      display: inline-block;
      margin-right: 60px;
      a {
        color: #ffffff;
        font-size: 14px;
        text-decoration: none;
      }
    }
  }
}
</style>
