/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { Collapse } from "react-burgers"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import replaceSlashes from "../utils/replaceSlashes"

type NavigationProps = {
  nav: {
    title: string
    slug: string
  }
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
            {nav.map(item => (
              <Styled.a
                className="mr-10 last:mr-0"
                key={item.slug}
                as={Link}
                activeClassName="active"
                to={replaceSlashes(`/${basePath}/${item.slug}`)}
              >
                {item.title}
              </Styled.a>
            ))}
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

export default Navigation
