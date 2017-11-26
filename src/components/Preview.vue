<template>
  <div id="preview">
    <h1>处理yearRange的第二个值>第一个</h1>
    <div class="page">
    <section>
      <h2>{{resume.profile.name || '姓名'}}</h2>
      <h3>{{resume.profile.title || '目标职位'}}</h3>
      <p><i class="el-icon-location"></i>{{resume.profile.city || '城市'}}</p>
      <p><i class="el-icon-date"></i>{{formatDate(resume.profile.birthday) || "生日"}}</p>
      <p><i class="el-icon-mobile-phone"></i>{{resume.contacts.phone || "电话"}}</p>
      <p><i class="el-icon-message"></i>{{resume.contacts.email || "E-mail"}}</p>
    </section>
    <section v-if = "filterArr(resume.workHistory).length > 0">
      <h2>workHistory</h2>
      <hr>
      <div v-for="item in filterArr(resume.workHistory)">
        <div class="subtitle">
          <h4>{{item.company || "公司"}}</h4>
          <p>{{item.title || "职位"}}</p>
          <p>{{formatMonth(item.yearRange[0])}} - {{formatMonth(item.yearRange[1])}}</p>
        </div>
        <p>{{item.details}}</p>
      </div>
    </section>
    <section v-if ="filterArr(resume.education).length > 0">
      <h2>education</h2>
      <hr>
      <div v-for="item in filterArr(resume.education)">
        {{item}}
        <div class="subtitle">
          <h4>{{item.school || '学校'}}</h4>
          <p>{{item.major || '专业'}}</p>
          <p>{{item.degree || '学位'}}</p>
          <p>{{formatMonth(item.yearRange[0])}} - {{formatMonth(item.yearRange[1])}}</p>
        </div>
        <p>{{item.details}}</p>
      </div>
    </section>
    <!-- <section v-if = "filterArr(resume.projects).length > 0">
      <h2>projects</h2>
      <hr>
      <div v-for="item in filterArr(resume.projects)">
        <p>{{item.name}}</p>
        <p>{{item.details}}</p>
      </div>
    </section>
    <section v-if = "filterArr(resume.awards).length > 0">
      <h2>awards</h2>
      <hr>
      <div v-for="item in filterArr(resume.awards)">
        <p>{{item.name}}</p>
        <p>{{item.details}}</p>
      </div>
    </section> -->
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'preview',
  computed: {
    ...mapGetters(['resume', 'resumeContent'])
  },
  methods: {
    filterArr (array) {
      return array.filter((obj, idx, arr) => (!this.isEmptyObj(obj)))
    },
    isEmptyObj (obj) {
      let flag = true
      for (let i in obj) {
        obj[i] && (flag = false)
      }
      return flag
    },
    formatMonth (date) {
      let year, month
      if (typeof date === 'string' || date instanceof Date) {
        typeof date === 'string' && (date = new Date(date))
        year = date.getFullYear()
        month = date.getMonth() + 1
        return [year, month].join('/')
      } else {
        return 'YYYY/MM'
      }
    },
    formatDate (date) {
      let year, month, day
      if (typeof date === 'string' || date instanceof Date) {
        console.log('dateaaa这里', typeof date === 'string')
        typeof date === 'string' && (date = new Date(date))
        year = date.getFullYear()
        month = date.getMonth() + 1
        day = date.getDate()
        return [year, month, day].join('/')
      } else {
        return ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#preview {
  width: 100%;
  height: 100%;
  overflow: hidden;
  flex-grow: 1;
  >.page {
    overflow: auto;
    padding: 1.5rem 1rem;
    height: 98%;
    >section{
      margin: 1rem;
      text-align: left;
      i {
        &:before {
          margin-right: .5rem;
        }
      }
      >div {
        &.row {
          display: flex;
          justify-content: flex-start;
          align-items: flex-end;
          >span {
            margin: 0 .5rem;
          }
        }
        >.subtitle {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          >h4 {
            font-size: 1.125rem;
            font-weight: normal;
          }
        }
      }
    }
  }
}
</style>