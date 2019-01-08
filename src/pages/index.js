/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import mq from '../components/mq'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Twitter from '../components/twitter'
import Media from 'react-media'

import { main, darker, lighter, background } from '../components/colors'

const Content = ({ children }) => (
  <div
    css={mq({
      color: background,
      padding: ['30px', '30px', '30px', '60px'],
      maxWidth: '800px',
      margin: 'auto',
    })}
  >
    {children}
  </div>
)

const Section = ({ children }) => (
  <div
    css={css`
      width: 100%;
      background-color: ${main};
    `}
  >
    {children}
  </div>
)

const IndexPage = ({ data }) =>
  console.log('data', data) || (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Hero
        hero={data.hero.childImageSharp.fluid}
        signature={data.signature.childImageSharp.fluid}
      />
      <Section>
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
              ${mq({
                marginTop: ['30px', '30px', '30px', '60px'],
                padding: ['30px', '30px', '60px', '60px'],
                backgroundColor: darker,
              })}
            `}
          >
            <p>
              "We are no longer used to great Senate speeches," wrote Lawfare
              Editor in Chief, Benjamin Wittes, in October of 2017. "And then
              rises one Jeff Flake and delivers not merely a great speech but
              also a genuinely important one, perhaps the single most important
              address given on the Senate floor in my memory."
            </p>
            <p>
              Author of the New York Times best seller 
              <a
                css={css`
                  color: ${lighter};
                  box-shadow: none;
                `}
                href=""
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
              the intersection of innovation and regulation. He also chaired the
              Africa Subcommittee of the Foreign Relations Committee, where he
              passed landmark legislation on wildlife trafficking and democratic
              governance. 
            </p>
            <p>
              Prior to entering Congress, Senator Flake served as executive
              director of the Goldwater Institute in Arizona. He also directed
              the Foundation for Democracy in Namibia during that nation’s
              transition to independence.  Senator Flake holds a B.A. in
              International Relations and an M.A. in Political Science from
              Brigham Young University.
            </p>
            <p>
              Known for his ability to work across the political aisle, Senator
              Flake was the lead House Republican in the successful effort to
              prohibit spending earmarks, and the lead Senate Republican in the
              successful effort to restore diplomatic relations with Cuba. 
            </p>
            <p>
              A sought-after speaker, Senator Flake delivered the 2018
              commencement address at Harvard Law School. His recent Senate
              floor speech titled “Truth and Democracy”was carried live on CNN,
              MSNBC and the FOX News Channel. Senator Flake is a frequent guest
              on NBC’s Meet the Press, ABC’s This Week, and CBS’ Face the
              Nation.
            </p>
            <p>
              Senator Flake and his wife, Cheryl, live in Mesa, Arizona, and are
              the parents of five children.
            </p>
          </div>
          <a
            href="https://www.harrywalker.com/speakers/jeff-flake/"
            css={css`
              ${mq({
                margin: [
                  '30px auto 0px',
                  '30px auto 0px',
                  '60px auto 30px',
                  '60px auto 30px',
                ],
                width: ['100%', 'auto'],
                maxWidth: ['100%', '300px'],
              })}
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
      </Section>
      <Twitter />
    </Layout>
  )

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
