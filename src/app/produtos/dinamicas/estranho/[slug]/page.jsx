import Link from 'next/link'
import React from 'react'

export default function MeuProduto({params}) {
  return (
    <div>
        <h1>Recuperando o parametro [slug]</h1>

        <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat numquam cupiditate quos, aspernatur explicabo delectus ipsam nihil dignissimos tempora ad? Quas placeat natus molestiae temporibus odio sit unde nostrum labore!</p>
            <p> <Link href="/">Voltar...</Link></p>
        </div>
    </div>
  )
}
