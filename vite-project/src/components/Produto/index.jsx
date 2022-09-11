import S from './produto.module.css';
import { Botao } from '../Button'

export function Produto(props) {
  const {
    nomeProduto, descricaoProduto, precoAnteriorProduto, precoProduto, parcelamentoProduto, image,
  } = props
  return (
    <div className={S.box_produto}>
      <img className={S.img_produto} src={image} alt={descricaoProduto} />
      <h1 className={S.nome_produto}>
        {nomeProduto}
      </h1>
      <p className={S.descricao_produto}>
        {descricaoProduto}
        <br />
        <br />
        De:R$
        {precoAnteriorProduto}
      </p>
      <h3 className={S.preco_produto}>
        Por: R$
        {' '}
        {precoProduto}
      </h3>
      <p className={S.descricao_produto}>
        ou 2x de R$
        {' '}
        {parcelamentoProduto}
      </p>
      <div className={S.botao}>
        <Botao nome="Comprar" />
      </div>

    </div>

  )
}
