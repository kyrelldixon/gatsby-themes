import React from "react"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import Listing from "@lekoarts/gatsby-theme-minimal-blog/src/components/listing"
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"

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
      <div className="text-center max-w-lg mx-auto mb-16 md:mb-24 md:pt-8">
        <p className="text-md opacity-50 mb-3 md:mb-6">Discover more of my</p>
        <h2 className="text-5xl font-bold mb-6 text-black leading-10 md:text-6xl md:mb-8">Articles</h2>
        <p className="text-lg mb-4 md:text-xl md:mb-6">
          Check out some of my most popular tutorials where I make complex code simple. Sign up to receive my
          newsletter, so you never miss a new article.
        </p>
        {/* <form className="flex justify-between shadow-md max-w-sm mx-auto">
          <input
            id="email"
            className="px-4 py-2 flex-grow rounded-l-sm"
            type="email"
            name="email"
            placeholder="your@email.com"
          />
          <button className="text-white px-4 py-2 rounded-r-sm bg-primary" type="submit">
            Subscribe
          </button>
        </form> */}
      </div>
      <Listing className="max-w-md mx-auto md:max-w-lg" posts={posts} />
    </Layout>
  )
}

export default Blog
