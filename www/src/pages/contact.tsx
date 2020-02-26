import React from "react"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="text-center flex flex-col items-center max-w-lg md:max-w-2xl mx-auto mb-16 md:mb-24">
      <p className="text-md opacity-50 mb-3 md:md-2">What are you working on?</p>
      <h2 className="text-5xl font-bold mb-4 text-black leading-tight md:md-6 md:text-6xl ">
        Let's talk
        <br className="md:hidden" /> about you
      </h2>
      <p className="text-md mb-6 md:text-xl md:mb-6">
        If you have a project in mind or you just want to chat, feel free to get in touch. Currently my time books
        quickly, so the sooner you write, the better it is for both of us.
      </p>
      <p className="text-sm mb-8 flex items-center tracking-wide">
        <span className="inline-block h-3 w-3 rounded-full bg-green-300 shadow-md mr-2" />
        <span className="font-semibold mr-1">Reply time:</span>within 6-12 hours
      </p>
      <a
        href="mailto:hello@kyrelldixon.com"
        className="text-white text-sm font-semibold px-6 py-3 rounded-sm shadow-blue bg-primary"
      >
        hello@kyrelldixon.com
      </a>
    </div>
  </Layout>
)

export default ContactPage
