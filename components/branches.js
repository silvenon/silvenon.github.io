import React from 'react'
import { css } from 'emotion/macro'
import styled from 'react-emotion/macro'
import { FaGithub, FaMedium, FaLinkedinSquare } from 'react-icons/lib/fa'
import { BREAKPOINT, BOX_SHADOW } from '../constants'

const styleCenter = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Container = styled('div')`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  @media (min-width: ${BREAKPOINT}) {
    align-self: center;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 2rem;
    text-align: center;
  }
`

const Branch = styled('div')`
  display: flex;
  align-items: center;
  display: flex;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: ${BREAKPOINT}) {
    position: relative;
    flex-direction: column;
    margin: 0 4rem;
    padding-bottom: 3rem;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`

const BranchTitle = styled('h2')`
  order: 2;
  margin: 0;
  font-size: 2rem;
  white-space: nowrap;
  @media (min-width: ${BREAKPOINT}) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`

const BranchIcon = styled('a')`
  order: 1;
  position: relative;
  display: block;
  width: 5rem;
  height: 5rem;
  margin-right: 1rem;
  border: 0.5rem solid #fff;
  border-radius: 1rem;
  background: ${props => props.color};
  ${BOX_SHADOW}
  color: #fff;
  text-decoration: none;
  > svg {
      ${styleCenter};
      width: ${props => props.size}rem;
      height: ${props => props.size}rem;
  }
  @media (min-width: ${BREAKPOINT}) {
    margin: 0 auto;
  }
`

const Branches = () =>
  <Container>
    <Branch>
      <BranchTitle>
        Open Source
      </BranchTitle>
      <BranchIcon
        title="GitHub"
        href="https://github.com/silvenon"
        color="#333"
        size={3.5}
      >
        <FaGithub />
      </BranchIcon>
    </Branch>
    <Branch>
      <BranchTitle>
        Blog
      </BranchTitle>
      <BranchIcon
        title="Medium"
        href="https://blog.silvenon.com"
        color="#00ab6c"
        size={3}
      >
        <FaMedium />
      </BranchIcon>
    </Branch>
    <Branch>
      <BranchTitle>
        Background
      </BranchTitle>
      <BranchIcon
        title="LinkedIn"
        href="https://www.linkedin.com/in/silvenon/"
        color="#0077b5"
        size={3.5}
      >
        <FaLinkedinSquare />
      </BranchIcon>
    </Branch>
  </Container>

export default Branches