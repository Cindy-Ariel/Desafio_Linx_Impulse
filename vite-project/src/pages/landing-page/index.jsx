// import { useState } from 'react'
import React, { useState, useEffect } from 'react';
import { Produto } from '../../components/Produto'
import { Header } from '../../components/Header'
import { Inscricao } from '../../components/Inscricao'
import S from './landing.module.css';
import { TextoPrincipal } from '../../components/TextoPrincipal'
import { Botao } from '../../components/Button';
import { Compartilhe } from '../../components/Compartihe';
import { Footer } from '../../components/Footer';
// import { page1 } from '../../mock/mock'

function LandingPage() {
  const [pArray, setpArray] = useState([])
  const [pagina, setPagina] = useState(1)
  const url = `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${pagina}`

  async function getApi() {
    const data = await fetch(url)
    const jsonData = await data.json()
    setpArray([...pArray, ...jsonData.products])
    setPagina(pagina + 1)
  }

  useEffect(() => {
    getApi()
  }, [])

  const arrayDeProdutos = pArray.map((item) => (

    <Produto
      key={item.id}
      nomeProduto={item.name}
      descricaoProduto={item.description}
      precoAnteriorProduto={item.oldPrice}
      precoProduto={item.price}
      parcelamentoProduto={item.installments.count}
      image={item.image}
    />
  ))

  return (

    <div className={S.app}>

      <Header />

      <main className={S.main}>
        <div className={S.main_content}>
          <TextoPrincipal />
          <Inscricao />
        </div>

        <div className={S.titulo_produtos}>
          <h1>Sua seção especial</h1>
        </div>

        <div className={S.main_products}>
          {arrayDeProdutos}
        </div>

        <div className={S.button}>
          <Botao largura="260px" altura="39px" aoClicar={() => { getApi() }} nome="Ainda mais produtos aqui!" />
        </div>

        <div className={S.compartihe}>
          <Compartilhe />

        </div>

        <div className={S.button}>
          <Botao largura="260px" altura="39px" nome="Enviar agora" />
        </div>
      </main>
      <Footer />

    </div>

  )
}

export default LandingPage
