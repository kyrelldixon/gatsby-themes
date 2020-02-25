/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import { jsx, Styled } from "theme-ui"
import replaceSlashes from "../utils/replaceSlashes"

type MobileMenuProps = {
  nav: {
    title: string
    slug: string
  }
  basePath: string
}

const MobileMenu = ({ nav, basePath }: MobileMenuProps) => {
  return (
    <div className="fixed inset-0 z-10">
      <div
        sx={{
          height: `100%`,
          display: `flex`,
          alignItems: `center`,
          flexGrow: 1,
          px: 3,
          backgroundColor: `background`,
        }}
      >
        <ul
          sx={{
            margin: 0,
            padding: 0,
            listStyle: `none`,
            fontSize: 5,
            fontWeight: `bold`,
            color: `text`,
            a: { color: `heading` },
          }}
        >
          {nav.map(item => (
            <li key={item.slug} sx={{ mb: 4 }}>
              <Styled.a as={Link} activeClassName="active" to={replaceSlashes(`/${basePath}/${item.slug}`)}>
                {item.title}
              </Styled.a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default MobileMenu
