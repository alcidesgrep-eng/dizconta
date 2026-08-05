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
const HOME_FEATURED = [1011, 2002, 2001];

/* ------------------------------------------------------------
   CAMPANHAS SAZONAIS — banners de época (Dia dos Pais, Black
   Friday, Natal, etc). Marca os cupons relevantes com
   seasonal:"tag" (ver COUPONS abaixo) e cadastra a campanha aqui.
   A seção só aparece na home enquanto houver pelo menos 1 cupom
   dessa tag ainda não vencido.
   ------------------------------------------------------------ */
const SEASONAL_CAMPAIGNS = [
  { tag: "dia-dos-pais", emoji: "🎁", label: "Ofertas Dia dos Pais", sub: "Presentes com desconto especial — só até acabar o estoque.",
    heroEyebrow: "Oferta especial" }
];

/* ------------------------------------------------------------
   DESTAQUES DE PRODUTOS POR LOJA (opcional) — grid de "presentes"
   com foto + % de desconto (sem preço, pra não desatualizar) + CTA,
   e uma tira de fotos estilo "favoritos". Preencha "image" quando
   tiver a foto — até lá aparece um espaço reservado.
   ------------------------------------------------------------ */
const STORE_PRODUCT_HIGHLIGHTS = {
  natura: {
    title: "Presentes Dia dos Pais",
    sub: "Escolha o presente ideal com desconto especial — estoque limitado.",
    ctaText: "Conseguir oferta →",
    items: [
      { image: "img/produto-natura-completo.jpg", discount: "42%", name: "Presente Natura Essencial Completo (3 produtos)", url: "https://www.minhaloja.natura.com/p/presente-natura-essencial-completo-3-produtos/NATBRA-245353?position=1&listTitle=tab+showcase+-+escolha+seu+presente+por+faixa+de+pre%C3%A7o&marca=natura&consultoria=alcidesgabriel" },
      { image: "img/produto-natura-sagaz.jpg", discount: "37%", name: "Presente Natura Homem Sagaz", url: "https://www.minhaloja.natura.com/p/presente-natura-homem-sagaz-3-produtos/NATBRA-245371?position=2&listTitle=tab+showcase+-+escolha+seu+presente+por+faixa+de+pre%C3%A7o&consultoria=alcidesgabriel&marca=natura" },
      { image: "img/produto-natura-coragio.jpg", discount: "32%", name: "Presente Natura Homem Cor.agio (2 produtos)", url: "https://www.minhaloja.natura.com/p/presente-natura-homem-coragio-2-produtos/NATBRA-245382?position=3&listTitle=tab+showcase+-+escolha+seu+presente+por+faixa+de+pre%C3%A7o&consultoria=alcidesgabriel&marca=natura" },
      { image: "img/produto-natura-exclusivo.jpg", discount: "43%", name: "Presente Natura Essencial Exclusivo (3 produtos)", url: "https://www.minhaloja.natura.com/p/presente-natura-essencial-exclusivo-3-produtos/NATBRA-245358?position=4&listTitle=tab+showcase+-+escolha+seu+presente+por+faixa+de+pre%C3%A7o&consultoria=alcidesgabriel&marca=natura" },
      { image: "img/produto-natura-palo-santo.jpg", discount: "", name: "Presente Natura Essencial Palo Santo (2 produtos)", url: "https://www.minhaloja.natura.com/p/presente-natura-essencial-palo-santo-2-produtos/NATBRA-245362?position=5&listTitle=tab+showcase+-+escolha+seu+presente+por+faixa+de+pre%C3%A7o&consultoria=alcidesgabriel&marca=natura" }
    ],
    photoStrip: []
  }
};

/* ------------------------------------------------------------
   BANNER INFERIOR POR LOJA (opcional) — imagem diferente da do
   topo, usada só no CTA final da página da loja. "bg" é a cor de
   fundo atrás da imagem (object-fit:contain) — use uma cor extraída
   da própria imagem para não ficar destoando nas laterais.
   ------------------------------------------------------------ */
const STORE_CTA_IMG = {
  natura: { image: "img/banner-inferior-natura.jpg", bg: "#e6663f" }
};

/* ------------------------------------------------------------
   FAQ POR LOJA (opcional) — perguntas frequentes reais, ajudam
   no SEO (rich snippet) e nas buscas. Preencha só para lojas com
   volume suficiente de tráfego/dúvidas pra justificar.
   ------------------------------------------------------------ */
