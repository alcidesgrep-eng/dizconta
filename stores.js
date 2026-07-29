/* v4 ============================================================
   DIZCONTA — CONFIGURACIÓN DEL SITIO
   Edita solo este archivo para agregar tiendas, cupones y tracking.
   No necesitas tocar index.html.
   ============================================================ */

const SITE = {
  brand: "Dizconta",
  tagline: "Economize no que você ama.",
  subtitle: "Descubra cupons e descontos verificados das suas lojas favoritas.",
  cashbackEnabled: false,     // true → muestra "Iniciar sessão / Cadastre-se"
  /* logos automáticos: carga el logo oficial de cada marca desde su
     dominio (servicio de favicons de Google). Si una tienda tiene
     logoUrl propio (ej "img/logo-x.png"), ese manda. false = solo
     bloques de color/logoUrl manual. */
  autoLogos: true,
  /* contacto que aparece en el rodapié y en la página "Contato" */
  contactEmail: "alcidesspinoz@gabglobalmkt.com.br",
  whatsapp: "",              // ej: "5511999999999" (sin +, sin espacios). "" = oculta el botón.
  social: {
    instagram: "",           // ej: "https://instagram.com/cupomplus"
    tiktok: ""
  }
};

/* ------------------------------------------------------------
   DESTAQUES DA HOME
   Solo estos cupones aparecen en la sección "Ofertas em destaque"
   de la home, EN ESTE ORDEN. El primero recibe la tarjeta grande
   (mayor destaque visual) — por eso Natura va primero.
   Usa 3 a 5 oids. Elegí siempre el cupom de mayor valor por tienda.
   Los demás cupones siguen apareciendo normalmente en /loja y /lojas.
   ------------------------------------------------------------ */
const HOME_FEATURED = [1001, 2002, 2004, 2005, 3001];

/* ------------------------------------------------------------
   PÁGINAS INSTITUCIONAIS — rodapié (LGPD, confiança)
   slug → define la URL: tudominio.com/pagina/sobre-nos
   Edita el texto libremente, son solo HTML simple.

   Contato: el formulario envía por email vía FormSubmit.co (gratis,
   sin backend propio). LA PRIMERA VEZ que alguien lo envíe, FormSubmit
   manda un email de confirmación a SITE.contactEmail — hay que abrir
   ese email y click en "Activate" para que empiece a llegar el resto.
   ------------------------------------------------------------ */
