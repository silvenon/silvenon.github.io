// @flow
import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'astroturf'
import { shuffle } from 'lodash'
import { Share as TwitterShare } from 'react-twitter-widgets'
import { FaUser, FaCalendarAlt } from 'react-icons/fa'
import { DiscussionEmbed } from 'disqus-react'
import Layout from './layout'
import Spacer from './spacer'
import Container from './container'
import Header from './header'
import { H1 } from './body'
import Link from './link'
import BackLink from './back-link'
import BaseMeta from './meta'
import Date from './date'
import Author from './author'
import socialLinks from '../constants/social-links'

const Meta = styled(BaseMeta)`
  margin: 0.5rem 1rem 1rem;
  display: inline-block;
`

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  & > * + * {
    margin-left: 0.5rem;
  }
`

const Title = styled(H1)`
  margin-bottom: 0;
  color: #000;
`

const TwitterShareContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  line-height: 0;
`

const NextPost = styled.p`
  font-family: var(--alt-font-family);
  color: color(#000 tint(50%));
`

const Disqus = styled.div`
  margin-top: 2rem;
`

type ReadNext = {
  title: string,
  path: string,
}

type Props = {
  children: React.Node,
  location: {
    pathname: string,
  },
  pageContext: {
    node: {
      fields: {
        date: string,
        slug: string,
        isDraft: boolean,
      },
      exports: {
        meta: {
          title: string,
          lang: string,
          lastModified: string,
        },
      },
      excerpt: string,
    },
    readNextSuggestions: ReadNext[],
  },
}

type State = {
  readNext: ?ReadNext,
}

class Post extends React.Component<Props, State> {
  state = {
    readNext: null,
  }

  componentDidMount() {
    const {
      pageContext: { readNextSuggestions },
    } = this.props
    this.setState({
      readNext: shuffle(readNextSuggestions)[0],
    })
  }

  render() {
    const {
      children,
      location: { pathname },
      pageContext: {
        node: {
          fields: { date, slug, isDraft },
          exports: {
            meta: { title, lang, lastModified },
          },
          excerpt,
        },
      },
    } = this.props
    const { readNext } = this.state
    return (
      <StaticQuery
        query={graphql`
          query PostQuery {
            site {
              siteMetadata {
                siteUrl
                name
                avatar {
                  id
                  aspectRatio
                }
                biography {
                  long
                }
              }
            }
          }
        `}
        render={({
          site: {
            siteMetadata: { siteUrl, name, avatar, biography },
          },
        }: {
          site: {
            siteMetadata: {
              siteUrl: string,
              name: string,
              avatar: { id: string, aspectRatio: number },
              biography: { long: string },
            },
          },
        }) => (
          <Layout
            title={title}
            description={excerpt}
            pathname={pathname}
            lang={lang}
            article={{
              publishedTime: date,
              modifiedTime: lastModified !== '' ? lastModified : null,
              author: name,
              tags: [],
            }}
          >
            <Header>
              <Header.TopBar>
                <BackLink to="/blog">All posts</BackLink>
              </Header.TopBar>
              <Title>{title}</Title>
              <Meta>
                <MetaRow>
                  <FaUser />
                  <div>{name}</div>
                </MetaRow>
                <MetaRow>
                  <FaCalendarAlt />
                  <Date dateTime={date} />
                </MetaRow>
              </Meta>
            </Header>
            <Container>
              {children}
              <TwitterShareContainer>
                <TwitterShare
                  url={`${siteUrl}${pathname}`}
                  options={{ text: title, via: 'silvenon', size: 'large' }}
                />
              </TwitterShareContainer>
            </Container>
            <Author
              name={name}
              avatar={avatar}
              biography={biography.long}
              links={socialLinks}
            />
            <Container>
              {readNext != null ? (
                <NextPost>
                  <span>Read next → </span>
                  <Link to={readNext.path}>{readNext.title}</Link>
                </NextPost>
              ) : null}
              {isDraft ? null : (
                <Disqus>
                  <DiscussionEmbed
                    shortname="silvenon"
                    config={{
                      url: `${siteUrl}${pathname}`,
                      identifier: slug,
                      title,
                    }}
                  />
                </Disqus>
              )}
            </Container>
            <Spacer />
          </Layout>
        )}
      />
    )
  }
}

export default Post
