import React from 'react'
import { Card } from '../components/card'
import { Avatar } from '../components/avatar'
import { Title } from '../components/title'
import { Paragraph } from '../components/paragraph'
import { AllLinks } from '../components/links'

const Home = ({
  data: {
    site: {
      siteMetadata: { biography },
    },
  },
}) => (
  <React.Fragment>
    <Avatar
      alt="photo of Matija Marohnić"
      src="//res.cloudinary.com/silvenon/image/upload/c_scale,w_300/v1510308691/avatar.jpg"
    />
    <Card>
      <Title>Matija Marohnić</Title>
      <Paragraph>
        {biography.long.split('\n\n').map((paragraph, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <p key={i}>{paragraph}</p>
        ))}
      </Paragraph>
    </Card>
    <AllLinks />
  </React.Fragment>
)

export default Home

export const query = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        biography {
          long
        }
      }
    }
  }
`