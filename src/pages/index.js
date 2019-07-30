/** @jsx jsx */
import { graphql } from 'gatsby'
import { jsx, css } from '@emotion/core'
import React, { Component } from 'react'

import mq from '../components/mq'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Twitter from '../components/twitter'
import YouTube from '../components/youtubeModal'
import CBSVideo from '../components/cbsModal'
import VimeoVideo from '../components/vimeoModal'

import { main, darker, red, background, lighter } from '../components/colors'

const Content = ({ children, maxWidth = '800px' }) => (
  <div
    css={mq({
      color: background,
      maxWidth: maxWidth,
      margin: 'auto',
      padding: '1px 30px',
    })}
  >
    {children}
  </div>
)

const MainSection = props => (
  <div
    css={css`
      width: 100%;
      ${mq({
        paddingTop: ['30px', '100px'],
      })}
      background-color: ${main};
    `}
    {...props}
  />
)

const Section = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    css={css`
      padding-top: 30px;
      width: 100%;
      background-color: ${lighter};
    `}
    {...props}
  />
))

const Tile = ({ href, icon, title, onClick }) => (
  <a
    href={href}
    css={css`
      padding: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      height: 100%;
      width: 33.3333%;
      background: ${red};
      border: 1px solid ${background};
      color: ${background};
      ${mq({
        fontSize: ['16px', '24px'],
      })}
      &:first-of-type {
        border-right: none;
      }
      &:hover {
        background: ${main};
      }
    `}
    onClick={onClick}
  >
    {title}
  </a>
)

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.speeches = React.createRef()
  }
  render() {
    const { data } = this.props
    return (
      <Layout>
        <SEO title="Home" keywords={['Jeff', 'Flake', 'Senator']} />
        <Hero
          hero={data.hero.childImageSharp.fluid}
          signature={data.signature.childImageSharp.fluid}
        />
        <div
          css={css`
            width: 100%;
            ${mq({
              position: ['static', 'absolute'],
              height: ['100px', '150px'],
              margin: ['0px auto', '-75px auto'],
            })}
          `}
        >
          <div
            css={css`
              max-width: 800px;
              margin: auto;
              display: flex;
              ${mq({
                height: ['100px', '150px'],
              })}
            `}
          >
            <Tile
              href="#speeches"
              icon="speaker_notes"
              title="Speeches"
              onClick={e => {
                e.preventDefault()
                this.speeches.current.scrollIntoView({ behavior: 'smooth' })
              }}
            />
            <Tile
              href="https://www.penguinrandomhouse.com/books/561219/conscience-of-a-conservative-by-jeff-flake/9780399592911/"
              icon="book"
              title="Buy his Book"
            />
            <Tile
              href="mailto:postsenateflake@gmail.com"
              icon="contact_mail"
              title="Contact Jeff"
            />
          </div>
        </div>
        <MainSection>
          <Content>
            <h2
              css={css`
              text-align: center;
              ${mq({
                fontSize: ['24px', '36px'],
                margin: ['15px 0 30px 0', '30px 0 60px 0'],
              })}
              color: ${background};
            `}
            >
              About Jeff Flake
            </h2>
            <div
              css={css`
                & p:last-child {
                  margin-bottom: 0px;
                }
                border: 5px solid ${lighter};
                ${mq({
                  marginTop: ['30px', '30px', '30px', '60px'],
                  padding: ['30px', '30px', '60px', '60px'],
                })};
              `}
            >
              <p>
                “We are no longer used to great Senate speeches,” wrote Lawfare
                Editor in Chief, Benjamin Wittes, in October of 2017. “And then
                rises one Jeff Flake and delivers not merely a great speech but
                also a genuinely important one, perhaps the single most
                important address given on the Senate floor in my memory.”
              </p>
              <p>
                Author of the New York Times best seller 
                <a
                  css={css`
                    color: ${lighter};
                    border-bottom: 1px solid ${lighter};
                    box-shadow: none;
                  `}
                  href="https://www.penguinrandomhouse.com/books/561219/conscience-of-a-conservative-by-jeff-flake/9780399592911/"
                >
                  <i>
                    Conscience of a Conservative: A Rejection of Destructive
                    Politics and a Return to Principle
                  </i>
                </a>
                , Senator Flake has taken a lonely stand for principle and
                civility in an era of hyper-partisanship. 
              </p>
              <p>
                After serving six terms in the U.S. House of Representatives,
                Senator Flake was elected to the United States Senate, where he
                served for six years. While in the Senate, Senator Flake chaired
                the Subcommittee on Privacy, Technology & the Law, which sits at
                the intersection of innovation and regulation. He also chaired
                the Africa Subcommittee of the Foreign Relations Committee,
                where he passed landmark legislation on wildlife trafficking and
                democratic governance.
              </p>
              <p>
                Prior to entering Congress, Senator Flake served as executive
                director of the Goldwater Institute in Arizona. He also directed
                the Foundation for Democracy in Namibia during that nation’s
                transition to independence. Senator Flake holds degrees in
                International Relations and Political Science from Brigham Young
                University.
              </p>
              <p>
                Known for his ability to work across the political aisle,
                Senator Flake was the lead House Republican in the successful
                effort to prohibit spending earmarks, and the lead Senate
                Republican in the successful effort to restore diplomatic
                relations with Cuba.
              </p>
              <p>
                A sought-after speaker, Senator Flake delivered the 2018
                commencement address at Harvard Law School. His 2018 Senate
                floor speech titled “Truth and Democracy” was carried live on
                CNN, MSNBC and the FOX News Channel. During his time in the
                Senate, Senator was a frequent guest on NBC’s Meet the Press,
                ABC’s This Week, CBS’ Face the Nation, and CNN’s State of the
                Union.
              </p>
              <p>
                Senator Flake and his wife, Cheryl, live in Mesa, Arizona, and
                are the parents of five children.
              </p>
            </div>
            <a
              href="https://www.harrywalker.com/speakers/jeff-flake/"
              css={css`
                ${mq({
                  margin: [
                    '30px auto 30px',
                    '30px auto 30px',
                    '60px auto 60px',
                    '60px auto 60px',
                  ],
                  width: ['100%', 'auto'],
                  maxWidth: ['100%', '300px'],
                })}
                clear: both;
                display: block;
                color: ${background};
                border: 2px solid ${background};
                background: transparent;
                text-decoration: inherit;
                padding: 10px;
                text-align: center;
                background: ${main};
                &:hover {
                  color: ${main};
                  background: ${background};
                }
              `}
            >
              Invite Jeff to speak
            </a>
          </Content>
        </MainSection>
        <Section ref={this.speeches}>
          <Content maxWidth="1028px" paddingTop="30px">
            <div
              css={css`
              text-align: center;
              ${mq({
                fontSize: ['24px', '36px'],
                margin: ['15px 0 15px 0', '30px 0 30px 0'],
              })}
              color: ${background};
            `}
            >
              Notable Speeches
            </div>
            <div
              css={css`
                display: flex;
                flex-wrap: wrap;
                margin-bottom: 60px;
              `}
            >
              <YouTube
                id="yWQg-VG9Euw"
                title="Harvard Law School Commencement"
                start={1280}
              />
              <YouTube
                id="m8Mnv3WcQPk"
                title="Truth and Democracy"
                start={815}
              />
              <YouTube
                id="ghsmNARi3QA"
                title="I Rise to Say Enough"
                start={80}
              />
              <YouTube id="YQaS8HqpSok" title="Higher Ground" start={415} />
              <YouTube
                id="o8-E8qnLTRo"
                title="Land of Room Enough"
                start={1436}
              />
              <YouTube
                id="kSiCNf0u-5E"
                title="Friends, Not Enemies"
                start={581}
              />
              <CBSVideo 
                id="how-an-environmentalist-and-a-logger-came-together-to-save-arizonas-forests"
                poster="https://cbsnews1.cbsistatic.com/hub/i/r/2019/04/17/d74812cf-902b-4646-8300-50a3cdd66d19/thumbnail/1280x720/75eedb4353d2902099123d0bfe60bfd5/0417-ctm-commongroundforests-flake-1831311-640x360.jpg"
                title="Unlikely allies unite to save Arizona forests"
              />
              <CBSVideo
                id="cory-booker-and-mike-lee-put-aside-politics-to-tackle-criminal-justice-reform"
                poster="https://cbsnews1.cbsistatic.com/hub/i/r/2019/07/22/dec04250-bc13-4800-8655-5116f60cac89/thumbnail/1280x720/bce5f563eee4af6e20e577bc959b2ac4/0722-ctm-criminaljustice-flake-1895865-640x360.jpg"
                title="Senators put politics aside for prison reform"
              />
              <YouTube
                id="QOnr3DengMs"
                poster="/assets/jeff_video_thumb.png"
                title="Former Sen. Jeff Flake on why Republicans aren't disavowing Trump's 'awful' words"
              />
              <VimeoVideo
                id="345511987"
                poster="https://i.vimeocdn.com/video/795312424.jpg?mw=1500&mh=844"
                title="Podium Island Survival Trip"
              />
            </div>
          </Content>
        </Section>
        <Twitter />
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    hero: file(relativePath: { eq: "JEFF_MOD.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    signature: file(relativePath: { eq: "Flake_Signature.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
