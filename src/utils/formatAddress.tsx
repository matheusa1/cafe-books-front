export const formataEndereco = (endereco: string) => {
  // Verifica se o endereço é válido
  if (!endereco) {
    return null
  }

  // Separa os campos do endereço
  const [rua, numero, complemento, cep, bairro, cidade, estado] = endereco.split('|')

  // Formata o CEP
  let newCep = cep?.replace('-', '')
  newCep = newCep?.slice(0, 5) + '-' + newCep?.slice(5)

  // Formata o endereço
  const enderecoFormatado = `
    ${rua}, ${numero}${complemento} -
    ${bairro},
    ${cidade} - ${estado},
    ${newCep}
  `

  // Retorna o endereço no formato convencional
  return enderecoFormatado.replace(/\s+/g, ' ')
}
