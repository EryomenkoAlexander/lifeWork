import React from 'react'
import s from './Loder.module.css'
import { TailSpin } from  'react-loader-spinner'
import { useSelector } from 'react-redux'

const Loader = () => {
  let isShowLoading = useSelector(state => state.loader.isShowLoading)

  return (
    <div className={[s.loader, isShowLoading ? s.active : ""].join(" ")}>
      <div className={s.wrapper}>
        <TailSpin color="#A89060" height={100} width={100} />
      </div>
    </div>
  );
}

export default Loader 