import S from './button.module.css';

export function Botao(props) {
  const {
    nome, aoClicar,
  } = props
  return (
    <div>
      <button className={S.button} onClick={aoClicar}>
        {nome}
      </button>
    </div>
  )
}
