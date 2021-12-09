import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"
const Contact = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              iusto commodi, excepturi natus aut quaerat ab voluptatibus ullam
              perspiciatis numquam facere itaque iste tempora sunt odit alias
              veniam adipisci exercitationem!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              iusto commodi, excepturi natus aut quaerat ab voluptatibus ullam
              perspiciatis numquam facere itaque iste tempora sunt odit alias
              veniam adipisci exercitationem!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              iusto commodi, excepturi natus aut quaerat ab voluptatibus ullam
              perspiciatis numquam facere itaque iste tempora sunt odit alias
              veniam adipisci exercitationem!
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/xvolozzd"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name"></input>
              </div>

              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email"></input>
              </div>

              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                {" "}
                submit
              </button>
            </form>
          </article>
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

export default Contact
