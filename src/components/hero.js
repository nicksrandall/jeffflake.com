/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core'
import React from 'react'
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
  background: ${main};
  text-decoration: inherit;
  padding: 12px;
  text-align: center;
  transition: background;
  display: inline-block;
  box-shadow: none;
  &:hover {
    background: ${red};
    color: ${main};
  }
`

const Header = ({ hero, signature }) => (
  <>
    <div
      css={css`
        width: 100%;
        padding-bottom: 60%;
        align-items: center;
        background-color: ${background};
        display: flex;
        overflow: hidden;
        position: relative;
        @media (max-height: 600px) {
          align-items: flex-end;
        }
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
          fluid={hero}
          fadeIn={false}
          alt="Jeff Flake"
          critical={true}
        />
      </div>
      <div
        css={css`
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
        `}
      >
        <div
          css={css`
            height: 100%;
            width: 100%;
            max-width: 1024px;
            display: flex;
            align-items: center;
            margin: 0 auto;
            animation-name: ${slideInLeft};
            animation-fill-mode: both;
            animation-delay: 500ms;
            animation-duration: 500ms;
          `}
        >
          <div
            css={css`
              float: left;
              ${mq({
                padding: ['30px', '30px', '60px'],
              })}
            `}
          >
            <Img
              css={css`
                ${mq({
                  width: ['200px', '300px'],
                })}
              `}
              fluid={signature}
              critical
              imgStyle={{ marginBottom: 0 }}
            />
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
    </div>
  </>
)

export default Header
