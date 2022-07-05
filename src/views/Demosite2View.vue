<template>
  <div id="demosite2">
    <div v-for="item in ajaxData">
        <p>UID:{{ item.UID }}</p>
        <p>title:{{ item.title }}</p>
        <p>
          {{item.descriptionFilterHtml}}
        </p>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapState, mapGetters } from 'vuex';


export default {
  name: 'Demosite2View',
  components: {
    // HelloWorld
  },
  computed: {
    ...mapGetters([
      'ajaxData'
    ]),
  },
  created() {
    // 登入
    this.$store.dispatch("getData",'5b3dd544aaa378d7ca9a2e9a').then((type) => {
      console.log(type)
    }).catch((error) => {
      console.log(error)
    });;
  }
}
</script>