import Vue from 'vue'
// vue管道符的过滤方法

// 将后台返回的信息 拼接成字符串
// Vue.filter('serializeMessage', function (obj) {
//   let message = ''
//   for(let i in obj){
//     message += `${obj[i]} \n`
//   }
//
//   return message
// })

/**
 * 敏感词汇的过滤等级
 * @param {int|string} rand
 * @return {string}
 */
function sensitiveWordRank (rank) {
  if (typeof rank === 'string') {
    rank = parseInt(rank)
  }
  switch (rank) {
    case 1:
      return '替换'
    case 2:
      return '审核'
    case 3:
      return '屏蔽'
    default:
      return '未知'
  }
}

/**
 * 举报的类型
 * @param {int} type
 * @return {string}
 */
function mailboxType (type) {
  switch (type) {
    case 'article':
      return '文章'
    case 'comment':
      return '评论'
    case 3:
      return '通知'
  }
}

function filterListNumber (index, currentPage) {
  if (currentPage < 1) {
    currentPage = 1
  }

  return (currentPage - 1) * 20 + index + 1
}

Vue.use({
  install (vue) {
    vue.filter('mailboxType', mailboxType)
    vue.filter('sensitiveWordRank', sensitiveWordRank)
    vue.filter('filterListNumber', filterListNumber)
  }
})
