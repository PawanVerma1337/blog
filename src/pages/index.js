import React from "react"
import { Link } from "gatsby"
import {Helmet} from "react-helmet"
import Layout from "../components/layout"
import { format } from 'date-fns'

export default function Home({ data }) {
    console.log(data)
    return (
        <Layout>
            <Helmet>
                <title>Blog - Pawan Verma</title>
            </Helmet>
            <div>
                { data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <h1>
                        <Link to={node.frontmatter.slug}>{node.frontmatter.title}{" "}</Link>
                    </h1>
                    <p className="lead">{format(new Date(node.frontmatter.date),"MMM dd, yyyy")}</p>    
                    <p>{node.excerpt}</p>
                    <Link className="btn btn-custom" to={node.frontmatter.slug}>Read more >></Link>


                    <hr className="bg-white"/>
                </div>
                )) }
            </div>
        </Layout>
    )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter{
            date
            title
            slug
          }
          excerpt
        }
      }
    }
  }
`
