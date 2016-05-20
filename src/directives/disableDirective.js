import Vue from 'vue'

Vue.directive('mydisabled',{
    update: function (value) {
          this.el.disabled = value
          console.log(value)
    }
})