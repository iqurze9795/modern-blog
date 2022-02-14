import React from 'react'

type Post = {
  title: string
  excerpt: string
}
type PostProps = {
  post: Post
}
const PostCard = ({ post }: PostProps) => {
  return (
    <div>
      {post.title}
      {post.excerpt}
    </div>
  )
}

export default PostCard
