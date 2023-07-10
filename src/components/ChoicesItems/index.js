import {Images, Button} from './styledComponents'

const ChoicesItems = props => {
  const {eachChoice, onClickItem} = props
  const {imageUrl, id} = eachChoice
  let testId
  if (id === 'ROCK') {
    testId = 'rockButton'
  } else if (id === 'PAPER') {
    testId = 'paperButton'
  } else if (id === 'SCISSORS') {
    testId = 'scissorsButton'
  }

  const onClickButton = () => {
    onClickItem(id)
  }

  return (
    <Button data-testid={testId} type="button" onClick={onClickButton}>
      <Images src={imageUrl} alt={id} />
    </Button>
  )
}

export default ChoicesItems
