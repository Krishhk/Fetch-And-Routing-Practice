// Write your JS code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isValue: false}

  componentDidMount = () => {
    this.getApiCallToBlogsLIst()
  }

  getApiCallToBlogsLIst = async () => {
    const {match} = this.props
    const {params} = match

    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)

    const updateData = {
      author: data.author,
      id: data.id,
      avatarUrl: data.avatar_url,
      imageUrl: data.image_url,
      title: data.title,
      content: data.content,
      topic: data.topic,
    }

    this.setState({blogData: updateData, isValue: true})
  }

  render() {
    const {blogData, isValue} = this.state
    const {author, avatarUrl, imageUrl, title, content, topic} = blogData

    return (
      <div>
        {isValue ? (
          <div className="total-container">
            <h1 className="title-name">{title}</h1>
            <div className="avatar-container">
              <img className="avatar-img" alt={author} src={avatarUrl} />
              <p className="span-para">{author}</p>
            </div>
            <img className="img-url" alt={title} src={imageUrl} />
            <p className="content">{content}</p>
          </div>
        ) : (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