const PAGES = [
  {
    slug: "sobre-nos",
    title: "Sobre nós",
    content: `
      <p>A Dizconta nasceu de um problema bem simples: procurar um cupom de desconto e cair numa página cheia de anúncios, com códigos que não funcionam e que só existem para gerar clique.</p>
      <p>Fizemos diferente. Cada cupom publicado aqui foi testado antes de ir para o ar. Quando você clica em "Ver cupom", a loja abre em outra aba e o código já aparece na tela — sem cadastro, sem precisar seguir nenhuma página, sem enrolação.</p>
      <h2>Como escolhemos os cupons</h2>
      <p>Acompanhamos toda semana as promoções oficiais das lojas parceiras — cupons de boas-vindas, campanhas por tempo limitado, brindes e ofertas de app. Priorizamos sempre o desconto de maior valor real para quem está comprando, não o que rende mais clique.</p>
      <h2>Como o site se sustenta</h2>
      <p>Quando você compra através de um dos nossos links, a loja parceira nos paga uma comissão pela indicação — sem nenhum custo adicional para você, o preço é exatamente o mesmo que comprando direto. É assim que mantemos a Dizconta no ar e 100% gratuita.</p>
      <h2>Fale com a gente</h2>
      <p>Encontrou um cupom vencido ou quer sugerir uma loja? <a onclick="goPage('contato')" style="color:var(--primary);font-weight:600;cursor:pointer">Entre em contato aqui</a>.</p>`
  },
  {
    slug: "contato",
    title: "Contato",
    content: `
      <p>Encontrou um cupom que não funciona, quer sugerir uma loja parceira ou tem alguma dúvida? Preencha o formulário abaixo — respondemos normalmente em até 2 dias úteis.</p>
      <div class="contact-wrap">
        <div>
          <div id="cfSuccess" class="cf-success" style="display:none">
            <b>Mensagem enviada ✓</b>
            <p>Obrigado pelo contato! Vamos responder no e-mail que você informou em até 2 dias úteis.</p>
          </div>
          <form id="contactForm" class="contact-form" action="https://formsubmit.co/alcidesspinoz@gabglobalmkt.com.br" method="POST">
            <input type="hidden" name="_subject" value="Novo contato · Dizconta">
            <input type="hidden" name="_template" value="table">
            <input type="hidden" name="_next" id="cfNext" value="">
            <input type="text" name="_honey" class="hp" tabindex="-1" autocomplete="off">
            <label class="form-label">Nome
              <input type="text" name="name" class="form-input" required maxlength="80">
            </label>
            <label class="form-label">E-mail
              <input type="email" name="email" class="form-input" required maxlength="120">
            </label>
            <label class="form-label">Motivo
              <select name="motivo" class="form-input">
                <option>Cupom com problema</option>
                <option>Sugestão de loja</option>
                <option>Parceria</option>
                <option>Outro assunto</option>
              </select>
            </label>
            <label class="form-label">Mensagem
              <textarea name="message" class="form-input" rows="5" required maxlength="1000"></textarea>
            </label>
            <button type="submit" class="btn-primary" style="width:100%">Enviar mensagem</button>
          </form>
        </div>
        <aside class="side-card">
          <h3>Outros canais</h3>
          <p style="font-size:13.5px;color:var(--gray);margin-bottom:10px"><b style="color:var(--ink)">E-mail:</b><br><span id="pgContactEmail"></span></p>
          <p id="pgWhatsappRow" style="display:none;font-size:13.5px;color:var(--gray)"><b style="color:var(--ink)">WhatsApp:</b><br><a id="pgWhatsappLink" target="_blank" rel="noopener" style="color:var(--primary);font-weight:600">Conversar agora →</a></p>
        </aside>
      </div>`
  },
  {
    slug: "privacidade",
    title: "Política de Privacidade",
    content: `
      <p><i>Última atualização: julho de 2026.</i></p>
      <p>Esta política explica quais dados a Dizconta coleta ao visitar o site e como usamos essa informação, em conformidade com a LGPD (Lei nº 13.709/2018).</p>
      <h2>1. Quem somos</h2>
      <p>A Dizconta é um site de divulgação de cupons e ofertas de lojas parceiras. Se tiver dúvidas sobre esta política, escreva para <span id="pgPrivEmail"></span>.</p>
      <h2>2. Quais dados coletamos</h2>
      <p>Ao navegar no site, podemos coletar automaticamente: páginas visitadas, cupons clicados, origem da visita (se você veio de um anúncio no Google ou Meta, por exemplo, via gclid/utm), tipo de navegador e dispositivo. Se você usa o formulário de contato, coletamos nome, e-mail e a mensagem enviada — usados exclusivamente para responder seu contato.</p>
      <p>Não pedimos cadastro para ver ou usar os cupons, e não coletamos dados sensíveis (saúde, dados bancários, etc.).</p>
      <h2>3. Cookies e ferramentas de análise</h2>
      <p>Usamos ferramentas como Google Analytics e Google Ads para entender quais cupons têm mais interesse e medir o resultado de campanhas. Essas ferramentas gravam cookies no seu navegador. Você pode bloqueá-los a qualquer momento nas configurações do seu navegador, sem prejuízo ao uso do site.</p>
      <h2>4. Cookies de afiliado</h2>
      <p>Ao clicar em "Ver cupom" ou "Ativar oferta", um cookie é gravado pela loja parceira para nos identificar como origem da venda, caso você compre. É assim que recebemos a comissão que mantém o site gratuito — isso não afeta o preço que você paga.</p>
      <h2>5. Com quem compartilhamos dados</h2>
      <p>Não vendemos seus dados. Compartilhamos informações apenas com: (a) lojas parceiras, através do cookie de afiliado, para fins de comissionamento; (b) Google (Analytics/Ads), para medição de campanhas; (c) o serviço que processa o formulário de contato, apenas para entregar sua mensagem por e-mail.</p>
      <h2>6. Seus direitos (LGPD)</h2>
      <p>Você pode solicitar a qualquer momento: confirmação de que tratamos seus dados, acesso a eles, correção, ou exclusão. Basta escrever para <span id="pgPrivEmail2"></span> informando seu pedido.</p>
      <h2>7. Alterações desta política</h2>
      <p>Podemos atualizar esta página conforme o site evolui. A data no topo sempre indica a versão mais recente. Veja também nossos <a onclick="goPage('termos')" style="color:var(--primary);font-weight:600;cursor:pointer">Termos de Uso</a>.</p>`
  },
  {
    slug: "termos",
    title: "Termos de Uso",
    content: `
      <p><i>Última atualização: julho de 2026.</i></p>
      <p>Ao acessar e usar a Dizconta, você concorda com os termos abaixo. Leia com atenção.</p>
      <h2>1. O que é a Dizconta</h2>
      <p>Somos um site de divulgação de cupons, descontos e ofertas de lojas parceiras. Não vendemos produtos diretamente: ao clicar em um cupom, você é direcionado ao site oficial da loja parceira para finalizar a compra lá, sob as regras e responsabilidade dessa loja.</p>
      <h2>2. Sobre os cupons e ofertas</h2>
      <p>Fazemos o possível para manter os cupons testados e atualizados. Ainda assim, as condições (validade, valor, produtos elegíveis) são definidas exclusivamente pelas lojas parceiras e podem mudar ou expirar sem aviso prévio. A Dizconta não se responsabiliza por cupons alterados ou descontinuados pela loja após a publicação, nem por problemas na compra, entrega, cobrança ou atendimento — esses assuntos devem ser tratados diretamente com a loja onde a compra foi feita.</p>
      <h2>3. Links de afiliado</h2>
      <p>Este site contém links de afiliado. Podemos receber uma comissão das lojas parceiras por compras realizadas através deles, sem nenhum custo adicional para você — o preço final é o mesmo de comprar direto no site da loja.</p>
      <h2>4. Uso permitido do site</h2>
      <p>Você pode usar a Dizconta livremente para buscar e ativar cupons. Não é permitido copiar o conteúdo do site para republicar em outro lugar, tentar acessar áreas restritas, ou usar robôs/scripts para coletar dados do site em massa (scraping).</p>
      <h2>5. Formulário de contato</h2>
      <p>As informações enviadas pelo formulário de contato são usadas exclusivamente para responder sua mensagem, conforme nossa <a onclick="goPage('privacidade')" style="color:var(--primary);font-weight:600;cursor:pointer">Política de Privacidade</a>.</p>
      <h2>6. Alterações destes termos</h2>
      <p>Podemos atualizar estes termos conforme o site evolui. O uso contínuo do site após uma atualização representa a aceitação dos novos termos.</p>`
  }
];

/* ------------------------------------------------------------
   TRACKING — el corazón de los datos de conversión
   1. ga4Id: tu ID de GA4 (ej. "G-ABC123"). null = desactivado.
   2. adsConversion: conversión de clic de Google Ads
      formato "AW-123456789/AbCdEfGh". null = desactivado.
   ------------------------------------------------------------ */
const TRACKING = {
  ga4Id: null,               // ej: "G-XXXXXXX"
  adsConversion: null        // ej: "AW-XXXXXXX/etiqueta"
};

/* ------------------------------------------------------------
   COPY PERSUASIVO POR CATEGORÍA
   Se muestra al filtrar por categoría en la home.
   ------------------------------------------------------------ */
const CATEGORY_COPY = {
  "Beleza": "As marcas de perfume, skincare e cabelo que você já ama — pagando bem menos. Ative a oferta e economize na primeira compra.",
  "Esportes": "Tênis e equipamentos das marcas que os atletas usam de verdade. Treine mais, pague menos.",
  "Casa": "Eletrodomésticos, colchões e conforto para sua casa com preço de liquidação o ano inteiro.",
  "Tecnologia": "Drones, gadgets e eletrônicos com oferta ativa. Tecnologia de ponta sem pagar o preço cheio.",
  "Relógios": "Relógios das maiores marcas do mundo com desconto exclusivo. Estilo no pulso, dinheiro no bolso.",
  "Pets": "Ração, brinquedos e tudo que seu pet merece — com desconto que cabe no orçamento.",
  "Saúde": "Ômega 3, vitaminas e suplementos para cuidar de você todos os dias — pagando menos no Pix.",
  "Viagens": "Passagens, carro, seguro e experiências — sua próxima viagem completa pagando menos em cada etapa.",
  "Brinquedos": "Funko, brinquedos e colecionáveis com oferta ativa. Presenteie (ou se presenteie) pagando menos."
};

