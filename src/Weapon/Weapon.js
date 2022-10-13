import React, { useContext,useEffect} from 'react';
import APIContext from '../Context/APIContext'
import WeaponList from './WeaponList';
import Navbar from '../Component/Navbar';

const Weapons = () => {

  const {fetchWeapons}  = useContext(APIContext);
  console.log(fetchWeapons)
  useEffect(() => {
     fetchWeapons();
  }, [fetchWeapons])

  return (
    <><div><Navbar /></div><div>
          <WeaponList />
      </div></>
  );
}

export default Weapons;