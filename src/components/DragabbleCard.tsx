import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
  padding: 10px 10px;
  border-radius: 5px;
  margin-bottom: 5px;
  background-color: ${(props) =>
    props.isDragging ? "#74b9ff" : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0,0,0,0.3)" : "none"};
`;

interface IDragabbleCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}

const DragabbleCard = ({ toDoId, toDoText, index }: IDragabbleCardProps) => {
  return (
    <Draggable key={toDoId} draggableId={toDoId + ""} index={index}>
      {(provided, info) => (
        <Card
          isDragging={info.isDragging}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DragabbleCard);
