import styles from './page.module.css'
import { Skeleton } from '@mui/material'

import { ListOfExpenses } from '@/components/listOfExpenses/listOfExpenses'
import { Graph } from '@/components/graph/graph'
import { PieValueType } from '@mui/x-charts'
import { FunctionComponent } from 'react'
import { Footer } from '@/components/footer/footer'

const data: PieValueType[] = [
  { id:Math.random(),  value: 10, color: "white", label: "идти"},
  { id:Math.random(), value: 15, color: "blue"},
  { id:Math.random(), value: 20, color: "red"},
  { id:Math.random(),value: 10, color: "white"},
  { id:Math.random(),value: 15, color: "blue"},
  { id:Math.random(),value: 20, color: "red"},
  { id:Math.random(),value: 10, color: "white"},
  { id:Math.random(),value: 15, color: "blue"},
  { id:Math.random(),value: 20, color: "red"},
  { id:Math.random(),value: 10, color: "white"},
  { id:Math.random(), value: 15, color: "blue"},
]

const MainPage: FunctionComponent = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.grafic}>
        {
          data.length ?
          <Graph data={data}/>
          :
          <Skeleton animation="wave" variant="circular" width={400} height={400} >
            <Graph data={[]}/>
          </Skeleton>
        }
        </div>
        <ListOfExpenses expenses={[{color: "", description: '1$ per second', name: "Transport"}]}/>
      </main>
      <Footer/>
    </>
    
  )
}

export default MainPage