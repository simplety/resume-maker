<template>
  <div id="app">
    <TopBar />
    <main>
      <Editor />
      <Preview />
    </main>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import TopBar from './components/TopBar'
import Editor from './components/Editor'
import Preview from './components/Preview'
import store from './store/index'

export default {
  name: 'app',
  store,
  components: {
    TopBar,
    Editor,
    Preview
  }
}
</script>

<style>
body {
  background: #EAEBEC;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  >main {
  display: flex;
  justify-content: start;
  border: 1px solid black;
  min-width: 1024px;
  max-width: 1440px;
  height: 100%-$nav-width;
}
}

</style>
