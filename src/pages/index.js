/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import mq from '../components/mq'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Twitter from '../components/twitter'

const Content = ({ children }) => (
  <div
    css={mq({
      color: '#fff',
      padding: ['30px', '30px', '60px'],
      maxWidth: '1024px',
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
      background-color: #961e23;
    `}
  >
    {children}
  </div>
)

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero fluid={data.hero.childImageSharp.fluid} />
    <Section>
      <Content>
        <h2
          css={css`
            text-align: center;
            font-size: 36px;
          `}
        >
          About Jeff Flake
        </h2>
        <div
          css={mq({
            marginTop: ['30px', '30px', '60px'],
            padding: ['30px', '60px', '60px'],
            backgroundColor: 'rgba(35, 35, 35, 0.5)',
          })}
        >
          <p>
            "We are no longer used to great Senate speeches," wrote Lawfare
            Editor in Chief, Benjamin Wittes, in October of 2017. "And then
            rises one Jeff Flake and delivers not merely a great speech but also
            a genuinely important one, perhaps the single most important address
            given on the Senate floor in my memory."
          </p>
          <p>
            Author of the New York Times best seller Conscience of a
            Conservative: A Rejection of Destructive Politics and a Return to
            Principle, Senator Flake has taken a lonely stand for principle and
            civility in an era of hyper-partisanship. 
          </p>
          <p>
            After serving six terms in the U.S. House of Representatives,
            Senator Flake was elected to the United States Senate, where he
            served for six years. While in the Senate, Senator Flake chaired the
            Subcommittee on Privacy, Technology & the Law, which sits at the
            intersection of innovation and regulation. He also chaired the
            Africa Subcommittee of the Foreign Relations Committee, where he
            passed landmark legislation on wildlife trafficking and democratic
            governance. 
          </p>
          <p>
            Prior to entering Congress, Senator Flake served as executive
            director of the Goldwater Institute in Arizona. He also directed the
            Foundation for Democracy in Namibia during that nation’s transition
            to independence.  Senator Flake holds a B.A. in International
            Relations and an M.A. in Political Science from Brigham Young
            University.
          </p>
          <p>
            Known for his ability to work across the political aisle, Senator
            Flake was the lead House Republican in the successful effort to
            prohibit spending earmarks, and the lead Senate Republican in the
            successful effort to restore diplomatic relations with Cuba. 
          </p>
          <p>
            A sought-after speaker, Senator Flake delivered the 2018
            commencement address at Harvard Law School. His recent Senate floor
            speech titled “Truth and Democracy”was carried live on CNN, MSNBC
            and the FOX News Channel. Senator Flake is a frequent guest on
            NBC’s Meet the Press, ABC’s This Week, and CBS’ Face the Nation.
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
              margin: ['30px auto 0px', '30px auto 0px', '60px auto 0px'],
            })}
            max-width: 300px;
            display: block;
            color: #fff;
            border: 2px solid #fff;
            background: transparent;
            text-decoration: inherit;
            padding: 10px;
            text-align: center;
          `}
        >
          Invite Jeff to Speak
        </a>
      </Content>
    </Section>
    <Twitter />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    hero: file(
      relativePath: { eq: "Jeff_Flake_official_Senate_photo (1).jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
