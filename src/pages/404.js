import React from "react"

import Layout from "../components/Layout"
import * as S from "../components/404/styled"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Erro 404" description="Página não encontrada" />
    <S.ErrorPageWrapper>
      <S.ErrorPageTitle>ERROR 404 - Nada encontrado</S.ErrorPageTitle>
      <S.ErrorPageDescription>Opss... não tem nada aqui.</S.ErrorPageDescription>
      <S.ErrorPageLink to="/">Voltar para Home</S.ErrorPageLink>
    </S.ErrorPageWrapper>
  </Layout>
)

export default NotFoundPage
