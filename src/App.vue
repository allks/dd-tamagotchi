<template>
  <div id="app">
    <h1 class="title"> MiniGame </h1>
    <div class="wrapper">
      <section class="section">
        <div class="bar status-bar">
          <span class="status-title">Здоровье:</span>
          <div class="div status-wrap-bar">
            <div class="status-load status-load--health" :style="{ width: health + '%' }"></div>
          </div>
          <span class="status-title">Жажда:</span>
          <div class="div status-wrap-bar">
            <div class="status-load status-load--fatigue" :style="{ width: fatigue + '%' }"></div>
          </div>
          <span class="status-title">Голод:</span>
          <div class="div status-wrap-bar">
            <div class="status-load status-load--hunger" :style="{ width: hunger + '%' }"></div>
          </div>
          <span class="status-title">Усталость:</span>
          <div class="div status-wrap-bar">
            <div class="status-load status-load--thirst" :style="{ width: thirst + '%' }"></div>
          </div>
        </div>
        <div class="bar control-bar">
          <button class="btn btn-health" :disabled="!health" @click="eat">есть</button>
          <button class="btn btn-fatige" :disabled="!fatigue" @click="drink">пить</button>
          <button class="btn btn-hunger" :disabled="!hunger" @click="relax">отдохнуть</button>
          <button class="btn btn-thirst" :disabled="!thirst" @click="work">работать</button>
        </div>
      </section>
      <section class="section">
        <div class="command">
          <textarea class="command-input" placeholder="Insert your command..."></textarea>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    health() {
      return this.$store.state.health;
    },
    fatigue() {
      return this.$store.state.fatigue;
    },
    hunger() {
      return this.$store.state.hunger;
    },
    thirst() {
      return this.$store.state.thirst;
    },
  },
  methods: {
    eat() {
      this.$store.dispatch('eat');
    },
    drink() {
      this.$store.dispatch('drink');
    },
    relax() {
      this.$store.dispatch('relax');
    },
    work() {
      this.$store.dispatch('work');
    },
  },
};

</script>

<style>
body{
  background-color: #E5E5E5;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 30px 0;
}

.wrapper{
  display: flex;
  flex-direction: column;
  max-width: 1140px;
  min-height: 355px;
  background-color: #fff;
  margin: 50px auto;

}

.section{
  display: flex;
}

.bar{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 380px;
  height: 195px;
  border: 2px solid #bbb;
  margin: 30px;
  padding: 10px 0;
  overflow: hidden;
}

.status-title{
  text-align: start;
  margin-left: 10px;
}

.status-wrap-bar{
  height: 10px;
  border: 2px solid #bbb;
  margin: 10px;
  overflow: hidden;
}

.status-load{
  height: 100%;
}

.status-load--health{
  background-color: #E74C3C;
}

.status-load--fatigue{
  background-color: #3498DB;
}

.status-load--hunger{
  background-color: #E67E22;
}

.status-load--thirst{
  background-color: #7F8C8D;
}

.btn{
  flex-grow: 1;
  margin: 5px 20px;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
}

.btn:disabled{
  background-color: #3d3d3d;
  color: #aaa;
}

.btn:disabled:hover{
  background-color: #3d3d3d;
  color: #aaa;
}

.btn-health{
  background-color: #E74C3C;
}

.btn-health:hover{
  background-color: #C0392B;
}

.btn-fatige{
  background-color: #3498DB;
}

.btn-fatige:hover{
  background-color: #2980B9;
}

.btn-hunger{
  background-color: #E67E22;
}

.btn-hunger:hover{
  background-color: #D35400;
}

.btn-thirst{
  background-color: #95A5A6;
}

.btn-thirst:hover{
  background-color: #7F8C8D;
}

.command{
  width: 100%;
  display: flex;
}
.command-input{
  flex-grow: 1;
  border: 2px solid #bbb;
  margin: 30px;
  height: 50px;
  color: #3d3d3d;
  resize: none;
  padding: 10px;
}
</style>
