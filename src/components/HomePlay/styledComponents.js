import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #223a5f;
  background-size: cover;
  min-height: 100vh;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 100px;
  padding-bottom: 50px;
`
export const HeaderBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  border: 3px solid #ffffff;
  width: 80vw;
  margin-top: 10px;
  height: 150px;
  border-radius: 10px;
  padding: 20px;
`
export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30px;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Bree Serif';
  font-weight: 800;
  margin-bottom: 0px;
  margin-top: 0px;
`

export const CountContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 10px;
`
export const Score = styled.p`
  color: #223a5f;
  font-size: 20px;
  font-family: 'Bree Serif';
  font-weight: 800;
  margin-bottom: 0px;
`
export const Count = styled.p`
  color: #223a5f;
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: 800;
  margin-top: 0px;
`

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-wrap: wrap;
  width: 60vw;
  margin-top: 200px;
  @media screen and (min-width: 768px) {
    margin-top: 100px;
  }
`

export const RulesButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-size: 19px;
  font-family: 'Bree Serif';
  font-weight: 700;
  align-self: flex-end;
  padding: 15px;
  border: none;
  outline: none;
  border-radius: 8px;
  margin-top: 50px;
`

export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  width: 28px;
  height: 28px;
  border: none;
  margin-top: 18px;
  margin-right: 18px;
  outline: none;
  cursor: pointer;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`
export const PopupDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
  padding: 40px;
`
export const PopupImage = styled.img`
  height: 500px;
  width: 500px;
`
