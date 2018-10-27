axios.get('https://api.github.com/users/diego3g')
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });

  console.log(exercio1());
  console.log(exercio2());
  console.log(exercio3());
  console.log(exercio4());
  console.log(exercio5());

  function exercio1() {
    var endereco = {
      rua: 'Rua dos pinheiros',
      numero: 1293,
      bairro: 'Centro',
      cidade: 'São Paulo',
      uf: 'SP'
    };
    //exemplo: O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com nº 1293.
    var enderecoFormatado = 'O usuário mora em '
    .concat(endereco.cidade)
    .concat(' / ')
    .concat(endereco.uf)
    .concat(', no bairro ')
    .concat(endereco.bairro)
    .concat(', na rua ')
    .concat('\"')
    .concat(endereco.rua)
    .concat('\"')
    .concat(' com nº ')
    .concat(endereco.numero)
    .concat('.');
    
    return enderecoFormatado;
  }

  function exercio2() {
    var numerosPares = pares(32, 321);
    if(numerosPares.length > 0) {
      return 'Os números pares são: ' + numerosPares;
    } 
    return 'Não existe números pares nesse intervalo';
  }

  function pares(x, y) {
    var numerosPares = [];
    while(x < y) {
        if(x % 2 == 0) {
          numerosPares.push(x);
        }
      x++;
    }
    return numerosPares;
  }

  function exercio3 () {  
    var skills = ['Javascript', 'ReactJS', 'React Native'];
    return temHabilidade(skills, 'Javascript'); // true ou false
  }

  function temHabilidade(skills, habilidade) {
    return skills.length > 0 && skills.indexOf(habilidade) != -1 ? true : false;
  }

  function exercio4 () {
    var anosEstudo = 7;
    return experiencia(anosEstudo);
  }

  function experiencia(anos) {
    // De 0-1 ano: Iniciante
    // De 1-3 anos: Intermediário
    // De 3-6 anos: Avançado
    // De 7 acima: Jedi Master

    if(anos > 0 && anos <= 1) {
      return 'Iniciante';
    }
    if(anos > 1 && anos <= 3){
      return 'Intermediário';
    }
    if(anos > 3 && anos <= 6){
      return 'Avançado';
    }
    if(anos >= 7) {
      return 'Jedi Master';
    }
  }

  function exercio5() {
    var usuarios = [
      {
        nome: 'Diego',
        habilidades: ['Javascript', 'ReactJS', 'Redux']
      },
      {
        nome: 'Gabriel',
        habilidades: ['VueJS', 'Ruby on Rails', 'Elixir']
      }
    ];
    var resultado = [];
    for(var usuario of usuarios) {
        resultado.push('O '.concat(usuario.nome).concat(' possui as habilidades: ').concat(usuario.habilidades.join(', ')));
    }
    return resultado;
  }
