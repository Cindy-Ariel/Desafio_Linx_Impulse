import S from './produto.module.css';
import { Botao } from '../Button'

export function Produto(props) {
  const {
    nomeProduto, descricaoProduto, precoAnteriorProduto, precoProduto, parcelamentoProduto, nomeBotao,
  } = props
  return (
    <div className={S.box_produto}>
      <img className={S.img_produto} src="imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6829158" alt="" />
      <h1 className={S.nome_produto}>
        {nomeProduto}
      </h1>
      <p className={S.descricao_produto}>
        {descricaoProduto}
        <br />
        <br />
        {precoAnteriorProduto}
      </p>
      <h3 className={S.preco_produto}>{precoProduto}</h3>
      <p className={S.descricao_produto}>{parcelamentoProduto}</p>
      <Botao aoClicar={() => console.log('comprei')} nome={nomeBotao} />

    </div>

  )
}
