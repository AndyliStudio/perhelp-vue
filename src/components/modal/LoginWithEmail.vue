<template>
  <modal classes="login-with-email v--modal" name="login-with-email" transition="pop-out" :width="465" :height="671">
    <img class="logo" src="../../assets/images/logotype-small.png" alt="perhelp" />
    <button class="login-btn facebook"><i class="uppercase">G</i>{{ $t("login.google") }}</button>
    <button class="login-btn google"><i class="uppercase">F</i>{{ $t("login.facebook") }}</button>
    <p class="other"><span>{{ $t("login.other") }}</span></p>
  </modal>
</template>
