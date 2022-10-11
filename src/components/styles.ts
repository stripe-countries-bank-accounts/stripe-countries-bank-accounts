import styled from 'styled-components'

export const Label = styled.label`
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-bottom: 0.35rem;
  display: inline-block;
  position: relative;
  text-transform: capitalize;

  sup {
    color: red;
    font-size: 1rem;
    position: absolute;
    top: 0.3rem;
  }
`
