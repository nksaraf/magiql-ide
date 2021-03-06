import React from "react";
import * as gql from "../types";
import { Checkbox, Punctuation, Tokens } from "../tokens";
import { Name } from "./Name";
import { createAstComponent } from "./components";
import { GraphQLObjectType, GraphQLUnionType, GraphQLInterfaceType } from "graphql";

export const FragmentSpread = createAstComponent<
  gql.FragmentSpreadNode,
  {
    parentType: GraphQLObjectType | GraphQLUnionType | GraphQLInterfaceType;
  }
>(({ node, parentType }) => {
  return (
    <Tokens>
      <div>
        <Checkbox checked={node.metadata.isSelected} />
      </div>
      {node.metadata.isSelected && <Punctuation>...</Punctuation>}
      <Name node={node.name} />
    </Tokens>
  );
});
FragmentSpread.displayName = "FragmentSpread";
