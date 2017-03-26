import React from 'react'

export default function Player ({ iconUrl, isReversed, rank, username }) {
    return isReversed ? renderPlayerReversed(iconUrl, rank, username) : renderPlayer(iconUrl, rank, username)
}

function renderPlayer (iconUrl, rank, username) {
    return (
        <li className='player'>
            <image className='player__icon' src={iconUrl} alt={username} />
            <span className='player__username'>{username}</span>
            <span className='player__rank'>{rank}</span>
        </li>
    )
}

function renderPlayerReversed (iconUrl, rank, username) {
    return (
        <li className='player'>
            <span className='player__rank'>{rank}</span>
            <span className='player__username'>{username}</span>
            <image className='player__icon' src={iconUrl} alt={username} />
        </li>
    )
}
