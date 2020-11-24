import React from 'react'
import {Helmet} from "react-helmet"
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function BlogPost({ data }) {
    const { markdownRemark } = data
    return (
        <Layout>
            <SEO title={markdownRemark.frontmatter.title} description={markdownRemark.excerpt} />
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
      excerpt
    }
  }
`
