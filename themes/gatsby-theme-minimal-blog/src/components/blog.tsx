/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { Flex } from "@theme-ui/components"
import Layout from "./layout"
import Listing from "./listing"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import replaceSlashes from "../utils/replaceSlashes"
import SEO from "./seo"

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    tags?: {
      name: string
      slug: string
    }[]
  }[]
}

const Blog = ({ posts }: PostsProps) => {
  // const { tagsPath, basePath } = useMinimalBlogConfig()

  return (
    <Layout>
      <SEO title="Blog" />
      <div sx={{ p: { margin: 0 }, textAlign: `center` }}>
        <p sx={{ color: `gray.7` }}>Discover more on my</p>
        <h2 sx={{ margin: 0, fontSize: [6], fontWeight: `800` }}>Blog</h2>
        <p sx={{ mb: 2 }}>
          Get an exclusive behind the scenes look into my mind and stuff by joining my blog. Sign up to receive my
          monthly newsletter, so you never miss a new article.
        </p>
        <form>
          <label sx={{ color: `primary` }} htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" placeholder="your@email.com" sx={{ pt: 2, pb: 1, py: 2 }} />
          <button type="submit" sx={{ backgroundColor: `primary`, color: `white`, px: 2, py: 1 }}>
            Subscribe
          </button>
        </form>
      </div>
      {/* <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, flexFlow: `wrap` }}>
        <Styled.h2>Blog</Styled.h2>
        <Styled.a as={Link} sx={{ variant: `links.secondary` }} to={replaceSlashes(`/${basePath}/${tagsPath}`)}>
          View all tags
        </Styled.a>
      </Flex> */}
      <Listing posts={posts} sx={{ mt: [4, 5] }} />
    </Layout>
  )
}

export default Blog
