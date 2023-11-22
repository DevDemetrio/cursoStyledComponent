import tags from "./tags.json";
import { styled } from "styled-components";

const DivContainer = styled.div`
  margin-top: 56px;
  display: flex;
  justify-content: space-between;
`;
const NavContainer = styled.nav`
  display: flex;
  gap: 10px;
`;

const TagTitulo = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  margin: 0;
`;
const Tag = styled.button`
  font-size: 24px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;
const Tags = () => {
  return (
    <DivContainer>
      <TagTitulo>Busque por tags</TagTitulo>
      <NavContainer>
        {tags.map((tag) => (
          <Tag key={tag.id}>{tag.titulo}</Tag>
        ))}
      </NavContainer>
    </DivContainer>
  );
};
export default Tags;
