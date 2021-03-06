import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    author: 'name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

export default [
  {
    url: '/vue-admin-template/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 200,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/vue-admin-template/datatable/list',
    type: 'post',
    delay: 400,
    response: options => {
      const body = options.body;
      const pageNum = body.pageNum;
      const sorter = body.sorter;
      const idbase = (pageNum - 1) * 10 + 1;
      let sortField = { 'age|1-100': 1 };
      if (sorter && sorter.prop === 'age') { // 模拟排序
        let i = 60 + ~~(Math.random() * 10);
        sortField =
          sorter.order === 'ascending'
            ? { 'age|+1': new Array(10).fill(0).map(item => i++) }
            : { 'age|+1': new Array(10).fill(0).map(item => i--) };
      }

      return {
        code: 200,
        data: {
          pageNum: pageNum,
          pageSize: body.pageSize,
          total: 99,
          totalPages: 10,
          [`list|${body.pageSize}`]: [
            {
              'id|+1': idbase,
              name: '@cname',
              address: '@county()',
              'role|1': ['1', '2', '3'],
              ...sortField
            }
          ]
        }
      }
    }
  },
]
