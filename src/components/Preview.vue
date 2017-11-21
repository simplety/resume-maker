<template>
  <div id="preview">
    
  </div>
</template>

<script>
export default {
  name: 'preview',
  data: function () {
    return {
      txt: 'kaisla'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#preview {
  border: .0625rem solid blue;
  width: 40%;
  overflow: auto;
  background: white;
}
</style>