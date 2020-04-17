import React from 'react'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Search from "../components/Search"

const SearchPage = () => (
  <Layout>
    <SEO title="Pesquisa" description="Busque agora o seu post" />
    <Search />
  </Layout> 
)

export default SearchPage