export default function Copyright() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <div className="copyright">
      © {year} Todos os direitos reservados.
    </div>
  )
}