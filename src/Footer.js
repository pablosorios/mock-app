import React from 'react'

export default function Footer({content}) {
    return (
      <footer>
        {content.map((item) => 
          <div className={item.class}>
            {item.label}
          </div>
        )}
      </footer>
    )
}
