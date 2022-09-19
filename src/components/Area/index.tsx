import React from "react"
import { ContainerArea } from "./styles"

type PropsArea = {
    children: React.ReactNode;
}

export const Area = (props: PropsArea) => {
  return (
    <ContainerArea>{props.children}</ContainerArea>
  );
};