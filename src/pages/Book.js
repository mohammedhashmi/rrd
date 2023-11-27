import React, {useParams} from "react";
export function Book() {
  const { id } = useParams()
  return (
    <>
    <div>
      <h1>this is Book {id} </h1>
    </div>
    </>
  );
}