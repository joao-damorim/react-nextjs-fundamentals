import Link from "next/link";

import { useRouter } from 'next/router'

export default function Todo() {

    const router = useRouter();

    const todoId = router.query.todoId

    return (
        <>
            <Link href="/">
                Voltar
            </Link>
            <h1>Exibindo o todoid: {todoId}</h1>
            <p>Comentário: la la la... <Link href={`/todos/${todoId}/comments/1`}>Detalhes</Link></p>
        </>
    )
}