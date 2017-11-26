<template>
  <div id="resumeEditor">
    <nav>
      <ol>
        <li v-for="(item,index) in resumeConfig" :key="index" :class="{active:item.field===selected}" @click="switchTab(item.field)">
          <svg class="icon">
            <use :xlink:href="`#icon-${item.icon}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-for="(item,index) in resumeConfig" v-show="item.field === selected" :key="index">
        <!-- Array Type -->
        <div class="panel" v-if="resume[item.field] instanceof Array">
          <div class="sub-nav">
            <h2 class="field-name">{{item.field}}</h2>
            <svg class="icon" @click="addResumeSubfield(item.field)">
              <use :xlink:href="`#icon-add-circle`"></use>
            </svg>
            <svg class="icon" @click="changeRemoveMode" :class="{removeMode: isRemoveMode}">
              <use :xlink:href="`#icon-remove`"></use>
            </svg>
          </div>
          <div v-for="(subitem,i) in resume[item.field]" class="content" :class="{selective: isRemoveMode}" @click.prevent="isRemoveMode && removeResumeSubfield(item.field,i)">
            <div v-for="(value,key) in subitem">
              <label v-if="key==='yearRange'">
                <p>{{key}}</p>
                <div class="range">
                  <el-date-picker type="month" placeholder="开始" v-model="subitem[key][0]" default-value="2000-10-01" @change="saveMonthRangeToLocal(0,item.field+'.'+i+'.'+key, subitem[key])"></el-date-picker>
                  <span>to</span>
                  <el-date-picker type="month" placeholder="终止" v-model="subitem[key][1]" 
                      :default-value="subitem[key][0]||'2000-10-01'" @change="saveMonthRangeToLocal(1,item.field+'.'+i+'.'+key, subitem[key])">
                  </el-date-picker>
                </div>
              </label>
              <label v-if="key==='degree'">
                <p>{{key}}</p>
                <el-select v-model="subitem[key]" placeholder="请选择" @change="saveToLocal">
                  <el-option v-for="item in options" :key="item" :label="item" :value="item"></el-option>
                </el-select>
              </label>
              <label v-if="key==='details'">
                <p>{{key}}</p>
                <textarea rows="4" :value="value" @input="changeResumeField(item.field+'.'+i+'.'+key, $event.target.value)"></textarea>
              </label>
              <label v-if="key!=='details' && key!=='yearRange' && key!=='degree'">
                <p>{{key}}</p>
                <input type="text" :value="value" @input="changeResumeField(item.field+'.'+i+'.'+key, $event.target.value)">
              </label>
            </div>
          </div>
        </div>
        <!-- Non-Array Type -->
        <div class="panel" v-else>
          <h2 class="field-name">{{item.field}}</h2>
          <div v-for="(value,key) in resume[item.field]" class="content">
            <label v-if="key==='birthday'">
              <p>{{key}}</p>
              <el-date-picker class="date" v-model="resume[item.field][key]" type="date" placeholder="选择日期" default-value="2000-10-01" @change="saveToLocal"></el-date-picker>
            </label>
            <label v-else>
              <p>{{key}}</p>
              <input :type="getInputType(key)" :value="value" @input="changeResumeField(item.field+'.'+key, $event.target.value)">
            </label>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'editor',
  data: () => ({
    isRemoveMode: false,
    options: ['大专', '学士', '硕士']
  }),
  computed: {
    ...mapGetters(['selected', 'resumeConfig', 'resume'])
  },
  methods: {
    changeRemoveMode () {
      this.isRemoveMode = !this.isRemoveMode
      if (!this.isRemoveMode) {
        localStorage.setItem('resume', JSON.stringify(this.$store.state.resume))
      }
    },
    switchTab (selected) {
      this.$store.commit('changeSelected', selected)
    },
    changeResumeField (path, value) {
      return this.$store.commit('updateResume', {path, value})
    },
    addResumeSubfield (field) {
      this.isRemoveMode = false
      return this.$store.commit('addResumeSubfield', field)
    },
    removeResumeSubfield (field, index) {
      return this.$store.commit('removeResumeSubfield', {field, index})
    },
    saveToLocal () {
      localStorage.setItem('resume', JSON.stringify(this.$store.state.resume))
    },
    getInputType (key) {
      let type = 'text'
      switch (key) {
        case 'phone':
          type = 'number'
          break
        case 'email':
          type = 'email'
          break
      }
      return type
    },
    saveMonthRangeToLocal (idx, path, arr) {
      console.log(idx)
      console.log(path)
      console.log(arr)
      let emptyArr = []
      let _null = null
      if (arr[1] < arr[0]) {
        console.log(1)
        if (idx) {
          this.$store.commit('removeResumeSubfield', {path, emptyArr})
        } else {
          path += '.1'
          this.$store.commit('removeResumeSubfield', {path, _null})
        }
      }
      localStorage.setItem('resume', JSON.stringify(this.$store.state.resume))
    }
  },
  created: function () {
    var localResume = window.localStorage.getItem('resume')
    localResume = localResume ? JSON.parse(localResume) : null
    this.$store.commit('clearAll')
    this.$store.commit('initState', localResume)
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#resumeEditor {
  border: 0.0625rem solid blue;
  width: 70%;
  height: 100%;
  display: flex;
  background: $green;
  >nav {
    background: black;
    width: 5rem;
    height: 100%;
    color: white;
    >ol {
      li {
      // border: 1px solid red;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 5rem;
        height: 3rem;
        &.active {
          background: white;
          svg.icon{
            fill: black;
          }
        }
        svg.icon{
          width: 1.75rem;
          height: 1.75rem;
          fill: white;
          &:hover{
            fill: cyan;
          }
          &.removeMode{
            fill: cyan;
          }
        }
      }
    }
  }
  >.panels {
    flex-grow: 1;
    height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
        display:none
      }
    >li {
      height: 99%;
      >.panel {
        padding: 1rem;
        >.field-name {
          color: #333;
          padding: .5rem 0;
        }
        >.sub-nav {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: .5rem 1rem;
          >h2{
            flex-grow: 1;
          }
          >svg.icon {
            width: 1.5rem;
            height: 1.5rem;
            fill: white;
            &:hover {
              cursor: pointer;
              fill: cyan;
            }
            &.removeMode {
              fill: cyan;
            }
          }
          ~.content {
            margin-top: 1rem;
            &:after {
              content: '';
              display: block;
              width: 100%;
              height: 0;
              margin-top: 1rem;
              border-bottom: 1px dotted #aaa;
            }
            &:last-child {
              padding-bottom: .0625rem;
              &:after {
                border-bottom: none;
              }
            }
          }
        }
        >.content {
          width: 100%;
          padding: 0 1rem;
          label {
            display: flex;
            flex-direction: column;
            font-size: 1.25rem;
            p {
              line-height: 1.5;
              text-align: left;
              &:hover {
                cursor: pointer;
              }
            }
            input {
              display: block;
              font-size: 1rem;
              padding: .5rem;
              height: 2rem;
              border: .0625rem solid #666;
              border-radius: .25rem;
              &:invalid{
                color: red;
              }
              &:valid{
                color: black;
              }
            }
            textarea {
              display: block;
              font-size: 1rem;
              padding: .5rem;
              border: .0625rem solid #666;
              border-radius: .25rem;
              outline: none;
            }
          }
          .date {
            width: 100%;
          }
          .range {
            // width: 100%;
            display: flex;
            align-items: center;
            >span {
              width: 10%;
              margin: 0 .5rem;
            }
            >div {
              flex-shrink: 1;
              width: 45%;
            }
          }
          &.selective {
            background: white;
            &:hover {
              background-color: cyan;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}

</style>