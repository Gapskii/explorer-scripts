let students = [
  {
    name: 'João',
    nota1: 8,
    nota2: 10
  },

  {
    name: 'Maria',
    nota1: 4,
    nota2: 6
  },

  {
    name: 'Alcione',
    nota1: 5,
    nota2: 10
  }
]

function overallScore() {
  for (student of students) {
    overall = (student.nota1 + student.nota2) / 2

    success = overall > 7

    if (success) {
      alert(`A média do(a) aluno(a) ${student.name} é: ${overall}
      Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
    } else {
      alert(`A média do(a) aluno(a) ${student.name} é: ${overall}
      Não foi dessa vez, ${student.name}! Tente novamente!`)
    }
  }
}

overallScore()
