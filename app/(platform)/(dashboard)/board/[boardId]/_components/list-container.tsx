"use client";

import { ListWithCards } from "@/types";

interface ListContainerProps {
  data: ListWithCards[];
  boardId: string;
}

export const ListContainer = ({ data, boardId }: ListContainerProps) => {
  return (
    <ol>
      <div className="flex-shrink-0 w-1" />
    </ol>
  );
};
