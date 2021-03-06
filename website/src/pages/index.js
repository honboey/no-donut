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
            <li key={index} className="mb-12 lg:mb-20">
              <div className="w-full lg:flex lg:justify-end">
                <h2 className="text-xl sm:text-2xl lg:text-4xl leading-tight underline mb-2 lg:mb-4 lg:w-2/3">
                  <a href={node.data.url} rel="noreferrer" target="_blank">
                    {node.data.title}{" "}
                  </a>
                </h2>
              </div>

              <div className="lg:flex">
                <div className="lg:w-1/3">
                  <footer className="text-sm lg:text-lg leading-snug font-plex-mono lg:w-3/4 lg:text-right">
                    <i>{node.data.publisher}</i>
                    <br />
                    {node.data.meta}
                  </footer>
                </div>

                <div className="lg:w-2/3">
                  <p className="sm:text-lg lg:text-2xl leading-snug">
                    {node.data.summary}
                  </p>
                </div>
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
    allAirtable(
      filter: { data: { approved: { eq: true } } }
      sort: { fields: data___modified, order: DESC }
    ) {
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
