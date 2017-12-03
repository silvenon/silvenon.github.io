import React from 'react'
import Media from 'react-media'
import { css } from 'emotion/macro'
import styled from 'react-emotion/macro'
import { boxShadow } from '../styles'
import { BREAKPOINT } from '../constants'

const BORDER_RADIUS = 1

const Container = styled('a')`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border: 0.5rem solid #fff;
  border-radius: ${BORDER_RADIUS}rem;
  background: ${props => props.color};
  ${boxShadow};
  color: #fff;
  text-decoration: none;
  @media (min-width: ${BREAKPOINT}) {
    flex-direction: column;
    justify-content: center;
    padding: 0;
    transition:
      background 0.2s,
      color 0.2s;
    ${props => props.isInteracting ? css`
      background: #fff;
      color: ${props.color};
    ` : null}
  }
`

const Label = styled('span')`
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  @media (Min-width: ${BREAKPOINT}) {
    align-self: stretch;
    display: block;
    margin: 0;
    padding: 0.5rem 0;
    border-top: 0.25rem solid ${props => props.color};
    background: #fff;
    color: ${props => props.color};
  }
`

const IconContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
  @media (min-width: ${BREAKPOINT}) {
    margin: 0.5rem;
  }
`

const IconBase = styled('svg')`
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
  margin-right: 1rem;
  @media (min-width: ${BREAKPOINT}) {
    margin-right: 0;
  }
`

class CardIconLink extends React.Component {
  state = {
    isInteracting: false,
  }

  handleStartInteracting = () => {
    this.setState({
      isInteracting: true,
    })
  }

  handleStopInteracting = () => {
    this.setState({
      isInteracting: false,
    })
  }

  render() {
    const { label, icon, ...props } = this.props
    const { isInteracting } = this.state

    const Icon = IconBase.withComponent(icon.Component)

    return (
      <Media query={{ minWidth: BREAKPOINT }}>
        {matches => matches ? (
          <Container
            {...props}
            isInteracting={isInteracting}
            onMouseEnter={this.handleStartInteracting}
            onMouseLeave={this.handleStopInteracting}
            onFocus={this.handleStartInteracting}
            onBlur={this.handleStopInteracting}
          >
            <IconContainer size={props.size}>
              <Icon size={icon.size} />
            </IconContainer>
            <Label
              color={props.color}
              isInteracting={isInteracting}
            >
              {label}
            </Label>
          </Container>
        ) : (
          <Container {...props}>
            <IconContainer size={props.size}>
              <Icon size={icon.size} />
            </IconContainer>
            <Label>{label}</Label>
          </Container>
        )}
      </Media>
    )
  }
}

export { CardIconLink }