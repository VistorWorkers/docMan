<template>
    <div class="page">
        <img src="~@assets/img/logo-airfunc.png" class="logo"/>
        <div class="login-container">
            <h5 class="login-title">
                登录
            </h5>
            <mu-form :model="form" class="login-form">
                <mu-text-field
                        label="账号"
                        v-model="form.account"
                        label-float
                >

                </mu-text-field>
                <mu-text-field v-model="form.password"
                               label="密码"
                               label-float
                               :action-icon="visibility ? 'visibility_off' : 'visibility'"
                               :action-click="() => (visibility = !visibility)"
                               :type="visibility ? 'text' : 'password'"
                >

                </mu-text-field>
                <mu-form-item>
                    <mu-button class="login-button" color="primary">登录</mu-button>
                </mu-form-item>
            </mu-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                visibility: true,
                form      : {
                    account : '',
                    password: ''
                }

            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@assets/styles/mixins.styl"
    @import "~@assets/styles/variable.styl"
    .page
        fullPage()
        background-image url("~@assets/img/sign_bg.svg")
        background-color #fafafa
        background-repeat no-repeat
        background-size cover
        .logo
            position: absolute
            width 100px
            top 30px
            left 60px
        .login-container
            background #fff
            border-radius 4px
            box-shadow 0 6px 20px 5px rgba(40, 120, 255, 0.1)
            width 400px
            position absolute
            padding 40px
            left 50%
            top 50%
            transform translate(-50%, -50%)
            .login-title
                font-size 32px
                color $themeColor
                text-align center
            .login-form
                overflow hidden
                .mu-input
                    width 100%
                .login-button
                    width 100%
                    margin 0
                    margin-top 32px
</style>