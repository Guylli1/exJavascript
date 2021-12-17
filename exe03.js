function transformgrau(grau) {
  const valorC = grau.includes('C')
  const valorF = grau.includes('F')

  let upGrau = grau.replace('F', '')
  let calc = fahrenheit => ((fahrenheit - 32) * 5) / 9
  let grauC = 'C'

  if (valorC) {
    upGrau = grau.replace('C', '')
    calc = celsius => (celsius * 9) / 5 + 32
    grauC = 'F'
  }

  return calc(upGrau) + grauC
}
console.log(transformgrau('10C'))
