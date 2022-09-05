import S from './button.module.css';

export function Botao(props) {
  const { nome, aoClicar } = props
  return (
    <div className={S.button}>

      <button onClick={aoClicar} className="button" type="button">
        {nome}
      </button>

    </div>

  )
}
