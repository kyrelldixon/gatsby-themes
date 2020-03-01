/** @jsx jsx */
import { jsx } from "theme-ui"
import { Container } from "@theme-ui/components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "./layout"
import ItemTags from "./item-tags"
import SEO from "./seo"

type PostProps = {
  data: {
    post: {
      slug: string
      title: string
      date: string
      tags?: {
        name: string
        slug: string
      }[]
      description?: string
      body: string
      excerpt: string
      timeToRead: number
      banner?: {
        childImageSharp: {
          resize: {
            src: string
          }
        }
      }
    }
  }
}

const px = [`32px`, `16px`, `8px`, `4px`]
const shadow = px.map(v => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`)

const Post = ({ data: { post } }: PostProps) => (
  <Layout>
    <SEO
      title={post.title}
      description={post.description ? post.description : post.excerpt}
      image={post.banner ? post.banner.childImageSharp.resize.src : undefined}
    />
    <Container>
      <h2
        sx={{
          color: `heading`,
          textAlign: [`left`, `center`],
          fontSize: [4, 5, 6],
          mb: 4,
          mx: `auto`,
          fontWeight: 700,
          lineHeight: 1.3,
        }}
      >
        {post.title}
      </h2>
      <p sx={{ color: `secondary`, a: { color: `secondary` }, fontSize: [1, 1, 2], textAlign: [`left`, `center`] }}>
        <time>{post.date}</time>
        {post.tags && (
          <React.Fragment>
            {` — `}
            <ItemTags tags={post.tags} />
          </React.Fragment>
        )}
        {` — `}
        <span>{post.timeToRead} min read</span>
      </p>
      <section sx={{ my: 5, ".gatsby-resp-image-wrapper": { my: [4, 4, 5], boxShadow: shadow.join(`, `) } }}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </section>
    </Container>
  </Layout>
)

export default Post
