<template>
  <header id="topBar">
    <span>Resume Maker</span>
    <div>
      <a href="javascript:void(0)">Save</a>
      <a href="javascript:void(0)">View</a>
      <a href="javascript:void(0)" @click="clearAllInfo">Clear</a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'app',
  methods: {
    clearAllInfo () {
      this.$store.commit('clearAll')
      localStorage.setItem('resume', JSON.stringify(this.$store.state.resume))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background: white;
  min-height: 2.1875rem;
  height: $nav-width;
  padding: 0 .625rem;
  border: .0625rem solid blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
span {
  font-size: 1.5rem
}
a {
  padding: .1875rem .625rem;
  border: .0625rem solid red;
  border-radius: .3125rem;
}
a:hover{
  background: lightblue;
  color: red;
  border-color: #fff;
}
</style>