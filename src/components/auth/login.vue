<template>
   <validator name = "validation1">
        <form novalidate>
            <div class="form-group">
                <label for="exampleInputEmail1">用户名</label>
                <input type="" class="form-control" v-model="username" v-validate:username="['required']" id="exampleInputEmail1" placeholder="用户名">
            </div>
                <div v-if="$validation1.username.required" class="alert alert-danger" role="alert">
                <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                <span class="sr-only">Error:</span>
                用户名是必填项
                </div>
            <div class="form-group">
                <label for="exampleInputPassword1">密码</label>
                <input type="password" class="form-control" v-model="password" v-validate:psd="['required']" id="exampleInputPassword1" placeholder="密码">
            </div>
                 <div v-if="$validation1.psd.required" class="alert alert-danger" role="alert">
                <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                <span class="sr-only">Error:</span>
                密码是必填项
                </div>
            <button type="submit" class="btn btn-default" v-on:click="submitInfo()" v-mydisabled="$validation1.valid">登录</button>
        </form>
    </validator>

</template>

<script>
import Vue from 'vue'

Vue.directive('mydisabled',{
    update: function (value) {
          this.el.disabled = !value
     //     console.log(value)
    }
})

export default {
  data () {
    return {
      username: '',
      password:''
      
    }
  },
  methods: {
    submitInfo: function(){
        var  userinfo={
            'username':this.username,
            'password':this.password
        }
        var resource = this.$resource('http://localhost:3000/login')
         resource.save(userinfo).then(function(response){
             console.log('sucess')
             console.log(response.data.token)
             document.cookie ="token="+ response.data.token;//将cookie写入
         },function(response){
             console.log('fail')
             console.log(userinfo)
         })     
    }
  }
}




</script>

<style>
</style>