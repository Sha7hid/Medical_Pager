import React from 'react'
import Cookies from 'universal-cookie';
import {ChannelList, useChatContext} from 'stream-chat-react';
import {ChannelSearch, TeamChannelList, TeamChannelPreview} from './';
import HospitalIcon from '../assets/hospital.png';
const SideBar = () => (
    <div className="channel-list__sidebar">
<div className="channel-list__sidebar__icon1">
    <div className="icon1__inner">
        <img src={HospitalIcon} alt="Hospital" width="30"/>
    </div>
</div>
    </div>
)

function ChannelListContainer() {
  return (
    <div>
      ChannelListContainer
    </div>
  )
}

export default ChannelListContainer
