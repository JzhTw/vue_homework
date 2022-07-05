<template>
  <div class="demosite">
    <button type="button" style="margin-bottom: 10px;" @click="changeShow">
      Toggle Section2
    </button>
    <div class="box">
      <div class="section1">
        Section 1
      </div>
      <div class="section2" v-show="show">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi tenetur itaque esse hic, perspiciatis fuga odit ratione modi velit illo amet placeat deserunt nostrum nesciunt aspernatur reiciendis sed accusamus harum.
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'DemositeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    changeShow() {
      const vm = this
      vm.show = !vm.show
    }
  }
}
</script>

<style>
.box{
  display: flex;
  flex-wrap: wrap;
}

.box>div{
  margin-right: 5px;
    margin-top: 5px;

}


.section1 {
  background: #d4e2d4;
  width: 150px;
  height: 150px;
  padding: 24px;
}

.section2 {
  background: #ecb390;
  width: 300px;
  height: 300px;
  padding: 24px;
}

@media (max-width: 600px) {
  .box>div {
    margin-right: unset;
    margin-bottom: 50px;
  }

  .section1 {
    width: 100%;
    padding: 24px;
  }

  .section2 {
    width: 100%;
    padding: 24px;
  }
}
</style>