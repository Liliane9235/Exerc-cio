function main (){}
 // 1. Declaração das variáveis 
 var n, i, cont;
 var soma , media, porcentagem;

  // 2. Entrada da quantidades de peossoas 
  n = Number(window.prompt('Quantas pessoas serão digitadas ?'));

  // 3. inicialização dos vetores (Arrays) de formas correta em JS 
  let nomes = []
  let idade  = []
  let nome = []
   
  // 4. Coleta de dados 
  for  (i = 0; i < n; i++ )  {
 // Usamos  (i  + 1 )para mostrar 1ª pessoas, 2ª pessoa, etc.
 // Window.alert('Dados da "+ (i + 1) + "ª pessoa:");

 // window.alert(`Dados da ${i + 1}ª pessoa:`) ;
 nomes.push(prompt(`nome da ${i+1}ª pessoa:`))
 idades.push(prompt(`idade da ${i+1}ª pessoa:`))
 alturas.push(prompt(`alturas da ${i+1}ª pessoa:`))
  //nomes. push(`nome da ${ i+1 }ª pessoa:`);
//   idade [i] = Number (window.prompt(` Idade da ${i+1}ª pessoa:`));
//  alturas [i] = Number (Window.prompt(`Altura da $(i+1)ª`));
 }

 nomes = nomes.join(",");


 console.log("nomes: " + nomes);
 console.log("idade: " + idades);
 console.log("alturas: " + alturas);


 // 5. Cálciulo da média de altura 
  cont = 0 ;
for (i = 0; i <n; i++) {
    if (idades [i] < 16){

    }
 }
 // 7. Cálculo da porcentagem  (sem o comando (double))
 porcentagem = (cont * 100) / n;
 
 // 8.Exibição dos resultados 
 window.alert("Altura média : "+ media.toFixed(2)); // toFixed(2) limitada a 2
 window.alert("Pessoas com menos de 16 anos é: porcentagem.toFixed(1) + ")

 // listando nomes de menores de 16 
 for (i= 0; i <n; i++){
    if (idade[i] < 16 ){
        window.alert("menor de 16 anos encontrado: " + nomes [i]);

    }
 } 