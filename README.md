# README

## Descrição

Esta é uma página web desenvolvida com HTML e TailwindCSS para um site de reservas de resorts. A página contém um cabeçalho com links de navegação, um banner de pesquisa, uma seção de resorts em destaque, uma grade de resorts e um formulário de pesquisa adicional, além de um rodapé com links para redes sociais.

## Estrutura do Projeto

```plaintext
/
├── img/
│   ├── hero-image-1.png
│   ├── featured-img.png
│   ├── hotel-1.jpeg
│   ├── hotel-2.jpeg
│   ├── hotel-3.jpeg
│   ├── hotel-4.jpeg
│   ├── image-shadow.png
│   ├── icon-facebook.png
│   ├── icon-instagram.png
├── output.css
└── index.html
```

## Tecnologias Utilizadas

- **HTML5**: Para a estrutura da página.
- **TailwindCSS**: Para estilização e layout.

## Como Usar

1. **Clone o Repositório**

   ```bash
   git clone <URL-do-repositório>
   cd <nome-do-repositório>
   ```

2. **Abra o Arquivo HTML**

   Abra o arquivo `index.html` no seu navegador preferido.

## Estrutura da Página

### Header

O cabeçalho contém um logo e links de navegação:

```html
<div class="container max-w-5xl mx-auto px-4 h-24 flex items-center">
    <div class="font-black">LOGO</div>
    <ul class="ml-auto flex space-x-4">
        <li><a href="" class="text-sm text-gray-600 hover:text-gray-800 hover:underline">Como reservar</a></li>
        <li><a href="" class="text-sm text-gray-600 hover:text-gray-800 hover:underline">Sobre nós</a></li>
        <li><a href="" class="text-sm text-gray-600 hover:text-gray-800 hover:underline">Informações</a></li>
        <li><a href="" class="text-sm text-gray-600 hover:text-gray-800 hover:underline">Contato</a></li>
    </ul>
</div>
```

### Banner

O banner possui uma imagem de fundo e um formulário de pesquisa:

```html
<div style="background: url('./img/hero-image-1.png');height: 450px;">
    <div class="container max-w-5xl mx-auto px-4 h-full flex items-center justify-center">
        <div>
            <div class="text-center">
                <h1 class="text-gray-200 text-3xl mb-1">Onde você quer ir?</h1>
                <p class="text-green-50">Escolha o estado e cidade para achar os melhores resorts.</p>
            </div>
            <div class="mt-7">
                <form class="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    <select class="bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500">
                        <option value="">Escolha o estado</option>
                    </select>
                    <select class="bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500">
                        <option value="">Escolha a cidade</option>
                    </select>
                    <button class="col-span-2 lg:col-span-1 inline-flex items-center justify-center text-yellow-900 bg-yellow-500 font-medium px-4 py-2 rounded">
                        <svg class="w-4 h-4 mr-2" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
                        </svg> Pesquisar resorts
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>
```

### Resort em Destaque

Seção com detalhes de um resort em destaque:

```html
<div class="container max-w-5xl mx-auto px-4 py-20">
    <div class="flex flex-col-reverse lg:flex-row">
        <div class="lg:pr-10">
            <div class="text-sm text-gray-400 font-medium">RESORT EM DESTAQUE</div>
            <div class="text-2xl">Ecoresort Praia do Forte Bahia</div>
            <div class="text-sm text-gray-400 font-medium mt-2">Hotel qualidade 5 estrelas</div>
            <div class="text-sm text-gray-400 font-medium mt-4">
                <p class="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam in, quae repellendus libero eum consectetur. Fuga aperiam voluptatibus hic ab illo culpa, eaque, nesciunt, aspernatur ut cum incidunt nam suscipit.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam in, quae repellendus libero eum consectetur. Fuga aperiam voluptatibus hic ab illo culpa, eaque, nesciunt, aspernatur ut cum incidunt nam suscipit.</p>
            </div>
            <div class="mt-4">
                <a class="inline-flex items-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded">
                    Solicitar reserva
                    <svg class="h-4 w-4 ml-2" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                    </svg>
                </a>
            </div>
        </div>
        <div class="flex-shrink-0 lg:ml-auto mb-5 lg:mb-0 rounded-sm overflow-hidden">
            <img src="./img/featured-img.png" alt="" class="w-full">
        </div>
    </div>
</div>
```

### Grade de Resorts

Uma grade com vários resorts:

```html
<div class="container max-w-5xl mx-auto px-4">
    <div>
        <h3 class="text-2xl text-gray-500 font-semibold text-center mb-8">Conheça mais resorts</h3>
        <div class="md:grid md:grid-cols-4 md:grid-rows-2 md:gap-6 space-y-6 md:space-y-0">
            <div class="relative lg:col-span-2 lg:row-span-2 rounded-md overflow-hidden">
                <div class="absolute bottom-0 pl-4 pb-4 text-white font-bold z-20">Beach Park resort</div>
                <img src="./img/image-shadow.png" alt="" class="absolute bottom-0 left-0 right-0 h-20 z-10">
                <img src="./img/hotel-1.jpeg" alt="" class="w-full h-full object-cover">
            </div>
            <div class="relative md:col-span-2 md:h-60 rounded-md overflow-hidden">
                <div class="absolute bottom-0 pl-4 pb-4 text-white font-bold z-20">Salinas do Maragogi Resort</div>
                <img src="./img/image-shadow.png" alt="" class="absolute bottom-0 left-0 right-0 h-20 z-10">
                <img src="./img/hotel-2.jpeg" alt="" class="w-full h-full object-cover">
            </div>
            <div class="relative rounded-md overflow-hidden">
                <div class="absolute bottom-0 pl-4 pb-4 text-white font-bold z-20">Grand Palladium</div>
                <img src="./img/image-shadow.png" alt="" class="absolute bottom-0 left-0 right-0 h-20 z-10">
                <img src="./img/hotel-3.jpeg" alt="" class="w-full h-full object-cover">
            </div>
            <div class="relative rounded-md overflow-hidden">
                <div class="absolute bottom-0 pl-4 pb-4 text-white font-bold z-20">Arraial d' Ajuda Eco Resort</div>
                <img src="./img/image-shadow.png" alt="" class="absolute bottom-0 left-0 right-0 h-20 z-10">
                <img src="./img/hotel-4.jpeg" alt="" class="w-full h-full object-cover">
            </div>
        </div>
    </div>
</div>
```

### Formulário de Pesquisa Adicional

Um formulário de pesquisa adicional para encontrar resorts:

```html
<div class="py-20">
    <div class="container max-w-5xl mx-auto px-4 flex justify-center">
        <form class="space-x-4">
            <select class="bg-gray-50 px-3

