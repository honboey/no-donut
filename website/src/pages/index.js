import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = function ({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <section>
        <ul>
          {data.allNodonutLinksCsv.edges.map(({ node }, index) => (
            <li
              key={index}
              className="flex flex-col lg:flex-row mb-12 lg:mb-20"
            >
              <div className="lg:w-1/3">
                <aside className="lg:w-3/4">
                  <p className="text-sm lg:text-xl leading-snug lg:text-right font-plex-mono">
                    <i>{node.publisher}</i>
                    <br />
                    {node.meta}
                  </p>
                </aside>
              </div>

              <div className="lg:w-2/3">
                <h2 className="text-xl lg:text-5xl leading-tight underline mb-2 lg:mb-4">
                  <a href={node.url} rel="noreferrer" target="_blank">{node.title}</a>
                </h2>
                <p className="lg:text-3xl leading-snug">{node.summary}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query HomepageQuery {
    allNodonutLinksCsv {
      edges {
        node {
          id
          publisher
          title
          url
          type
          summary
          meta
        }
      }
    }
  }
`

export default IndexPage
