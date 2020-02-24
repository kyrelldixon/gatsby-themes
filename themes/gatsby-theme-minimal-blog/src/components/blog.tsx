/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "./layout"
import Listing from "./listing"
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
      <div className="text-center max-w-lg mx-auto mb-4">
        <p className="text-md opacity-50 mb-3 md:mb-6">Discover more of my</p>
        <h2 className="text-5xl font-bold mb-6 text-black leading-10 md:text-6xl md:mb-8">Articles</h2>
        <p className="text-lg mb-4 md:text-xl md:mb-6">
          Check out some of my most popular tutorials where I make complex code simple. Sign up to receive my
          newsletter, so you never miss a new article.
        </p>
        <form className="flex justify-between shadow-md max-w-sm mx-auto">
          <input
            id="email"
            className="px-4 py-2 flex-grow rounded-l-sm"
            type="email"
            name="email"
            placeholder="your@email.com"
          />
          <button className="text-white px-4 py-2 rounded-r-sm" type="submit" sx={{ backgroundColor: `primary` }}>
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
