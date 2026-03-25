import React from 'react'
import cards from '../../arrays/cards'
import Cdesign from './Cdesign'

const Cmap = () => {
  return (
    <div className="w-full py-16 bg-gray-100">
      
      {/* Cards Container */}
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row gap-6 px-2">
        {cards.map((item) => (
          <div key={item.id} className="flex-1">
            <Cdesign
              id={item.id}
              image={item.image}
              title={item.title}
            />
          </div>
        ))}
      </div>

    </div>
  )
}

export default Cmap