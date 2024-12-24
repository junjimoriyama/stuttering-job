import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import MainArea from './mainArea/MainArea'
import Sidebar from './sideBar/SideBar'
import './story.scss'

const story = () => {
  return (
    <div className='story'>
      <Header/>
      <Sidebar />
      <MainArea />
      {/* <Footer/> */}
      
      </div>
  )
}

export default story