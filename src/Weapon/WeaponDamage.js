import React from 'react'
import styles from './WeaponDamage.module.css';

const WeaponDamage = ({damageRange}) => {

  return (
    <div className={styles.weaponDamage}>
      <p className={styles.range}>
      {damageRange.rangeStartMeters} -&nbsp;
      {damageRange.rangeEndMeters} m
      </p>
      <div className={styles.damageInfo}>
        <p className={styles.damageType}>
          {('Tête')}
          <span className={styles.damageValue}>
            {damageRange.headDamage.toFixed(2)}
          </span>
        </p>
        <p className={styles.damageType}>
          {('Corps')}
          <span className={styles.damageValue}>
            {damageRange.headDamage.toFixed(2)}
          </span>
        </p>
        <p className={styles.damageType}>
          {('Jambe')}
          <span className={styles.damageValue}>
            {damageRange.headDamage.toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  );
}

export default WeaponDamage;