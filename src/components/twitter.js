/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { Component } from 'react'
import mq from './mq'

const script = url =>
  new Promise((res, rej) => {
    var s = document.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.onload = res
    s.onerror = rej
    s.src = url
    var x = document.getElementsByTagName('script')[0]
    x.parentNode.insertBefore(s, x)
  })

export default class TwitterTimelineEmbed extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }
  componentDidMount() {
    script('https://platform.twitter.com/widgets.js').then(() =>
      window.twttr.widgets.createTimeline(
        {
          sourceType: 'profile',
          screenName: 'JeffFlake',
          linkColor: '#141433',
          borderColor: '#141433',
        },
        this.myRef.current,
        {
          chrome: 'noheader nofooter transparent noborders',
          tweetLimit: 5,
        }
      )
    )
  }
  render() {
    return (
      <div
        css={css`
          background-color: #ededef;
        `}
      >
        <div
          css={css`
            text-align: center;
            max-width: 800px;
            margin: auto;
            ${mq({
              padding: ['30px', '30px', '60px'],
            })}
          `}
        >
          <h3
            css={css`
              text-transform: uppercase;
              text-align: center;
              margin: 30px 0 30px;
            `}
          >
            The Latest with Jeff
          </h3>
          <div ref={this.myRef} />
        </div>
      </div>
    )
  }
}
