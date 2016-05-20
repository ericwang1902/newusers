<template>
          <ul class="nav nav-sidebar">
            <li v-bind:class="{ 'active':islinkA }"><a  v-link="'/org/dashboard'">概览 </a></li>
            <li v-bind:class="{ 'active':islinkB }"><a  v-link="'/org/createorg'">创建组织</a></li>
            <li v-bind:class="{ 'active':islinkC }"><a  v-link="'/org/orglist'">组织列表</a></li>       
          </ul>
</template>
<script>

export default {
  data () {
    return {
        islinkA:true,
        islinkB:false,
        islinkC:false
    }
  },
  methods: {
  },
  computed: {
    islinkA: function(){
      if(this.$route.path=="/org/dashboard"){
        return true;
      }
      else{
        return false;
      }
    },
    islinkB: function(){
      if(this.$route.path=="/org/createorg"){
        return true;
      }
      else{
        return false;
      }
    },
    islinkC: function(){
      if(this.$route.path=="/org/orglist"){
        return true;
      }
      else{
        return false;
      }
    }
  }
}

</script>