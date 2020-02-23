/** @jsx jsx */
import React, { useState } from "react"
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { Collapse } from "react-burgers"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import replaceSlashes from "../utils/replaceSlashes"

type NavigationProps = {
  nav: {
    title: string
    slug: string
  }[]
}

const Navigation = ({ nav }: NavigationProps) => {
  const { basePath } = useMinimalBlogConfig()
  const [navOpen, setNavOpen] = useState(false)

  return (
    <React.Fragment>
      {nav && nav.length > 0 && (
        <nav
          sx={{
            "a:not(:last-of-type)": { mr: 3 },
            fontSize: [1, `18px`],
            ".active": { color: `heading` },
          }}
        >
          <div sx={{ display: [`none`, `block`] }}>
            {nav.map(item => (
              <Styled.a
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
              onClick={() => setNavOpen(!navOpen)}
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
