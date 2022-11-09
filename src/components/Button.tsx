
type PropsTypes = {
    children:React.ReactNode,
    onClick:()=>void
}

const Button = (props:PropsTypes) => {
    let {children,onClick} = props
  return (
    <button onClick={onClick}>{children}</button>
  )
}

export default Button