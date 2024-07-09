import { useAppDispatch, useAppSelector } from "@/constants/hooks.ts"
import { getBeans } from "@/redux/slices/beans/service/beans-service.ts"
import { useEffect } from "react"
import styles from './main-page.module.scss'


const MainPage = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector(state => state.beans)

  useEffect(() => {
    dispatch(getBeans({ currentPage: 1, pageSize: 10}))
  },[ dispatch ])

  return (
    <div className={styles.main}>
      <h2>Main Page</h2>
      {data.beans.items?.map((el, i) => (
        <h3>{el.description + ' ' + (i + 1)}</h3>
      ))}
    </div>
  )
}

export default MainPage