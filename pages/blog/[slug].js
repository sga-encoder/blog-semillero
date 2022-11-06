import React from 'react'
import blog from '../../styles/Blog.module.css'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from './../../components/MDXComponents'
import LayoutHeader from '../../components/LayoutHeader'

const SingleBlog = ({ content, logo, data }) => {
  return (
    <>
      <LayoutHeader content={content.data[0]} logo={logo} onlyTitle={ true } />
      <div className={blog.container}>
        <div className={blog.content}>
          <MDXRemote {...data} components={MDXComponents} />
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps ({ query }) {
  const { slug } = query
  const url = `${process.env.API_URL}/api/blogs/?filters[Slug][$eq]=${slug}&populate=*`
  const response = await fetch(url)
  const responseJson = await response.json()

  const urlLogo = `${process.env.API_URL}/api/logo/?populate=*`
  const responseLogo = await fetch(urlLogo)
  const responseJsonLogo = await responseLogo.json()

  const source = responseJson.data[0].attributes.Contenido
  const mdxSource = await serialize(source)

  return {
    props: {
      content: responseJson,
      logo: responseJsonLogo,
      data: mdxSource
    }
  }
}

export default SingleBlog
