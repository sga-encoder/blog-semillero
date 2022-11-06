import React from 'react'
import blog from '../../styles/Blog.module.css'
import CartsPost from '../../components/CartsPost'
import LayoutHeader from '../../components/LayoutHeader'

const Blog = ({ posts, content, logo }) => {
  return (
    <>
      <LayoutHeader content={content.data} logo={logo} onlyTitle={ true } />
      <div className={blog.container}>{
        posts.data.map(({ id, attributes }) => {
          const { Slug, Titulo, Descripcion, Fondo } = attributes
          const { url, alternativeText } = Fondo.data.attributes
          return (
            <CartsPost
              key={id}
              styles={blog}
              path={Slug}
              title={Titulo}
              description={Descripcion}
              img={url}
              alternativeText={alternativeText}
            />
          )
        })
      }</div>
    </>
  )
}

export async function getServerSideProps () {
  const url = `${process.env.API_URL}/api/blogs/?populate=*`
  const response = await fetch(url)
  const responseJson = await response.json()

  const urlPage = `${process.env.API_URL}/api/blog-pagina/?populate=*`
  const responsePage = await fetch(urlPage)
  const responseJsonPage = await responsePage.json()

  const urlLogo = `${process.env.API_URL}/api/logo/?populate=*`
  const responseLogo = await fetch(urlLogo)
  const responseJsonLogo = await responseLogo.json()

  return {
    props: {
      posts: responseJson,
      content: responseJsonPage,
      logo: responseJsonLogo
    }
  }
}

export default Blog
