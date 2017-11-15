import styled from 'react-emotion/macro'
import { BREAKPOINT, AVATAR_SIZE, BOX_SHADOW } from '../constants'

const Avatar = styled('img')`
  width: ${AVATAR_SIZE}rem;
  height: ${AVATAR_SIZE}rem;
  margin-bottom: 1rem;
  border: 1rem solid #fff;
  border-radius: 2rem;
  ${BOX_SHADOW}
  @media (min-width: ${BREAKPOINT}) {
    margin-bottom: 2rem;
  }
`

export default Avatar
