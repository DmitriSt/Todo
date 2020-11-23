import styled from 'styled-components'

export const Container = styled.div`
  width: 800px;  
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 4.2rem;
  line-height: 110%;
  margin: 2.8rem 0 1.68rem 0;
`;

export const Input = styled.input`
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: block;
  width: 100%;
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
`;

export const StyledTodoItems = styled.ul`
  padding: 0;
`;

export const StyledTodoItem = styled.li`
  position: relative;
  list-style-type: none;
  padding: 10px;
  background: #ccc;
  width: 100%;
  margin-bottom: 10px;
`;

export const ItemTitle = styled.span`
  font-size: 17px;
  padding: 0 10px;
`;

export const ItemDelete = styled.i`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  color: red;
`;
