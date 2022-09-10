import S from './button.module.css';

export function Botao(props) {
  const {
    nome, aoClicar, largura, altura,
  } = props
  return (
    <div>
      <button
        className={S.button}
        onClick={aoClicar}
        type="button"
        style={{
          width: largura,
          height: altura,
        }}
      >
        {nome}
      </button>

    </div>

  )
}
