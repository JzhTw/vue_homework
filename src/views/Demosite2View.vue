<template>
  <div id="demosite2">
    <div v-for="item in ajaxData">
      <p>UID:{{ item.UID }}</p>
      <p>title:{{ item.title }}</p>
      <p>
        {{ item.descriptionFilterHtml }}
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
  },
  computed: {
    ...mapGetters([
      'ajaxData'
    ]),
  },
  created() {
    // 取得藝文展覽資料
    if (this.$store.state.ajaxData.length == 0) {
      this.$store.dispatch("getData", '61df26a9d083a3542803f5cd').then((type) => {
        console.log(type)
      }).catch((error) => {
        console.log(error)
      });;
    }
  }
}
</script>