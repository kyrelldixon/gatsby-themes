/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { Collapse } from "react-burgers"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import replaceSlashes from "../utils/replaceSlashes"

type NavItem = {
  title: string
  slug: string
}

type NavigationProps = {
  nav: NavItem[]
  navOpen: boolean
  toggleNav: () => void
}

const Navigation = ({ nav, toggleNav, navOpen }: NavigationProps) => {
  const { basePath } = useMinimalBlogConfig()

  return (
    <React.Fragment>
      {nav && nav.length > 0 && (
        <nav
          sx={{
            ".active": { color: `heading` },
          }}
        >
          <div sx={{ display: [`none`, `block`], a: { color: `heading` } }}>
            {nav.map(item =>
              !item.slug.includes(`contact`) ? (
                <NavItem key={item.title} to={replaceSlashes(`/${basePath}/${item.slug}`)} title={item.title} />
              ) : null
            )}
          </div>
          <span sx={{ display: [`inline`, `none`] }}>
            <Collapse
              width={22}
              lineHeight={2}
              lineSpacing={4}
              borderRadius={6}
              active={navOpen}
              onClick={toggleNav}
              padding="0"
              customProps={{
                "aria-label": `Menu`,
                "aria-controls": `navigation`,
              }}
            />
          </span>
        </nav>
      )}
    </React.Fragment>
  )
}

type NavItemProps = {
  to: string
  title: string
}

const NavItem = ({ to, title }: NavItemProps) => (
  <Styled.a className="mr-10 last:mr-0" key={title} as={Link} activeClassName="active" to={to}>
    {title}
  </Styled.a>
)

export default Navigation
