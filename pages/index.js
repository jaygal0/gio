import Featured from '../components/Featured'
import Metadata from '../components/Metadata'
import Portfolio from '../components/Portfolio'
import Hero from '../components/Hero'
import { MainContainer } from '../styles'
import ImageAndText from '../components/ImageAndText'
import ImageAndTextParagraph from '../components/ImageAndTextParagraph'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <>
      <Metadata />
      <Nav />
      <main>
        <Hero />
        <MainContainer>
          <Featured />
          <ImageAndTextParagraph
            path='about'
            src='/giovi-playing.jpg'
            title='About Giovanni'
            p1='Looking for the perfect sound for your project can be an exhausting task. This is where a bespoke, professional soundtrack becomes an essential ingredient of your project.'
            p2='I will compose, record and mix the piece to your individual specifications. Whether you need an epic theme to accompany a lone adventurer across treacherous wilderness; or a dark, foreboding drone to underpin your new thriller, get in touch and see if we can work some magic together!'
            btn='get in touch'
            link='mailto:hi@joshuagalinato.com'
          />
          <Portfolio path='portfolio' />
          <ImageAndText
            src='/production.jpg'
            title='A score that fits your needs'
            text='If there’s a project that you think I would be suitable for, get in touch by clicking on the button below.'
            btn='get in touch'
            link='mailto:hi@joshuagalinato.com'
          />
        </MainContainer>
      </main>
      <footer />
    </>
  )
}
