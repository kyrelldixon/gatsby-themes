import React from "react"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="text-center max-w-lg mx-auto mb-16 md:mb-24">
      <p className="text-md opacity-50 mb-3 md:mb-6">What are you working on?</p>
      <h2 className="text-5xl font-bold mb-6 text-black leading-10 md:text-6xl md:mb-8">Let's talk about you</h2>
      <p className="text-lg mb-4 md:text-xl md:mb-6">
        If you have a project in mind or you just want to chat, feel free to get in touch. Currently my time books
        quickly, so the sooner you write, the better it is for both of us.
      </p>
      <form className="flex justify-between shadow-md max-w-sm mx-auto">
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
      </form>
    </div>
  </Layout>
)

export default ContactPage
