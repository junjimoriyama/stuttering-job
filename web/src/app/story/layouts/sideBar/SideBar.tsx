import Pagination from '../../components/pagination/Pagination'
import './sideBar.scss'

import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar_contents">
      <Pagination />
        <div className="search">

        </div>
      </div>
    </div>
  )
}

export default Sidebar