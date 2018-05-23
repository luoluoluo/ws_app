import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import zhCN from 'date-fns/locale/zh_cn'

export function getRemoteAvatar(id) {
  return `https://loremflickr.com/70/70/people?lock=${id}`
}

export function formatTimeline(timeline) {
  timeline.items.forEach(item => {
    item.time = distanceInWordsToNow(item.create_time * 1000, { addSuffix: true, locale: zhCN })
    if (item.comments) {
      item.comments.forEach(comment => {
        comment.time = distanceInWordsToNow(comment.create_time * 1000, { addSuffix: true, locale: zhCN })
        return comment
      })
    }
    return item
  })
  return timeline
}
