import Featured from '../components/Featured'
import Metadata from '../components/Metadata'
import Portfolio from '../components/Portfolio'
import Hero from '../components/Hero'
import { MainContainer } from '../styles'
import ImageAndText from '../components/ImageAndText'

export default function Home() {
  return (
    <>
      <Metadata />
      <main>
        <Hero />
        <MainContainer>
          <Featured />
          <ImageAndText
            src='/video-1.png'
            title='About the composer'
            text='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede'
            btn='get in touch'
          />
          <Portfolio />
          <ImageAndText
            src='/video-1.png'
            title='A score that fits your needs'
            text='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede'
            btn='get in touch'
          />
        </MainContainer>
      </main>
      <footer />
    </>
  )
}
