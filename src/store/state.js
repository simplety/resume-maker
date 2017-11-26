const state = {
  selected: 'profile',
  resumeConfig: [
    {field: 'profile', icon: 'id', title: '个人信息', keys: ['name', 'title', 'city', 'birthday']},
    {field: 'workHistory', icon: 'work', title: '工作经验', type: 'array', keys: ['company', 'yearRange', 'title', 'details']},
    {field: 'education', icon: 'book', title: '教育经历', type: 'array', keys: ['school', 'major', 'degree', 'yearRange', 'details']},
    {field: 'projects', icon: 'heart', title: '项目经验', type: 'array', keys: ['name', 'details']},
    {field: 'awards', icon: 'cup', title: '获得奖项', type: 'array', keys: ['name', 'yearRange', 'details']},
    {field: 'contacts', icon: 'phone', title: '联系方式', keys: ['phone', 'email']}
  ],
  resume: {
    id: ''
  }
}

export default state
