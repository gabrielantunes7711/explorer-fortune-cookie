const mainScreen = document.querySelector(".main-screen");
const resultScreen = document.querySelector(".result-screen");
const cookie = mainScreen.querySelector("img");
const resetButton = document.querySelector(".result-screen button");
const message = document.getElementById("message");

function getMessage() {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  message.innerText = randomMessage;

  toggleScreens();
}

function toggleScreens() {
  mainScreen.classList.toggle("hidden");
  resultScreen.classList.toggle("hidden");
}

function enterShortcut(event) {
  const checkKeyEnter = event.key === "Enter";
  const resultScreenClosed = resultScreen.classList.contains("hidden");
  const mainScreenClosed = mainScreen.classList.contains("hidden");

  if (checkKeyEnter) {
    if (resultScreenClosed) {
      console.log("abrir");
    } else if (mainScreenClosed) {
      console.log("fechar");
    }
  }
}

document.addEventListener("keydown", enterShortcut);

cookie.addEventListener("click", getMessage);
resetButton.addEventListener("click", toggleScreens);

const messages = [
  "A vida é uma jornada, aproveite o caminho.",
  "Grandes realizações exigem grandes esforços.",
  "Acredite em si mesmo e siga em frente.",
  "O sucesso está no horizonte, continue avançando.",
  "A felicidade está nas pequenas coisas.",
  "Seja a mudança que você deseja ver no mundo.",
  "A persistência leva ao sucesso.",
  "Aprenda com os erros e cresça com eles.",
  "A imaginação não tem limites.",
  "O tempo é precioso, use-o sabiamente.",
  "Um sorriso pode iluminar o seu dia e o dos outros.",
  "O otimismo é a chave para uma vida feliz.",
  "Nunca é tarde demais para seguir seus sonhos.",
  "Pequenas atitudes podem fazer uma grande diferença.",
  "Acredite no impossível e conquiste-o.",
  "A gratidão transforma momentos comuns em dias especiais.",
  "Aproveite cada momento como se fosse o último.",
  "A sabedoria vem da experiência.",
  "Não tenha medo de falhar, tenha medo de não tentar.",
  "A força interior é o que realmente importa.",
  "A verdadeira beleza vem de dentro.",
  "Confie no processo e deixe que as coisas aconteçam.",
  "Aprenda algo novo todos os dias.",
  "Faça o que você ama e ame o que você faz.",
  "A felicidade não é um destino, é uma jornada.",
  "A sorte favorece os corajosos.",
  "A gentileza é a linguagem universal do amor.",
  "Encontre alegria nas coisas simples da vida.",
  "Você é capaz de mais do que imagina.",
  "Seja a melhor versão de si mesmo.",
  "Aprenda a viver o presente e esqueça o passado.",
  "A paciência é uma virtude que traz grandes recompensas.",
  "Acredite no poder dos seus sonhos.",
  "O amor é o ingrediente principal para uma vida plena.",
  "Aproveite os desafios, eles são oportunidades de crescimento.",
  "O sucesso começa com uma mentalidade positiva.",
  "Aprenda a ouvir tanto quanto fala.",
  "O respeito é a base de todos os relacionamentos.",
  "Cultive bons pensamentos e colherá boas ações.",
  "O conhecimento é a chave para abrir portas.",
  "A vida é curta demais para não aproveitá-la ao máximo.",
  "A melhor maneira de prever o futuro é criá-lo.",
  "Acredite no poder da sua intuição.",
  "A gratidão é o melhor remédio para a tristeza.",
  "Nunca subestime o impacto que você pode causar.",
  "A felicidade está nas escolhas que você faz.",
  "Valorize as pessoas que fazem parte da sua vida.",
  "O segredo da felicidade é encontrar alegria nas coisas simples.",
  "Você é mais forte do que pensa.",
  "A vida é cheia de possibilidades, basta acreditar.",
  "Acredite no seu potencial e alcance grandes conquistas.",
  "Encontre tempo para fazer o que te faz feliz.",
  "A humildade é a chave para o crescimento pessoal.",
  "A vida é como uma bicicleta, para manter o equilíbrio, é preciso continuar em movimento.",
];
