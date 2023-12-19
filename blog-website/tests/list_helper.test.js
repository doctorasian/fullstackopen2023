const listHelper = require('../utils/list_helper')

describe('total likes', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'test blog',
      author: 'test author',
      url: 'example.com',
      likes: 25,
      __v: 0
    }
  ]

  const listWithMultipleBlogs = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'test blog1',
      author: 'test author1',
      url: 'example.com',
      likes: 25,
      __v: 0
    },
    {
      _id: '6a4532ssa554a676234d17g4',
      title: 'test blog2',
      author: 'test author2',
      url: 'example.com',
      likes: 10,
      __v: 0
    },
    {
      _id: '2a422aa71b5454a6234d17f7',
      title: 'test blog3',
      author: 'test author3',
      url: 'example.com',
      likes: 5,
      __v: 0
    },
  ]

  test('when list only has one blog, equals the likes from that blog', () => {
    const actual = listHelper.totalLikes(listWithOneBlog)
    expect(actual).toBe(25)
  })

  test('when list has multiple blogs, equals the likes of the sum from all blogs', () => {
    const actual = listHelper.totalLikes(listWithMultipleBlogs)
    expect(actual).toBe(40)
  })
})
