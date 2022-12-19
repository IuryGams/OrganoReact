import "./Rodape.css";

const Rodape = () =>{
    return(
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a>
                            <img src="/imagens/ig.png" />
                        </a>
                    </li>
                    <li>
                        <a>
                        <img src="/imagens/tw.png" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="/imagens/fb.png"  />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" />
            </section>
            <section>
                <p>Desenvolvido Por Iury Gama</p>
            </section>
        </footer>
    )
}

export default Rodape