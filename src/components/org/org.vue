<template>
    <div class="row">
      <div class="col-sm-3 col-md-2 sidebar">
      <orgsidebar></orgsidebar>
      </div>
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
      <router-view></router-view>
      </div>
    </div>
    
</template>

<script>
import orgsidebar from './orgsidebar'
export default {
  components: {
    orgsidebar
  },
  data () {
    return {
      msg: 'Hello World!',
      username: ''
    }
  },
  methods: {
    greet: function (){
      alert(this.username)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
