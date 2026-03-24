# ABECLIN — Site Reconstruído
## Guia de Implantação e Checklist

---

## Estrutura de arquivos

```
abeclin/
├── index.html              ← Página pilar (home)
├── endocrinologia.html     ← Serviço 1
├── oftalmologia.html       ← Serviço 2
├── cirurgia-plastica.html  ← Serviço 3
├── equipe.html             ← Institucional
├── convenios.html          ← Suporte à conversão
├── css/
│   └── style.css           ← Folha de estilos compartilhada
├── js/
│   └── main.js             ← JavaScript compartilhado
├── images/
│   └── (ver checklist abaixo)
└── README.md               ← Este arquivo
```

---

## Checklist de imagens a providenciar

Todas as imagens devem ser colocadas na pasta `images/` com os nomes exatos abaixo.
Formato recomendado: JPG (fotos), PNG (logo/favicon), SVG (favicon vetorial).
Compressão recomendada: use https://squoosh.app antes de publicar.

### Imagens obrigatórias (sem elas há elementos vazios)

| Nome do arquivo | Descrição | Dimensão sugerida | Origem |
|---|---|---|---|
| `logo-abeclin.png` | Logotipo da clínica em PNG com fundo transparente | 400×120px | Criar |
| `favicon.svg` | Favicon vetorial (inicial A ou símbolo) | 32×32px | Criar |
| `fachada-abeclin-guarulhos.jpg` | Foto da fachada ou recepção da clínica | 1040×1300px | Fotografar |
| `og-abeclin.jpg` | Imagem Open Graph para compartilhamento social | 1200×630px | Criar |

### Fotos dos médicos (recomendadas — substituem os placeholders cinzas)

| Nome do arquivo | Alt text já configurado no HTML | Dimensão sugerida |
|---|---|---|
| `dra-edna-nakano-endocrinologista-guarulhos.jpg` | "Dra. Edna Shizuka Abe Nakano, endocrinologista em Guarulhos — CRM 16752" | 560×700px |
| `dr-claudio-nakano-oftalmologista-guarulhos.jpg` | "Dr. Claudio Gilberto Yuji Nakano, oftalmologista em Guarulhos — CRM 131300" | 560×700px |
| `dra-cristina-nakano-cirurgia-plastica-guarulhos.jpg` | "Dra. Cristina Sayuri Nakano, cirurgiã plástica em Guarulhos — CRM 115912" | 560×700px |

### Imagens originais do site (reutilizadas do site atual)

Baixe do site atual enquanto ele ainda estiver no ar e renomeie conforme abaixo:

| Nome do arquivo novo | Origem no site atual | Seção onde aparece |
|---|---|---|
| `olho-humano-com-catarata-ilustracao-abeclin.jpg` | Página Oftalmologia — alt "Olho Humano com Catarata" | oftalmologia.html — seção catarata |
| `simulacao-visao-paciente-com-catarata.jpg` | Página Oftalmologia — alt "Visão simulada de paciente com catarata" | oftalmologia.html — seção catarata |
| `lente-intraocular-monofocal-cirurgia-catarata-abeclin.jpg` | Página Oftalmologia — alt "Fig. A" | oftalmologia.html — seção lentes |
| `lente-intraocular-multifocal-visao-sem-oculos-abeclin.jpg` | Página Oftalmologia — alt "Fig. B" | oftalmologia.html — seção lentes |
| `reuniao-grupo-pe-diabetico-guarulhos-abeclin.jpg` | Página Endocrinologia — reunião do grupo | endocrinologia.html — seção pé diabético |
| `coral-natal-pacientes-diabeticos-guarulhos-dra-edna.jpg` | Página Endocrinologia — coral de natal | endocrinologia.html — seção educação |

### Imagens Open Graph por página (para melhor aparência ao compartilhar)

| Nome do arquivo | Página |
|---|---|
| `og-endocrinologia.jpg` | endocrinologia.html |
| `og-oftalmologia.jpg` | oftalmologia.html |
| `og-cirurgia-plastica.jpg` | cirurgia-plastica.html |
| `og-equipe.jpg` | equipe.html |
| `og-convenios.jpg` | convenios.html |

---

## Como ativar as fotos dos médicos

