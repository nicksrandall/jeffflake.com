/** @jsx jsx */
import mq from './mq'
import { jsx, css } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { SocialIcon } from 'react-social-icons'

import { main, background } from './colors'

import './layout.css'

const Social = ({ url }) => (
  <SocialIcon
    css={css`
      box-shadow: none;
      margin: 5px;
    `}
    url={url}
  />
)

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div>{children}</div>
        <footer
          css={css`
            background-color: ${background};
          `}
        >
          <div
            css={css`
              text-align: center;
            `}
          >
            <Social url="twitter.com/JeffFlake" />
            <Social url="https://www.facebook.com/senatorjeffflake/" />
            <Social url="https://www.instagram.com/jeffflake" />
          </div>
          <div
            css={css`
              text-align: center;
              max-width: 1024px;
              margin: auto;
              ${mq({
                padding: ['30px', '30px', '30px', '60px'],
              })}
            `}
          >
            © Jeff Flake {new Date().getFullYear()}
          </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
