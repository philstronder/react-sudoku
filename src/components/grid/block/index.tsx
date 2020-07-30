import React, { FC } from 'react'
import { Container } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'
import { IReducer } from 'reducers/interfaces'
import { selectBlock } from 'reducers'
import { N, INDEX } from 'typings'

interface IProps {
  rowIndex: INDEX
  colIndex: INDEX
}

interface IState {
  isActive: boolean
  isPuzzle: boolean
  value: N
}

const Block: FC<IProps> = ({ rowIndex, colIndex }) => {
  const state = useSelector<IReducer, IState>(
    ({ challengeGrid, selectedBlock, workingGrid }) => ({
      value: workingGrid ? workingGrid[rowIndex][colIndex] : 0,
      isActive: selectedBlock
        ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
        : false,
      isPuzzle:
        challengeGrid && challengeGrid[rowIndex][colIndex] !== 0 ? true : false,
    })
  )

  const dispatch = useDispatch<Dispatch<AnyAction>>()

  function handleClick() {
    if (!state.isActive) dispatch(selectBlock([rowIndex, colIndex]))
  }

  return (
    <Container
      active={state.isActive}
      data-cy={`block-${rowIndex}-${colIndex}`}
      onClick={handleClick}
      puzzle={state.isPuzzle}
    >
      {state.value === 0 ? '' : state.value}
    </Container>
  )
}

export default Block
