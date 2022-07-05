import Vue from 'vue'
import Vuex from 'vuex'
import { getData } from '@/api/data';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ajaxData: []
  },
  getters: {
    ajaxData: state => state.ajaxData,
  },
  mutations: {
    CHANGE_AJAXDATA(state, data) {
      state.ajaxData = data;
    },
  },
  actions: {
    // Change Loading
    async getData({ commit }, data) {
      return new Promise((resolve, reject) => {
        getData().then(response => {
          const ajaxdata = response.data;
          let tmp_array = [];
          if (data != undefined) {
            tmp_array = ajaxdata.filter((item) => {
              return item.UID === data;
            });
            commit('CHANGE_AJAXDATA', tmp_array);
          } else {
            commit('CHANGE_AJAXDATA', ajaxdata);
          }
          resolve(true);
        }).catch(error => {
          reject(error);
        });
      });
    },
  },
  modules: {
  }
})
