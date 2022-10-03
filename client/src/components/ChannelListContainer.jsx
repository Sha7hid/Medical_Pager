import React from 'react'
import Cookies from 'universal-cookie';
import {ChannelList, useChatContext} from 'stream-chat-react';
import {ChannelSearch, TeamChannelList, TeamChannelPreview} from './';
import HospitalIcon from '../assets/assets/hospital.png';
import LogoutIcon from '../assets/assets/logout.png';
const SideBar = () => (
    <div className="channel-list__sidebar">
<div className="channel-list__sidebar__icon1">
    <div className="icon1__inner">
        <img src={HospitalIcon} alt="Hospital" width="30"/>
    </div>
</div>
<div className="channel-list__sidebar__icon2">
    <div className="icon1__inner">
        <img src={LogoutIcon} alt="Logout" width="30"/>
    </div>
</div>
    </div>
)
const companyHeader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text">Medical Pager</p>
    </div>
)
function ChannelListContainer() {
  return (
   <>
   <SideBar/>
   </>
  )
}

export default ChannelListContainer
