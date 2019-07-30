/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { Component } from 'react'
import { Dialog } from '@reach/dialog'
import VisuallyHidden from '@reach/visually-hidden'
import '@reach/dialog/styles.css'

import { background } from './colors.js'
import mq from './mq'

export default class extends Component {
  state = {
    showDialog: false,
  }
  render() {
    let { id, title, poster } = this.props
    return (
      <>
        <div
          css={css`
            ${mq({
              width: ['100%', '50%', '33.3333%'],
            })}
            padding: 8px;
            text-align: center;
          `}
          onClick={() => this.setState({ showDialog: true })}
        >
          <div
            css={css`
              position: relative;
              padding-top: 75%;
              height: 0;
              background: #000;
            `}
          >
            <img
              css={css`
                margin: 0;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: contain;
              `}
              src={poster}
              loading="lazy"
            />
          </div>
          <div
            css={css`
              text-align: center;
            `}
          >
            {title}
          </div>
        </div>
        <Dialog
          css={css`
            position: relative;
            background: ${background};
            ${mq({
              padding: ['48px 12px', '48px'],
              width: ['90vw', '80vw']
            })}
          `}
          isOpen={this.state.showDialog}
          onDismiss={() => this.setState({ showDialog: false })}
        >
          <button
            css={css`
              background: ${background};
              outline: none;
              position: absolute;
              right: 10px;
              top: 0px;
              padding: 5px;
              border: none;
              font-size: 150%;
            `}
            onClick={() => this.setState({ showDialog: false })}
          >
            <VisuallyHidden>Close</VisuallyHidden>
            <span aria-hidden>×</span>
          </button>
          <div
            css={css`
              width: 100%;
              height: 0;
              padding-bottom: 56.25%;
              position: relative;
            `}
          >
            <iframe
              loading="lazy"
              css={css`
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
              `}
              src={`https://player.vimeo.com/video/${id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div
            css={css`
              font-size: 24px;
              text-align: center;
              font-weight: bold;
              margin-top: 16px;
            `}
          >
            {title}
          </div>
        </Dialog>
      </>
    )
  }
}
