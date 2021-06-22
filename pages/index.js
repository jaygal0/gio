import Featured from '../components/Featured'
import Metadata from '../components/Metadata'
import Portfolio from '../components/Portfolio'
import Hero from '../components/Hero'
import { MainContainer } from '../styles'
import ImageAndText from '../components/ImageAndText'
import Nav from '../components/Nav'

// TODO: Giovi send copy for 'About us'
// TODO: Giovi send photo of himself or from Unsplash.com
// TODO: Josh add text to the bottom of the videos
// TODO: Josh look into embedding Soundcloud files
// TODO: Josh Send Giovi GF Logos
// FIXME: Nav "Get In Touch"

export default function Home() {
  return (
    <>
      <Metadata />
      <Nav />
      <main>
        <Hero />
        <MainContainer>
          <Featured />
          <ImageAndText
            path='about'
            src='/gio.jpg'
            title='About the composer'
            text='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede'
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
