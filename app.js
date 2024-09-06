function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<h3><center>Nada foi encontrado <br/> Você precisa digitar uma palavra no campo da pesquisa</center></h3>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    for (let dado of dados) { 
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) { 
            resultados += `
                        
                <div class="item-resultado">
                    <h2>
                        <a href="#">${dado.titulo}</a>
                    </h2>
                    <p class="descrição-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank"> Mais informações sobre essa musa que nos inspira</a>
                </div>`
        }
    
    }

    if (!resultados) {
        resultados = "<h3>Nada foi encontrado. Tente novamente, meu bem</h3>"
    }
    
    section.innerHTML = resultados;
}

