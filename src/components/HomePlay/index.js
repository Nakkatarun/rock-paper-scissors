import {Component} from 'react'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import ChoicesItems from '../ChoicesItems'
import ResultView from '../ResultView'

import {
  HomeContainer,
  ImagesContainer,
  RulesButton,
  CloseButton,
  ModalContainer,
  PopupDetails,
  PopupImage,
  HeaderBoxContainer,
  HeadingContainer,
  Heading,
  CountContainer,
  Score,
  Count,
} from './styledComponents'

import 'reactjs-popup/dist/index.css'

class HomePlay extends Component {
  state = {
    isDisplayResultView: false,
    count: 0,
    you: '',
    opponent: '',
  }

  onClickItem = id => {
    const {choicesList} = this.props
    this.setState({isDisplayResultView: true})
    const yourClick = choicesList.filter(eachChoice => id === eachChoice.id)
    this.setState({you: yourClick})
    const num = Math.floor(Math.random() * 3)
    const opponentChoice = choicesList[num]
    this.setState({opponent: opponentChoice})

    if (
      (opponentChoice.id === 'ROCK' && id === 'SCISSORS') ||
      (opponentChoice.id === 'SCISSORS' && id === 'PAPER') ||
      (opponentChoice.id === 'PAPER' && id === 'ROCK')
    ) {
      this.setState(prevState => ({count: prevState.count - 1}))
    } else if (
      (opponentChoice.id === 'ROCK' && id === 'ROCK') ||
      (opponentChoice.id === 'SCISSORS' && id === 'SCISSORS') ||
      (opponentChoice.id === 'PAPER' && id === 'PAPER')
    ) {
      this.setState(prevState => ({count: prevState.count + 0}))
    } else {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  playAgainButton = () => {
    this.setState({isDisplayResultView: false})
  }

  render() {
    const {isDisplayResultView, you, opponent, count} = this.state
    const {choicesList} = this.props

    return (
      <HomeContainer>
        <HeaderBoxContainer>
          <HeadingContainer>
            <Heading>Rock</Heading>
            <Heading>Paper</Heading>
            <Heading>Scissor</Heading>
          </HeadingContainer>
          <CountContainer>
            <Score>Score</Score>
            <Count> {count} </Count>
          </CountContainer>
        </HeaderBoxContainer>
        {isDisplayResultView ? (
          <ResultView
            you={you}
            opponent={opponent}
            playAgainButton={this.playAgainButton}
          />
        ) : (
          <ImagesContainer>
            {choicesList.map(eachChoice => (
              <ChoicesItems
                eachChoice={eachChoice}
                key={eachChoice.id}
                onClickItem={this.onClickItem}
              />
            ))}
          </ImagesContainer>
        )}
        <Popup modal trigger={<RulesButton>RULES</RulesButton>}>
          {close => (
            <ModalContainer>
              <CloseButton
                type="button"
                data-testid="rules"
                onClick={() => close()}
              >
                <IoMdClose size={40} color="#231f20" />
              </CloseButton>
              <PopupDetails>
                <PopupImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopupDetails>
            </ModalContainer>
          )}
        </Popup>
      </HomeContainer>
    )
  }
}

export default HomePlay
