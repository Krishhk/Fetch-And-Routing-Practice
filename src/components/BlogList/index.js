// Write your JS code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import BlogItem from '../BlogItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import UserInfo from '../UserInfo'
import './index.css'

class BlogList extends Component {
  state = {blogsList: [], isValue: false}

  componentDidMount = () => {
    this.getApiCallToBlogsLIst()
  }

  getApiCallToBlogsLIst = async () => {
    const response = await fetch(`https://apis.ccbp.in/blogs`)
    const data = await response.json()

    const updateData = data.map(eachItem => ({
      author: eachItem.author,
      id: eachItem.id,
      avatarUrl: eachItem.avatar_url,
      imageUrl: eachItem.image_url,
      title: eachItem.title,
      topic: eachItem.topic,
    }))

    this.setState({blogsList: updateData, isValue: true})
  }

  render() {
    const {blogsList, isValue} = this.state

    return (
      <div>
        <UserInfo />
        {isValue ? (
          <ul className="un-order-list">
            {blogsList.map(eachItem => (
              <BlogItem key={eachItem.id} blogDetails={eachItem} />
            ))}
          </ul>
        ) : (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        )}
      </div>
    )
  }
}

export default BlogList
