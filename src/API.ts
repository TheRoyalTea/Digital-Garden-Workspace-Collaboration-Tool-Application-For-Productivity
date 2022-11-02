/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEditableInput = {
  id?: string | null,
  userID: string,
  editableCanvasId?: string | null,
};

export type ModelEditableConditionInput = {
  userID?: ModelStringInput | null,
  and?: Array< ModelEditableConditionInput | null > | null,
  or?: Array< ModelEditableConditionInput | null > | null,
  not?: ModelEditableConditionInput | null,
  editableCanvasId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Editable = {
  __typename: "Editable",
  id: string,
  canvas?: Canvas | null,
  userID: string,
  createdAt: string,
  updatedAt: string,
  editableCanvasId?: string | null,
};

export type Canvas = {
  __typename: "Canvas",
  id: string,
  name?: string | null,
  items?: ModelItemConnection | null,
  userID: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelItemConnection = {
  __typename: "ModelItemConnection",
  items:  Array<Item | null >,
  nextToken?: string | null,
};

export type Item = {
  __typename: "Item",
  id: string,
  xloc?: number | null,
  yloc?: number | null,
  width?: number | null,
  height?: number | null,
  type?: ItemType | null,
  content?: string | null,
  file?: string | null,
  canvasID: string,
  createdAt: string,
  updatedAt: string,
};

export enum ItemType {
  MARKDOWN = "MARKDOWN",
  CODE = "CODE",
  LINK = "LINK",
}


export type UpdateEditableInput = {
  id: string,
  userID?: string | null,
  editableCanvasId?: string | null,
};

export type DeleteEditableInput = {
  id: string,
};

export type CreateViewableInput = {
  id?: string | null,
  userID: string,
  viewableCanvasId?: string | null,
};

export type ModelViewableConditionInput = {
  userID?: ModelStringInput | null,
  and?: Array< ModelViewableConditionInput | null > | null,
  or?: Array< ModelViewableConditionInput | null > | null,
  not?: ModelViewableConditionInput | null,
  viewableCanvasId?: ModelIDInput | null,
};

export type Viewable = {
  __typename: "Viewable",
  id: string,
  canvas?: Canvas | null,
  userID: string,
  createdAt: string,
  updatedAt: string,
  viewableCanvasId?: string | null,
};

export type UpdateViewableInput = {
  id: string,
  userID?: string | null,
  viewableCanvasId?: string | null,
};

export type DeleteViewableInput = {
  id: string,
};

export type CreateItemInput = {
  id?: string | null,
  xloc?: number | null,
  yloc?: number | null,
  width?: number | null,
  height?: number | null,
  type?: ItemType | null,
  content?: string | null,
  file?: string | null,
  canvasID: string,
};

export type ModelItemConditionInput = {
  xloc?: ModelFloatInput | null,
  yloc?: ModelFloatInput | null,
  width?: ModelFloatInput | null,
  height?: ModelFloatInput | null,
  type?: ModelItemTypeInput | null,
  content?: ModelStringInput | null,
  file?: ModelStringInput | null,
  canvasID?: ModelIDInput | null,
  and?: Array< ModelItemConditionInput | null > | null,
  or?: Array< ModelItemConditionInput | null > | null,
  not?: ModelItemConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelItemTypeInput = {
  eq?: ItemType | null,
  ne?: ItemType | null,
};

export type UpdateItemInput = {
  id: string,
  xloc?: number | null,
  yloc?: number | null,
  width?: number | null,
  height?: number | null,
  type?: ItemType | null,
  content?: string | null,
  file?: string | null,
  canvasID?: string | null,
};

export type DeleteItemInput = {
  id: string,
};

export type CreateCanvasInput = {
  id?: string | null,
  name?: string | null,
  userID: string,
};

export type ModelCanvasConditionInput = {
  name?: ModelStringInput | null,
  userID?: ModelStringInput | null,
  and?: Array< ModelCanvasConditionInput | null > | null,
  or?: Array< ModelCanvasConditionInput | null > | null,
  not?: ModelCanvasConditionInput | null,
};

export type UpdateCanvasInput = {
  id: string,
  name?: string | null,
  userID?: string | null,
};

export type DeleteCanvasInput = {
  id: string,
};

export type ModelEditableFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelStringInput | null,
  and?: Array< ModelEditableFilterInput | null > | null,
  or?: Array< ModelEditableFilterInput | null > | null,
  not?: ModelEditableFilterInput | null,
  editableCanvasId?: ModelIDInput | null,
};

export type ModelEditableConnection = {
  __typename: "ModelEditableConnection",
  items:  Array<Editable | null >,
  nextToken?: string | null,
};

export type ModelViewableFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelStringInput | null,
  and?: Array< ModelViewableFilterInput | null > | null,
  or?: Array< ModelViewableFilterInput | null > | null,
  not?: ModelViewableFilterInput | null,
  viewableCanvasId?: ModelIDInput | null,
};

export type ModelViewableConnection = {
  __typename: "ModelViewableConnection",
  items:  Array<Viewable | null >,
  nextToken?: string | null,
};

export type ModelItemFilterInput = {
  id?: ModelIDInput | null,
  xloc?: ModelFloatInput | null,
  yloc?: ModelFloatInput | null,
  width?: ModelFloatInput | null,
  height?: ModelFloatInput | null,
  type?: ModelItemTypeInput | null,
  content?: ModelStringInput | null,
  file?: ModelStringInput | null,
  canvasID?: ModelIDInput | null,
  and?: Array< ModelItemFilterInput | null > | null,
  or?: Array< ModelItemFilterInput | null > | null,
  not?: ModelItemFilterInput | null,
};

export type ModelCanvasFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  userID?: ModelStringInput | null,
  and?: Array< ModelCanvasFilterInput | null > | null,
  or?: Array< ModelCanvasFilterInput | null > | null,
  not?: ModelCanvasFilterInput | null,
};

