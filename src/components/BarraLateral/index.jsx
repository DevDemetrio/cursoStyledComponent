import { styled } from "styled-components";
import ItemNavegacao from "./ItemNavegacao";
const BarraLateral = () => {
  const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
  `;

  return (
    <aside>
      <nav>
        <ListaEstilizada>
          <ItemNavegacao
            iconeAtivo="/icones/home-ativo.png"
            iconeIvativo="/icones/home-inativo.png"
            ativo={true}
          >
            Inicio
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/mais-vistas-ativo.png"
            iconeIvativo="/icones/mais-vistas-inativo.png"
            ativo={true}
          >
            Mais Vistos
          </ItemNavegacao>
        </ListaEstilizada>
      </nav>
    </aside>
  );
};

export default BarraLateral;
