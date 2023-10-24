export const converteDataISOParaDDMMAAAA = (dataISO: string) => {
  // Converte a data ISO para um objeto Date
  const data = new Date(dataISO)

  // Obtém os valores do dia, mês e ano
  const dia = data.getDate()
  const mes = data.getMonth() + 1
  const ano = data.getFullYear()

  // Monta a data no formato dd/mm/yyyy
  const dataFormatada = `${dia}/${mes}/${ano}`

  // Retorna a data no formato dd/mm/yyyy
  return dataFormatada
}
