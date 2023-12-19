const totalLikes = (blogList) => {
  const reducer = (sum, like) => {
    return sum + like
  }

  const likesArray = blogList.map(blog => blog.likes)
  return likesArray.reduce(reducer, 0)
}

module.exports = {
  totalLikes
}