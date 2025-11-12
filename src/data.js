// Conjunto de dados contendo corretores de dados brasileiros
// divididos em três categorias: comerciais, públicos e ilegais.

export const dataBrokers = {
  comerciais: [
    {
      name: 'Serasa Experian',
      legalidade: 'Cinzenta (uso para scoring permitido; venda para marketing contestada)',
      setor: 'Crédito / Marketing',
      dados: [
        {
          categoria: 'documentos',
          especificacao: ['CPF'],
        },
        {
          categoria: 'pessoais',
          especificacao: ['Nome'],
        },
        {
          categoria: 'contato',
          especificacao: ['Endereço', 'Telefone', 'E-mail'],
        },
        {
          categoria: 'financeiros',
          especificacao: ['Score de crédito', 'Dívidas'],
        },
        {
          categoria: 'marketing',
          especificacao: ['Perfil socioeconômico'],
        },
      ],
      link: 'https://www.serasa.com.br',
      observacoes:
        'Birô de crédito líder autorizado a operar o Cadastro Positivo, mas que teve serviços como “Lista Online/Prospecção” suspensos pela Justiça por vender contatos pessoais para marketing sem consentimento.',
      fontes: [
        // MPDFT relata que a Serasa vendia dados pessoais via os serviços Lista Online e Prospecção de Clientes e que a Justiça mandou suspender a prática
        'https://www.mpdft.mp.br/portal/index.php/comunicacao-menu/sala-de-imprensa/noticias/noticias-2021/13038-justica-mantem-decisao-e-serasa-experian-segue-impedida-de-vender-dados-pessoais',
        // TJDFT detalha a medida liminar que proibiu a comercialização dos dados e menciona o valor cobrado por contato
        'https://www.tjdft.jus.br/institucional/imprensa/noticias/2020/novembro/tjdft-determina-a-suspensao-de-venda-de-dados-pessoais-pelo-serasa'
      ],
    },
    {
      name: 'Boa Vista (SCPC)',
      legalidade: 'Cinzenta (uso para scoring permitido; venda para marketing contestada)',
      setor: 'Crédito',
      dados: [
        {
          categoria: 'documentos',
          especificacao: ['CPF'],
        },
        {
          categoria: 'pessoais',
          especificacao: ['Nome'],
        },
        {
          categoria: 'contato',
          especificacao: ['Endereço', 'Telefone'],
        },
        {
          categoria: 'financeiros',
          especificacao: ['Histórico de crédito', 'Renda estimada'],
        },
      ],
      link: 'https://www.boavistaservicos.com.br',
      observacoes:
        'Decisão do STJ proibiu o compartilhamento de dados cadastrais para marketing; continua operando como birô de crédito.',
      fontes: [
        // STJ decidiu que a Boa Vista não pode compartilhar dados pessoais (endereço, telefone, renda) sem consentimento e condenou a empresa
        'https://convergenciadigital.com.br/governo/rachado-stj-condena-bureau-de-credito-por-compartilhamento-de-dados-pessoais/'
      ],
    },
    {
      name: 'SPC Brasil',
      legalidade: 'Ilegal (venda de dados condenada)',
      setor: 'Crédito / Marketing',
      dados: [
        {
          categoria: 'documentos',
          especificacao: ['CPF', 'RG'],
        },
        {
          categoria: 'pessoais',
          especificacao: ['Nome', 'Data de nascimento', 'Nome da mãe'],
        },
        {
          categoria: 'contato',
          especificacao: ['Endereço', 'Telefone', 'E-mail'],
        },
        {
          categoria: 'financeiros',
          especificacao: ['Situação creditícia'],
        },
      ],
      link: 'https://www.spcbrasil.org.br',
      observacoes:
        'Condenado em 2015 por vender informações pessoais para telemarketing sem consentimento.',
      fontes: [
        // Tribunal relatou que o SPC Brasil vendia dados como nome, telefone, RG, endereço e data de nascimento para empresas de telemarketing, prática considerada ilegal
        'https://www.tribunapr.com.br/noticias/parana/spc-condenado-a-pagar-multa-por-vender-dados-de-consumidores/'
      ],
    },
    {
      name: 'Quod',
      legalidade: 'Legal',
      setor: 'Crédito',
      dados: [
        {
          categoria: 'documentos',
          especificacao: ['CPF'],
        },
        {
          categoria: 'pessoais',
          especificacao: ['Nome'],
        },
        {
          categoria: 'financeiros',
          especificacao: ['Histórico de pagamentos positivos', 'Score de crédito'],
        },
      ],
      link: 'https://www.quod.com.br',
      observacoes:
        'Empresa dos grandes bancos para gerir o Cadastro Positivo; permite opt‑out; atua sob lei específica.',
      fontes: [
        // Finsiders informa que a Quod é uma fintech criada pelos cinco maiores bancos brasileiros para gerir dados de crédito
        'https://finsiders.com.br/a-estrategia-da-quod-biro-dos-bancos-para-ser-uma-datatech/',
        // Página oficial da Quod explica como realizar o cancelamento do Cadastro Positivo (opt‑out) e os canais disponíveis
        'https://www.quod.com.br/cancelar-cadastro-positivo'
      ],
    },
    {
      name: 'Neoway',
      legalidade: 'Cinzenta',
      setor: 'Inteligência de dados (Risco / Marketing)',
      dados: [
        {
          categoria: 'judicial',
          especificacao: ['Processos judiciais'],
        },
        {
          categoria: 'financeiros',
          especificacao: ['Dívidas', 'Propriedades'],
        },
        {
          categoria: 'profissionais',
          especificacao: ['Participação societária', 'Vínculos políticos', 'Contatos corporativos'],
        },
        {
          categoria: 'marketing',
          especificacao: ['Perfis de consumo'],
        },
      ],
      link: 'https://www.neoway.com.br',
      observacoes:
        'Integra informações fornecidas por clientes com uma base própria formada por mais de 600 fontes públicas; oferece soluções de análise de dados, prospecção, crédito e prevenção de fraudes em conformidade com a LGPD.',
      fontes: [
        // Reportagem do NeoFeed explica que a Neoway mescla dados fornecidos por clientes com uma base estruturada a partir de mais de 600 fontes públicas para ampliar suas soluções de big data
        'https://www.neofeed.com.br/o-big-data-da-neoway-para-se-tornar-referencia-em-big-data-no-brasil/'
      ],
    },
    {
      name: 'Risk Money',
      legalidade: 'Cinzenta',
      setor: 'Verificação reputacional (AML/KYC)',
      dados: [
        {
          categoria: 'reputacionais',
          especificacao: ['Histórico em mídias', 'Envolvimento em investigações', 'Listas de sanções'],
        },
        {
          categoria: 'profissionais',
          especificacao: ['Vínculos pessoais e empresariais'],
        },
      ],
      link: 'https://www.riskmoney.com.br',
      observacoes:
        'Banco de dados reputacional e soluções de monitoramento: oferece consultas de CPF e CNPJ com alto nível de assertividade, monitora transações para detectar suspeitas de lavagem de dinheiro e fornece due diligence de fornecedores.',
      fontes: [
        // Página oficial do Risk Money apresenta a empresa como o maior banco de dados reputacional da América Latina, com alta assertividade nas consultas e soluções de due diligence
        'https://www.riskmoney.com.br'
      ],
    },
    {
      name: 'Procob S/A',
      legalidade: 'Cinzenta',
      setor: 'Verificação de identidade / Antifraude',
      dados: [
        {
          categoria: 'documentos',
          especificacao: ['CPF', 'Situação cadastral'],
        },
        {
          categoria: 'pessoais',
          especificacao: ['Nome', 'Parentes', 'Vizinhos'],
        },
        {
          categoria: 'contato',
          especificacao: ['Endereço', 'Telefones', 'E-mail', 'Geolocalização'],
        },
      ],
      link: 'https://www.procob.com',
      observacoes:
        'Investigado pelo MPDFT por fornecer relatórios completos sem consentimento; alega usar dados públicos.',
      fontes: [
        // MPDFT abriu inquérito civil para investigar a Procob e listou os tipos de dados oferecidos nos relatórios (endereços, telefones, e-mails, situação tributária, parentes e vizinhos)
        'https://www.mpdft.mp.br/portal/index.php/comunicacao-menu/sala-de-imprensa/noticias/noticias-2020/11944-mpdft-investiga-empresa-que-vende-dados-pessoais-de-brasileiros',
        // Matéria reproduzida pela Sollução relata que a investigação apontou que a Procob oferecia relatórios com endereços, telefones, e-mails, situação fiscal, parentes e vizinhos para fins de confirmação de dados e análise de crédito
        'https://sollucao.net/mp-de-brasilia-abre-inquerito-para-apurar-venda-de-dados-pessoais/'
      ],
    },
    {
      name: 'ZipCode (ZipOnline)',
      legalidade: 'Cinzenta',
      setor: 'Localização / Marketing / Crédito',
      dados: [
        {
          categoria: 'documentos',
          especificacao: ['CPF'],
        },
        {
          categoria: 'pessoais',
          especificacao: ['Nome', 'Dados demográficos'],
        },
        {
          categoria: 'contato',
          especificacao: ['Endereço', 'Telefone'],
        },
        {
          categoria: 'financeiros',
          especificacao: ['Situação creditícia'],
        },
      ],
      link: 'https://www.zipcode.com.br',
      observacoes:
        'Mantém base de dados de grande parte da população; usada para localização, mailing e análise.',
      fontes: [
        // Artigo sobre o lançamento do ZipOnline 3.0 informa que a base de dados da ZipCode cobre 93% das pessoas físicas e 99% das empresas
        'https://docmanagement.com.br/05/21/2012/zipcode-lanca-ziponline-3-0/',
        // O mesmo texto descreve que a plataforma permite localizar inadimplentes, confirmar cadastros para ofertas de crédito, prevenir fraudes, verificar bloqueio de telemarketing e atualizar mailings
        'https://docmanagement.com.br/05/21/2012/zipcode-lanca-ziponline-3-0/'
      ],
    },
    {
      name: 'Jusbrasil',
      legalidade: 'Legal',
      setor: 'Judicial (jurisprudência)',
      dados: [
        {
          categoria: 'pessoais',
          especificacao: ['Nomes das partes'],
        },
        {
          categoria: 'judicial',
          especificacao: ['Decisões', 'Movimentações processuais'],
        },
      ],
      link: 'https://www.jusbrasil.com.br',
      observacoes:
        'Indexa registros públicos do judiciário; atuação discutida, mas amparada por transparência.',
      fontes: [
        // A página da Wikipédia destaca que o Jusbrasil reúne documentos públicos como processos, jurisprudências, leis e diários oficiais, além de artigos de usuários
        'https://pt.wikipedia.org/wiki/Jusbrasil'
      ],
    },
  ],
  publicos: [
    {
      name: 'Portal da Transparência',
      legalidade: 'Legal',
      setor: 'Transparência (governamental)',
      dados: [
        {
          categoria: 'governamentais',
          especificacao: ['Vínculos com órgãos públicos', 'Cargos e remunerações', 'Benefícios sociais', 'Diárias'],
        },
      ],
      link: 'https://portaldatransparencia.gov.br/pessoa-fisica',
      observacoes:
        'Divulga gastos públicos e remunerações; dados considerados de interesse público.',
      fontes: [
        // Artigo explica que o Portal da Transparência permite aos cidadãos pesquisar informações sobre gestão pública, incluindo orçamento, receitas, despesas, repasses e remunerações
        'https://fia.com.br/blog/portal-da-transparencia-o-que-e-para-que-serve-e-como-usar/',
        // O mesmo texto ressalta que a plataforma visa garantir transparência e incentivar a participação social no controle do gasto público
        'https://fia.com.br/blog/portal-da-transparencia-o-que-e-para-que-serve-e-como-usar/'
      ],
    },
    {
      name: 'Consulta CPF (Receita Federal)',
      legalidade: 'Legal',
      setor: 'Verificação de identidade',
      dados: [
        {
          categoria: 'pessoais',
          especificacao: ['Nome completo'],
        },
        {
          categoria: 'documentos',
          especificacao: ['Situação cadastral do CPF'],
        },
      ],
      link: 'https://www.gov.br/pt-br/servicos/consultar-cadastro-de-pessoas-fisicas',
      observacoes:
        'Serviço oficial para verificar a situação do CPF; requer número de CPF e, às vezes, data de nascimento.',
      fontes: [
        // Página oficial do governo diz que o serviço permite consultar a situação do CPF, emitir certificado de regularidade, acessar informações da base e confirmar autenticidade
        'https://www.gov.br/pt-br/servicos/consultar-cadastro-de-pessoas-fisicas'
      ],
    },
    {
      name: 'Consulta CNPJ (Receita/Juntas)',
      legalidade: 'Legal',
      setor: 'Registro empresarial',
      dados: [
        {
          categoria: 'profissionais',
          especificacao: ['Razão social', 'Atividades econômicas', 'Quadro societário'],
        },
        {
          categoria: 'documentos',
          especificacao: ['CPFs dos sócios', 'Situação cadastral'],
        },
        {
          categoria: 'contato',
          especificacao: ['Endereço'],
        },
      ],
      link: 'https://www.gov.br/empresas-e-negocios/pt-br/cadastro-cnpj',
      observacoes:
        'Divulga dados de empresas e sócios por obrigatoriedade legal.',
      fontes: [
        // Serviço do gov.br esclarece que trata dados como nome e CPF do responsável, bem como nomes e CPFs dos sócios no quadro societário do CNPJ
        'https://www.gov.br/empresas-e-negocios/pt-br/cadastro-cnpj'
      ],
    },
  ],
  ilegais: [
    {
      name: 'BaseUp (Loja de Dados)',
      legalidade: 'Ilegal',
      setor: 'Marketing (mailing)',
      dados: [
        {
          categoria: 'pessoais',
          especificacao: ['Nome completo'],
        },
        {
          categoria: 'documentos',
          especificacao: ['CPF', 'RG'],
        },
        {
          categoria: 'contato',
          especificacao: ['Endereço', 'Telefones', 'E-mails'],
        },
      ],
      link: '',
      observacoes:
        'Site vendia pacotes de contatos segmentados; domínios congelados pelo Ministério Público.',
      fontes: [
        // MPDFT relata que a BaseUp comercializava pacotes de dados (nomes, RG, CPF) segmentados por região e que o domínio foi cancelado a pedido do Ministério Público
        'https://www.mpdft.mp.br/portal/index.php/comunicacao-menu/sala-de-imprensa/noticias/noticias-2020/11634-mpdft-consegue-identificar-e-derrubar-site-de-empresa-que-vendia-dados-pessoais-de-brasileiros'
      ],
    },
    {
      name: 'Nomes Brasil',
      legalidade: 'Ilegal',
      setor: 'Identificação (CPF)',
      dados: [
        {
          categoria: 'pessoais',
          especificacao: ['Nome completo'],
        },
        {
          categoria: 'documentos',
          especificacao: ['CPF', 'Situação cadastral'],
        },
      ],
      link: '',
      observacoes:
        'Permitia consultar nome e CPF de qualquer pessoa; retirado do ar em 2015.',
      fontes: [
        // Reportagem informa que o site Nomes Brasil permitia buscar nomes e CPF de pessoas e foi retirado do ar após notificação do Ministério da Justiça por violar privacidade
        'https://acianecdl.com.br/cpfs-divulgados-em-sites-podem-ser-usados-em-fraudes-sem-o-dono-saber/'
      ],
    },
    {
      name: 'Fonedados',
      legalidade: 'Ilegal',
      setor: 'Listas telefônicas',
      dados: [
        {
          categoria: 'contato',
          especificacao: ['Números de telefone fixo e móvel', 'Endereços'],
        },
        {
          categoria: 'pessoais',
          especificacao: ['Nomes'],
        },
      ],
      link: '',
      observacoes:
        'Diretório telefônico invertido que expunha telefones e endereços; site bloqueado após investigação.',
      fontes: [
        // Artigo descreve o Fonedados como um site que permitia buscar números de telefone, nomes e endereços a partir de CPF ou nome, caracterizando um diretório telefônico invertido
        'https://fatorbinario.com.br/site-malicioso-fonedados-divulga-individualmente-informacoes-de-milhoes-de-brasileiros/',
        // O mesmo texto aponta que o MPF abriu procedimento e solicitou à Anatel a remoção do site, que usava domínio internacional, e menciona envolvimento de várias bases de dados
        'https://fatorbinario.com.br/site-malicioso-fonedados-divulga-individualmente-informacoes-de-milhoes-de-brasileiros/',
        // Outra reportagem cita que o site possibilitava cruzar telefones, endereços e CPFs e virou alvo do MPF
        'https://acianecdl.com.br/cpfs-divulgados-em-sites-podem-ser-usados-em-fraudes-sem-o-dono-saber/'
      ],
    },
    {
      name: 'Tudo Sobre Todos',
      legalidade: 'Ilegal',
      setor: 'Dossiê de pessoas',
      dados: [
        {
          categoria: 'pessoais',
          especificacao: ['Nome', 'Data de nascimento', 'Nomes de familiares', 'Vizinhos'],
        },
        {
          categoria: 'documentos',
          especificacao: ['CPF', 'RG'],
        },
        {
          categoria: 'contato',
          especificacao: ['Endereço', 'Telefone'],
        },
        {
          categoria: 'profissionais',
          especificacao: ['Emprego'],
        },
      ],
      link: '',
      observacoes:
        'Vendia relatórios completos sobre qualquer pessoa; bloqueado pela Justiça com colaboração internacional.',
      fontes: [
        // A página da Wikipédia relata que o site vendia relatórios contendo RG, CPF, endereço completo, telefone, nomes de familiares e vizinhos, dados de emprego e empresas, utilizando fontes como cartórios, decisões judiciais, diários oficiais e até hacking
        'https://pt.wikipedia.org/wiki/Tudo_Sobre_Todos',
        // Matéria do NIC.br/Gazeta do Povo descreve que o portal disponibilizava documentos, endereços e lista de vizinhos mediante pagamento e que coletava dados de cartórios e decisões judiciais
        'https://www.nic.br/noticias/noticia/identidade-bloqueio-do-site-tudo-sobre-todos/',
        // O mesmo texto menciona que a Justiça Federal determinou o bloqueio do site e solicitou às operadoras que o impedissem de funcionar
        'https://www.nic.br/noticias/noticia/identidade-bloqueio-do-site-tudo-sobre-todos/',
        // Reportagem da Exame informa que o Tudo Sobre Todos vendia dados como RG, CPF, endereço e redes sociais por até R$79, com partes básicas gratuitas
        'https://exame.com/tecnologia/site-tudo-sobre-todos-venda-de-dados-pessoais-de-brasileiros/'
      ],
    },
    {
      name: 'Consulta Pública (btcmt.com.br)',
      legalidade: 'Ilegal',
      setor: 'Busca de CPF/CNPJ',
      dados: [
        {
          categoria: 'pessoais',
          especificacao: ['Nome', 'Data de nascimento', 'Nome da mãe'],
        },
        {
          categoria: 'documentos',
          especificacao: ['CPF'],
        },
        {
          categoria: 'contato',
          especificacao: ['Endereço', 'Telefones'],
        },
      ],
      link: '',
      observacoes:
        'Clonava bases de CPF e CNPJ; domínio congelado em 2018 pelo MPDFT.',
      fontes: [
        // MPDFT informa que o site Consulta Pública disponibilizava dados pessoais de brasileiros extraídos de bases públicas e que o domínio foi congelado e encaminhado ao MPF/DF
        'https://www.mpdft.mp.br/portal/index.php/comunicacao-menu/sala-de-imprensa/noticias/noticias-2018/10099-sites-de-consulta-de-informacoes-pessoais-de-brasileiros-podem-estar-utilizando-base-de-dados-de-orgaos-publicos',
        // O artigo também menciona que sites semelhantes como Nomes Brasil e Tudo Sobre Todos já haviam sido removidos anteriormente
        'https://www.mpdft.mp.br/portal/index.php/comunicacao-menu/sala-de-imprensa/noticias/noticias-2018/10099-sites-de-consulta-de-informacoes-pessoais-de-brasileiros-podem-estar-utilizando-base-de-dados-de-orgaos-publicos'
      ],
    },
    {
      name: 'Telefone.Ninja',
      legalidade: 'Ilegal',
      setor: 'Listas telefônicas',
      dados: [
        {
          categoria: 'contato',
          especificacao: ['Números de telefone (inclusive celulares)', 'Endereços', 'E-mails'],
        },
      ],
      link: '',
      observacoes:
        'Site de busca telefônica com dados de brasileiros; saiu do ar após denúncias e ações da Anatel e IDEC.',
      fontes: [
        // A Wikipédia informa que o site Telefone.Ninja disponibilizava números de telefone e endereços de pessoas físicas e jurídicas e foi retirado do ar em 2017 após pressão de órgãos públicos e críticas sobre violação de privacidade
        'https://pt.wikipedia.org/wiki/Telefone.Ninja',
        // O mesmo artigo menciona que a Anatel declarou que o site violava leis de privacidade e que entidades como o Idec pretendiam acionar as autoridades
        'https://pt.wikipedia.org/wiki/Telefone.Ninja'
      ],
    },
    {
      name: 'Fui Vazado!',
      legalidade: 'Ilegal',
      setor: 'Alerta de vazamento',
      dados: [
        {
          categoria: 'contato',
          especificacao: ['Telefone', 'E-mail'],
        },
        {
          categoria: 'financeiros',
          especificacao: ['Renda'],
        },
        {
          categoria: 'pessoais',
          especificacao: ['Outras categorias associadas ao CPF vazado'],
        },
      ],
      link: '',
      observacoes:
        'Plataforma que permitia consultar se seus dados estavam no megavazamento de 2021; removida por ordem judicial.',
      fontes: [
        // A Wikipédia relata que o Fui Vazado permitia que usuários consultassem com CPF e data de nascimento quais categorias de dados haviam sido vazadas e que o site foi bloqueado por ordem do STF
        'https://pt.wikipedia.org/wiki/FuiVazado!',
        // O mesmo artigo explica que o STF determinou a remoção imediata do site após investigação e que a plataforma reutilizava dados do megavazamento de 2021
        'https://pt.wikipedia.org/wiki/FuiVazado!'
      ],
    },
    {
      name: 'Megavazamento 2021 (RaidForums)',
      legalidade: 'Ilegal',
      setor: 'Vazamento massivo',
      dados: [
        {
          categoria: 'pessoais',
          especificacao: ['Nome', 'Foto', 'Escolaridade'],
        },
        {
          categoria: 'documentos',
          especificacao: ['CPF'],
        },
        {
          categoria: 'contato',
          especificacao: ['Endereço', 'Telefone', 'E-mails'],
        },
        {
          categoria: 'financeiros',
          especificacao: ['Renda', 'Score de crédito', 'Benefícios do INSS'],
        },
      ],
      link: '',
      observacoes:
        'Fórum que vendeu base com dados de 223 milhões de brasileiros; investigado pelo MPF e ANPD.',
      fontes: [
        // A Wikipédia explica que o megavazamento de 2021 expôs dados de mais de 223 milhões de brasileiros (CPF, nome, endereço, telefone, fotos, renda, score de crédito, benefícios e outros) e ficou conhecido como vazamento de dados do fim do mundo
        'https://pt.wikipedia.org/wiki/Vazamento_de_dados_do_fim_do_mundo',
        // O mesmo artigo descreve que o conjunto de dados foi colocado à venda em fóruns da internet por valores em bitcoins e que os dados provinham de múltiplas fontes, incluindo serviços de crédito
        'https://pt.wikipedia.org/wiki/Vazamento_de_dados_do_fim_do_mundo',
        // A matéria também destaca que a exposição alcançou praticamente toda a população brasileira, vivos e falecidos, sendo considerado o maior vazamento de dados pessoais do país
        'https://pt.wikipedia.org/wiki/Vazamento_de_dados_do_fim_do_mundo'
      ],
    },
  ],
};