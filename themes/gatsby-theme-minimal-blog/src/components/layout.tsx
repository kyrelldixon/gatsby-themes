/** @jsx jsx */
import React, { useState } from "react"
import { Global } from "@emotion/core"
import { Main, Styled, Container, css, jsx } from "theme-ui"
import "typeface-ibm-plex-sans"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import "../styles/style.css"
import SEO from "./seo"
import Header from "./header"
import Footer from "./footer"
import CodeStyles from "../styles/code"
import SkipNavLink from "./skip-nav"
import MobileMenu from "./mobile-menu"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className }: LayoutProps) => {
  const { navigation: nav, basePath } = useMinimalBlogConfig()
  const [navOpen, setNavOpen] = useState(false)
  const toggleNav = () => setNavOpen(!navOpen)

  return (
    <Styled.root data-testid="theme-root">
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
      <Container>
        <Header nav={nav} basePath={basePath} toggleNav={toggleNav} navOpen={navOpen} />
        {navOpen && <MobileMenu nav={nav} basePath={basePath} />}
        <Main id="skip-nav" css={css({ ...CodeStyles })} className={className} sx={{ pt: `100px` }}>
          {children}
        </Main>
        <Footer />
      </Container>
    </Styled.root>
  )
}
export default Layout
