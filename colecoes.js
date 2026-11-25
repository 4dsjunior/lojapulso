/* =====================================================================
   REGRAS DA TELA "SUGESTÃO" – Pulso Relojoaria
   Edite este arquivo no Bloco de Notas para ajustar as sugestões.
   Salve na pasta "publicar" (ao lado do index.html) e publique normalmente.
   Este arquivo NÃO é apagado nem alterado pelo gerar_catalogo.py.

   COMO EDITAR (resumo)
   - Para mudar um número (ex.: preço máximo de "Práticos"), troque só o número.
   - Cada coleção tem "regras": uma LISTA de conjuntos de condições.
       * Dentro de um conjunto, TODAS as condições precisam valer (E).
       * Entre conjuntos, basta UM valer (OU).
   - Condições disponíveis em cada conjunto (use só as que precisar):
       tipo        ['Relógio', 'Kit']              Tipo do produto
       genero      ['Feminino']                    Gênero
       pulseira    ['Aço', 'Metal']                Pulseira
       cor         ['Dourado', 'Rosé', 'Bicolor']  Cor
       atmMin      5      Resistência mínima em ATM (10 m = 1 ATM; "3 BAR" = 3 ATM).
                          Resistência sem número (ex.: "WR") não atende a esta condição.
       precoMin    700    Preço mínimo, em reais (inclui o valor)
       precoMax    600    Preço máximo, em reais (inclui o valor)
       tamanhoMax  30     Tamanho máximo em mm. Em relógios retangulares (ex.: 25X37)
                          vale a MENOR medida.
   - "incluir" / "excluir": listas de referências (ex.: '99830L0MVNA2') ou de códigos
     de modelo (os 5 primeiros dígitos, ex.: '99830'). "incluir" coloca o item na coleção
     mesmo que as regras não peçam; "excluir" tira (e vence "incluir").
   - Escreva os textos exatamente como aparecem no site (Aço, Prata, Rosé...).
   ===================================================================== */

window.COLECOES = {

  // Quantos modelos aparecem de cada vez na tela de sugestão
  quantidade: 12,

  // Só estes tipos entram nas sugestões (pulseiras avulsas ficam de fora).
  // Para incluir pulseiras avulsas: ['Relógio', 'Kit', 'Pulseira avulsa']
  tiposSugeriveis: ['Relógio', 'Kit'],

  // Em "Para presentear", as sugestões começam por itens destas coleções (use os "id" abaixo)
  prioridadePresente: ['presentes', 'sofisticados'],

  // Faixas de preço (max: null = sem limite). O valor mínimo é incluído; o máximo, não.
  faixasPreco: [
    { rotulo: 'Até R$ 400',         min: 0,    max: 400  },
    { rotulo: 'R$ 400 a R$ 700',    min: 400,  max: 700  },
    { rotulo: 'R$ 700 a R$ 1.000',  min: 700,  max: 1000 },
    { rotulo: 'Acima de R$ 1.000',  min: 1000, max: null }
  ],

  // Coleções (aparecem na tela nesta ordem). "id" não pode repetir nem ter espaços.
  colecoes: [
    {
      id: 'presentes',
      mostrar: false,        // false = não aparece como botão de estilo (a 1ª pergunta já é "Para mim / Para presentear"),
                             // mas continua valendo para a prioridade de "Para presentear" (veja prioridadePresente)
      nome: 'Presentes',
      descricao: 'Kits prontos para presentear.',
      regras: [ { tipo: ['Kit'] } ],
      incluir: [],
      excluir: []
    },
    {
      id: 'sofisticados',
      nome: 'Sofisticados',
      descricao: 'Dourado, rosé ou bicolor com pulseira de aço ou metal, ou os modelos de maior valor.',
      regras: [
        { cor: ['Dourado', 'Rosé', 'Bicolor'], pulseira: ['Aço', 'Metal'] },
        { precoMin: 1000 }
      ],
      incluir: [],
      excluir: []
    },
    {
      id: 'praticos',
      nome: 'Práticos',
      descricao: 'Para o dia a dia: pulseira de aço ou borracha, resistentes à água e até R$ 600.',
      regras: [ { pulseira: ['Aço', 'Borracha'], atmMin: 5, precoMax: 600 } ],
      incluir: [],
      excluir: []
    },
    {
      id: 'esportivos',
      nome: 'Esportivos',
      descricao: 'Muito resistentes à água (10 ATM ou mais) ou com pulseira de borracha.',
      regras: [
        { atmMin: 10 },
        { pulseira: ['Borracha'] }
      ],
      incluir: [],
      excluir: []
    },
    {
      id: 'delicados',
      nome: 'Delicados',
      descricao: 'Femininos pequenos, de até 30 mm.',
      regras: [ { genero: ['Feminino'], tamanhoMax: 30 } ],
      incluir: [],
      excluir: []
    }
  ]
};