import React from 'react'
import WeaponDamageCard from './WeaponDamage';
import styles from './WeaponItem.module.css'

const WeaponItem = ({weapon}) => {

  return (
    <div className={styles.weaponItem}>
      <img className={styles.weaponItemImage} 
           src={weapon.displayIcon} alt='' />
      <div>
        <h3 className={styles.weaponItemDisplayNameTextColor}>{weapon.displayName}</h3>
        {weapon.weaponStats?.fireRate &&
          <p className={styles.weaponItemInfoColor}>{('Cadence de tir')} : {weapon.weaponStats?.fireRate}</p>
        }
        {weapon.weaponStats?.magazineSize &&
          <p className={styles.weaponItemInfoColor}>{('Taille du chargeur')} : {weapon.weaponStats?.magazineSize}</p>
        }
        {weapon.weaponStats?.reloadTimeSeconds &&
          <p className={styles.weaponItemInfoColor}>{('Temps de rechargement')} : {weapon.weaponStats?.reloadTimeSeconds}s</p> 
        }
        {weapon.shopData?.cost &&
          <p className={styles.weaponItemInfoColor}>{('Prix')} : {weapon.shopData?.cost}</p>
        }
        {weapon.shopData?.category &&
          <p className={styles.weaponItemInfoColor}>{('Categorie')} : {weapon.shopData?.category}</p>
        }
        <div className={styles.weaponDamageContainer}>
          {weapon.weaponStats?.damageRanges?.map((damageRange, index) => (
            <WeaponDamageCard key={index} damageRange={damageRange} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default WeaponItem;