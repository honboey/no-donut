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
          {data.allAirtable.edges.map(({ node }, index) => (
            <li
              key={index}
              className="flex flex-col lg:flex-row mb-12 lg:mb-20"
            >
              <div className="lg:w-1/3">
                <aside className="lg:w-3/4">
                  <p className="text-sm lg:text-xl leading-snug lg:text-right font-plex-mono">
                    <i>{node.data.publisher}</i>
                    <br />
                    {node.data.meta}
                  </p>
                </aside>
              </div>

              <div className="lg:w-2/3">
                <h2 className="text-xl lg:text-5xl leading-tight underline mb-2 lg:mb-4">
                  <a href={node.data.url} rel="noreferrer" target="_blank">
                    {node.data.title}
                  </a>
                </h2>
                <p className="lg:text-3xl leading-snug">{node.data.summary}</p>
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
    allAirtable(filter: {data: {approved: {eq: true}}}, sort: {fields: data___modified, order: DESC}) {
      edges {
        node {
          data {
            meta
            modified
            publisher
            summary
            title
            url
            type
          }
        }
      }
    }
  }
`

export default IndexPage
