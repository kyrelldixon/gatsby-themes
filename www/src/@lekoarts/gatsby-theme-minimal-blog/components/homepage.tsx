import React from "react"
import { Link } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import Listing from "@lekoarts/gatsby-theme-minimal-blog/src/components/listing"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import profileImg from "../../../assets/kyrell-dixon.jpeg"

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

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig()

  return (
    <Layout>
      <section className="flex flex-col flex-start items-start mb-24 max-w-md md:mx-auto md:text-center md:items-center">
        <h1 style={{ left: `-3px` }} className="text-6xl font-bold text-black mb-4 leading-none">
          Developer Coach
        </h1>
        <p className="text-lg text-gray-600 mb-6 md:text-xl">
          Currently helping students and beginner to mid-level developers break down and understand projects and write cleaner code.
        </p>
        <div className="flex mb-8">
          <a
            href="https://app.acuityscheduling.com/schedule.php?owner=19120506#selectedTimes"
            className="inline-block text-white text-sm font-semibold px-6 py-3 rounded-sm shadow-blue bg-primary mr-8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
          <Link
            to="/contact"
            className="inline-block text-primary text-sm font-semibold px-6 py-3 rounded-sm shadow-blue bg-white"
          >
            Learn More
          </Link>
        </div>
        <a className="flex items-center text-black text-sm hover:text-primary" href="mailto:hello@kyrelldixon.com">
          <div className="flex items-baseline">
            <img className="rounded-full w-12 h-12 relative" src={profileImg} alt="profile" />
            <span
              style={{ left: `-13px`, bottom: `-1px` }}
              className="inline-block h-4 w-4 rounded-full bg-green-300 shadow-md relative bottom-0 border border-white"
            />
          </div>
          <span className="font-semibold mr-1">Reply time:</span>within 6-12 hours
        </a>
      </section>
      <section className="flex flex-col justify-start max-w-lg mb-20 md:mx-auto">
        <h2 className="text-black text-3xl font-bold md:text-center mb-6">Recent Articles</h2>
        <Listing posts={posts} showTags={false} />
        <Link className="md:text-center text-primary hover:underline" to={replaceSlashes(`/${basePath}/${blogPath}`)}>More Articles</Link>
      </section>
    </Layout>
  )
}

export default Homepage
