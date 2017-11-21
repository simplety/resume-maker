<template>
  <div id="resumeEditor">
    <nav>
      <ol>
        <li v-for="(item,index,argu) in resume.config" :key="index">
          <svg class="icon">
            <use :xlink:href="`#icon-${item.icon}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-for="(page,index) in resume.config" v-show="page.field === selected" :key="index">
        <div class="item" v-for="(item,key) in resume[page.field]" :key="key">
          <label>
            <span>{{key}}</span>
            <input type="text" v-model="resume[page.field][key]" />
          </label>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>

export default {
  name: 'editor',
  data: () => ({
    selected: 'profile',
    resume: {
      config: [
        { field: 'profile', icon: 'id' },
        { field: 'work history', icon: 'work' },
        { field: 'education', icon: 'book' },
        { field: 'project', icon: 'heart' },
        { field: 'awards', icon: 'cup' },
        { field: 'contacts', icon: 'phone' }
      ],
      profile: {
        name: '',
        age: '',
        phone: '',
        email: '',
        city: ''
      },
      projects: [],
      education: [],
      awards: [],
      contacts: []
    }
  })
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang="scss" scoped>
ol {
  list-style: none;
}
#resumeEditor {
  border: 0.0625rem solid blue;
  width: 40%;
  overflow: auto;
  display: flex;
  background: $green;
  nav {
    background: black;
    color: white;
    li {
      // border: 1px solid red;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 2rem;
      padding: 1.5rem 1rem;
      &.active {
        background: white;
        color: black;
      }
      svg.icon{
        width: 1.5rem;
        height: 1.5rem;
        fill: white;
        &:hover{
          fill: cyan;
        }
      }
    }
  }
  .panels {
    padding: 1rem;
    .item {
      margin: .3125rem .625rem;
      height: 2.5rem;
      label {
        display: block;
        span {
          display: inline-block;
          width: 5rem;
          text-align: right;
          font-size: 1.25rem;
        }
        input {
          height: 2.1875rem;
          width: 15rem;
          margin-left: 1rem;
        }
      }
    }
  }
}
</style>
