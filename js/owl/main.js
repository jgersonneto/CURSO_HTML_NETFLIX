$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:4
      },
      1000:{
          items:7
      }
  }
})

/*class Filme {
    constructor() {
        this.titulo,
        this.descricao,
        this.miniImage,
        this.capaImage,
    }
};*/

function Filmes(titulo, desc, miniI, capaI) {    
    this.titulo = titulo;
    this.descricao = desc;
    this.miniImage = miniI;
    this.capaImage = capaI;
}

function CriarFilmes() {
    var titulo = ["DR. HOUSE", "AVA", "FLASH", "THE GOOD DOCTOR", "GAME OF THRONES", "NARUTO", "SMALLVILLE", "SOBRENATURAL", "THE UMBRELLA ACADEMY", "VIKINGS", "DA VINCI'S DEMONS"];
    var des = ["Um médico dissidente e anti-social, que se especializou em medicina de diagnóstico. Faz o que for preciso para resolver casos intrigantes que estão no seu caminho, usando a sua equipe de médicos e sua inteligência.", "Atormentada por dúvidas, uma assassina de elite luta para proteger a si mesma e a sua família depois que uma missão dá errado.", "Barry enfrenta diversos assassinos que invadem a premiação onde ele acompanha Iris, mas os efeitos colaterais de seus novos superpoderes representam uma ameaça.", "Um jovem médico com autismo começa a trabalhar em um famoso hospital. Além dos desafios da profissão, ele terá também que provar sua capacidade a seus colegas e superiores.", "Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, sete nobres famílias lutam pelo controle da mítica terra de Westeros, dividida depois de uma guerra. Num cenário que lembra a Europa medieval, reis, rainhas, cavaleiros e renegados usam todos os meios possíveis em um jogo político pela disputa do Trono de Ferro, o símbolo do poder absoluto.", "Naruto é uma criança que vive em Konoha, a vila ninja do País do Fogo. Quando ainda bebê, Naruto teve um youkai, que na crença japonesa representa um monstro, aprisionado em seu corpo, o Bijuu chamado Kyuubi, pelo Quarto Hokage, para salvar a Aldeia da folha.", "Antes da vida como Super-Homem, o jovem Clark Kent encara os problemas da adolescência enquanto aprende a controlar seus poderes e usá-los para proteger a cidade de Smallville.", "Os irmãos Dean e Sam vasculham o país em busca de atividades paranormais, brigando com demônios, fantasmas e monstros no caminho.", "Com a morte do pai, irmãos com poderes extraordinários se reencontram e descobrem surpreendentes segredos de família – além de uma ameaça iminente à humanidade.", "Ragnar Lothbrok, um jovem que se considera descendente de Odin, é um guerreiro, fazendeiro e chefe de família. Visionário e sonhando viver diversas aventuras, ele acredita que as riquezas sonhadas por seu povo encontram-se além do mar Báltico. Mas para conseguir conquistá-las ele precisa convencer Earl Haraldson, o líder de seu povo, a permitir que ele e seus guerreiros viagem em direção à Inglaterra.", "A trama vai acompanhar a vida de Da Vinci aos 25 anos na Florença renascentista, onde o artista e inventor tinha que lidar com as limitações tecnológicas da época para concretizar suas criações."];
    var miniI = ["mini_house.jpg", "mini_ava.jpg", "mini_flash.jpg", "mini_gdoctor.jpg", "mini_got.jpg", "mini_naruto.jpg", "mini_smallville.jpg", "mini_sobrenatural.jpg", "mini_uacademy.jpg", "mini_vikings.jpg", "mini_davincis.jpg"];
    var capaI = ["capa_house.jpg", "capa_ava.jpg", "capa_flash.jpg", "capa_gdoctor.jpg", "capa_got.jpg", "capa_naruto.jpg", "capa_smallville.jpg", "capa_sobrenatural.jpg", "capa_uacademy.jpg", "capa_vikings.jpg", "capa_fundo_da_vincis.jpg"];
    var listaFilmes = [];

    for(var i = 0; i<11; i++) {
        var filme1 = new Filmes(titulo[i], des[i], miniI[i], capaI[i]);        
        listaFilmes.push(filme1);
    } 
    return listaFilmes;   
}



function NINTENDOFLIX() {    
    window.open("/nintendoflix/nflixmain.html");
}

function clickcarrosel(e) {
    var lista = CriarFilmes();
    let filmesp = document.getElementById('filmesP');
    let tituloP = document.getElementById('tituloP');
    let descricaoP = document.getElementById('descricaoP'); 
    var tituloAtual = "";
    var descricaoAtual = "";
    var capaAtual = "";
    var miniAtual = "";
    var mini = e.src + "";
    mini = mini.replace("http://127.0.0.1:5500/img/", "");

    for(var i = 0; i<lista.length; i++) {    

        if(lista[i].miniImage.localeCompare(mini) == 0) {            
            capaAtual = lista[i].capaImage;
            tituloAtual = lista[i].titulo;
            descricaoAtual = lista[i].descricao;            
        }

        if(lista[i].titulo.localeCompare(document.getElementById('tituloP').innerHTML) == 0) {            
            miniAtual = lista[i].miniImage;
            miniAtual = lista[i].miniImage;            
        }
    };
    
    //
    miniAtual = miniAtual.replace(miniAtual, "img/"+miniAtual);
    capaAtual = capaAtual.replace(capaAtual, "/img/"+capaAtual);

    filmesp.style.background = 'linear-gradient(rgba(0, 0, 0, .50), rgba(0, 0, 0, .50)100%), url('+capaAtual+')';    
    filmesp.style.backgroundSize= 'cover';
    tituloP.innerHTML = tituloAtual;
    descricaoP.innerHTML = descricaoAtual;
    e.src = miniAtual;
}

