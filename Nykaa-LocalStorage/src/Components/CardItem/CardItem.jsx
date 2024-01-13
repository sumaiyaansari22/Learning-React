import React from 'react'

function CardItem({ img, name, offer }) {
    return (
        <div className='card-item'>
        
            <img src={img}
                alt="" />
            <div class="lines">
                <p class="text-center my-1">{name}</p>
                <p class="text-center my-1">{offer}</p>
                <button class="make-up my-1">Shop Now!</button>
            </div>
        </div>
    )
}

export default CardItem