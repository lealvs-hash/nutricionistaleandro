# Nutricionista Leandro Alves - Website Oficial (v2.0)

Site moderno, responsivo e de alta conversão desenvolvido para o nutricionista **Paulo Leandro Alves** (CRN2 20221), com foco em **Nutrição Clínica, Saúde do Idoso (Geriatria / PICCAP HCPA), Emagrecimento Sem Restrições, Nutrição Esportiva e Avaliação Antropométrica ISAK Internacional**.

---

## 🚀 Tecnologias Utilizadas

- **React 18 & Vite**: Carregamento ultra-rápido, arquitetura modular e excelente experiência do usuário.
- **Tailwind CSS**: Design system sofisticado (tons verde esmeralda, floresta e neutros aconchegantes), tipografia editorial (*Playfair Display* e *Inter*).
- **Lucide Icons**: Conjunto de ícones leves e consistentes.
- **Vercel Ready (`vercel.json`)**: Configurado para deploy contínuo em 1 clique na Vercel.
- **SEO & Google Ads Otimizados**:
  - Tags do Google Ads e conversões (`AW-17752409667/oZQZCOrzm5UcEMOMgZfC`)
  - Schema Markup JSON-LD completo (`MedicalBusiness` / `Dietitian`) com endereço no MedPlex Santana, Porto Alegre
  - Verificação Google Search Console
  - `sitemap.xml` e `robots.txt`

---

## 📁 Estrutura do Projeto

```
nutricionista-leandro/
├── public/
│   ├── images/                # Fotos tratadas em alta resolução (consultório, perfil, ISAK)
│   ├── favicon.png            # Favicon do site
│   ├── robots.txt             # Regras para buscadores (Google, Bing)
│   ├── sitemap.xml            # Mapa do site para indexação
│   └── CNAME                  # Domínio personalizado
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Menu fixo com blur, navegação e botão de agendamento
│   │   ├── Hero.jsx           # Seção principal com foto, proposta de valor e credenciais
│   │   ├── StatsRibbon.jsx    # Faixa com os 4 pilares de atendimento
│   │   ├── InteractiveQuiz.jsx# Simulador interativo de perfil nutricional (alta conversão)
│   │   ├── About.jsx          # História pessoal, vivência hospitalar (PICCAP/HCPA) e diplomas
│   │   ├── GeriatricsSection.jsx # Acordeão interativo para idosos, sarcopenia, disfagia e sondas
│   │   ├── WeightLossSection.jsx # Reeducação sem terrorismo e preservação de massa magra
│   │   ├── SportsSection.jsx  # Nutrição esportiva, 20+ anos de treino e periodização
│   │   ├── IsakSection.jsx    # Seção sobre a certificação ISAK e roupas recomendadas
│   │   ├── ServiceModes.jsx   # Na Clínica (MedPlex), Domiciliar (Home Care) e Online
│   │   ├── Methodology.jsx    # A jornada do paciente em 4 etapas
│   │   ├── Plans.jsx          # Acompanhamentos Trimestral, Semestral e Anual (CFN 599/2018)
│   │   ├── LocationSection.jsx# Mapa interativo e detalhes do MedPlex Santana
│   │   ├── Testimonials.jsx   # Histórias e avaliações de pacientes
│   │   ├── Faq.jsx            # Perguntas frequentes com respostas expansíveis
│   │   ├── InstagramCta.jsx   # Chamada para seguir @leandro.alves.nutri
│   │   ├── BookingModal.jsx   # Modal de agendamento rápido com direcionamento ao WhatsApp
│   │   ├── FloatingWhatsapp.jsx # Botão flutuante animado do WhatsApp com balão informativo
│   │   └── Footer.jsx         # Rodapé completo com avisos éticos e contatos
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── vercel.json                # Configuração de rotas e segurança da Vercel
├── vite.config.js
└── tailwind.config.js
```

---

## 🛠️ Como Executar Localmente

1. Abra o terminal nesta pasta (`nutricionista-leandro`):
   ```bash
   npm run dev
   ```
2. O site abrirá no seu navegador em `http://localhost:3000`.

---

## ☁️ Como Publicar na Vercel com seu Domínio Registro.br

### Método 1: Via GitHub (Recomendado)
1. Crie um repositório no seu GitHub (ex: `nutricionista-leandro`).
2. Conecte o repositório local e envie o código:
   ```bash
   git remote add origin https://github.com/SEU_USUARIO/nutricionista-leandro.git
   git branch -M main
   git push -u origin main
   ```
3. Acesse [vercel.com](https://vercel.com) com sua conta.
4. Clique em **"Add New..."** > **"Project"** e selecione o repositório `nutricionista-leandro`.
5. O Framework Preset será detectado automaticamente como **Vite**.
6. Clique em **Deploy**.

### Configurar o Domínio no Registro.br:
Na Vercel, acesse **Project Settings > Domains** e adicione:
- `www.nutricionistaleandro.com.br`
- `nutricionistaleandro.com.br`

No **Registro.br** (zona de DNS do domínio):
- Entrada **A**: apontando para o IP fornecido pela Vercel (`76.76.21.21`).
- Entrada **CNAME** para `www`: apontando para `cname.vercel-dns.com`.