const STORE_FAQ = {
  natura: [
    { q: "O link do Dizconta leva para o site oficial da Natura?", a: "Sim. Você é direcionado para minhaloja.natura.com, a loja oficial da Natura vinculada à nossa consultoria — mesmos preços, formas de pagamento e garantias do site principal." },
    { q: "Preciso pagar algo para usar o cupom?", a: "Não. O desconto é aplicado direto no carrinho da Natura, sem nenhum custo adicional pelo Dizconta." },
    { q: "O cupom não aplicou automaticamente, o que eu faço?", a: "Alguns cupons, como o MLDATADUPLA da campanha 8.8, precisam ser digitados manualmente no campo de cupom do carrinho antes de finalizar a compra. Sempre teste o código antes de pagar." },
    { q: "Posso trocar ou devolver o produto?", a: "Sim, seguindo a política de trocas da própria Natura — incluindo o direito de arrependimento de 7 dias previsto no Código de Defesa do Consumidor para compras online." },
    { q: "Com que frequência os cupons são atualizados?", a: "Verificamos e atualizamos as ofertas da Natura semanalmente. A validade de cada cupom aparece na própria oferta." }
  ]
};

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
  },
  {
    slug: "seguro-auto",
    title: "Seguro Auto",
    wide: true,
    hideTitle: true,
    content: `
      <div class="q-fullbleed">
        <img class="q-fb-bg" src="img/loovi-hero.jpg" alt="Seguro auto Loovi">
        <div class="q-scrim"></div>
        <div class="q-fb-content">
          <div class="crumb" style="color:rgba(255,255,255,.75)"><a onclick="goHome()" style="color:rgba(255,255,255,.9)">Início</a> · Seguro Auto</div>
          <div class="store-head">
            <div class="big-logo q-logo-cover" style="background:#4b7cff"><img src="img/logos/loovi.png" alt="Loovi"></div>
            <div>
              <h1 style="color:#fff">Cupom de desconto Loovi</h1>
              <div class="sub" style="color:rgba(255,255,255,.85)">O seguro mais barato do Brasil — todos os cupons verificados hoje.</div>
            </div>
          </div>
        </div>
      </div>

      <div style="padding-top:28px">
        <div class="store-layout" style="margin-top:26px;padding:0">
          <div>
            <h2 style="font-size:21px;font-weight:800;color:var(--ink);letter-spacing:-.4px">Descontos de ativação</h2>
            <p class="q-cover-sub">Campanhas ativas — vagas limitadas por código.</p>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px">
              <div class="card" style="cursor:pointer" onclick="location.href='/pagina/seguro-auto-orcamento?cupom=PANICO50'">
                <span class="badge exclusive" style="position:static;display:inline-block;width:fit-content">50% OFF</span>
                <div class="title" style="margin-top:12px">Adesão grátis + 50% OFF na primeira mensalidade.</div>
                <div style="margin-top:14px;display:inline-flex;align-items:center;gap:6px;background:var(--ink);color:#fff;padding:8px 14px;border-radius:999px;font-weight:700;font-size:13px;width:fit-content">PANICO50</div>
                <a class="btn-coupon" style="margin-top:14px;align-self:flex-start" onclick="event.stopPropagation();location.href='/pagina/seguro-auto-orcamento?cupom=PANICO50'">Aplicar cupom →</a>
                <div style="font-size:11.5px;color:var(--gray-light);margin-top:10px">Validade: 03/08/2026</div>
              </div>
              <div class="card" style="cursor:pointer" onclick="location.href='/pagina/seguro-auto-orcamento?cupom=AGOSTO10X12'">
                <span class="badge exclusive" style="position:static;display:inline-block;width:fit-content">10% OFF</span>
                <div class="title" style="margin-top:12px">10% de desconto em 12 mensalidades.</div>
                <div style="margin-top:14px;display:inline-flex;align-items:center;gap:6px;background:var(--ink);color:#fff;padding:8px 14px;border-radius:999px;font-weight:700;font-size:13px;width:fit-content">AGOSTO10X12</div>
                <a class="btn-coupon" style="margin-top:14px;align-self:flex-start" onclick="event.stopPropagation();location.href='/pagina/seguro-auto-orcamento?cupom=AGOSTO10X12'">Aplicar cupom →</a>
                <div style="font-size:11.5px;color:var(--gray-light);margin-top:10px">Validade: 09/08/2026</div>
              </div>
              <div class="card" style="cursor:pointer" onclick="location.href='/pagina/seguro-auto-orcamento?cupom=AGOSTO45'">
                <span class="badge exclusive" style="position:static;display:inline-block;width:fit-content">45% OFF</span>
                <div class="title" style="margin-top:12px">45% nas duas primeiras mensalidades. Não se aplica à campanha do hexa.</div>
                <div style="margin-top:14px;display:inline-flex;align-items:center;gap:6px;background:var(--ink);color:#fff;padding:8px 14px;border-radius:999px;font-weight:700;font-size:13px;width:fit-content">AGOSTO45</div>
                <a class="btn-coupon" style="margin-top:14px;align-self:flex-start" onclick="event.stopPropagation();location.href='/pagina/seguro-auto-orcamento?cupom=AGOSTO45'">Aplicar cupom →</a>
                <div style="font-size:11.5px;color:var(--gray-light);margin-top:10px">Validade: 09/08/2026</div>
              </div>
            </div>
          </div>
          <aside>
            <div class="side-card">
              <h3>Resumo da parceria</h3>
              <div class="sum-row"><span>Campanhas ativas:</span><b>3</b></div>
              <div class="sum-row"><span>Melhor desconto:</span><b>50%</b></div>
              <div class="sum-row"><span>Coberturas incluídas:</span><b>7</b></div>
              <div class="sum-row"><span>Atendimento:</span><b>WhatsApp</b></div>
            </div>
            <div class="side-card">
              <h3>Perguntas frequentes</h3>
              <p style="font-size:13.5px;color:var(--gray);margin-bottom:10px"><b style="color:var(--ink)">Preciso pagar algo agora?</b><br>Não. Só enviamos seus dados básicos para gerar a cotação — o pagamento só acontece se você aprovar o valor.</p>
              <p style="font-size:13.5px;color:var(--gray);margin-bottom:10px"><b style="color:var(--ink)">Quem garante o seguro?</b><br>A apólice é garantida pela LTI Seguros S.A., participante do Sandbox Regulatório da SUSEP, comercializada através da Loovi.</p>
              <p style="font-size:13.5px;color:var(--gray)"><b style="color:var(--ink)">Quanto tempo demora?</b><br>Normalmente respondemos no mesmo dia — muitas vezes em poucos minutos.</p>
            </div>
          </aside>
        </div>

        <ul class="q-benefits" style="margin-top:32px">
          <li><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#2ED573" stroke-width="2.4"><circle cx="12" cy="12" r="10" fill="#2ED573" stroke="none"/><path d="M8 12.5l2.6 2.5L16 9.5" stroke="#fff"/></svg> Pagamento mês a mês, como uma assinatura — sem multa para cancelar</li>
          <li><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#2ED573" stroke-width="2.4"><circle cx="12" cy="12" r="10" fill="#2ED573" stroke="none"/><path d="M8 12.5l2.6 2.5L16 9.5" stroke="#fff"/></svg> Sem análise de perfil do condutor — o valor não muda por idade, sexo ou onde você mora</li>
          <li><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#2ED573" stroke-width="2.4"><circle cx="12" cy="12" r="10" fill="#2ED573" stroke="none"/><path d="M8 12.5l2.6 2.5L16 9.5" stroke="#fff"/></svg> Aceita carros a partir de 1986, inclusive modificados, de leilão, híbridos e elétricos</li>
          <li><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#2ED573" stroke-width="2.4"><circle cx="12" cy="12" r="10" fill="#2ED573" stroke="none"/><path d="M8 12.5l2.6 2.5L16 9.5" stroke="#fff"/></svg> Cobertura em todo o Brasil, com assistência 24h incluída</li>
        </ul>
        <button class="btn-primary" style="margin-top:24px" onclick="goPage('seguro-auto-orcamento')">Solicitar orçamento agora →</button>
        <p style="margin-top:14px;font-size:12.5px;color:var(--gray)">Resposta em minutos · Seguradora regulada SUSEP · Atendido por Alcides Gabriel, executivo Loovi</p>

        <h2 style="font-size:21px;font-weight:800;color:var(--ink);letter-spacing:-.4px;margin-top:40px">Sobre a Loovi</h2>
        <p style="font-size:14.5px;color:var(--gray);line-height:1.75;margin-top:10px;max-width:720px">A Loovi é uma insurtech brasileira, representante da LTI Seguros S.A. — seguradora participante do Sandbox Regulatório da SUSEP, um ambiente de testes supervisionado pelo órgão regulador para novos modelos de seguro. A proposta é simplificar a contratação do seguro auto: sem análise de perfil do condutor, com pagamento mensal e sem burocracia, atendendo veículos que muitas seguradoras tradicionais recusam (carros antigos, modificados, de leilão, híbridos e elétricos).</p>
      </div>

      <div class="q-cover" style="margin-top:28px">
        <h2>Coberturas</h2>
        <p class="q-cover-sub">Coberturas garantidas pela LTI Seguros S.A., empresa do Grupo Loovi, seguradora participante do Sandbox Regulatório da SUSEP. Valores e condições podem variar por veículo e categoria — confirme os detalhes na sua cotação.</p>
        <details class="q-cover-item">
          <summary><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#2ED573" stroke-width="2.4"><circle cx="12" cy="12" r="10" fill="#2ED573" stroke="none"/><path d="M8 12.5l2.6 2.5L16 9.5" stroke="#fff"/></svg> Assistência 24h</summary>
          <div class="q-cover-body">
            Assistência completa via 0800 em todo o território nacional:
            <ul>
              <li>Reboque</li>
              <li>Hotel para até 5 pessoas</li>
              <li>Chaveiro</li>
              <li>Assistência para pane elétrica e mecânica</li>
              <li>Auxílio na falta de combustível</li>
              <li>Táxi ou transporte alternativo</li>
              <li>Troca de pneus e recarga de bateria</li>
            </ul>
          </div>
        </details>
        <details class="q-cover-item">
          <summary><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#2ED573" stroke-width="2.4"><circle cx="12" cy="12" r="10" fill="#2ED573" stroke="none"/><path d="M8 12.5l2.6 2.5L16 9.5" stroke="#fff"/></svg> Carro Reserva</summary>
          <div class="q-cover-body">Carro reserva por até 7 dias em caso de colisão, incêndio, roubo ou furto.</div>
        </details>
        <details class="q-cover-item">
          <summary><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#2ED573" stroke-width="2.4"><circle cx="12" cy="12" r="10" fill="#2ED573" stroke="none"/><path d="M8 12.5l2.6 2.5L16 9.5" stroke="#fff"/></svg> Colisão</summary>
          <div class="q-cover-body">Pagamento integral ou parcial em caso de colisão e fenômenos da natureza (alagamento, granizo, queda de árvore). Franquia reduzida conforme a categoria do veículo.</div>
        </details>
        <details class="q-cover-item">
          <summary><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#2ED573" stroke-width="2.4"><circle cx="12" cy="12" r="10" fill="#2ED573" stroke="none"/><path d="M8 12.5l2.6 2.5L16 9.5" stroke="#fff"/></svg> Terceiros</summary>
          <div class="q-cover-body">Cobertura de danos materiais e corporais causados a terceiros, com reparo ou indenização conforme apólice.</div>
        </details>
        <details class="q-cover-item">
          <summary><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#2ED573" stroke-width="2.4"><circle cx="12" cy="12" r="10" fill="#2ED573" stroke="none"/><path d="M8 12.5l2.6 2.5L16 9.5" stroke="#fff"/></svg> Vidros Completo</summary>
          <div class="q-cover-body">Troca ou reparo de vidros laterais, vidro traseiro, para-brisa, retrovisores, lanternas e faróis.</div>
        </details>
        <details class="q-cover-item">
          <summary><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#2ED573" stroke-width="2.4"><circle cx="12" cy="12" r="10" fill="#2ED573" stroke="none"/><path d="M8 12.5l2.6 2.5L16 9.5" stroke="#fff"/></svg> Acidentes Pessoais a Passageiros (APP)</summary>
          <div class="q-cover-body">Indenização em caso de morte ou invalidez, com reembolso de despesas hospitalares.</div>
        </details>
        <details class="q-cover-item">
          <summary><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#2ED573" stroke-width="2.4"><circle cx="12" cy="12" r="10" fill="#2ED573" stroke="none"/><path d="M8 12.5l2.6 2.5L16 9.5" stroke="#fff"/></svg> Furto e Roubo</summary>
          <div class="q-cover-body">Cobertura completa contra furto e roubo do veículo.</div>
        </details>
      </div>

      <div class="side-card" style="margin-top:28px;position:relative;overflow:hidden;border:none;color:#fff;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:14px;min-height:280px;background:linear-gradient(100deg,rgba(0,0,0,.72) 0%,rgba(0,0,0,.5) 45%,rgba(0,0,0,.22) 100%),url('img/loovi-cta.jpg');background-size:cover;background-position:center 20%">
        <h3 style="color:#fff;font-size:24px;letter-spacing:-.4px;max-width:420px">Pronto para economizar no seguro do seu carro?</h3>
        <button class="btn-primary" style="font-size:15px;padding:15px 30px" onclick="goPage('seguro-auto-orcamento')">Solicitar orçamento agora →</button>
      </div>`
  },
  {
    slug: "seguro-auto-orcamento",
    title: "Solicitar orçamento · Seguro Auto",
    wide: false,
    hideTitle: true,
    bgImage: "img/loovi-form-bg3.jpg",
    content: `
      <div>
        <img src="img/loovi-top-banner.png" alt="Loovi Seguros" style="height:68px;width:auto;display:block;margin:0 auto 10px">
        <p style="text-align:center;font-weight:700;font-size:15px;color:var(--ink);margin-bottom:26px">Tá seguro, tá na Loovi</p>
        <h1 style="font-size:clamp(24px,4vw,32px);font-weight:800;letter-spacing:-.5px">Solicite seu orçamento</h1>
        <div id="cupomBanner" style="display:none;margin-top:16px;background:var(--accent-bg);border-radius:12px;padding:12px 16px;font-size:13.5px;font-weight:700;color:var(--ink)">Cupom aplicado: <span id="cupomBannerCode"></span></div>
        <div id="looviSuccess" class="cf-success" style="display:none;margin-top:20px">
          <b>Recebemos seus dados ✓</b>
          <p>Abrimos o WhatsApp para você confirmar o envio. Nossa equipe monta sua cotação e retorna por lá.</p>
        </div>
        <form id="looviForm" class="contact-form q-form" style="margin-top:20px" onsubmit="return submitQuoteLead(event, '558681235358', [{name:'nome',label:'Nome',required:true},{name:'email',label:'E-mail',required:true},{name:'telefone',label:'Telefone',required:true},{name:'documento',label:'CPF/CNPJ',required:true},{name:'placa',label:'Placa do veículo',required:true},{name:'cep',label:'CEP',required:true},{name:'cupom',label:'Cupom'}], 'Olá! Quero uma cotação de seguro auto pela Dizconta (parceria Loovi).')">
          <input type="hidden" name="cupom" id="cupomField" value="">
          <label class="form-label">Nome completo
            <input type="text" name="nome" class="form-input" required maxlength="80">
          </label>
          <label class="form-label">E-mail
            <input type="email" name="email" class="form-input" required maxlength="120">
          </label>
          <label class="form-label">Telefone
            <input type="tel" name="telefone" class="form-input" placeholder="(00) 00000-0000" required maxlength="20">
          </label>
          <label class="form-label">CPF/CNPJ
            <input type="text" name="documento" class="form-input" placeholder="000.000.000-00" required maxlength="20">
          </label>
          <label class="form-label">Placa do veículo
            <input type="text" name="placa" class="form-input" placeholder="ABC1D23" required maxlength="10">
          </label>
          <label class="form-label">CEP
            <input type="text" name="cep" class="form-input" placeholder="00000-000" required maxlength="10">
          </label>
          <button type="submit" class="btn-primary q-btn-loovi" style="width:100%">Solicitar cotação no WhatsApp</button>
        </form>
        <p style="font-size:12.5px;color:var(--gray-light);margin-top:16px">Seus dados são usados apenas para gerar sua cotação de seguro auto, conforme nossa <a onclick="goPage('privacidade')" style="color:var(--primary);font-weight:600;cursor:pointer">Política de Privacidade</a>.</p>

        <div style="margin-top:32px;padding-top:28px;border-top:1px solid var(--line)">
          <p style="font-size:15px;color:var(--gray)">Preencha seus dados acima — nossa equipe recebe direto no WhatsApp e te retorna com a cotação personalizada para o seu carro.</p>
          <div class="q-steps" style="margin:20px 0 0">
            <div class="q-step"><div class="q-num">1</div><h4>Preencha seus dados</h4><p>Nome, contato e informações básicas do seu veículo — leva menos de 1 minuto.</p></div>
            <div class="q-step"><div class="q-num">2</div><h4>Enviamos pro WhatsApp</h4><p>Seus dados chegam direto pra nossa equipe, sem cadastro nem senha.</p></div>
            <div class="q-step"><div class="q-num">3</div><h4>Cotação personalizada</h4><p>Você recebe o valor certinho pro seu carro e decide se quer fechar.</p></div>
          </div>
        </div>
        <img src="img/loovi-form-bg.jpg" alt="Seguro auto Loovi" style="width:100%;border-radius:20px;margin-top:32px;display:block">
      </div>`
  }
];

