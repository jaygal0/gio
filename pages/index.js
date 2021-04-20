import Featured from '../components/Featured'
import Title from '../components/Title'
import Metadata from '../components/Metadata'
import PreviousWork from '../components/PreviousWork'
import Plan from '../components/Plan'

export default function Home() {
  return (
    <>
      <Metadata />
      <main>
        <Hero />
        <Title title="can't find the right socore for your film?" />
        <Featured />
        <PreviousWork />
        <Plan />
        <Title title="get a score that fits perfectly with your film" />
        <Action />
      </main>
    </>
  )
}
