/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import heroImage from '../images/Jeff_Flake_official_Senate_photo (1).jpg'
import mq from './mq'

const buttonStyles = css`
  margin: 0px 15px 0 0;
  color: #fff;
  background-color: #961e23;
  text-decoration: inherit;
  padding: 15px;
  border-radius: 4px;
  text-align: center;
  transition: background-color 200ms ease-ou;
  &:hover {
    background-color: rgba(85, 29, 31, 1);
  }
`

const Header = () => (
  <div
    css={css`
      width: 100%;
      height: 90vh;
      background-color: #f2f2f2;
      background-image: url('${heroImage}');
      background-position: top right;
      background-size: cover;
      display: flex;
      align-items: center;
    `}
  >
    <div
      css={mq({
        width: '100%',
        padding: ['30px', '30px', '60px'],
        maxWidth: '1024px',
        margin: 'auto',
      })}
    >
      <h1
        css={css`
          font-size: 60px;
          color: #961e23;
          margin-bottom: 30px;
          color
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
