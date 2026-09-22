# E-lixo Zero · COP 30

Landing page educacional sobre **lixo eletrônico e Objetivos de Desenvolvimento Sustentável (ODS)**, com foco na **COP 30** (Belém do Pará). Trabalho escolar da turma do **1.º ano K do Ensino Médio — Colégio Cruzeiro do Sul, São Miguel (São Paulo/SP), 2026**.

Site no ar: **https://arthurdotom.github.io/ODS/**

## Tema e objetivos

- Explicar o problema do lixo eletrônico com dados verificáveis (Global E-waste Monitor 2024 — UNITAR/ITU)
- Conectar o tema aos ODS 12, 13, 14 e 15 da ONU
- Mostrar como descartar eletrônicos corretamente (logística reversa, PEVs)
- Engajar com jogo externo, quiz interativo, vídeo e mapa da escola

## Equipe

Alunos do 1.º ano K do Ensino Médio — Colégio Cruzeiro do Sul, São Miguel. Por privacidade, sem nomes individuais no repositório.

- Instagram da sala: https://www.instagram.com/1k.cruzeirodosul/
- Instagram do colégio: https://www.instagram.com/colegiocruzeirodosul/

## Tecnologias

- **React 18 + Vite 5** (JavaScript, sem TypeScript)
- **Tailwind CSS 3** (mobile-first, paleta sustentável: verde-esmeralda, lima, `#eff6dc`)
- **Animações em CSS puro** (respeitando `prefers-reduced-motion`)
- **Vitest + Testing Library** (testes: `npm test`)
- Hospedagem: **GitHub Pages** com deploy automático via GitHub Actions

## Estrutura

```
├── index.html              # base + metas de compartilhamento (Open Graph)
├── public/
│   ├── turma-1k.jpg        # foto da turma
│   └── videos/turma.mp4    # vídeo da turma (720p, ~6 MB) + poster
├── src/
│   ├── App.jsx             # composição das seções
│   ├── data.js             # estatísticas, ODS, passos e práticas
│   └── components/         # 60+ componentes: Header, Hero, Problema, ODS,
│                           # Jornada, Numeros, Mitos, Brasil, Solucoes, Calculadora,
│                           # Simulador, Jogo, Memoria, Arcade, Quiz (+níveis), Ranking,
│                           # Enquete, Votacao, CTA, Checklist, Desafio30, QuemFez,
│                           # Faq, Sobre, Encerramento, Footer, ...
└── .github/workflows/deploy.yml  # build + deploy automático
```



## Referências de dados

- Global E-waste Monitor 2024 — ITU / UNITAR
- Agenda 2030 e ODS — Organização das Nações Unidas
- COP 30 Belém — UNFCCC
- PNRS (Lei 12.305/2010) e Decreto 10.240/2020 — logística reversa

## Créditos de mídia

- Fotos genéricas: Unsplash · Foto e vídeo da turma: acervo próprio · Ícones: SVG próprios

## Como rodar e publicar

```powershell
npm install
npm run dev    # abre em http://localhost:5173
npm run build  # gera a pasta dist/ (validar antes de enviar)
npm test       # roda os testes automatizados (Vitest)
```

Qualquer push na `main` republica o site via GitHub Actions. Seções atuais: Hero, Problema,
Jornada, Números, ODS, Mitos, Brasil, Soluções, Calculadora, Jogo, Memória, Arcade, Quiz
(básico + avançado + maratona), Ranking, Enquete, CTA, Checklist, Quem fez, FAQ e Sobre.

## Acessibilidade e teclado

- Contraste AA, foco visível, `aria-live` nos placares e skip link
- Atalhos: teclas `1–9` pulam às seções, `T` volta ao topo, `F` vai ao fim, `?` abre a ajuda
- Para testar com leitor de tela (NVDA, grátis): abra o site e navegue com `Tab`
  (ordem: menu → conteúdo → quiz → rodapé), conferindo se todos os botões têm nome audível
