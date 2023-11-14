import { styled } from "styled-components";

const ItemListaEstilizado = styled.li``;

const ItemNavegacao = ({
  children,
  iconeAtivo,
  inconeInativo,
  ativo = false,
}) => {
  return (
    <ItemListaEstilizado>
      <img src={ativo ? iconeAtivo : inconeInativo} alt="" />
      {children}
    </ItemListaEstilizado>
  );
};

export default ItemNavegacao;
