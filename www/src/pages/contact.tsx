import React from "react"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="text-center flex flex-col items-center max-w-lg md:max-w-2xl mx-auto mb-16 md:mb-24">
      <p className="text-md opacity-50 mb-3 md:md-2">What are you working on?</p>
      <h2 className="text-5xl font-bold mb-4 text-black leading-tight md:md-8 md:text-6xl ">
        Let's talk
        <br className="md:hidden" /> about you
      </h2>
      <p className="text-md mb-6 md:text-xl md:mb-8">
        If you have a project in mind or you just want to chat, feel free to get in touch. Currently my time books
        quickly, so the sooner you write, the better it is for both of us.
      </p>
      <p className="text-sm mb-8 flex items-center tracking-wide md:mb-10">
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
    <div className="flex flex-col justify-between max-w-2xl mx-auto md:flex-row mb-16">
      <div className="bg-primary rounded-md px-4 py-6 text-white text-sm mb-8 mx-8">
        <h3 className="font-bold text-3xl leading-tight mb-4">Developer Coaching</h3>
        <p className="mb-4">
          If you need help with college, bootcamp, or work projects, schedule a session. If you're not satisfied after
          your <span className="font-bold">1st hour</span> with me, get a{` `}
          <span className="font-bold">100% refund.</span>
        </p>
        <a
          className="text-white font-semibold"
          href="https://app.acuityscheduling.com/schedule.php?owner=19120506#selectedTimes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Schedule Now{` `}
          <span className="inline-block w-2 h-2 transform -rotate-45 border-white border-r-2 border-b-2 align-middle" />
        </a>
      </div>
      <div
        style={{ backgroundColor: `rgb(0, 207, 255)` }}
        className="rounded-md px-4 py-6 text-white text-sm mb-6 md:mb-8 mx-8"
      >
        <h3 className="font-bold text-3xl leading-tight mb-4">General Questions</h3>
        <p className="mb-4">
          If you need an outside overview of your project, want some feedback, or just want to chat in general, start
          here to find a good spot for a <span className="font-bold">free, 15-min call.</span>
        </p>
        <a
          className="text-white font-semibold"
          href="https://app.acuityscheduling.com/schedule.php?owner=19120506#selectedTimes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Schedule Now{` `}
          <span className="inline-block w-2 h-2 transform -rotate-45 border-white border-r-2 border-b-2 align-middle -mt-1" />
        </a>
      </div>
    </div>
    <div className="text-center mb-16">
      <p className="mb-6 text-xl md:text-2xl">
        You can also just send me <br className="md:hidden" />
        an{` `}
        <a
          href="mailto:hello@kyrelldixon.com"
          className="text-primary font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          email
        </a>
        {` `}or{` `}
        <a
          href="https://twitter.com/kyrelldixon"
          className="text-primary font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          tweet
        </a>
        .
      </p>
      <a className="text-primary text-2xl font-semibold md:text-3xl" href="mailto:hello@kyrelldixon.com">
        hello@kyrelldixon.com
      </a>
    </div>
  </Layout>
)

export default ContactPage
