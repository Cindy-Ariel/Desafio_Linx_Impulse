// import { useState } from 'react'
import { Produto } from '../../components/Produto'
import { Header } from '../../components/Header'
import { Inscricao } from '../../components/Inscricao'
import S from './landing.module.css';
import { TextoPrincipal } from '../../components/TextoPrincipal'
import { Botao } from '../../components/Button';
import { Compartilhe } from '../../components/Compartihe';
import { Footer } from '../../components/Footer';

function LandingPage() {
  // const [count, setCount] = useState(0)

  return (
    <div className={S.app}>

      <Header />

      <main className={S.main}>
        <div className={S.main_content}>
          <TextoPrincipal />
          <Inscricao />
        </div>
        <div className={S.main_products}>
          <Produto
            nomeProduto="Produto1"
            descricaoProduto="Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata."
            precoAnteriorProduto="R$12,00"
            precoProduto="10,00"
            parcelamentoProduto="ou 9x 1,50"
            nomeBotao="comprar produto 1"
          />
          <Produto
            nomeProduto="Produto2"
            descricaoProduto="Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata."
            precoAnteriorProduto="R$12,00"
            precoProduto="10,00"
            parcelamentoProduto="ou 9x 1,50"
            nomeBotao="comprar produto 2"
          />
          <Produto
            nomeProduto="Produto3"
            descricaoProduto="Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata."
            precoAnteriorProduto="R$12,00"
            precoProduto="10,00"
            parcelamentoProduto="ou 9x 1,50"
            nomeBotao="comprar produto 3"
          />
          <Produto
            nomeProduto="Produto4"
            descricaoProduto="Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata."
            precoAnteriorProduto="R$12,00"
            precoProduto="10,00"
            parcelamentoProduto="ou 9x 1,50"
            nomeBotao="comprar produto 4"
          />
          <Produto
            nomeProduto="Produto5"
            descricaoProduto="Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata."
            precoAnteriorProduto="R$12,00"
            precoProduto="10,00"
            parcelamentoProduto="ou 9x 1,50"
            nomeBotao="comprar produto 5"

          />
          <Produto
            nomeProduto="Produto6"
            descricaoProduto="Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata."
            precoAnteriorProduto="R$12,00"
            precoProduto="10,00"
            parcelamentoProduto="ou 9x 1,50"
            nomeBotao="comprar produto 6"
          />
          <Produto
            nomeProduto="Produto7"
            descricaoProduto="Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata."
            precoAnteriorProduto="R$12,00"
            precoProduto="10,00"
            parcelamentoProduto="ou 9x 1,50"
            nomeBotao="comprar produto 7"
          />
          <Produto
            nomeProduto="Produto8"
            descricaoProduto="Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata."
            precoAnteriorProduto="R$12,00"
            precoProduto="10,00"
            parcelamentoProduto="ou 9x 1,50"
            nomeBotao="comprar produto 8"
          />

        </div>

        <div className={S.button}>
          <Botao nome="Ainda mais produtos aqui!" />
        </div>

        <div className={S.compartihe}>
          <Compartilhe />

        </div>

        <div className={S.button}>
          <Botao nome="Enviar agora" />
        </div>
      </main>

      <Footer />

    </div>
  )
}

export default LandingPage
