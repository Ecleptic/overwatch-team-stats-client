import React from 'react'

import Player from './player'

export default function Team ({ players, isReversed, teamName }) {
    return (
        <div className='team'>
            <h3 className='team__name'>{teamName}</h3>

            <ul>
                {players.map((player, index) => renderPlayer(player, index, isReversed))}
            </ul>
        </div>
    )
}

function renderPlayer(player, index, isReversed) {
    const iconUrl = player.us.stats.competitive.overall_stats.avatar
    const rank = player.us.stats.competitive.overall_stats.comprank
    const username = player.username

    return <Player key={index} iconUrl={iconUrl} isReversed={isReversed} rank={rank} username={username} />
}
