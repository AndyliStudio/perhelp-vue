<template>
  <div class="connect">
    <div class="nav">
      <div class="tabs-container">
        <ul class="tabs">
          <router-link tag="li" active-class="active" exact :to="{name: 'explore-user'}">{{ $t("connect.tab.exploreUser") }}</router-link>
          <router-link tag="li" active-class="active" exact :to="{name: 'recruit-members'}">{{ $t("connect.tab.recruitMembers") }}</router-link>
          <router-link tag="li" active-class="active" exact :to="{name: 'friends'}">{{ $t("connect.tab.friends") }}</router-link>
          <router-link tag="li" active-class="active" exact :to="{name: 'following'}">{{ $t("connect.tab.following") }}</router-link>
        </ul>
      </div>
      <div class="search-container">
        <input type="text" name="search" id="connect-search" :placeholder="$t('connect.searchPlaceHolder')" />
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .connect {
    max-width: 950px;
    margin: 36px auto;
    .nav {
      height: 50px;
      line-height: 50px;
      overflow: hidden;
      color: #909090;
      .tabs-container {
        height: 100%;
        background: #fcffee;
        width: 65%;
        float: left;
        box-sizing: border-box;
        border-radius: 25px;
        overflow: hidden;
        .tabs {
          width: calc(100% - 4px);
          margin: 0 auto;
          height: calc(100% - 2px);
          border-radius: 23px;
          -webkit-box-shadow: 0 8px 3px 3px #dedede;
          box-shadow: 0 8px 3px 3px #dedede;
          display: -webkit-flex;
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          align-items: center;
          padding: 0 60px;
          box-sizing: border-box;
          & > li {
            display: inline-block;
            padding: 0 6px;
            box-sizing: border-box;
            position: relative;
            text-align: center;
            &.active {
              color: #26bad0;
              &::after {
                content: '';
                display: block;
                width: 100%;
                height: 6px;
                border-radius: 3px;
                background: #26bad0;
                position: absolute;
                bottom: -1px;
                left: 0;
              }
            }
          }
        }
      }
      .search-container {
        float: right;
        width: 28.7%;
        height: 100%;
        background: #fcffee;
        box-sizing: border-box;
        border-radius: 25px;
        overflow: hidden;
        #connect-search {
          display: inline-block;
          width: calc(100% - 4px);
          margin: 0 2px 4px 2px;
          height: calc(100% - 4px);
          border-radius: 23px;
          border: none;
          outline: none;
          background: #fcffee;
          -webkit-box-shadow: 0 12px 6px 6px #dedede;
          box-shadow: 0 12px 6px 6px #dedede;
          padding: 0 25px;
          box-sizing: border-box;
          &::-webkit-input-placeholder { /* WebKit browsers */
            color: #c7c9c0;
          }
          &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
            color: #c7c9c0;
          }
          &::-moz-placeholder { /* Mozilla Firefox 19+ */
            color: #c7c9c0;
          }
          &:-ms-input-placeholder { /* Internet Explorer 10+ */
            color: #c7c9c0;
          }
        }
      }
    }
    .content {
      margin-top: 30px;
    }
  }
</style>