/* ------------------------------------------------------------
   TIENDAS
   - id: sin espacios/acentos → define la URL: tudominio.com/natura
   - affiliateUrl: TU link de afiliado (se abre al clic, deja la cookie)
   - subidParam: SubID de la red (Awin "clickref", Rakuten "u1",
     Lomadee "sourceId", Admitad "subid"). Los links Mais/parceiro
     atribuyen por utm_campaign/am → null.
   - logoUrl: (opcional) "img/logo-x.png" reemplaza el bloque de color
   - rating: {score, count} → widget "Avalie a loja"
   ------------------------------------------------------------ */
const STORES = [
  {
    id: "natura", name: "Natura", category: "Beleza", color: "#F25C05", logoText: "natura",
    affiliateUrl: "https://www.minhaloja.natura.com/consultoria/valeskavalentina",
    logoDomain: "natura.com.br",   /* dominio para el logo (el link es minhaloja) */
    subidParam: null, cashback: null, rating: { score: 4.8, count: 93 },
    description: "A maior marca brasileira de cosméticos e perfumaria. Ekos, Kaiak, Tododia e Essencial com promoções semanais — e frete grátis em compras selecionadas. Quem compra pelo link ativa as melhores condições da semana.",
    top: true
  },
  {
    id: "olympikus", name: "Olympikus", category: "Esportes", color: "#00B140", logoText: "OLK",
    affiliateUrl: "https://www.olympikus.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.7, count: 68 },
    description: "O tênis oficial de quem corre no Brasil. Tecnologia de amortecimento premiada e preço justo — os modelos Corre já bateram recordes em maratonas. Ative a oferta e corra na frente.",
    top: false
  },
  {
    id: "vaidepromo", name: "Vai de Promo", category: "Viagens", color: "#00B5E2", logoText: "Vai de Promo",
    affiliateUrl: "https://www.vaidepromo.com.br/passagens-aereas/?utm_medium=afiliado&pcrid=14162&utm_source=site-blog&pcrtt=dsa",
    subidParam: null, cashback: null, rating: { score: 4.7, count: 54 },
    description: "Passagens aéreas nacionais e internacionais pelo menor preço, com busca em dezenas de companhias ao mesmo tempo. Parcele sua viagem e voe pagando menos do que quem comprou do lado.",
    top: true
  },
  {
    id: "segurospromo", name: "Seguros Promo", category: "Viagens", color: "#12B76A", logoText: "Seguros Promo",
    affiliateUrl: "https://www.segurospromo.com.br/?utm_medium=afiliado&pcrid=14162&utm_source=site-blog",
    subidParam: null, cashback: null, rating: { score: 4.8, count: 71 },
    description: "O comparador de seguro viagem nº 1 do Brasil: cote as principais seguradoras em segundos e viaje protegido para Europa, EUA ou qualquer destino — pagando bem menos que no balcão.",
    top: true
  },
  {
    id: "rentcars", name: "Rentcars", category: "Viagens", color: "#5F2EEA", logoText: "rentcars",
    affiliateUrl: "https://www.rentcars.com/pt-br/?requestorid=10589&utm_source=gabglobalmkt.com.br&utm_medium=afiliado-link",
    subidParam: null, cashback: null, rating: { score: 4.7, count: 63 },
    description: "Aluguel de carros no Brasil e no mundo: compare as maiores locadoras, pague em reais sem IOF e parcele. O jeito inteligente de garantir seu carro na viagem.",
    top: false
  },
  {
    id: "travelbds", name: "Travel BDS", category: "Viagens", color: "#F2740D", logoText: "Travel BDS",
    affiliateUrl: "https://www.parceirospromo.com.br/partners/affiliate/travel-bds?page=https://travelbds.com&utm_medium=afiliado&pcrid=14162&utm_source=site-blog",
    subidParam: null, cashback: null, rating: { score: 4.6, count: 28 },
    description: "Experiências, passeios e serviços de viagem selecionados para transformar sua próxima trip — reserve com antecedência e economize no destino.",
    top: false
  },
  {
    id: "electrolux", name: "Electrolux", category: "Casa", color: "#041E42", logoText: "Electrolux",
    affiliateUrl: "https://loja.electrolux.com.br/?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.6, count: 74 },
    description: "Loja oficial Electrolux: geladeiras, lavadoras, ar-condicionado e eletroportáteis direto da fábrica, com garantia oficial e ofertas que o varejo não tem.",
    top: true
  },
  {
    id: "dji", name: "DJI", category: "Tecnologia", color: "#111111", logoText: "DJI",
    affiliateUrl: "https://www.lojadji.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.9, count: 41 },
    description: "Drones, câmeras e estabilizadores da líder mundial. Loja oficial DJI Brasil com garantia local e parcelamento — o jeito seguro de comprar seu Mavic, Mini ou Osmo.",
    top: false
  },
  {
    id: "cobasi", name: "Cobasi", category: "Pets", color: "#00A859", logoText: "cobasi",
    affiliateUrl: "https://minhaloja.cobasi.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    logoDomain: "cobasi.com.br",
    subidParam: null, cashback: null, rating: { score: 4.7, count: 85 },
    description: "Tudo para seu pet em um lugar só: ração, areia, brinquedos e farmácia veterinária. Entrega rápida e os melhores preços em marcas premium.",
    top: false
  },
  {
    id: "underarmour", name: "Under Armour", category: "Esportes", color: "#1D1D1D", logoText: "UA",
    affiliateUrl: "https://www.underarmour.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.6, count: 52 },
    description: "A marca dos atletas de alta performance. Camisetas, tênis e acessórios com tecnologia que acompanha treino pesado — no outlet oficial tem peça com metade do preço.",
    top: false
  },
  {
    id: "payot", name: "Payot", category: "Beleza", color: "#B58A3F", logoText: "PAYOT",
    affiliateUrl: "https://www.lojapayot.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.6, count: 38 },
    description: "Dermocosméticos e maquiagem de quem entende de pele há décadas. Qualidade de clínica com preço de farmácia — e ofertas exclusivas pelo link.",
    top: false
  },
  {
    id: "salonline", name: "Salon Line", category: "Beleza", color: "#E91E8C", logoText: "Salon Line",
    affiliateUrl: "https://www.salonline.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.8, count: 112 },
    description: "A marca nº 1 de quem ama cabelo crespo, cacheado e ondulado. Cronograma capilar completo sem pesar no bolso — kits em oferta toda semana.",
    top: false
  },
  {
    id: "toptherm", name: "TopTherm", category: "Saúde", color: "#0072CE", logoText: "toptherm",
    affiliateUrl: "https://www.toptherm.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.6, count: 27 },
    description: "Referência em Ômega 3 Norwegian, magnésio ultra concentrado, probióticos e multivitamínicos. Suplementos de alta qualidade para sua longevidade — com desconto no Pix e campanhas compre e ganhe.",
    top: false
  },
  {
    id: "amakhaparis", name: "Amakha Paris", category: "Beleza", color: "#C9A227", logoText: "AMAKHA",
    affiliateUrl: "https://www.amakhaparis.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.5, count: 33 },
    description: "Perfumes de bolso inspirados nas fragrâncias mais desejadas do mundo — por uma fração do preço. Perfeitos para levar na bolsa e renovar ao longo do dia.",
    top: false
  },
  {
    id: "candide", name: "Candide", category: "Brinquedos", color: "#FFC20E", logoText: "candide",
    affiliateUrl: "https://www.candide.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.6, count: 29 },
    description: "Os brinquedos que marcam infância: licenciados oficiais, lançamentos e clássicos com preço direto da distribuidora. Presente certo sem estourar o orçamento.",
    top: false
  },
  {
    id: "funko", name: "Funko", category: "Brinquedos", color: "#1A1A1A", logoText: "funko",
    affiliateUrl: "https://www.funko.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.8, count: 57 },
    description: "Loja oficial Funko Brasil: Pop! originais dos seus filmes, séries, animes e games favoritos. Colecionável original, sem risco de réplica — e com oferta ativa.",
    top: false
  },
  {
    id: "thermos", name: "Thermos", category: "Casa", color: "#B01E24", logoText: "THERMOS",
    affiliateUrl: "https://www.thermosbrasil.com.br?parceiro=11042&am=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.7, count: 45 },
    description: "A garrafa térmica original, inventora da categoria há mais de 100 anos. Café quente por 12 horas, água gelada por 24 — compre uma vez, use a vida toda.",
    top: false
  },
  {
    id: "mizuno", name: "Mizuno", category: "Esportes", color: "#001489", logoText: "MIZUNO",
    affiliateUrl: "https://www.mizuno.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.7, count: 63 },
    description: "Engenharia japonesa nos pés: os tênis de corrida mais duráveis do mercado. Wave Prophecy e Creation no outlet oficial com descontos que raramente aparecem.",
    top: false
  },
  {
    id: "seculus", name: "Seculus", category: "Relógios", color: "#00205B", logoText: "SECULUS",
    affiliateUrl: "https://www.seculus.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.5, count: 24 },
    description: "Relógios com design brasileiro e garantia de fábrica. Modelos clássicos e esportivos que valorizam qualquer visual — direto da loja oficial.",
    top: false
  },
  {
    id: "fossil", name: "Fossil", category: "Relógios", color: "#5C4033", logoText: "FOSSIL",
    affiliateUrl: "https://www.fossil.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.7, count: 48 },
    description: "O relógio americano que virou clássico. Smartwatches, couro legítimo e design atemporal — na loja oficial tem oferta que a vitrine do shopping não mostra.",
    top: false
  },
  {
    id: "cicatribem", name: "Cicatribem", category: "Beleza", color: "#7BC142", logoText: "cicatribem",
    affiliateUrl: "https://cicatribem.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.6, count: 31 },
    description: "O dermocosmético brasileiro queridinho para cicatrizes, manchas e recuperação da pele. Resultados reais, fórmula segura e oferta ativa pelo link.",
    top: false
  },
  {
    id: "foreverliss", name: "Forever Liss", category: "Beleza", color: "#6A1B9A", logoText: "Forever Liss",
    affiliateUrl: "https://www.foreverliss.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.7, count: 96 },
    description: "Tratamento capilar profissional para fazer em casa: máscaras, progressivas e kits completos com preço de fábrica. Cabelo de salão sem preço de salão.",
    top: false
  },
  {
    id: "probel", name: "Probel", category: "Casa", color: "#16325C", logoText: "PROBEL",
    affiliateUrl: "https://www.probel.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.6, count: 36 },
    description: "Colchões e camas box de quem fabrica sono bom há mais de 60 anos. Compre direto da fábrica, sem intermediário — seu sono agradece e seu bolso também.",
    top: false
  },
  {
    id: "gamaitaly", name: "Gama Italy", category: "Beleza", color: "#C90016", logoText: "GA.MA",
    affiliateUrl: "https://www.gamaitaly.com.br/?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.6, count: 44 },
    description: "Secadores, chapinhas e modeladores profissionais usados em salão. Tecnologia italiana que protege o fio — com ofertas de outlet na loja oficial.",
    top: false
  },
  {
    id: "technos", name: "Technos", category: "Relógios", color: "#0033A0", logoText: "TECHNOS",
    affiliateUrl: "https://www.technos.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.7, count: 58 },
    description: "A marca de relógios mais vendida do Brasil. Do executivo ao esportivo, com resistência à água e garantia oficial — ofertas exclusivas ativando pelo link.",
    top: false
  },
  {
    id: "eurorelogios", name: "Euro Relógios", category: "Relógios", color: "#8E44AD", logoText: "EURO",
    affiliateUrl: "https://www.eurorelogios.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.6, count: 26 },
    description: "Relógios femininos com design de joia. Dourados, rosé e prata para elevar qualquer look — com preço de oferta que parece erro (mas não é).",
    top: false
  },
  {
    id: "rigolim", name: "Rigolim", category: "Casa", color: "#1F6FB2", logoText: "RIGOLIM",
    affiliateUrl: "https://www.rigolim.com.br?parceiro=9016&am=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.5, count: 22 },
    description: "Climatização e conforto para sua casa: ar-condicionado das melhores marcas com instalação e preço direto do distribuidor.",
    top: false
  },
  {
    id: "nacasachinatem", name: "Na Casa China Tem", category: "Casa", color: "#E02020", logoText: "NCCT",
    affiliateUrl: "https://www.nacasachinatem.com.br?parceiro=9306&am=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.5, count: 30 },
    description: "Os achadinhos virais que todo mundo procura: utilidades, organização e gadgets para casa com preço de importado — sem esperar 60 dias pelo frete.",
    top: false
  }
];

