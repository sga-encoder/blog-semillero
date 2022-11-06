import React from 'react'
import LayoutHeader from './../components/LayoutHeader'

const AboutUs = ({ content, logo }) => {
  return (
    <>
      <LayoutHeader content={content.data} logo={logo} title={false} />
    </>
  )
}

export async function getServerSideProps () {
  const url = `${process.env.API_URL}/api/quienes-somo/?populate=*`
  const response = await fetch(url)
  const responseJson = await response.json()

  const urlLogo = `${process.env.API_URL}/api/logo/?populate=*`
  const responseLogo = await fetch(urlLogo)
  const responseJsonLogo = await responseLogo.json()

  return {
    props: {
      content: responseJson,
      logo: responseJsonLogo
    }
  }
}

export default AboutUs
