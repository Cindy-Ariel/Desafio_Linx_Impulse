import S from './input.module.css';

export function Input(props) {
  const { nome } = props

  return (
    <div className={S.box_input}>

      <label>{nome}</label>
      <input className={S.input} type="text" />

    </div>

  )
}