/* ------------------------------------------------------------
   CUPONES / OFERTAS
   - oid: ID único (no repetir) → URL /desconto/cupom-x?oid=N&position=N
   - code: código real. null = oferta sin código ("Ativar oferta")
   - exclusive: true → badge EXCLUSIVO (códigos que te den las tiendas)
   - expires: "YYYY-MM-DD" o null. Vencidos se ocultan solos.
   - image: (opcional) "img/foto.jpg" arriba de la card
   Cuando tengas cupones reales de cada tienda, agrégalos aquí.
   ------------------------------------------------------------ */
const COUPONS = [
  /* --- Natura (cada oferta abre su sección con tu atribución via url) --- */
  { oid: 1001, storeId: "natura", value: "Relâmpago", label: "POR TEMPO LIMITADO", title: "Corra: promoções relâmpago de hoje na loja oficial",
    url: "https://www.minhaloja.natura.com/c/relampago?consultoria=valeskavalentina&marca=natura",
    code: null, rules: "Ofertas relâmpago por tempo limitado, enquanto durarem os estoques.", expires: null, top: true, exclusive: false },
  { oid: 1002, storeId: "natura", value: "Exclusivas", label: "PROMOÇÃO DA CONSULTORA", title: "Ofertas exclusivas do espaço da consultora",
    url: "https://www.minhaloja.natura.com/c/promocao-exclusiva?consultoria=valeskavalentina&marca=natura",
    code: null, rules: "Promoções exclusivas disponíveis apenas no espaço digital da consultora.", expires: null, top: false, exclusive: true },
  { oid: 1003, storeId: "natura", value: "1ª compra", label: "CONDIÇÃO ESPECIAL", title: "Especial primeira compra: comece economizando",
    url: "https://www.minhaloja.natura.com/c/especial-primeira-compra?consultoria=valeskavalentina&marca=natura",
    code: null, rules: "Condições especiais para a primeira compra no espaço da consultora.", expires: null, top: false, exclusive: false },
  { oid: 1004, storeId: "natura", value: "Presentes", label: "DIA DOS PAIS", title: "Kits e presentes para o Dia dos Pais com desconto",
    url: "https://www.minhaloja.natura.com/c/presentes-de-dia-dos-pais?consultoria=valeskavalentina&marca=natura",
    code: null, rules: "Seleção de presentes para o Dia dos Pais, enquanto durarem os estoques.", expires: "2026-08-09", top: false, exclusive: false },
  { oid: 1005, storeId: "natura", value: "Ofertas", label: "TODAS AS PROMOÇÕES", title: "Central de promoções da loja oficial Natura",
    url: "https://www.minhaloja.natura.com/c/promocoes?consultoria=valeskavalentina&marca=natura",
    code: null, rules: "Todas as promoções vigentes da semana na loja oficial.", expires: null, top: false, exclusive: false },
  { oid: 1006, storeId: "natura", value: "15%", label: "OFF COM CUPOM", title: "Seleção de autocuidado com cupom + frete grátis",
    code: "Happy15", rules: "Válido em seleção de produtos. Teste o cupom no carrinho antes de finalizar. Não cumulativo com outras promoções.", expires: null, top: false, exclusive: false },
  { oid: 1007, storeId: "natura", value: "15%", label: "ESQUENTA 7.7", title: "Campanha 7.7: desconto em quase todo o site",
    url: "https://www.minhaloja.natura.com/c/promocoes?consultoria=valeskavalentina&marca=natura",
    code: null, rules: "Campanha Esquenta 7.7 por tempo limitado. Exceto linhas Biome, Bothânica, Alta Perfumaria e sabonetes em barra promocionados.", expires: "2026-07-08", top: false, exclusive: false },
  /* --- Natura: brindes com cupom --- */
  { oid: 1008, storeId: "natura", value: "Brinde", label: "ÓLEO EKOS TUKUMÃ", title: "Ganhe o óleo em compras acima de R$266,90",
    code: "AFITUKUMA", rules: "Brinde adicionado ao carrinho com o cupom em compras acima de R$266,90, enquanto durarem os estoques. Teste no carrinho.", expires: null, top: false, exclusive: false },
  { oid: 1009, storeId: "natura", value: "Brinde", label: "TODODIA NUVEM", title: "Ganhe o hidratante em compras acima de R$229,90",
    code: "AFINUVEM", rules: "Brinde adicionado ao carrinho com o cupom em compras acima de R$229,90, enquanto durarem os estoques.", expires: null, top: false, exclusive: false },
  { oid: 1010, storeId: "natura", value: "Brinde", label: "EKOS PÉS CASTANHA", title: "Ganhe o creme para pés usando o cupom",
    code: "AFICAS", rules: "Brinde adicionado ao carrinho com o cupom, conforme condições da campanha e enquanto durarem os estoques.", expires: null, top: false, exclusive: false },

  /* --- Ofertas activables (sin código) — copy persuasivo por tienda.
     Ajusta los % a las promos reales de cada tienda cuando quieras. --- */
  { oid: 2001, storeId: "olympikus", value: "Até 20%", label: "OFF LIQUIDA INVERNO", title: "Liquida inverno + ofertas imperdíveis do fim de semana",
    code: null, rules: "Desconto em produtos selecionados da Liquida Inverno, enquanto durarem os estoques.", expires: null, top: true, exclusive: false },
  { oid: 2027, storeId: "olympikus", value: "Ofertas", label: "A PARTIR DE R$69,99", title: "Tênis e roupas em oferta + últimas peças",
    code: null, rules: "Seção de ofertas da loja oficial, atualizada constantemente.", expires: null, top: false, exclusive: false },
  { oid: 2036, storeId: "olympikus", value: "10%", label: "OFF NO CADASTRO", title: "Cadastre-se e garanta 10% OFF na primeira compra",
    code: null, rules: "10% OFF na primeira compra ao se cadastrar com nome e e-mail. Não válido para a linha Família Corre.", expires: null, top: false, exclusive: false },
  { oid: 2002, storeId: "electrolux", value: "Até 53%", label: "OFF EM ASPIRADORES", title: "Aspiradores de pó + cupom extra de até 10% OFF",
    code: null, rules: "Desconto em produtos selecionados na loja oficial, enquanto durarem os estoques. Cupom extra aplicável no carrinho.", expires: null, top: true, exclusive: false },
  { oid: 2024, storeId: "electrolux", value: "Até 47%", label: "OFF EM AIR FRYERS", title: "Air fryers em oferta + cupons de até 15% OFF",
    code: null, rules: "Desconto em produtos selecionados, enquanto durarem os estoques.", expires: null, top: false, exclusive: false },
  { oid: 2025, storeId: "electrolux", value: "Até 33%", label: "OFF EM FOGÕES", title: "Fogões em oferta com parcelamento em até 21x",
    code: null, rules: "Desconto em produtos selecionados, enquanto durarem os estoques.", expires: null, top: false, exclusive: false },
  { oid: 2026, storeId: "electrolux", value: "7%", label: "OFF ESQUENTA 7.7", title: "Campanha Esquenta 7.7: cupom de 7% na loja oficial",
    code: null, rules: "Campanha por tempo limitado na loja oficial Electrolux. O cupom aparece no site ao acessar pelo link.", expires: "2026-07-08", top: false, exclusive: false },
  { oid: 2033, storeId: "electrolux", value: "15%", label: "OFF + 15% NO PIX", title: "Cupom WEEK15: desconto dobrado pagando à vista",
    code: "WEEK15", rules: "Até 15% OFF com o cupom + até 15% adicional no Pix em itens selecionados. Teste no carrinho.", expires: null, top: false, exclusive: false },
  { oid: 2034, storeId: "electrolux", value: "12%", label: "OFF ELETRODOMÉSTICOS", title: "Cupom ELUX12 em eletrodomésticos selecionados",
    code: "ELUX12", rules: "Válido em eletrodomésticos selecionados. Não cumulativo. Teste no carrinho.", expires: null, top: false, exclusive: false },
  { oid: 2035, storeId: "electrolux", value: "R$300", label: "OFF COM CUPOM", title: "Cupom UP300 em eletrodomésticos selecionados",
    code: "UP300", rules: "R$300 de desconto em eletrodomésticos selecionados com a tag do cupom. Teste no carrinho.", expires: null, top: false, exclusive: false },
  { oid: 2003, storeId: "dji", value: "12x", label: "SEM JUROS + FRETE GRÁTIS", title: "Drones com frete grátis para todo o Brasil e garantia de 12 meses",
    code: null, rules: "Parcelamento em até 12x sem juros. Frete grátis para todo o Brasil. Garantia nacional com nota fiscal.", expires: null, top: false, exclusive: false },
  { oid: 2004, storeId: "cobasi", value: "10%", label: "OFF NA 1ª COMPRA", title: "Primeira compra no site ou app Cobasi com cupom",
    code: "DESCONTO10", rules: "Válido para a primeira compra no site ou no aplicativo Cobasi. Um cupom por CPF, não cumulativo com o programa Compra Programada. Consulte regulamento.", expires: null, top: true, exclusive: false },
  { oid: 2031, storeId: "cobasi", value: "5% extra", label: "RETIRE NA LOJA", title: "Compras acima de R$249 retirando na loja + entrega em 1h",
    code: null, rules: "5% OFF adicional retirando na loja em compras acima de R$249. Entrega expressa em até 1h em regiões selecionadas.", expires: null, top: false, exclusive: false },
  { oid: 2037, storeId: "cobasi", value: "8%", label: "OFF EM CATEGORIAS", title: "8% OFF em petiscos, antipulgas, brinquedos e mais",
    code: "PETISCO8", rules: "8% OFF em petiscos com o cupom acima. Mesmo desconto disponível com outros códigos por categoria: ANTIPULGAS8, TAPETE8, BRINQUEDOS8, AREIA8, LIMPEZA8, VASO8 e CLORO8. Teste o código no carrinho conforme a categoria do produto.", expires: null, top: false, exclusive: false },
  { oid: 2005, storeId: "underarmour", value: "Leve 2 Pague 1", label: "SELEÇÃO MAIS POR MENOS", title: "Na seleção oficial: leve 2 peças e pague 1",
    code: null, rules: "Válido para produtos da seleção Mais por Menos na loja oficial, enquanto durarem os estoques.", expires: null, top: true, exclusive: false },
  { oid: 2028, storeId: "underarmour", value: "Até 60%", label: "OFF NO INVERNO", title: "Coleção de inverno no outlet + 10% extra no Pix",
    code: null, rules: "Desconto em produtos selecionados da coleção de inverno no outlet oficial. 10% adicional pagando via Pix à vista (outlet).", expires: null, top: false, exclusive: false },
  { oid: 2006, storeId: "payot", value: "Frete grátis", label: "ACIMA DE R$100", title: "Dermocosméticos com frete grátis + até 6x sem juros",
    code: null, rules: "Frete grátis em compras acima de R$100. Parcelamento sem juros em produtos selecionados.", expires: null, top: false, exclusive: false },
  { oid: 2007, storeId: "salonline", value: "Kits", label: "EM PROMOÇÃO", title: "Cronograma capilar completo sem pesar no bolso",
    code: null, rules: "Ofertas vigentes aplicadas ao acessar pelo link. Frete grátis em compras acima de R$99,90.", expires: null, top: false, exclusive: false },
  { oid: 2047, storeId: "salonline", value: "Até 20%", label: "OFF ACIMA DE R$120", title: "Desconto progressivo de fim de semana em compras selecionadas",
    code: null, rules: "Até 20% OFF em compras acima de R$120 em campanhas de fim de semana. Condições podem variar por período.", expires: null, top: false, exclusive: false },
  { oid: 2008, storeId: "toptherm", value: "12%", label: "OFF NO PIX", title: "Ômega 3, magnésio e suplementos com desconto à vista",
    code: null, rules: "12% de desconto pagando via Pix. Confira também a campanha Compre e Ganhe da loja.", expires: null, top: false, exclusive: false },
  { oid: 2009, storeId: "amakhaparis", value: "Até 20%", label: "OFF EM PERFUMES", title: "Perfumes de bolso em oferta + 3% extra no Pix",
    code: null, rules: "Descontos em perfumes selecionados. 3% OFF adicional no Pix. Frete grátis acima de R$149,90. Ganhe ainda 15% de cashback em créditos para a próxima compra.", expires: null, top: false, exclusive: false },
  { oid: 2010, storeId: "candide", value: "Até 50%", label: "OFF NA PÁGINA DE OFERTAS", title: "O presente certo com preço de distribuidora + 10% na 1ª compra",
    code: null, rules: "Até 50% OFF na página oficial de ofertas. Mais 10% OFF na primeira compra ao acessar pelo link.", expires: null, top: false, exclusive: false },
  { oid: 2011, storeId: "funko", value: "10%", label: "OFF NA 1ª COMPRA", title: "Pop! originais + frete grátis acima de R$199,99",
    code: null, rules: "10% de desconto na primeira compra na loja oficial. Frete grátis em compras acima de R$199,99. Mais 5% adicional pagando via boleto ou Pix, e cashback de 15% em créditos.", expires: null, top: false, exclusive: false },
  { oid: 2012, storeId: "thermos", value: "5%", label: "OFF NO PIX", title: "A garrafa original que dura a vida toda, com desconto à vista",
    code: null, rules: "5% de desconto pagando via Pix. Parcelamento disponível no cartão.", expires: null, top: false, exclusive: false },
  { oid: 2038, storeId: "thermos", value: "8%", label: "OFF COM CUPOM", title: "Cupom de boas-vindas + frete grátis acima de R$299",
    code: "BEMVINDO", rules: "8% OFF com o cupom acima. Frete grátis em compras acima de R$299. Parcelamento em até 10x sem juros.", expires: null, top: false, exclusive: false },
  { oid: 2013, storeId: "mizuno", value: "15%", label: "OFF NO APP", title: "Baixe o app Mizuno e use o cupom na primeira compra",
    code: "APP15", rules: "Válido para compras realizadas pelo aplicativo Mizuno. Consulte condições no app.", expires: null, top: true, exclusive: false },
  { oid: 2029, storeId: "mizuno", value: "Até 50%", label: "OFF INVERNO + EXCLUSIVOS", title: "Outlet: inverno e exclusivos + 15% extra de férias",
    code: null, rules: "Descontos do outlet oficial (mais de 490 produtos). Campanha de férias com 15% extra em produtos selecionados, além de 10% OFF adicional no Pix e até 10x sem juros.", expires: null, top: false, exclusive: false },
  { oid: 2030, storeId: "mizuno", value: "Frete grátis", label: "ACIMA DE R$399,99", title: "Para todo o Brasil + troca fácil e grátis",
    code: null, rules: "Frete grátis em compras acima de R$399,99 para todo o Brasil.", expires: null, top: false, exclusive: false },
  { oid: 2014, storeId: "seculus", value: "10%", label: "OFF 1ª COMPRA", title: "Use o voucher na primeira compra + 10% extra no Pix",
    code: "PRIMEIRACOMPRA", rules: "Voucher válido para a primeira compra no site. 10% adicional pagando via Pix. Frete grátis acima de R$499.", expires: null, top: false, exclusive: false },
  { oid: 2039, storeId: "seculus", value: "Até 36%", label: "OFF NA SEÇÃO SALE", title: "Sale oficial: até 36% OFF em modelos selecionados",
    url: "https://www.seculus.com.br/sale",
    code: null, rules: "Descontos de até 36% OFF em relógios selecionados na seção Sale, enquanto durarem os estoques.", expires: null, top: false, exclusive: false },
  { oid: 2015, storeId: "fossil", value: "Ofertas", label: "LOJA OFICIAL", title: "O preço que a vitrine do shopping não mostra",
    code: null, rules: "Ofertas vigentes da loja oficial ao acessar pelo link. Seção Sale com centenas de modelos e preço especial no Pix.", expires: null, top: false, exclusive: false },
  { oid: 2040, storeId: "fossil", value: "15%", label: "OFF 1ª COMPRA", title: "Cupom de boas-vindas + frete grátis acima de R$1.399",
    code: "BEMVINDO15", rules: "15% OFF na primeira compra no site oficial. Frete grátis em compras acima de R$1.399. Também disponível ao assinar a newsletter.", expires: null, top: false, exclusive: false },
  { oid: 2016, storeId: "cicatribem", value: "Até 20%", label: "OFF EM KITS", title: "Kits de tratamento em oferta + 3% extra no Pix em até 12x",
    code: null, rules: "Descontos em kits selecionados. 3% OFF adicional pagando via Pix. Parcele em até 12x.", expires: null, top: false, exclusive: false },
  { oid: 2017, storeId: "foreverliss", value: "Kits", label: "PREÇO DE FÁBRICA", title: "Cabelo de salão em casa — kits completos em oferta",
    code: null, rules: "Ofertas vigentes aplicadas ao acessar pelo link.", expires: null, top: false, exclusive: false },
  { oid: 2048, storeId: "foreverliss", value: "Desconto", label: "PROGRESSIVO NO CARRINHO", title: "Cupom progressivo: quanto mais compra, maior o desconto",
    code: "PROGRESSIVO", rules: "Desconto progressivo conforme o valor do carrinho (referência: R$50 OFF em compras a partir de R$199). Teste o cupom no carrinho antes de finalizar.", expires: null, top: false, exclusive: false },
  { oid: 2018, storeId: "probel", value: "Até 58%", label: "OFF + 15% NO PIX", title: "Colchões e conjuntos box direto da fábrica em até 15x sem juros",
    code: null, rules: "Descontos em produtos selecionados nos outlets oficiais (SP, Goiânia e Nordeste). 15% adicional à vista no Pix. Parcelamento em até 15x sem juros no cartão.", expires: null, top: false, exclusive: false },
  { oid: 2041, storeId: "probel", value: "10%", label: "OFF COM CUPOM", title: "Cupom de boas-vindas no outlet oficial",
    code: "BEMVINDO10PROBEL", rules: "10% OFF com o cupom acima no outlet oficial Probel. Teste no carrinho, válido enquanto durar a promoção.", expires: null, top: false, exclusive: false },
  { oid: 2019, storeId: "gamaitaly", value: "10%", label: "OFF 1ª COMPRA", title: "Cupom de boas-vindas + 10% extra no Pix",
    code: "BEMVINDO", rules: "Válido para a primeira compra no site oficial. 10% adicional no Pix. Frete grátis Sul e Sudeste acima de R$199.", expires: null, top: false, exclusive: false },
  { oid: 2032, storeId: "gamaitaly", value: "Até 54%", label: "OFF EM KITS", title: "Kits secador + prancha com mais da metade OFF",
    code: null, rules: "Descontos em kits e produtos selecionados, enquanto durarem os estoques.", expires: null, top: false, exclusive: false },
  { oid: 2042, storeId: "gamaitaly", value: "20%", label: "JULHO DA TRANSFORMAÇÃO", title: "20% OFF em compras a partir de R$199 com cupom",
    code: "MUDA20", rules: "Campanha Julho da Transformação: 20% OFF em compras a partir de R$199. Não cumulativo com o cupom BEMVINDO.", expires: null, top: false, exclusive: false },
  { oid: 2043, storeId: "gamaitaly", value: "25%", label: "JULHO DA TRANSFORMAÇÃO", title: "25% OFF em compras a partir de R$299,90 com cupom",
    code: "MUDA25", rules: "Campanha Julho da Transformação: 25% OFF em compras a partir de R$299,90. Não cumulativo com o cupom BEMVINDO.", expires: null, top: false, exclusive: false },
  { oid: 2020, storeId: "technos", value: "10x", label: "SEM JUROS", title: "Modelos exclusivos online da marca nº 1 do Brasil",
    code: null, rules: "Parcelamento em até 10x sem juros. Modelos com selo Exclusivo Online só no site oficial.", expires: null, top: false, exclusive: false },
  { oid: 2044, storeId: "technos", value: "10%", label: "OFF 1ª COMPRA", title: "Cupom de boas-vindas + até 20% de cashback",
    code: "PRESENTE10", rules: "10% OFF na primeira compra no site oficial. Programa de cashback de até 20% sobre o valor da compra (crédito liberado entre 3 e 45 dias).", expires: null, top: false, exclusive: false },
  { oid: 2021, storeId: "eurorelogios", value: "10%", label: "OFF 1ª COMPRA", title: "Primeira compra com desconto + até 20% de cashback no site",
    code: "PRESENTE10", rules: "10% OFF na primeira compra com o cupom acima. 5% adicional no Pix. Frete grátis acima de R$499. Programa de cashback de até 20% da loja.", expires: null, top: false, exclusive: false },
  { oid: 2045, storeId: "eurorelogios", value: "Até 55%", label: "OFF POR MODELO", title: "Dezenas de modelos com desconto na seção de promoções",
    url: "https://www.eurorelogios.com.br/promocoes",
    code: null, rules: "Descontos de 20% a 55% OFF em relógios selecionados, com desconto Pix adicional por produto.", expires: null, top: false, exclusive: false },
  { oid: 2022, storeId: "rigolim", value: "Ofertas", label: "CLIMATIZAÇÃO", title: "Ar-condicionado com preço de distribuidor — ative e compare",
    code: null, rules: "Ofertas vigentes aplicadas ao acessar pelo link.", expires: null, top: false, exclusive: false },
  { oid: 2046, storeId: "rigolim", value: "5%", label: "OFF 1ª COMPRA", title: "Cupom de boas-vindas + 5% no Pix e cashback",
    code: "PRIMEIRACOMPRA", rules: "5% OFF na primeira compra com o cupom acima. Mais 5% de desconto no Pix, 5% de cashback e parcelamento em até 3x sem juros.", expires: null, top: false, exclusive: false },
  { oid: 2023, storeId: "nacasachinatem", value: "Até 60%", label: "OFF EM ACHADINHOS", title: "Os virais de organização com desconto + cupom de 1ª compra",
    code: "PRIMEIRACOMPRA", rules: "Cupom válido para a primeira compra. Descontos de até 60% em produtos selecionados.", expires: null, top: false, exclusive: false },

  /* --- Viagens --- */
  { oid: 3001, storeId: "vaidepromo", value: "Passagens", label: "PELO MENOR PREÇO", title: "Compare dezenas de companhias e parcele sua viagem",
    code: null, rules: "Busca em tempo real nas principais companhias aéreas. Preços e condições conforme disponibilidade.", expires: null, top: true, exclusive: false },
  { oid: 3002, storeId: "segurospromo", value: "Seguro", label: "VIAGEM PROTEGIDA", title: "Compare seguradoras em segundos e pague menos",
    code: null, rules: "Cotação gratuita nas principais seguradoras. Desconto adicional em pagamentos à vista, conforme condições do site.", expires: null, top: true, exclusive: false },
  { oid: 3003, storeId: "rentcars", value: "Sem IOF", label: "PAGUE EM REAIS", title: "Alugue seu carro comparando as maiores locadoras",
    code: null, rules: "Pagamento em reais sem IOF e parcelamento disponível, conforme condições da reserva.", expires: null, top: false, exclusive: false },
  { oid: 3004, storeId: "travelbds", value: "Ofertas", label: "EXPERIÊNCIAS DE VIAGEM", title: "Passeios e serviços selecionados para sua próxima trip",
    code: null, rules: "Ofertas vigentes conforme destino e disponibilidade.", expires: null, top: false, exclusive: false }
];

