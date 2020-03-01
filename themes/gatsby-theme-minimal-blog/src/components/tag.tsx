/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Flex, Container } from "@theme-ui/components"
import { Link } from "gatsby"
import Layout from "./layout"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import Listing from "./listing"
import replaceSlashes from "../utils/replaceSlashes"
import SEO from "./seo"

type TagProps = {
  posts: {
    slug: string
    title: string
    date: string
    tags: {
      name: string
      slug: string
    }[]
  }[]
  pageContext: {
    isCreatedByStatefulCreatePages: boolean
    slug: string
    name: string
    [key: string]: any
  }
}

const Tag = ({ posts, pageContext }: TagProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig()

  return (
    <Layout>
      <SEO title={`Tag: ${pageContext.name}`} />
      <Container>
        <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, flexFlow: `wrap` }}>
          <Styled.h2 sx={{ m: 0 }}>{pageContext.name}</Styled.h2>
          <Styled.a as={Link} sx={{ variant: `links.secondary` }} to={replaceSlashes(`/${basePath}/${tagsPath}`)}>
            View all tags
          </Styled.a>
        </Flex>
        <Listing posts={posts} sx={{ mt: [4, 5] }} />
      </Container>
    </Layout>
  )
}

export default Tag
