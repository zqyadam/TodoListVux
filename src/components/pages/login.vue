<template>
  <div style="margin:15px;">
    <flexbox :gutter="0" justify="center" orient="vertical">
        <flexbox-item align="center">
          <img src="../../assets/logo.png" alt="todolistvux">
        </flexbox-item>
        <flexbox-item align="center">
          <group>
            <x-input type="email" is-type="email" placeholder="请输入邮箱地址" :show-clear="false">
              <i class="iconfont icon-email" style="margin-right:5px;" slot="label"><span style="margin:0 5px;">邮箱</span></i>
            </x-input>
            <x-input title="密码" :type="password" :show-clear="false" placeholder="请输入密码（不少于6位）">
              <i class="iconfont icon-password" style="margin-right:5px;" slot="label"><span style="margin:0 5px;">密码</span></i>
              <i class="iconfont" :class="{'icon-eye-closed':(password == 'text'), 'icon-eye1':(password == 'password')}" slot="right" @click="seePassword"></i>
            </x-input>
          </group>
        </flexbox-item>
        <flexbox-item align="center">
          <x-button type="primary" :text="login" action-type="button" class="btnlogin"></x-button>
          <p>还没有账号？注册一个吧~
          <x-button text="立即注册" :plain="true" @click.native="registe" action-type="button" mini />
        </p>
        </flexbox-item>
    </flexbox>
  </div>
</template>
<script>
/* beautify preserve:start */
import { Flexbox, FlexboxItem, Group, XInput, XButton } from 'vux'
/* beautify preserve:end */
export default {
  data() {
      return {
        password: 'password',
        login: '登录'
      }
    },
    methods: {
      seePassword: function() {
        this.password = (this.password == 'password') ? 'text' : 'password';
      },
      registe:function() {
        this.$router.push({name:'registe'})
      }
    },
    components: {
      Flexbox,
      FlexboxItem,
      Group,
      XInput,
      XButton
    }
}
</script>
<style scoped>
.center {
  text-align: center;
}

img {
  margin-top: 35px;
  padding-top: 40px;
  width: 95%;
}
 
.btnlogin{
  width:90%;
  margin-top: 20px;
}

p{
  margin-top: 30px;
  font-size: 16px;
}


</style>
