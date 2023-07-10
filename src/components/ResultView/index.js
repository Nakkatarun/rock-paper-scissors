import {
  ResultViewContainer,
  ResultContainer,
  ResultImages,
  PersonContainer,
  Names,
  Result,
  PlayAgainButton,
} from './styledComponents'

const ResultView = props => {
  const {you, opponent, playAgainButton} = props
  const yourImageUrl = you.map(eachChoice => eachChoice.imageUrl)
  const yourId = you.map(eachChoice => eachChoice.id)[0]
  const {id, imageUrl} = opponent

  let result
  if (
    (yourId === 'ROCK' && id === 'SCISSORS') ||
    (yourId === 'SCISSORS' && id === 'PAPER') ||
    (yourId === 'PAPER' && id === 'ROCK')
  ) {
    result = 'YOU WON'
  } else if (
    (yourId === 'ROCK' && id === 'ROCK') ||
    (yourId === 'SCISSORS' && id === 'SCISSORS') ||
    (yourId === 'PAPER' && id === 'PAPER')
  ) {
    result = 'IT IS DRAW'
  } else {
    result = 'YOU LOSE'
  }

  const onClickPlayAgainButton = () => {
    playAgainButton()
  }

  return (
    <ResultViewContainer>
      <ResultContainer>
        <PersonContainer>
          <Names>You</Names>
          <ResultImages src={yourImageUrl} alt="your choice" />
        </PersonContainer>
        <PersonContainer>
          <Names>Opponent</Names>
          <ResultImages src={imageUrl} alt="opponent choice" />
        </PersonContainer>
      </ResultContainer>
      <Result>{result}</Result>
      <PlayAgainButton type="button" onClick={onClickPlayAgainButton}>
        PLAY AGAIN
      </PlayAgainButton>
    </ResultViewContainer>
  )
}

export default ResultView
