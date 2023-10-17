import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home Page </h1>

      <div>
        <p><Link href="/produtos/tenis">Tênis...</Link></p>
        <p><Link href="/produtos/produto/tenis-preto">Tênis Preto...</Link></p>
        <p><Link href="/produtos/produto/camisa-xadrez">Camisa X...</Link></p>
      </div>
    </>
  )
}