/* ------------------------------------------------------------
   TRACKING — el corazón de los datos de conversión
   1. ga4Id: tu ID de GA4 (ej. "G-ABC123"). null = desactivado.
   2. adsConversion: conversión de clic de Google Ads
      formato "AW-123456789/AbCdEfGh". null = desactivado.
   ------------------------------------------------------------ */
const TRACKING = {
  ga4Id: "G-Y6RDV5YCS6",      // ej: "G-XXXXXXX"
  adsConversion: "AW-17872633328/duQ-CLuJw9scEPD7qspC"
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
    id: "natura", name: "Natura", category: "Beleza", color: "#FF5800", logoText: "natura",
    logoUrl: "img/logos/natura.png",
    affiliateUrl: "https://www.minhaloja.natura.com/consultoria/alcidesgabriel?marca=natura",
    logoDomain: "natura.com.br",   /* dominio para el logo (el link es minhaloja) */
    subidParam: null, cashback: null, rating: { score: 4.8, count: 93 },
    description: "A maior marca brasileira de cosméticos e perfumaria. Ekos, Kaiak, Tododia e Essencial com promoções semanais — e frete grátis em compras selecionadas. Quem compra pelo link ativa as melhores condições da semana.",
    top: true
  },
  {
    id: "olympikus", name: "Olympikus", category: "Esportes", color: "#FFFFFF", logoText: "OLK",
    logoUrl: "img/logos/olympikus.png",
    affiliateUrl: "https://www.olympikus.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.7, count: 68 },
    description: "O tênis oficial de quem corre no Brasil. Tecnologia de amortecimento premiada e preço justo — os modelos Corre já bateram recordes em maratonas. Ative a oferta e corra na frente.",
    top: true
  },
  {
    id: "vaidepromo", name: "Vai de Promo", category: "Viagens", color: "#03A5CA", logoText: "Vai de Promo",
    logoUrl: "img/logos/vaidepromo.png",
    affiliateUrl: "https://www.vaidepromo.com.br/passagens-aereas/?utm_medium=afiliado&pcrid=14162&utm_source=site-blog&pcrtt=dsa",
    subidParam: null, cashback: null, rating: { score: 4.7, count: 54 },
    description: "Passagens aéreas nacionais e internacionais pelo menor preço, com busca em dezenas de companhias ao mesmo tempo. Parcele sua viagem e voe pagando menos do que quem comprou do lado.",
    top: false
  },
  {
    id: "segurospromo", name: "Seguros Promo", category: "Viagens", color: "#FFFFFF", logoText: "Seguros Promo",
    logoUrl: "img/logos/segurospromo.png",
    affiliateUrl: "https://www.segurospromo.com.br/?utm_medium=afiliado&pcrid=14162&utm_source=site-blog",
    subidParam: null, cashback: null, rating: { score: 4.8, count: 71 },
    description: "O comparador de seguro viagem nº 1 do Brasil: cote as principais seguradoras em segundos e viaje protegido para Europa, EUA ou qualquer destino — pagando bem menos que no balcão.",
    top: false
  },
  {
    id: "rentcars", name: "Rentcars", category: "Viagens", color: "#11100D", logoText: "rentcars",
    logoUrl: "img/logos/rentcars.png",
    affiliateUrl: "https://www.rentcars.com/pt-br/?requestorid=10589&utm_source=gabglobalmkt.com.br&utm_medium=afiliado-link",
    subidParam: null, cashback: null, rating: { score: 4.7, count: 63 },
    description: "Aluguel de carros no Brasil e no mundo: compare as maiores locadoras, pague em reais sem IOF e parcele. O jeito inteligente de garantir seu carro na viagem.",
    top: false
  },
  {
    id: "travelbds", name: "Travel BDS", category: "Viagens", color: "#FFFFFF", logoText: "Travel BDS",
    logoUrl: "img/logos/travelbds.png",
    affiliateUrl: "https://www.parceirospromo.com.br/partners/affiliate/travel-bds?page=https://travelbds.com&utm_medium=afiliado&pcrid=14162&utm_source=site-blog",
    subidParam: null, cashback: null, rating: { score: 4.6, count: 28 },
    description: "Experiências, passeios e serviços de viagem selecionados para transformar sua próxima trip — reserve com antecedência e economize no destino.",
    top: false
  },
  {
    id: "electrolux", name: "Electrolux", category: "Casa", color: "#FFFFFF", logoText: "Electrolux",
    logoUrl: "img/logos/electrolux.png",
    affiliateUrl: "https://loja.electrolux.com.br/?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.6, count: 74 },
    description: "Loja oficial Electrolux: geladeiras, lavadoras, ar-condicionado e eletroportáteis direto da fábrica, com garantia oficial e ofertas que o varejo não tem.",
    top: true
  },
  {
    id: "dji", name: "DJI", category: "Tecnologia", color: "#FFFFFF", logoText: "DJI",
    logoUrl: "img/logos/dji.png",
    affiliateUrl: "https://www.lojadji.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.9, count: 41 },
    description: "Drones, câmeras e estabilizadores da líder mundial. Loja oficial DJI Brasil com garantia local e parcelamento — o jeito seguro de comprar seu Mavic, Mini ou Osmo.",
    top: false
  },
  {
    id: "cobasi", name: "Cobasi", category: "Pets", color: "#00ABB3", logoText: "cobasi",
    logoUrl: "img/logos/cobasi.png",
    affiliateUrl: "https://minhaloja.cobasi.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    logoDomain: "cobasi.com.br",
    subidParam: null, cashback: null, rating: { score: 4.7, count: 85 },
    description: "Tudo para seu pet em um lugar só: ração, areia, brinquedos e farmácia veterinária. Entrega rápida e os melhores preços em marcas premium.",
    top: false
  },
  {
    id: "underarmour", name: "Under Armour", category: "Esportes", color: "#FFFFFF", logoText: "UA",
    logoUrl: "img/logos/underarmour.png",
    affiliateUrl: "https://www.underarmour.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.6, count: 52 },
    description: "A marca dos atletas de alta performance. Camisetas, tênis e acessórios com tecnologia que acompanha treino pesado — no outlet oficial tem peça com metade do preço.",
    top: false
  },
  {
    id: "payot", name: "Payot", category: "Beleza", color: "#000000", logoText: "PAYOT",
    logoUrl: "img/logos/payot.png",
    affiliateUrl: "https://www.lojapayot.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.6, count: 38 },
    description: "Dermocosméticos e maquiagem de quem entende de pele há décadas. Qualidade de clínica com preço de farmácia — e ofertas exclusivas pelo link.",
    top: false
  },
  {
    id: "salonline", name: "Salon Line", category: "Beleza", color: "#D666C8", logoText: "Salon Line",
    logoUrl: "img/logos/salonline.png",
    affiliateUrl: "https://www.salonline.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.8, count: 112 },
    description: "A marca nº 1 de quem ama cabelo crespo, cacheado e ondulado. Cronograma capilar completo sem pesar no bolso — kits em oferta toda semana.",
    top: false
  },
  {
    id: "toptherm", name: "TopTherm", category: "Saúde", color: "#0072CE", logoText: "toptherm",
    logoUrl: "img/logos/toptherm.png",
    affiliateUrl: "https://www.toptherm.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.6, count: 27 },
    description: "Referência em Ômega 3 Norwegian, magnésio ultra concentrado, probióticos e multivitamínicos. Suplementos de alta qualidade para sua longevidade — com desconto no Pix e campanhas compre e ganhe.",
    top: false
  },
  {
    id: "amakhaparis", name: "Amakha Paris", category: "Beleza", color: "#88B7E4", logoText: "AMAKHA",
    logoUrl: "img/logos/amakhaparis.png",
    affiliateUrl: "https://www.amakhaparis.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.5, count: 33 },
    description: "Perfumes de bolso inspirados nas fragrâncias mais desejadas do mundo — por uma fração do preço. Perfeitos para levar na bolsa e renovar ao longo do dia.",
    top: false
  },
  {
    id: "candide", name: "Candide", category: "Brinquedos", color: "#008C99", logoText: "candide",
    logoUrl: "img/logos/candide.png",
    affiliateUrl: "https://www.candide.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.6, count: 29 },
    description: "Os brinquedos que marcam infância: licenciados oficiais, lançamentos e clássicos com preço direto da distribuidora. Presente certo sem estourar o orçamento.",
    top: false
  },
  {
    id: "funko", name: "Funko", category: "Brinquedos", color: "#FFFFFF", logoText: "funko",
    logoUrl: "img/logos/funko.png",
    affiliateUrl: "https://www.funko.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.8, count: 57 },
    description: "Loja oficial Funko Brasil: Pop! originais dos seus filmes, séries, animes e games favoritos. Colecionável original, sem risco de réplica — e com oferta ativa.",
    top: false
  },
  {
    id: "thermos", name: "Thermos", category: "Casa", color: "#B01E24", logoText: "THERMOS",
    logoUrl: "img/logos/thermos.png",
    affiliateUrl: "https://www.thermosbrasil.com.br?parceiro=11042&am=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.7, count: 45 },
    description: "A garrafa térmica original, inventora da categoria há mais de 100 anos. Café quente por 12 horas, água gelada por 24 — compre uma vez, use a vida toda.",
    top: false
  },
  {
    id: "mizuno", name: "Mizuno", category: "Esportes", color: "#001489", logoText: "MIZUNO",
    logoUrl: "img/logos/mizuno.png",
    affiliateUrl: "https://www.mizuno.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.7, count: 63 },
    description: "Engenharia japonesa nos pés: os tênis de corrida mais duráveis do mercado. Wave Prophecy e Creation no outlet oficial com descontos que raramente aparecem.",
    top: false
  },
  {
    id: "seculus", name: "Seculus", category: "Relógios", color: "#050505", logoText: "SECULUS",
    logoUrl: "img/logos/seculus.png",
    affiliateUrl: "https://www.seculus.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.5, count: 24 },
    description: "Relógios com design brasileiro e garantia de fábrica. Modelos clássicos e esportivos que valorizam qualquer visual — direto da loja oficial.",
    top: false
  },
  {
    id: "fossil", name: "Fossil", category: "Relógios", color: "#FFFFFF", logoText: "FOSSIL",
    logoUrl: "img/logos/fossil.png",
    affiliateUrl: "https://www.fossil.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.7, count: 48 },
    description: "O relógio americano que virou clássico. Smartwatches, couro legítimo e design atemporal — na loja oficial tem oferta que a vitrine do shopping não mostra.",
    top: false
  },
  {
    id: "cicatribem", name: "Cicatribem", category: "Beleza", color: "#008AAF", logoText: "cicatribem",
    logoUrl: "img/logos/cicatribem.png",
    affiliateUrl: "https://cicatribem.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.6, count: 31 },
    description: "O dermocosmético brasileiro queridinho para cicatrizes, manchas e recuperação da pele. Resultados reais, fórmula segura e oferta ativa pelo link.",
    top: false
  },
  {
    id: "foreverliss", name: "Forever Liss", category: "Beleza", color: "#D8002E", logoText: "Forever Liss",
    logoUrl: "img/logos/foreverliss.png",
    affiliateUrl: "https://www.foreverliss.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.7, count: 96 },
    description: "Tratamento capilar profissional para fazer em casa: máscaras, progressivas e kits completos com preço de fábrica. Cabelo de salão sem preço de salão.",
    top: false
  },
  {
    id: "probel", name: "Probel", category: "Casa", color: "#025A99", logoText: "PROBEL",
    logoUrl: "img/logos/probel.png",
    affiliateUrl: "https://www.probel.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.6, count: 36 },
    description: "Colchões e camas box de quem fabrica sono bom há mais de 60 anos. Compre direto da fábrica, sem intermediário — seu sono agradece e seu bolso também.",
    top: false
  },
  {
    id: "gamaitaly", name: "Gama Italy", category: "Beleza", color: "#FFFFFF", logoText: "GA.MA",
    logoUrl: "img/logos/gamaitaly.png",
    affiliateUrl: "https://www.gamaitaly.com.br/?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.6, count: 44 },
    description: "Secadores, chapinhas e modeladores profissionais usados em salão. Tecnologia italiana que protege o fio — com ofertas de outlet na loja oficial.",
    top: false
  },
  {
    id: "technos", name: "Technos", category: "Relógios", color: "#FFFFFF", logoText: "TECHNOS",
    logoUrl: "img/logos/technos.png",
    affiliateUrl: "https://www.technos.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.7, count: 58 },
    description: "A marca de relógios mais vendida do Brasil. Do executivo ao esportivo, com resistência à água e garantia oficial — ofertas exclusivas ativando pelo link.",
    top: false
  },
  {
    id: "eurorelogios", name: "Euro Relógios", category: "Relógios", color: "#FFFFFF", logoText: "EURO",
    logoUrl: "img/logos/eurorelogios.png",
    affiliateUrl: "https://www.eurorelogios.com.br?utm_source=mais&utm_medium=maisplataforma&utm_campaign=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.6, count: 26 },
    description: "Relógios femininos com design de joia. Dourados, rosé e prata para elevar qualquer look — com preço de oferta que parece erro (mas não é).",
    top: false
  },
  {
    id: "rigolim", name: "Rigolim", category: "Casa", color: "#F1E7E6", logoText: "RIGOLIM",
    logoUrl: "img/logos/rigolim.png",
    affiliateUrl: "https://www.rigolim.com.br?parceiro=9016&am=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.5, count: 22 },
    description: "Climatização e conforto para sua casa: ar-condicionado das melhores marcas com instalação e preço direto do distribuidor.",
    top: false
  },
  {
    id: "nacasachinatem", name: "Na Casa China Tem", category: "Casa", color: "#FFFFFF", logoText: "NCCT",
    logoUrl: "img/logos/nacasachinatem.png",
    affiliateUrl: "https://www.nacasachinatem.com.br?parceiro=9306&am=alcidesgrep",
    subidParam: null, cashback: null, rating: { score: 4.5, count: 30 },
    description: "Os achadinhos virais que todo mundo procura: utilidades, organização e gadgets para casa com preço de importado — sem esperar 60 dias pelo frete.",
    top: false
  },
  {
    id: "mercadolivre", name: "Mercado Livre", category: "Marketplace", color: "#FFE600", logoText: "Mercado Livre",
    logoUrl: "img/logos/mercadolivre.png",
    /* matt_word/matt_tool são os parâmetros do programa de Afiliados Mercado Livre —
       podem ser anexados a qualquer URL mercadolivre.com.br (loja, categoria, produto)
       pra rastrear a comissão, mesmo sem gerar um link individual pra cada um. */
    affiliateUrl: "https://www.mercadolivre.com.br/ofertas?matt_word=teva5875899&matt_tool=61014070",
    subidParam: null, cashback: null, rating: { score: 4.7, count: 41 },
    description: "O maior marketplace do Brasil, com milhões de produtos de milhares de vendedores. Ofertas relâmpago, frete grátis e parcelamento sem juros todos os dias.",
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
    url: "https://www.minhaloja.natura.com/c/relampago?consultoria=alcidesgabriel&marca=natura",
    code: null, rules: "Ofertas relâmpago por tempo limitado, enquanto durarem os estoques.", expires: null, top: true, exclusive: false },
  { oid: 1002, storeId: "natura", value: "Exclusivas", label: "PROMOÇÃO DA CONSULTORA", title: "Ofertas exclusivas do espaço da consultora",
    url: "https://www.minhaloja.natura.com/c/promocao-exclusiva?consultoria=alcidesgabriel&marca=natura",
    code: null, rules: "Promoções exclusivas disponíveis apenas no espaço digital da consultora.", expires: null, top: false, exclusive: true },
  { oid: 1003, storeId: "natura", value: "10% OFF", label: "PRIMEIRA COMPRA", title: "10% OFF na primeira compra com a consultora",
    url: "https://www.minhaloja.natura.com/c/especial-primeira-compra?consultoria=alcidesgabriel&marca=natura",
    code: "PRIMEIRAML", rules: "10% de desconto para clientes na primeira compra no espaço digital da consultora. Consulte condições no carrinho.", expires: null, top: false, exclusive: false },
  { oid: 1012, storeId: "natura", value: "Brinde", label: "BRINDE PERFUMARIA", title: "Ganhe um mini Kriska em compras acima de R$150 em Perfumaria",
    url: "https://www.minhaloja.natura.com/c/perfumaria?consultoria=alcidesgabriel&marca=natura",
    code: "MLMAISPERF", rules: "Ganhe um mini Kriska em compras acima de R$150 em itens de Perfumaria, enquanto durarem os estoques. Teste o cupom no carrinho.", expires: null, top: false, exclusive: false },
  { oid: 1004, storeId: "natura", value: "Até 50%", label: "DIA DOS PAIS", title: "Mais de 30 presentes com até 50% de desconto",
    url: "https://www.minhaloja.natura.com/c/presentes-de-dia-dos-pais?consultoria=alcidesgabriel&marca=natura",
    code: null, rules: "Seleção de mais de 30 presentes para o Dia dos Pais, enquanto durarem os estoques.", expires: "2026-08-09", top: true, exclusive: false, seasonal: "dia-dos-pais",
    heroImage: "img/banner-dia-dos-pais.jpg", heroPos: "68% 74%", heroTitle: "Dia dos Pais Natura", heroSub: "Mais de 30 presentes com até 50% de desconto." },
  { oid: 1011, storeId: "natura", value: "Até R$88", label: "8.8 ESQUENTA DIA DOS PAIS", title: "Desbloqueie até R$88 OFF com o cupom — R$8 OFF em R$80, R$38 OFF em R$240, R$88 OFF em R$400",
    url: "https://www.minhaloja.natura.com/c/data-dupla?consultoria=alcidesgabriel&marca=natura",
    code: "MLDATADUPLA", rules: "Campanha 8.8 Esquenta Dia dos Pais: desconto progressivo por faixa de valor no carrinho — R$8 OFF a partir de R$80, R$38 OFF a partir de R$240, R$88 OFF a partir de R$400. Teste o cupom no carrinho antes de finalizar.", expires: "2026-08-09", top: true, exclusive: false, seasonal: "dia-dos-pais",
    heroImage: "img/banner-88.jpg", heroTitle: "8.8 Natura", heroSub: "Esquenta Dia dos Pais: desbloqueie até R$88 OFF usando o cupom no carrinho.",
    heroBig: "8.8", heroBigSub: "Natura", heroEyebrow2: "ESQUENTA", heroCampaign: "Dia dos Pais",
    heroHeadline: "Desbloqueie até", heroHeadlineAmount: "R$88", heroHeadlineSuffix: "OFF",
    heroCodeLabel: "usando o cupom",
    heroTiers: [
      { off: "R$8", threshold: "R$80" },
      { off: "R$38", threshold: "R$240" },
      { off: "R$88", threshold: "R$400" }
    ],
    heroCtaText: "Ativar oferta →" },
  { oid: 1005, storeId: "natura", value: "Ofertas", label: "TODAS AS PROMOÇÕES", title: "Central de promoções da loja oficial Natura",
    url: "https://www.minhaloja.natura.com/c/promocoes?consultoria=alcidesgabriel&marca=natura",
    code: null, rules: "Todas as promoções vigentes da semana na loja oficial.", expires: null, top: false, exclusive: false },
  { oid: 1006, storeId: "natura", value: "15%", label: "OFF COM CUPOM", title: "Seleção de autocuidado com cupom + frete grátis",
    code: "Happy15", rules: "Válido em seleção de produtos. Teste o cupom no carrinho antes de finalizar. Não cumulativo com outras promoções.", expires: null, top: false, exclusive: false },
  { oid: 1007, storeId: "natura", value: "15%", label: "ESQUENTA 7.7", title: "Campanha 7.7: desconto em quase todo o site",
    url: "https://www.minhaloja.natura.com/c/promocoes?consultoria=alcidesgabriel&marca=natura",
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
    code: null, rules: "Ofertas vigentes conforme destino e disponibilidade.", expires: null, top: false, exclusive: false },

  /* --- Mercado Livre: não tem cupom com código pra copiar (é desconto
     automático no preço). Os links abaixo já vão pras páginas reais de
     ofertas ao vivo do site, com o rastreamento de afiliado. --- */
  { oid: 4001, storeId: "mercadolivre", value: "Ofertas", label: "RELÂMPAGO E DO DIA", title: "Central de ofertas: relâmpago, do dia e preços imbatíveis",
    url: "https://www.mercadolivre.com.br/ofertas?matt_word=teva5875899&matt_tool=61014070",
    code: null, rules: "Ofertas ao vivo, atualizadas o tempo todo pelo próprio Mercado Livre. Descontos já aplicados no preço, sem necessidade de cupom.", expires: null, top: true, exclusive: false },
  { oid: 4002, storeId: "mercadolivre", value: "Ofertas", label: "SUPERMERCADO", title: "Itens de supermercado com desconto e frete rápido",
    url: "https://www.mercadolivre.com.br/ofertas/supermercado?matt_word=teva5875899&matt_tool=61014070",
    code: null, rules: "Seleção de ofertas de supermercado, atualizada ao vivo pelo Mercado Livre.", expires: null, top: false, exclusive: false },
  { oid: 4003, storeId: "mercadolivre", value: "Loja oficial", label: "GROWTH SUPPLEMENTS", title: "Suplementos da Growth com preço de loja oficial",
    url: "https://www.mercadolivre.com.br/loja/growth-supplements?matt_word=teva5875899&matt_tool=61014070",
    code: null, rules: "Loja oficial verificada dentro do Mercado Livre. Preços e frete conforme anúncio.", expires: null, top: false, exclusive: false }
];

/* ------------------------------------------------------------
   BANNERS de la home (carrusel horizontal)
   image: 1120x400px (carpeta img/). Sin image → degradado azul.
   ------------------------------------------------------------ */
const BANNERS = [
  {
    image: "img/banner-natura.jpg",
    title: "Cupom Natura com até 20% OFF",
    subtitle: "Perfumaria, presentes e muito mais",
    storeId: "natura"
  },
  {
    image: "img/banner-seguro-auto.jpg",
    title: "Seguro auto com parcela mensal",
    subtitle: "Cote agora sem compromisso — resposta no WhatsApp",
    href: "/pagina/seguro-auto"
  },
  {
    image: "img/banner-tenis.jpg",
    title: "Tênis de marca pagando menos",
    subtitle: "Olympikus, Mizuno e Under Armour com oferta ativa",
    storeId: "olympikus"
  },
  {
    image: "img/banner-electrodomesticos.jpg",
    title: "Sua casa completa direto da fábrica",
    subtitle: "Electrolux com condições exclusivas",
    storeId: "electrolux"
  },
  {
    image: "img/banner-viagens2.jpg",
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
