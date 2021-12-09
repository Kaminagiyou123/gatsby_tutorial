import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"
const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Lorem, ipsum dolor sit amet </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero sed
              exercitationem aliquam alias optio sint voluptas vitae, labore
              temporibus repudiandae. Nemo vitae, beatae deleniti soluta quas
              quam voluptatum est nisi!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
              amet excepturi laboriosam sunt odio cum ipsum minus fuga, ut at.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring Salt in Bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulRecipe(
      sort: { order: ASC, fields: featured }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        prepTime
        title
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
