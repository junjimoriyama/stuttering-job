import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import './story.scss'
import { StoryContainer } from './storyContainer/StoryContainer'


const story = () => {
  return (
    <div className='story'>
      <Header/>
      <StoryContainer />
      {/* <Footer/> */}
      
      </div>
  )
}

export default story