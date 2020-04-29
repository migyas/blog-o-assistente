import React from "react"
import { graphql} from "gatsby"


import * as S from "../components/About/styled"
import SocialLinks from "../components/SocialLinks"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const AboutPage = ({ data }) => {
  const aboutSEO = data.markdownRemark

  return (
    <Layout>
      <SEO
        title="Sobre"
        description=" A ideia desse projeto é construir uma plataforma que de alguma forma contribua com o mercado de trabalho, fornecendo conteúdo de qualidade sobre mim, minhas habilidades e trajetoria"
        image={aboutSEO.frontmatter && aboutSEO.frontmatter.image}
      />
      <S.MainContent>
        <S.AboutHeader>
          <S.AboutTitle>Sobre</S.AboutTitle>
          <S.AboutDate>
            Pensando em pessoas que ainda não iniciaram sua carreira
            profissional ou por algum motivo específico não estejam trabalhando
            ou até mesmo pessoas que atualmente já possuem uma posição no
            mercado de trabalho e desejam evoluir o seu perfil profissional,
            elaborei esse blog com o objetivo de compartilhar conteúdos
            dinâmicos, diversificados e de extrema qualidade.
          </S.AboutDate>
          <S.AboutDate>
            Meu nome é Nelson Santos já tive a oportunidade de trabalhar em
            grandes empresas como Banco do Brasil, RD, Rede D’or e CDRB,
            atualmente estou cursando publicidade e propaganda, resolvi criar
            esse blog pois, já senti na pele como é procurar informações sobre
            alguma carreira profissional e tive dificuldade em encontrar
            materiais gratuitos com qualidade.
          </S.AboutDate>
          <S.AboutDate>
            A ideia desse projeto é construir uma plataforma que de alguma forma
            contribua com o mercado de trabalho, fornecendo conteúdo de
            qualidade, totalmente gratuito. Essa plataforma será muito útil para
            pessoas que desejam conhecer novas áreas e aprimorar seus
            conhecimentos.
          </S.AboutDate>

          <S.AboutDescription>Contato</S.AboutDescription>
          <S.AboutDate>
            Você pode entrar em contato comigo através de qualquer uma das
            minhas redes sociais.
          </S.AboutDate>
          <SocialLinks />
        </S.AboutHeader>
      </S.MainContent>
    </Layout>
  )
}

export const query = graphql`
  query aboutSEO {
    markdownRemark {
      frontmatter {
        image
      }
    }
  }
`

export default AboutPage
