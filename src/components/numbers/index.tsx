import React, { FC } from 'react'
import { NUMBERS } from 'typings'
import { Container } from './styles'
import Button from './button'

const Numbers: FC = () => (
  <Container>
    {([1, 2, 3, 4, 5, 6, 7, 8, 9] as NUMBERS[]).map((num) => (
      <Button key={num} value={num} />
    ))}
  </Container>
)

export default Numbers
