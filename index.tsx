import * as S from './styles'
import styled, { css } from 'styled-components'

const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    gray: '#333',
    lightGray: '#ccc'
  },
  sizes: {
    xsmall: '1rem',
    small: '1.2rem',
    normal: '1.6rem',
    large: '2.4rem',
    xlarge: '3.2rem',
    xxlarge: '4rem',
  }
}

export type HeadingProps = {
  color?: keyof typeof theme.colors
  size?: keyof typeof theme.sizes
  fontWeight?: 100 | 400 | 700
  lineHeight?: string | number
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

export const Heading = styled('h1').attrs<HeadingProps>(({ level }) => ({
  as: `h${level}`
}))<HeadingProps>`
  ${({
    color = 'white',
    size = 'normal',
    fontWeight = 700,
    lineHeight = 1.5
  }) => css`
  font-size: ${theme.sizes[size]};
  color: ${theme.colors[color]};
  font-weight: ${fontWeight};
  line-height: ${lineHeight};
  `}
`

const Main = () => (
  <S.Wrapper>
    <Heading level={1}>React Avançado</Heading>
    <Heading level={2} fontWeight={100}>React Avançado</Heading>
    <Heading level={3} color={"gray"}>React Avançado</Heading>
    <Heading level={4} size={"xlarge"} color="black">React Avançado</Heading>
    <Heading level={5} lineHeight={4}>React Avançado</Heading>
    <Heading level={6}>React Avançado</Heading>
  </S.Wrapper>
)

export default Main