export type ModelCanvasConnection = {
  __typename: "ModelCanvasConnection",
  items:  Array<Canvas | null >,
  nextToken?: string | null,
};

export type CreateEditableMutationVariables = {
  input: CreateEditableInput,
  condition?: ModelEditableConditionInput | null,
};

export type CreateEditableMutation = {
  createEditable?:  {
    __typename: "Editable",
    id: string,
    canvas?:  {
      __typename: "Canvas",
      id: string,
      name?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    editableCanvasId?: string | null,
  } | null,
};

export type UpdateEditableMutationVariables = {
  input: UpdateEditableInput,
  condition?: ModelEditableConditionInput | null,
};

export type UpdateEditableMutation = {
  updateEditable?:  {
    __typename: "Editable",
    id: string,
    canvas?:  {
      __typename: "Canvas",
      id: string,
      name?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    editableCanvasId?: string | null,
  } | null,
};

export type DeleteEditableMutationVariables = {
  input: DeleteEditableInput,
  condition?: ModelEditableConditionInput | null,
};

export type DeleteEditableMutation = {
  deleteEditable?:  {
    __typename: "Editable",
    id: string,
    canvas?:  {
      __typename: "Canvas",
      id: string,
      name?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    editableCanvasId?: string | null,
  } | null,
};

export type CreateViewableMutationVariables = {
  input: CreateViewableInput,
  condition?: ModelViewableConditionInput | null,
};

export type CreateViewableMutation = {
  createViewable?:  {
    __typename: "Viewable",
    id: string,
    canvas?:  {
      __typename: "Canvas",
      id: string,
      name?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    viewableCanvasId?: string | null,
  } | null,
};

export type UpdateViewableMutationVariables = {
  input: UpdateViewableInput,
  condition?: ModelViewableConditionInput | null,
};

export type UpdateViewableMutation = {
  updateViewable?:  {
    __typename: "Viewable",
    id: string,
    canvas?:  {
      __typename: "Canvas",
      id: string,
      name?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    viewableCanvasId?: string | null,
  } | null,
};

export type DeleteViewableMutationVariables = {
  input: DeleteViewableInput,
  condition?: ModelViewableConditionInput | null,
};

export type DeleteViewableMutation = {
  deleteViewable?:  {
    __typename: "Viewable",
    id: string,
    canvas?:  {
      __typename: "Canvas",
      id: string,
      name?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    viewableCanvasId?: string | null,
  } | null,
};

export type CreateItemMutationVariables = {
  input: CreateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type CreateItemMutation = {
  createItem?:  {
    __typename: "Item",
    id: string,
    xloc?: number | null,
    yloc?: number | null,
    width?: number | null,
    height?: number | null,
    type?: ItemType | null,
    content?: string | null,
    file?: string | null,
    canvasID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateItemMutationVariables = {
  input: UpdateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type UpdateItemMutation = {
  updateItem?:  {
    __typename: "Item",
    id: string,
    xloc?: number | null,
    yloc?: number | null,
    width?: number | null,
    height?: number | null,
    type?: ItemType | null,
    content?: string | null,
    file?: string | null,
    canvasID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteItemMutationVariables = {
  input: DeleteItemInput,
  condition?: ModelItemConditionInput | null,
};

export type DeleteItemMutation = {
  deleteItem?:  {
    __typename: "Item",
    id: string,
    xloc?: number | null,
    yloc?: number | null,
    width?: number | null,
    height?: number | null,
    type?: ItemType | null,
    content?: string | null,
    file?: string | null,
    canvasID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCanvasMutationVariables = {
  input: CreateCanvasInput,
  condition?: ModelCanvasConditionInput | null,
};

export type CreateCanvasMutation = {
  createCanvas?:  {
    __typename: "Canvas",
    id: string,
    name?: string | null,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCanvasMutationVariables = {
  input: UpdateCanvasInput,
  condition?: ModelCanvasConditionInput | null,
};

export type UpdateCanvasMutation = {
  updateCanvas?:  {
    __typename: "Canvas",
    id: string,
    name?: string | null,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCanvasMutationVariables = {
  input: DeleteCanvasInput,
  condition?: ModelCanvasConditionInput | null,
};

export type DeleteCanvasMutation = {
  deleteCanvas?:  {
    __typename: "Canvas",
    id: string,
    name?: string | null,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetEditableQueryVariables = {
  id: string,
};

export type GetEditableQuery = {
  getEditable?:  {
    __typename: "Editable",
    id: string,
    canvas?:  {
      __typename: "Canvas",
      id: string,
      name?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    editableCanvasId?: string | null,
  } | null,
};

export type ListEditablesQueryVariables = {
  filter?: ModelEditableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEditablesQuery = {
  listEditables?:  {
    __typename: "ModelEditableConnection",
    items:  Array< {
      __typename: "Editable",
      id: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      editableCanvasId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetViewableQueryVariables = {
  id: string,
};

export type GetViewableQuery = {
  getViewable?:  {
    __typename: "Viewable",
    id: string,
    canvas?:  {
      __typename: "Canvas",
      id: string,
      name?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    viewableCanvasId?: string | null,
  } | null,
};

export type ListViewablesQueryVariables = {
  filter?: ModelViewableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListViewablesQuery = {
  listViewables?:  {
    __typename: "ModelViewableConnection",
    items:  Array< {
      __typename: "Viewable",
      id: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      viewableCanvasId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetItemQueryVariables = {
  id: string,
};

export type GetItemQuery = {
  getItem?:  {
    __typename: "Item",
    id: string,
    xloc?: number | null,
    yloc?: number | null,
    width?: number | null,
    height?: number | null,
    type?: ItemType | null,
    content?: string | null,
    file?: string | null,
    canvasID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListItemsQueryVariables = {
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItemsQuery = {
  listItems?:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      id: string,
      xloc?: number | null,
      yloc?: number | null,
      width?: number | null,
      height?: number | null,
      type?: ItemType | null,
      content?: string | null,
      file?: string | null,
      canvasID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCanvasQueryVariables = {
  id: string,
};

export type GetCanvasQuery = {
  getCanvas?:  {
    __typename: "Canvas",
    id: string,
    name?: string | null,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCanvasQueryVariables = {
  filter?: ModelCanvasFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCanvasQuery = {
  listCanvas?:  {
    __typename: "ModelCanvasConnection",
    items:  Array< {
      __typename: "Canvas",
      id: string,
      name?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateEditableSubscription = {
  onCreateEditable?:  {
    __typename: "Editable",
    id: string,
    canvas?:  {
      __typename: "Canvas",
      id: string,
      name?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    editableCanvasId?: string | null,
  } | null,
};

export type OnUpdateEditableSubscription = {
  onUpdateEditable?:  {
    __typename: "Editable",
    id: string,
    canvas?:  {
      __typename: "Canvas",
      id: string,
      name?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    editableCanvasId?: string | null,
  } | null,
};

export type OnDeleteEditableSubscription = {
  onDeleteEditable?:  {
    __typename: "Editable",
    id: string,
    canvas?:  {
      __typename: "Canvas",
      id: string,
      name?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    editableCanvasId?: string | null,
  } | null,
};

export type OnCreateViewableSubscription = {
  onCreateViewable?:  {
    __typename: "Viewable",
    id: string,
    canvas?:  {
      __typename: "Canvas",
      id: string,
      name?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    viewableCanvasId?: string | null,
  } | null,
};

export type OnUpdateViewableSubscription = {
  onUpdateViewable?:  {
    __typename: "Viewable",
    id: string,
    canvas?:  {
      __typename: "Canvas",
      id: string,
      name?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    viewableCanvasId?: string | null,
  } | null,
};

export type OnDeleteViewableSubscription = {
  onDeleteViewable?:  {
    __typename: "Viewable",
    id: string,
    canvas?:  {
      __typename: "Canvas",
      id: string,
      name?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    viewableCanvasId?: string | null,
  } | null,
};

export type OnCreateItemSubscription = {
  onCreateItem?:  {
    __typename: "Item",
    id: string,
    xloc?: number | null,
    yloc?: number | null,
    width?: number | null,
    height?: number | null,
    type?: ItemType | null,
    content?: string | null,
    file?: string | null,
    canvasID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateItemSubscription = {
  onUpdateItem?:  {
    __typename: "Item",
    id: string,
    xloc?: number | null,
    yloc?: number | null,
    width?: number | null,
    height?: number | null,
    type?: ItemType | null,
    content?: string | null,
    file?: string | null,
    canvasID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteItemSubscription = {
  onDeleteItem?:  {
    __typename: "Item",
    id: string,
    xloc?: number | null,
    yloc?: number | null,
    width?: number | null,
    height?: number | null,
    type?: ItemType | null,
    content?: string | null,
    file?: string | null,
    canvasID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCanvasSubscription = {
  onCreateCanvas?:  {
    __typename: "Canvas",
    id: string,
    name?: string | null,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCanvasSubscription = {
  onUpdateCanvas?:  {
    __typename: "Canvas",
    id: string,
    name?: string | null,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCanvasSubscription = {
  onDeleteCanvas?:  {
    __typename: "Canvas",
    id: string,
    name?: string | null,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
