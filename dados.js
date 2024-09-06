let dados = [
    { 
       titulo: "Hyundai HB20",
       descricao: "O HB20 é sinônimo de segurança e tranquilidade ao dirigir. Equipado com diversos recursos de segurança, como airbags, freios ABS e controle de estabilidade, ele proporciona a você e sua família a proteção que vocês merecem.",
       imagem: "https://cdn.motor1.com/images/mgl/KbnopN/s1/comparativo-vw-polo-highline-vs.-chevrolet-onix-premier-vs.-hyundai-hb20-platinum-plus-vs.-honda-city-hatch-touring.jpg",
       link: "https://www.hyundai.com.br/veiculos/novo-hyundai-hb20.html",
       tags: "economico barato hb hb20 2024 hyundai"
    },
    {
        titulo: "Chevrolet Onix",
        descricao: "O Chevrolet Onix 2025 traz atualizações que garantem ainda mais potência, segurança e tecnologia para o queridinho do Brasil. Surpreenda-se com um dos consumos de combustível mais econômicos da categoria.",
        imagem: "https://th.bing.com/th/id/R.e4f07bd96627c49dd3ffe8aa12b0960a?rik=8oVCMASjieh3JA&pid=ImgRaw&r=0",
        link: "https://www.chevrolet.com.br/carros/novo-onix?ppc=MICROSOFT_700000001908599_71700000113260198_58700008504597285_p80534453188_&gclid=b282c529db1a11d70950a3f065a88904&gclsrc=3p.ds&msclkid=b282c529db1a11d70950a3f065a88904",
        tags: "economico barato completo gm"
    },
    {
        titulo: "Toyota Corolla",
        descricao: "Chegou o novo Corolla 2024, o ícone dos sedãs em sua melhor versão. O carro que representa a qualidade Toyota, agora com mais tecnologia, segurança e design moderno.",
        imagem: "https://th.bing.com/th/id/OIP.iCCP1fyMAK6gxUEU3PIBfwHaE8?rs=1&pid=ImgDetMain",
        link: "https://www.toyota.com.br/modelos/corolla",
        tags: "comforto sedan completo"
    },
    {
        titulo: "Fiat Strada",
        descricao: "A Fiat Strada é a picape mais vendida do Brasil, conhecida por sua versatilidade e robustez.",
        imagem: "https://www.clubmotor.com.br/wp-content/uploads/2022/12/Fiat-Strada-2024-Preco-consumo-e-versoes.jpg",
        link: "https://www.fiat.com.br/carros/strada",
        tags: "picape compacta trabalho fiat"
    },
    {
        titulo: "Volkswagen Gol",
        descricao: "O Volkswagen Gol é um dos carros mais populares do Brasil, conhecido por sua durabilidade e baixo custo de manutenção.",
        imagem: "https://th.bing.com/th/id/R.e5cf97fd39b59ceff2042e0760a5857b?rik=12qEsu3BAFJjVw&pid=ImgRaw&r=0",
        link: "https://www.vw.com.br/carros/gol",
        tags: "popular economico compacto vw"
    },
    {
        titulo: "Chevrolet Tracker",
        descricao: "O Chevrolet Tracker é um SUV compacto que oferece um bom equilíbrio entre design, tecnologia e espaço interno.",
        imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgq2qCRrQZ2cRUecETQ4278qZAz3QuqxiuzNsk0jFNUaQdVxJ1gHxKohczkVRArSSbNBb_6i4UsQ3ALmM74EOqEQpjG9oWtnHQaz-7SBJFGx_LsZmAqxvyioNhSRxAQDJ-GRdtlHWCd_HHNObzh34BbVTciEl_clFdnbxsDm-brfMdYelgGUoXrifH4/s2560/Chevrolet-Tracker-RS-1.jpg",
        link: "https://www.chevrolet.com.br/carros/tracker",
        tags: "suv compacto gm"
    },
    {
        titulo: "Renault Kwid",
        descricao: "O Renault Kwid é o SUV dos compactos: design robusto e imponente, linhas marcantes, assinatura em LED, rodas de liga leve diamantadas 14” e muito mais. Aproveite a oferta especial que preparamos para você e coloque um Renault Kwid 0km na sua garagem.",
        imagem: "https://th.bing.com/th/id/R.73cac3e9e6fe5d27d44ffdc522231dca?rik=7IqQSxOd2jweAw&riu=http%3a%2f%2fconteudo.imguol.com.br%2fc%2fentretenimento%2f90%2f2022%2f01%2f17%2frenault-kwid-2023-1642458928783_v2_1920x1280.jpg&ehk=QbPr3%2fprgMWRQ%2b1%2fkKSOQWqlVb3k2Xz0qWmyI0uHra8%3d&risl=&pid=ImgRaw&r=0",
        link: "https://www.renault.com.br/veiculos-de-passeio/kwid.html",
        tags:"economico popular barato baixo-custo renault"
    },
    {
        titulo: "Honda HR-V",
        descricao:"Grandioso em cada detalhe",
        imagem: "https://www.cargeeks.net/wp-content/uploads/2022/05/HRV-1-min.png",
        link: "https://www.honda.com.br/automoveis/newhrv",
        tags:"suv espaco conforto durabilidade honda"
    },
    {
        titulo: "Jeep Compass",
        descricao: "Seu novo Jeep Compass tem novas versões, novas grades dianteiras, rodas de até 19”, pintura das partes inferiores e teto solar panorâmico. Todas essas novidades com DNA de um autêntico Jeep.",
        imagem: "https://s2-autoesporte.glbimg.com/7HklJZ9JISCxUD-SRZmGA3Bei68=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/0/T/ll5NsoRi226EN2Ks9FNg/jps-13.jpg",
        link: "https://www.jeep.com.br/compass/",
        tags:"conforto esportivo suv jeep"
    },
    {
        titulo: "Nissan Kicks",
        descricao:"Descubra um novo estilo de vida com o design extraordinário do Nissan Kicks, sua tecnologia japonesa e todo o conforto que se adapta aos seus planos.",
        imagem: "https://th.bing.com/th/id/R.17d1dc8a8e738b7f623e907a6c507c58?rik=FBlHo24epYJcaA&pid=ImgRaw&r=0",
        link: "https://www.nissan.com.br/veiculos/modelos/novo-kicks.html",
        tags:"suv espaco tecnologia durabilidade nissan" 
    },
    {
        titulo: "Volkswagen Polo",
        descricao:"Reconhecido pela revista Quatro Rodas e pela KBB, o Polo recebeu o prêmio de Hatch Compacto de Referência com Melhor Valor de Revenda. O nosso líder de vendas é a escolha perfeita para quem busca design, tecnologia e segurança garantindo sempre o melhor investimento.",
        imagem: "https://conteudo.imguol.com.br/c/parceiros/32/2023/07/15/vw-polo-highline-170tsi-2023-1689437360588_v2_1920x1080.jpg",
        link: "https://www.vw.com.br/pt/carros/polo.html",
        tags:"hatch completo economico mais vendido vw"
    },
    {
        titulo: "Fiat Pulse",
        descricao: "Suas definições de motor turbo acabam e ser atualizadas: moderno da cabeça aos pés e desenvolvido com tecnologia global, o novo Motor Turbo 200 Flex entrega a combinação perfeita entre a melhor performance do segmento, com 130 cv de potência e 200 Nm de torque, e ainda um consumo de combustível incrível!",
        imagem: "https://th.bing.com/th/id/OIP.WmOC9WSv8SmNbURbOB0UCAAAAA?rs=1&pid=ImgDetMain",
        link: "https://pulse.fiat.com.br/",
        tags:"economico suv-compacto hatch moderno fiat"
    },
    {
        titulo: "Peugeot 208",
        descricao: "A união do design e tecnologia, em uma versão ainda mais potente.Conheça o Peugeot 208!",
        imagem: "https://uploads.vrum.com.br/2022/06/Peugeot-208-1.0-1-scaled.jpg",
        link: "https://carros.peugeot.com.br/gama/peugeot-208.html",
        tags:"hatch economico compacto potente moderno"
    },
    {
        titulo: "Toyota Yaris",
        descricao: "Linhas dinâmicas que fluem em toda a lateral do veículo. Uma nova grade inspirada no one motion design, se utiliza de formas contínuas e que junto com os faróis em LED, expressam uma harmonia de um carro urbano sem perder a esportividade.",
        imagem: "https://th.bing.com/th/id/OIP.N7Nv5Hf7UDH-TJhKi46flAHaFG?rs=1&pid=ImgDetMain",
        link: "https://www.toyota.com.br/modelos/yaris-hatch",
        tags:"espaco durabilidade confianca moderno"
    },
    {
        titulo: "Volkswagen Nivus",
        descricao: "Lindo, versátil e moderno. Muito prazer, eu sou o Volkswagen Nivus!",
        imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJAjl6sy5wYjC-if-6him-lHVNvBx9hgITy7Ch0qX6flTv2AFo0yTiY-fsgsbV-LzApbHsizSfam71RTwPGc2ObfKG-PEBhGD85WRgi98AGUGcOtI51zU-zH_mdA5bKXDu2KLvaFkRqLPm-bMllAw_9A923rUdLLhAQh9Lu3Y6KS0gEZpwHN9AiNWn/s800/Volkswagen-Nivus-2023%20(3).jpg",
        link: "https://www.vw.com.br/pt/carros/nivus.html",
        tags:"bonito conforto espaco moderno vw"
    },
];