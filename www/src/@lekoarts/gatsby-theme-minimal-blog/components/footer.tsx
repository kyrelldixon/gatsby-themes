import React from "react"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"

const Footer = () => {
  const { externalLinks } = useMinimalBlogConfig()

  return (
    <footer className="mb-4">
      <div className="flex flex-col items-center">
        <ul className="flex max-w-sm mb-3">
          {externalLinks.map(item => (
            <li className="mr-6 last:mr-0" key={item.name}>
              <a target="_blank" rel="noopener noreferrer" className="hover:underline" href={item.url}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <small className="flex flex-wrap justify-center">
          <p className="mr-2">&copy; {new Date().getFullYear()} All rights reserved. </p>
          <p>
            Inspired by{` `}
            <a className="hover:underline" href="https://danielkorpai.com" target="_blank" rel="noopener noreferrer">
              Daniel Korpai
            </a>
            {` `} and{` `}
            <a className="hover:underline" href="https://www.kyrelldixon.com" target="_blank" rel="noopener noreferrer">
              Built by Kai
            </a>
          </p>
        </small>
      </div>
    </footer>
  )
}

export default Footer
