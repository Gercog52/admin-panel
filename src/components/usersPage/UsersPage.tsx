import React from 'react'
import styles from './UsersPage.module.css';
import { Iuser } from '../../redux/usersReducerType';

interface Iprops {
  users: Iuser[]
}

function UserItemList (props: Iuser) {
  return (
    <div className={styles.}>

    </div>
  )
}

export default function UsersPage(props:Iprops) {
  return (
    <div>
      <div className={styles.table}>
        <div className={styles.table__title}>
          Заголовок
        </div>
        <div className={styles.table__listRow + ' ' + styles.table__listHeader}>
          <div>
            *
          </div>
          <div>
            Отображаемое имя
          </div>
          <div>
            Телефон
          </div>
          <div>
            E-mail
          </div>
          <div>
            Роль
          </div>
          <div>
            Статус
          </div>
        </div>
      </div>
    </div>
  )
}