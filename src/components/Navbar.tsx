import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <ul>
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
                    <Link href="/about" passHref>
                    Sobre nós
                    </Link>
                </li>
            </ul>
        </>
    )
}