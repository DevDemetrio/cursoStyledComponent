import Imagem from "../Galeria/Imagem";
import { styled } from "styled-components";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const DialogEstulizado = styled.dialog`
  position: absolute;
  top: 294px;
`;
const ModalZoom = ({ foto, aoAlternarFavorito }) => {
  return (
    <>
      {foto && (
        <>
          <Overlay />
          <DialogEstulizado open={!!foto}>
            <Imagem
              foto={foto}
              expandida={true}
              aoAlternarFavorito={aoAlternarFavorito}
            />
            <form method="dialog">
              <button>ok</button>
            </form>
          </DialogEstulizado>
        </>
      )}
    </>
  );
};

export default ModalZoom;
