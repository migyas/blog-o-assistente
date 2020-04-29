import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const ErrorPageWrapper = styled.header`
  color: var(--postColor);
  margin: 5rem auto;
  max-width: 70rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  ${media.lessThan("large")`
    padding: 1rem 0 0;
    max-width: 100%;
  `}
`

export const ErrorPageTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;

  ${media.lessThan("large")`
    font-size: 2.8rem;
    line-height: 1.1;
    padding: 0 1rem;
  `}
`

export const ErrorPageDescription = styled.p`
  font-size: 2rem;
  font-weight: 100;
  margin-top: 10rem;

  ${media.lessThan("large")`
    padding: 0 1rem;
  `}
`

export const ErrorPageLink = styled(Link)`
  font-size: 1.8rem;
  cursor: pointer;
  margin-top: 10rem;
  text-decoration: none;
  color: var(--highlight);
  transition: color .5s;

  &:hover {
    color: #8899a6;
    text-decoration: underline;
  }
`
