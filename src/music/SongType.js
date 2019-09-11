import styled from 'styled-components'
import React from 'react'
import { relativeFontSize } from '../styles'

export const SongType = styled(({ className, type }) => (
  <span className={`${className} ${type}`}>{type}</span>
))`
  text-transform: uppercase;
  border: 1px solid currentColor;
  font-size: ${relativeFontSize(3)};
  font-weight: normal;
  padding: 0.1ex 0.25ex;
  border-radius: 3px;
  &.collab {
    color: #f9d153;
  }
  &.original {
    color: #d7fc70;
  }
  &.remix {
    color: #fc80a8;
  }
`
