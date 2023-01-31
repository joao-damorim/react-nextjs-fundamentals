import Navbar from '@/components/Navbar'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Navbar />
        <h1>Hello World!</h1>
      </main>
    </>
  )
}
