import Link from "next/link";

export default function BlogPage() {
    return (
        <main>
            <h1>Blog </h1>
            <p><Link href="/blog/p-1">Post</Link></p>
        </main>
    )
}