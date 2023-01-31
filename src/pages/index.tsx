import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <ul>
          <li>
            <Link href="/products" passHref>
              Produtos
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              About
            </Link>
          </li>
        </ul>
        <h1>Hello World!</h1>
      </main>
    </>
  )
}
