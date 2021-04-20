import Featured from '../components/Featured'
import Title from '../components/Title'
import Metadata from '../components/Metadata'
import PreviousWork from '../components/PreviousWork'
import Plan from '../components/Plan'
import Hero from '../components/Hero'
import Action from '../components/Action'
import { MainContainer } from '../styles'

export default function Home() {
  return (
    <>
      <Metadata />
      <MainContainer>
        <Hero />
        <Title title="can't find the right score for your film?" />
        <Featured />
        <PreviousWork />
        {/* <Plan /> */}
        {/* <Title title="get a score that fits perfectly with your film" /> */}
        {/* <Action /> */}
      </MainContainer>
    </>
  )
}
