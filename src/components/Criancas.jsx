import indexCss from "./Criancas.module.css"

function Criancas(){
    return (
        <div>
            {/*Header*/}
            <div className={indexCss.header}>
                <img src="/img/logo-quebra-cabeça.png"/>
                <div className={indexCss.pesquisar}>
                    <input placeholder="Encontre tudooo..."/>
                    <button><img src="/img/lupa.png"/></button>
                </div>
                <nav className={indexCss.nav}>
                    <a href="#categoria">Brinquedos</a>
                    <a href="#populares">Populares</a>
                    <a href="#ofertas">Ofertas</a>
                    <a href="#lancamentos">Lançamentos</a>
                    <a href="#contate">Contate-nos</a>
                </nav>
                <div className={indexCss.botao}>
                    <button><img src="/img/carrinho.png"/></button>
                    <button><img src="/img/sem-perfil.png"/></button>
                </div>
            </div>

            {/*Banner*/}
            <div className={indexCss.banner}>
                <img src="/img/banner.png"/>
            </div>

            {/*Contador*/}
            <div className={indexCss.contador}>
                <h3>Dia das crianças em...</h3>
                <div className={indexCss.contadorDivs}>
                    <div>
                        <p>00</p>
                        <p>Dias</p>
                    </div>
                    <div>
                        <p>00</p>
                        <p>Horas</p>
                    </div>
                    <div>
                        <p>00</p>
                        <p>minutos</p>
                    </div>
                    <div>
                        <p>00</p>
                        <p>segundos</p>
                    </div>
                </div>
            </div>

            {/*Categorias*/}
            <div id="categoria">
                {/*categorias 5*/}
                <div className={indexCss.categoCinco}>
                    <div>
                        <button>
                            <img src="/img/cubo.PNG"/>
                            <p>lógica</p>
                        </button>

                    </div>
                    <div>
                        <button>
                            <img src="/img/boneca.PNG"/>
                            <p>bonecas</p>
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src="/img/carros2.PNG"/>
                            <p>Carrinhos</p>
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src="/img/tabuleiro.PNG"/>
                            <p>Tabuleiros</p>
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src="/img/personagens.PNG"/>
                            <p>Personagens</p>
                        </button>
                    </div>
                </div>

                {/*categoria 3*/}
                <div className={indexCss.categoTres}>
                    <div>
                        <button>
                            <img src="/img/colecionaveis.PNG"/>
                            <p>colecionaveis</p>
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src="/img/pelucias.PNG"/>
                            <p>pelúcias</p>
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src="/img/games.PNG"/>
                            <p>Games</p>
                        </button>
                    </div>
                </div>
            </div>

            {/*Mais vendidos*/}
            <div id="populares">
                <div className={indexCss.divTitulo1}></div>
                <h3 className={indexCss.tituloMaisVen}>Os mais Vendidos</h3>
                <div className={indexCss.divTitulo2}></div>

                <div className={indexCss.maisVen}>
                    <div>
                        <img src="/img/coracao.png" className={indexCss.coracao}/>
                        <button>
                            <img src="/img/kit5-hotwheels.png"/>
                            <p className={indexCss.maisVenPreco}>Por R$ 49,90</p>
                            <p>ou 10x de R$5,00 sem juros</p>
                            <p>Conjunto 5 carrinhos hot wheels</p>
                        </button>
                    </div>

                    <div>
                        <img src="/img/coracao.png" className={indexCss.coracao}/>
                        <button>
                            <img src="/img/barbie.png"/>
                            <p className={indexCss.maisVenPreco}>Por R$ 99,90</p>
                            <p>ou 10x de R$10,00 sem juros</p>
                            <p>Barbie Passeio com Cachorrinho</p>
                        </button>
                    </div>

                    <div>
                        <img src="/img/coracao.png" className={indexCss.coracao}/>
                        <button>
                            <img src="/img/fone.png"/>
                            <p className={indexCss.maisVenPreco}>Por R$ 59,90</p>
                            <p>ou 10x de R$6,00 sem juros</p>
                            <p>Fone de ouvido Bluetooth de gatinho</p>
                        </button>
                    </div>
                </div>
            </div>

            {/*Ofertas de ani*/}
            <div id="ofertas">
                <div style={{paddingBottom:"20px"}}>
                    <h3 className={indexCss.h3}>Ofertas de aniversário</h3>
                    <div className={indexCss.div}></div>
                </div>

                <div className={indexCss.kit}>
                    <div className={indexCss.kitImg}>
                        <img src="/img/brinque-bebe.PNG"/>
                    </div>

                    <div className={indexCss.coraImg}>
                        <img src="/img/coracao.png"/>
                        <h4>Kit aniversário bebê</h4>
                        <p>Brinquedos lúdicos educativos e brinquedos
                            musicais, acompanha 4 brindes</p>
                        <p>R$ 90,90</p>
                        <button>Compre agora</button>
                    </div>
                </div>

                <div className={indexCss.kitCarro}>
                    <div className={indexCss.kitImg}>
                        <img src="/img/pista-rorwels.png"/>
                    </div>

                    <div className={indexCss.coraImg}>
                        <img src="/img/coracao.png"/>
                        <h4>Kit aniversário hot wheels</h4>
                        <p>Contém uma pista incrivel que armazena 44 carrinhos hot wheels</p>
                        <p>R$ 135,90</p>
                        <button>Compre agora</button>
                    </div>
                </div>

                <div className={indexCss.kit}>
                    <div className={indexCss.kitImg}>
                        <img src="/img/keit-gamer.png"/>
                    </div>

                    <div className={indexCss.coraImg}>
                        <img src="/img/coracao.png"/>
                        <h4>kit aniversário gamer</h4>
                        <p>Um mouse, teclado e fone, Mouse e teclado com lad</p>
                        <p>R$ 270,00</p>
                        <button>Compre agora</button>
                    </div>
                </div>
            </div>

            {/*Lançamentos*/}
            <div id="lancamentos">
                <div className={indexCss.titulo}>
                    <img src="/img/estrelinha.png"/>
                    <h3>Lançamentos</h3>
                    <img src="/img/estrelinha.png"/>
                </div>

                <div className={indexCss.maisVen}>
                    <div className={indexCss.moverCora}>
                        <img src="/img/coracao.png" className={indexCss.coracao}/>
                        <button>
                            <img src="/img/pelucia-mine.png"/>
                            <p className={indexCss.maisVenPreco}>Por R$ 49,90</p>
                            <p>ou 10x de R$5,00 sem juros</p>
                            <p>Conjunto 5 carrinhos hot wheels</p>
                        </button>
                    </div>

                    <div>
                        <img src="/img/coracao.png" className={indexCss.coracao}/>
                        <button>
                            <img src="/img/arcanine.png"/>
                            <p className={indexCss.maisVenPreco}>Por R$ 99,90</p>
                            <p>ou 10x de R$10,00 sem juros</p>
                            <p>Barbie Passeio com Cachorrinho</p>
                        </button>
                    </div>

                    <div>
                        <img src="/img/coracao.png" className={indexCss.coracao}/>
                        <button>
                            <img src="/img/moana.png"/>
                            <p className={indexCss.maisVenPreco}>Por R$ 59,90</p>
                            <p>ou 10x de R$6,00 sem juros</p>
                            <p>Fone de ouvido Bluetooth de gatinho</p>
                        </button>
                    </div>
                </div>
            </div>

            {/*contate-nos*/}
            <div id="contate" className={indexCss.fale}>
                <div>
                    <div>
                        <h4>Tem ideias de kits de aniversário? Alguma dúvida ?</h4>
                        <h1>FALE CONOSCO</h1>
                    </div>

                    <div className={indexCss.faleInputs}>
                        <div>
                            <label>
                                Informe seu nome
                                <input placeholder="Ex: Fulano Cicrano"/>
                            </label>
                        </div>

                        <div>
                            <label>
                                Informe seu nome
                                <input placeholder="Ex: (18) 00000-0000"/>
                            </label>
                        </div>

                        <div>
                            <label>
                                Informe seu nome
                                <input placeholder="Informe aqui sua mensagem"/>
                            </label>
                        </div>

                        <div>
                            <button>Enviar</button>
                        </div>

                    </div>
                </div>

                <div>
                    <img src="/img/cavalinho.PNG"/>
                </div>
            </div>

            {/*Footer*/}
            <div className={indexCss.footer}>
                <div>
                    <img src="/img/logo-quebra-cabeça.png"/>
                </div>

                <div>
                    <nav>
                        <a>Instagram</a>
                        <a>WhatsApp </a>
                        <a>Facebook</a>
                    </nav>
                </div>

                <div>
                    <p>(18) 99123-1234 / (18) 3636-3636</p>
                    <p>Rua Lorem Ipsum Nº 123, Centro - Birigui / SP</p>
                </div>
            </div>

        </div>
    )
}

export default Criancas