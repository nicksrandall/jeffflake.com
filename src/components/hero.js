/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core'
import Img from 'gatsby-image'
import mq from './mq'

import { main, background, red } from './colors'

const slideInLeft = keyframes`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`

const buttonStyles = css`
  margin: 12px 12px 0 0;
  color: ${background};
  background: ${red};
  text-decoration: inherit;
  padding: 12px;
  text-align: center;
  transition: background;
  display: inline-block;
  &:hover {
    background: ${main};
    color: ${background};
  }
`

const Header = ({ fluid }) => (
  <div
    css={css`
      width: 100%;
      ${mq({
        height: ['40vh', '50vh', '60vh', '80vh'],
        alignItems: ['flex-end', 'center'],
      })}
      background-color: ${background};
      display: flex;
      overflow: hidden;
      position: relative;
    `}
  >
    <div
      css={css`
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
      `}
    >
      <Img
        css={css`
          width: 100%;
          height: 100%;
        `}
        imgStyle={{
          objectFit: 'cover',
          objectPosition: 'top right',
        }}
        fluid={fluid}
        fadeIn={false}
        alt="Jeff Flake"
        critical={true}
      />
    </div>
    <div
      css={css`
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
        animation-name: ${slideInLeft};
        animation-fill-mode: both;
        animation-delay: 500ms;
        animation-duration: 500ms;
        ${mq({
          padding: ['30px', '30px', '60px'],
        })}
      `}
    >
      <div
        css={css`
          float: left;
          background: ${main};
          ${mq({
            padding: ['30px', '30px', '60px'],
          })}
        `}
      >
        <h1
          css={css`
            text-algin: center;
            ${mq({
              fontSize: ['48px', '60px', '72px'],
            })}
            color: ${background};
            margin: 0 0 0px 0;
            white-space: nowrap;
          `}
        >
          Jeff Flake
        </h1>
        <a
          href="https://www.harrywalker.com/speakers/jeff-flake/"
          css={buttonStyles}
        >
          Invite Jeff to speak
        </a>
        <a
          href="https://www.penguinrandomhouse.com/books/561219/conscience-of-a-conservative-by-jeff-flake/9780399592911/"
          css={buttonStyles}
        >
          Buy his book
        </a>
      </div>
    </div>
  </div>
)

export default Header
