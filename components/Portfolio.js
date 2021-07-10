import React, { useState } from 'react'
import FsLightbox from 'fslightbox-react'
import Image from 'next/image'
import { Container } from '../styles'
import styled from 'styled-components'

const Wrapper = styled.div`
  grid-column: 2 / span 10;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    grid-column: 1 / -1;
  }
`
const VideoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3.2rem;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.desktopSmall}) {
    flex-direction: column;
  }
`
const TextWrapper = styled.div`
  width: calc(50% - 3.2rem);
  position: relative;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.desktopSmall}) {
    width: 100%;
  }
`
const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 33rem;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.desktopSmall}) {
    height: 45rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    height: 30rem;
  }
`

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all 0.4s ease-in;

  &:hover {
    background: black;
    opacity: 0.5;
  }
`
const PlayButton = styled.img`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    z-index: 0;
  }
`
const Heading = styled.h3`
  margin-top: 1.6rem;
  color: ${({ theme }) => theme.color.yellow};
`

const PreviousWork = ({ path }) => {
  const [vid1, setVid1] = useState(false)
  const [vid2, setVid2] = useState(false)
  const [vid3, setVid3] = useState(false)
  const [vid4, setVid4] = useState(false)
  const [vid5, setVid5] = useState(false)
  const [vid6, setVid6] = useState(false)

  return (
    <Container id={path}>
      <Wrapper>
        <h2>Portfolio</h2>
        <VideoWrapper>
          <TextWrapper>
            {/* Lightbox area start */}
            <FsLightbox
              toggler={vid1}
              sources={['https://www.youtube.com/watch?v=Z3_jhEh3coc']}
            />
            <FsLightbox
              toggler={vid2}
              sources={[
                'https://www.youtube.com/watch?v=rxNpF2PcB6s&ab_channel=G-OrchestraG-Orchestra',
              ]}
            />
            <FsLightbox
              toggler={vid3}
              sources={['https://www.youtube.com/watch?v=wxAo0UCVuLs']}
            />
            <FsLightbox
              toggler={vid4}
              sources={[
                'https://www.youtube.com/watch?v=mG1OxpC-axM&ab_channel=G-OrchestraG-Orchestra',
              ]}
            />
            <FsLightbox
              toggler={vid5}
              sources={[
                'https://www.youtube.com/watch?v=0Sg1SxYAX0I&ab_channel=G-OrchestraG-Orchestra',
              ]}
            />
            <FsLightbox
              toggler={vid6}
              sources={[
                'https://www.youtube.com/watch?v=vucJWIXmYWg&ab_channel=G-OrchestraG-Orchestra',
              ]}
            />
            {/* Lightbox area end */}
            {/* Image 1 start */}
            <ImgWrapper>
              <Overlay onClick={() => setVid1(!vid1)} />
              <Image src='/spring.jpg' layout='fill' objectFit='cover' />
              <PlayButton
                onClick={() => setVid1(!vid1)}
                src='/play-button.svg'
              />
            </ImgWrapper>
            <div>
              <Heading>Spring</Heading>
              <p>
                A young girl and her faithful companion have entered an ancient,
                frozen forest to perform the traditional rites to initiate the
                arrival of Spring.
              </p>
            </div>
          </TextWrapper>
          {/* Image 1 end */}
          {/* Image 2 start */}
          <TextWrapper>
            <ImgWrapper>
              <Overlay onClick={() => setVid2(!vid2)} />
              <Image src='/chair.png' layout='fill' objectFit='cover' />
              <PlayButton
                onClick={() => setVid2(!vid2)}
                src='/play-button.svg'
              />
            </ImgWrapper>
            <div>
              <Heading>Poulette's Chair</Heading>
              <p>
                An enchanting story of the friendship between a shy, precocious
                young girl; Poulette, and her magical chair.
              </p>
            </div>
          </TextWrapper>
          {/* Image 2 end */}
          {/* Image 3 start */}
          <TextWrapper>
            <ImgWrapper>
              <Overlay onClick={() => setVid3(!vid3)} />
              <Image src='/bear-hugs.png' layout='fill' objectFit='cover' />
              <PlayButton
                onClick={() => setVid3(!vid3)}
                src='/play-button.svg'
              />
            </ImgWrapper>
            <div>
              <Heading>Bear Hugs</Heading>
              <p>
                Teddy Bear Stitch attends a nightly support group for toy
                survivors of trauma in this dark, thought-provoking short film
                by Nick McLean.
              </p>
            </div>
          </TextWrapper>
          {/* Image 3 end */}
          {/* Image 4 start */}
          <TextWrapper>
            <ImgWrapper>
              <Overlay onClick={() => setVid4(!vid4)} />
              <Image src='/westworld.png' layout='fill' objectFit='cover' />
              <PlayButton
                onClick={() => setVid4(!vid4)}
                src='/play-button.svg'
              />
            </ImgWrapper>
            <div>
              <Heading>Westworld</Heading>
              <p>
                An action-packed cue from HBO’s award-winning dystopian
                Television series.
              </p>
            </div>
          </TextWrapper>
          {/* Image 4 end */}
          {/* Image 5 start */}
          <TextWrapper>
            <ImgWrapper>
              <Overlay onClick={() => setVid5(!vid5)} />
              <Image src='/civ-jazz.jpg' layout='fill' objectFit='cover' />
              <PlayButton
                onClick={() => setVid5(!vid5)}
                src='/play-button.svg'
              />
            </ImgWrapper>
            <div>
              <Heading>Civilization VI: Hungarian Jazz</Heading>
              <p>
                Jazz re-harmonization of Roland Rizzo's 'Hej Dunáról fúj a szél;
                Cinege, Cinege’.
              </p>
            </div>
          </TextWrapper>
          {/* Image 5 end */}
          {/* Image 6 start */}
          <TextWrapper>
            <ImgWrapper>
              <Overlay onClick={() => setVid6(!vid6)} />
              <Image src='/civ-thumb.jpg' layout='fill' objectFit='cover' />
              <PlayButton
                onClick={() => setVid6(!vid6)}
                src='/play-button.svg'
              />
            </ImgWrapper>
            <div>
              <Heading>Civilization VI: Incan Jazz</Heading>
              <p>Jazz re-harmonization of Roland Rizzo's 'Siempre Macho’.</p>
            </div>
          </TextWrapper>
          {/* Image 6 end */}
        </VideoWrapper>
      </Wrapper>
    </Container>
  )
}

export default PreviousWork
