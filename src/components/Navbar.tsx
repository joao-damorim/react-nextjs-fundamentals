import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
    return (
        <>
            <ul className={styles.navbar}>
                <li>
                    <Link href="/" passHref>
                    Home
                    </Link>
                </li>
                <li>
                    <Link href="/products" passHref>
                    Produtos
                    </Link>
                </li>
                <li>
                    <Link href="/todos" passHref>
                    Tarefas
                    </Link>
                </li>
                <li>
                    <Link href="/company" passHref>
                    Empresa
                    </Link>
                </li>
                <li>
                    <Link href="/about" passHref>
                    Sobre nós
                    </Link>
                </li>
            </ul>
        </>
    )
}