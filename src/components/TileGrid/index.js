import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

function Tile({ icon, title, description }) {
  return (
    <div className={styles.tile}>
      <div className={styles.tileIcon}>
        {typeof icon === 'string' ? <span className={styles.emoji}>{icon}</span> : icon}
      </div>
      <div className={styles.tileContent}>
        <h3 className={styles.tileTitle}>{title}</h3>
        <p className={styles.tileDescription}>{description}</p>
      </div>
    </div>
  )
}

export default function TileGrid({ tiles, columns = 3, className }) {
  const gridClass = clsx(
    styles.tileGrid,
    {
      [styles.grid2]: columns === 2,
      [styles.grid3]: columns === 3,
    },
    className
  )

  return (
    <div className={gridClass}>
      {tiles.map((tile, idx) => (
        <Tile key={idx} {...tile} />
      ))}
    </div>
  )
}

export { Tile }