/* ------------------------------------------------------------
   BANNERS de la home (carrusel horizontal)
   image: 1120x400px (carpeta img/). Sin image → degradado azul.
   ------------------------------------------------------------ */
const BANNERS = [
  {
    image: "",                 // ej: "img/banner-natura.jpg"
    title: "Cupom Natura com até 20% OFF",
    subtitle: "Perfumaria, presentes e muito mais",
    storeId: "natura"
  },
  {
    image: "",                 // ej: "img/banner-esportes.jpg"
    title: "Tênis de marca pagando menos",
    subtitle: "Olympikus, Mizuno e Under Armour com oferta ativa",
    storeId: "olympikus"
  },
  {
    image: "",                 // ej: "img/banner-electrolux.jpg"
    title: "Sua casa completa direto da fábrica",
    subtitle: "Electrolux com condições exclusivas",
    storeId: "electrolux"
  },
  {
    image: "",                 // ej: "img/banner-viagens.jpg"
    title: "Sua próxima viagem pagando menos",
    subtitle: "Passagens, seguro e carro — tudo em um lugar",
    storeId: "vaidepromo"
  }
];

/* ------------------------------------------------------------
   BLOG — cada post gana su URL: tudominio.com/blog/slug
   ------------------------------------------------------------ */
const BLOG = [
  {
    slug: "cupom-natura-como-usar",
    date: "2026-07-05",
    cover: "",                 // ej: "img/blog-natura.jpg"
    title: "Cupom Natura: como usar e economizar até 20% em 2026",
    excerpt: "Passo a passo para aplicar cupom de desconto na Natura, quais produtos entram na promoção e como aproveitar o frete grátis.",
    ctaStoreId: "natura",
    content: `
      <p>A Natura é a maior marca de cosméticos do Brasil — e quem compra pelo site oficial pode economizar de verdade usando cupom de desconto. Neste guia, mostramos como aplicar o cupom, o que fazer quando o código não funciona e como combinar desconto com frete grátis.</p>
      <h2>Como usar o cupom Natura</h2>
      <p>1. Escolha seu cupom aqui no site e clique em "Ver cupom". O código aparece na tela e a loja abre em outra aba.</p>
      <p>2. Adicione os produtos ao carrinho na Natura normalmente.</p>
      <p>3. No carrinho, procure o campo "Cupom de desconto", cole o código e clique em aplicar. O desconto aparece na hora, antes de finalizar a compra.</p>
      <h2>O cupom não funcionou?</h2>
      <p>Verifique se a promoção ainda está válida e se os produtos do seu carrinho entram na regra (alguns cupons valem só para perfumaria ou kits selecionados). Cupons não são cumulativos com outras promoções do site.</p>
      <h2>Dica: frete grátis</h2>
      <p>A Natura costuma liberar frete grátis acima de um valor mínimo de compra. Vale juntar seus produtos favoritos num pedido só e aplicar o cupom em cima — economia dupla.</p>`
  }
];
