import Header from '../components/header/Header'
import MainArea from './layouts/mainArea/MainArea'
import Sidebar from './layouts/sideBar/SideBar'
import './story.scss'

const story = () => {
  return (
    <div className='story'>
      <Header/>
      <Sidebar />
      <MainArea />
      
      
      </div>
  )
}

export default story