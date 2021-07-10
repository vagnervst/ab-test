import styled from 'styled-components'

const Base = styled.button`
  background: none;
  border: none;
  padding: 8px;
  border-radius: 2px;
  font-weight: bold;
  cursor: pointer;
`

const Solid = styled(Base)`
  background-color: #dd0939;
  color: #fff;
  transition: background-color .1s;

  &:hover {
    background-color: #f62252;
  }

  &:active {
    background-color: #ad032c;
  }
`

const Outline = styled(Base)`
  border: 2px solid #141414;
  border-radius: 4px;

  &:hover {
    background-color: rgba(0, 0, 0, .25);
  }

  &:active {
    background-color: #141414;
    color: #fff;
  }
`

const Button = ({ children, variant, ...props }) => {
  const Variant = variant === 'solid'
    ? Solid
    : Outline

  return (
    <Variant {...props}>{children}</Variant>
  )
}

export default Button