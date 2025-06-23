import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p>世界よ、こんにちは！</p>

      <Link href="/article/test">/article/test</Link>
    </main>
  );
}
