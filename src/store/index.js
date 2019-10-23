/* eslint-disable */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    health: 20,
    fatigue: 20,
    hunger: 20,
    thirst: 20,
  },
  mutations: {
    eat(state) {
      state.hunger-=10,
      state.health+=Math.floor(Math.random() * (10 - (-10) + 1)) + (-10)
    },
    drink(state) {
      state.fatigue-=10,
      state.health+=Math.floor(Math.random() * (10 - (-10) + 1)) + (-10)
    },
    relax(state) {
      state.thirst-=20,
      state.hunger+=10
    },
    work(state){
      state.health+=10,
      state.hunger+=Math.floor(Math.random() * (10 - (-10) + 1)) + (-10),
      state.thirst+=Math.floor(Math.random() * (10 - (-10) + 1)) + (-10)
    }
  },
  actions: {
    eat(context) {
      context.commit('eat')
    },
    drink(context) {
      context.commit('drink')
    },
    relax(context) {
      context.commit('relax')
    },
    work(context) {
      context.commit('work')
    },
  },
  modules: {
  },
});
