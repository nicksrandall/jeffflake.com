/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core'
import Img from 'gatsby-image'
import mq from './mq'
import Media from 'react-media'

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
  margin: 0px 15px 0 0;
  color: #fff;
  background-color: #961e23;
  text-decoration: inherit;
  padding: 15px;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
  }
`

const Header = ({ fluid }) => (
  <div
    css={css`
      width: 100%;
      height: 80vh;
      background-color: #ededef;
      display: flex;
      align-items: center;
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
      <Media query="(max-width: 767px)">
        {matches => (
          <Img
            css={css`
              width: 100%;
              height: 100%;
            `}
            imgStyle={{
              objectFit: 'cover',
              objectPosition: matches ? 'top center' : 'top right',
            }}
            fluid={fluid}
            fadeIn={false}
            alt="Jeff Flake"
            critical={true}
          />
        )}
      </Media>
    </div>
    <div
      css={css`
        ${mq({
          padding: ['30px', '30px', '60px'],
        })}
        width: 100%;
        animation-name: ${slideInLeft};
        animation-fill-mode: both;
        animation-delay: 500ms;
        animation-duration: 500ms;
      `}
    >
      <h1
        css={css`
          font-size: 60px;
          color: #961e23;
          margin: 0 0 30px 0;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
        `}
      >
        Jeff Flake
      </h1>
      <a
        href="https://www.harrywalker.com/speakers/jeff-flake/"
        css={buttonStyles}
      >
        Invite Jeff to Speak
      </a>
      <a
        href="https://www.penguinrandomhouse.com/books/561219/conscience-of-a-conservative-by-jeff-flake/9780399592911/"
        css={buttonStyles}
      >
        Buy the book
      </a>
    </div>
  </div>
)

export default Header
