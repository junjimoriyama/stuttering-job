import MainArea from './components/mainArea/MainArea'
import Sidebar from './components/sideBar/SideBar'
import './story.scss'

const story = () => {
  return (
    <div className='story'>
      <Sidebar />
      <MainArea />
      
      
      </div>
  )
}

export default story