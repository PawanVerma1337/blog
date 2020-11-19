import React from 'react'
import {Helmet} from "react-helmet"
import Layout from '../components/layout'

export default function BlogPost({ data }) {
    const { markdownRemark } = data
    return (
        <Layout>
            <Helmet>
                <title>{markdownRemark.frontmatter.title}</title> 
            </Helmet>
            <div>
                <h1>{markdownRemark.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{__html: markdownRemark.html}}></div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