Em cada página de médico e em `equipe.html`, há um bloco comentado assim:

```html
<!-- <img src="images/dra-edna-nakano-endocrinologista-guarulhos.jpg"
     alt="Dra. Edna Shizuka Abe Nakano, endocrinologista em Guarulhos — CRM 16752"
     class="medico-foto" loading="lazy"> -->
```

1. Salve a foto do médico na pasta `images/` com o nome exato
2. Remova os comentários `<!--` e `-->` ao redor do `<img>`
3. Remova (ou oculte com CSS) o `<div>` placeholder cinza logo acima do `<img>`

---

## Como configurar os pixels de rastreamento

Todos os comentários de pixel estão no `<head>` do `index.html`, na seção claramente marcada:

```
<!-- ═══ PIXELS DE RASTREAMENTO ═════════════════════════════ -->
```

1. **GTM (recomendado):** Substitua `GTM-XXXXXXX` pelo seu ID real e descomente o bloco
2. **GA4 direto:** Substitua `G-XXXXXXXXXX` pelo seu Measurement ID e descomente
3. **Meta Pixel:** Substitua `SEU_PIXEL_ID` pelo ID do seu pixel e descomente

Em cada uma das outras 5 páginas há um comentário:
```
<!-- ═══ PIXELS: copie o bloco de rastreamento do index.html ═ -->
```
Cole o mesmo bloco de pixels do `index.html` neste local em cada página.

---

## Como atualizar o número de WhatsApp

O número está centralizado em `js/main.js`, linha:

```javascript
const WA_NUMBER = '5511964792595';
```

Formato: `55` (código país) + `11` (DDD) + número sem espaços ou caracteres especiais.

As mensagens pré-preenchidas de cada botão são configuradas via atributo `data-wa` diretamente no HTML de cada página. Exemplo:

```html
<a href="#" data-wa="Olá! Gostaria de agendar uma consulta de Endocrinologia.">
```

---

## Checklist antes de publicar

### Obrigatório
- [ ] Substituir todas as fotos placeholder pelos `<img>` reais dos médicos
- [ ] Adicionar logo real (substituindo o texto "ABECLIN" no nav se necessário)
- [ ] Confirmar endereço completo da clínica e atualizar no footer e Schema.org
- [ ] Configurar pixels de rastreamento (GTM + GA4) em todas as páginas
- [ ] Testar todos os links de WhatsApp com os números corretos
- [ ] Testar formulário de contato (se for adicionar um)
- [ ] Verificar se todos os convênios da lista ainda estão ativos
- [ ] Adicionar `sitemap.xml` após hospedagem definida
- [ ] Configurar `robots.txt`

### Recomendado
- [ ] Adicionar Google Business Profile e sincronizar com Schema.org
- [ ] Configurar redirects 301 das URLs antigas (se houver) para as novas
- [ ] Submeter sitemap no Google Search Console
- [ ] Testar acessibilidade com a extensão axe DevTools
- [ ] Testar responsivo em iOS Safari e Android Chrome
- [ ] Comprimir todas as imagens antes do upload (squoosh.app)
- [ ] Configurar CDN para servir as imagens (Cloudflare gratuito funciona bem)

---

## Schema.org — o que completar

Em `index.html`, no bloco `@type: PostalAddress`, adicionar:

```json
"streetAddress": "Rua Exemplo, 123 — Sala 45",
"postalCode": "07000-000",
"addressLocality": "Guarulhos"
```

Em `@type: MedicalClinic`, adicionar horário de funcionamento:

```json
"openingHoursSpecification": [
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "18:00"
  }
]
```

---

## Tecnologias utilizadas

- HTML5 semântico (sem frameworks)
- CSS3 com Custom Properties (variáveis) — sem dependências externas
- JavaScript vanilla (sem jQuery ou bibliotecas)
- Google Fonts: Cormorant Garamond + DM Sans
- Schema.org JSON-LD para SEO estruturado
- WCAG 2.1 AA: skip links, aria-labels, aria-expanded, aria-current, roles semânticos, foco visível

---

## Suporte

Arquivos gerados por projeto de reconstrução do site abeclin.com.br.
Para dúvidas sobre implementação, consulte o histórico do projeto.
