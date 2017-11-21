<template>
  <header id="topBar">
    <span>Resume Maker</span>
    <div>
      <a href="javascript:void(0)">Save</a>
      <a href="javascript:void(0)">View</a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'app'
  // data: function () {
  //   return {
  //     txt: 'kaisla'
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background: white;
  width: 100%;
  height: 3rem;
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