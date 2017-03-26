import React from 'react'

export default function Player ({ iconUrl, isReversed, rank, username }) {
    return isReversed ? renderPlayerReversed(iconUrl, rank, username) : renderPlayer(iconUrl, rank, username)
}

function renderPlayer (iconUrl, rank, username) {
    let originalUsername = username.replace('-','#')
    return (
        <li className='player'>
            <img className='player__icon' src={iconUrl} alt={originalUsername} />
            <span className='player__username'>{originalUsername}</span>
            <span className='player__rank'>{rank}</span>
        </li>
    )
}

function renderPlayerReversed (iconUrl, rank, username) {
    let originalUsername = username.replace('-','#')    
    return (
        <li className='player'>
            <span className='player__rank'>{rank}</span>
            <span className='player__username'>{originalUsername}</span>
            <img className='player__icon' src={iconUrl} alt={originalUsername} />
        </li>
    )
}
