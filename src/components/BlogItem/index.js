// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {author, id, avatarUrl, imageUrl, title, topic} = blogDetails

  return (
    <Link className="link-class-name" to={`blogs/${id}`}>
      <li className="list-items">
        <div className="list-container">
          <div>
            <img className="img-url" alt={topic} src={imageUrl} />
          </div>
          <div className="all-topics-container">
            <p className="topic-description">{topic}</p>
            <h1 className="title-heading">{title}</h1>
            <div className="avatar-img-and-name-container">
              <img className="avatar-img" alt={title} src={avatarUrl} />
              <p className="topic-description">{author}</p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
