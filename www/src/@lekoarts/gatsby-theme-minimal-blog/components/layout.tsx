/** @jsx jsx */
import React, { useState } from "react"
import { Global } from "@emotion/core"
import { Main, Styled, css, jsx } from "theme-ui"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"
import Header from "@lekoarts/gatsby-theme-minimal-blog/src/components/header"
import Footer from "@lekoarts/gatsby-theme-minimal-blog/src/components/footer"
import CodeStyles from "@lekoarts/gatsby-theme-minimal-blog/src/styles/code"
import SkipNavLink from "@lekoarts/gatsby-theme-minimal-blog/src/components/skip-nav"
import MobileMenu from "@lekoarts/gatsby-theme-minimal-blog/src/components/mobile-menu"

import "typeface-ibm-plex-sans"
import "@lekoarts/gatsby-theme-minimal-blog/src/styles/style.css"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className }: LayoutProps) => {
  const { navigation: nav, basePath } = useMinimalBlogConfig()
  const [navOpen, setNavOpen] = useState(false)
  const toggleNav = () => setNavOpen(!navOpen)

  return (
    <Styled.root className="px-4" data-testid="theme-root">
      <Global
        styles={css({
          "*": {
            boxSizing: `inherit`,
          },
          body: {
            margin: 0,
            padding: 0,
            boxSizing: `border-box`,
            textRendering: `optimizeLegibility`,
            overflow: navOpen ? `hidden` : ``,
          },
          "::selection": {
            backgroundColor: `primary`,
            color: `white`,
          },
          a: {
            transition: `all 0.3s ease-in-out`,
            color: `text`,
          },
        })}
      />
      <SEO />
      <SkipNavLink>Skip to content</SkipNavLink>
      <Header nav={nav} basePath={basePath} toggleNav={toggleNav} navOpen={navOpen} />
      {navOpen && <MobileMenu nav={nav} basePath={basePath} />}
      <Main id="skip-nav" css={css({ ...CodeStyles })} className={className} sx={{ pt: `100px` }}>
        {children}
      </Main>
      <Footer />
    </Styled.root>
  )
}
export default Layout
