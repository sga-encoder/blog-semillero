
const blog = ({ posts }) => {
  return (
    <div>
      
    </div>
  )
}

export async function getServerSideProps() {
  const url = 'http://localhost:1337/api/entradas'
  const response = await fetch(url)
  const responseJson = await response.json()
  return {
    props: {
      posts: responseJson
    }
  }
}


export default blog
