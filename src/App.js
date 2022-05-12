import React from 'react'

import Header from './Header/Header'
import NavBar from './NavBar/NavBar'
import Carousel from './Carousel/Carousel'
import MainContent from './Main/MainContent'

import { GlobalStyle } from './globalStyle'
import { BodyWrapperStyle, ContentWrapper } from './appStyle'

function App() {
  return (
    <>
      <GlobalStyle />

      <BodyWrapperStyle>
        <Header />
        <NavBar />
        <ContentWrapper>
          <Carousel />
          <MainContent />
        </ContentWrapper>
      </BodyWrapperStyle>
    </>
  )
}

export default App
// wefdfdfdfd
// dfdfdfd
// dsfsdfsdfdsfsd
// dfdfddfd
// dfdfd
// sdfds
// dfdf
// dfdf
// dfdfd
// 2423r24rfedcdsfweqedw
