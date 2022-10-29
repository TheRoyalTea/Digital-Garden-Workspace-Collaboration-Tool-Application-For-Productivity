/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEditableInput = {
  id?: string | null,
  _version?: number | null,
  editableCanvasId?: string | null,
  editableUserId?: string | null,
};

export type ModelEditableConditionInput = {
  and?: Array< ModelEditableConditionInput | null > | null,
  or?: Array< ModelEditableConditionInput | null > | null,
  not?: ModelEditableConditionInput | null,
  editableCanvasId?: ModelIDInput | null,
  editableUserId?: ModelIDInput | null,
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

export type Editable = {
  __typename: "Editable",
  id: string,
  canvas?: Canvas | null,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  editableCanvasId?: string | null,
  editableUserId?: string | null,
};

export type Canvas = {
  __typename: "Canvas",
  id: string,
  name?: string | null,
  userID: string,
  items?: ModelItemConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelItemConnection = {
  __typename: "ModelItemConnection",
  items:  Array<Item | null >,
  nextToken?: string | null,
  startedAt?: number | null,
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
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export enum ItemType {
  MARKDOWN = "MARKDOWN",
  CODE = "CODE",
  LINK = "LINK",
}


export type User = {
  __typename: "User",
  id: string,
  username?: string | null,
  owned?: ModelCanvasConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelCanvasConnection = {
  __typename: "ModelCanvasConnection",
  items:  Array<Canvas | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateEditableInput = {
  id: string,
  _version?: number | null,
  editableCanvasId?: string | null,
  editableUserId?: string | null,
};

export type DeleteEditableInput = {
  id: string,
  _version?: number | null,
};

export type CreateViewableInput = {
  id?: string | null,
  _version?: number | null,
  viewableCanvasId?: string | null,
  viewableUserId?: string | null,
};

export type ModelViewableConditionInput = {
  and?: Array< ModelViewableConditionInput | null > | null,
  or?: Array< ModelViewableConditionInput | null > | null,
  not?: ModelViewableConditionInput | null,
  viewableCanvasId?: ModelIDInput | null,
  viewableUserId?: ModelIDInput | null,
};

export type Viewable = {
  __typename: "Viewable",
  id: string,
  canvas?: Canvas | null,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  viewableCanvasId?: string | null,
  viewableUserId?: string | null,
};

export type UpdateViewableInput = {
  id: string,
  _version?: number | null,
  viewableCanvasId?: string | null,
  viewableUserId?: string | null,
};

export type DeleteViewableInput = {
  id: string,
  _version?: number | null,
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
  _version?: number | null,
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
  _version?: number | null,
};

export type DeleteItemInput = {
  id: string,
  _version?: number | null,
};

export type CreateCanvasInput = {
  id?: string | null,
  name?: string | null,
  userID: string,
  _version?: number | null,
};

export type ModelCanvasConditionInput = {
  name?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelCanvasConditionInput | null > | null,
  or?: Array< ModelCanvasConditionInput | null > | null,
  not?: ModelCanvasConditionInput | null,
};

export type UpdateCanvasInput = {
  id: string,
  name?: string | null,
  userID?: string | null,
  _version?: number | null,
};

export type DeleteCanvasInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  username?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type ModelEditableFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelEditableFilterInput | null > | null,
  or?: Array< ModelEditableFilterInput | null > | null,
  not?: ModelEditableFilterInput | null,
  editableCanvasId?: ModelIDInput | null,
  editableUserId?: ModelIDInput | null,
};

export type ModelEditableConnection = {
  __typename: "ModelEditableConnection",
  items:  Array<Editable | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelViewableFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelViewableFilterInput | null > | null,
  or?: Array< ModelViewableFilterInput | null > | null,
  not?: ModelViewableFilterInput | null,
  viewableCanvasId?: ModelIDInput | null,
  viewableUserId?: ModelIDInput | null,
};

export type ModelViewableConnection = {
  __typename: "ModelViewableConnection",
  items:  Array<Viewable | null >,
  nextToken?: string | null,
  startedAt?: number | null,
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
  userID?: ModelIDInput | null,
  and?: Array< ModelCanvasFilterInput | null > | null,
  or?: Array< ModelCanvasFilterInput | null > | null,
  not?: ModelCanvasFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionEditableFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionEditableFilterInput | null > | null,
  or?: Array< ModelSubscriptionEditableFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionViewableFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionViewableFilterInput | null > | null,
  or?: Array< ModelSubscriptionViewableFilterInput | null > | null,
};

export type ModelSubscriptionItemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  xloc?: ModelSubscriptionFloatInput | null,
  yloc?: ModelSubscriptionFloatInput | null,
  width?: ModelSubscriptionFloatInput | null,
  height?: ModelSubscriptionFloatInput | null,
  type?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  file?: ModelSubscriptionStringInput | null,
  canvasID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionItemFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCanvasFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCanvasFilterInput | null > | null,
  or?: Array< ModelSubscriptionCanvasFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    editableCanvasId?: string | null,
    editableUserId?: string | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    editableCanvasId?: string | null,
    editableUserId?: string | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    editableCanvasId?: string | null,
    editableUserId?: string | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    viewableCanvasId?: string | null,
    viewableUserId?: string | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    viewableCanvasId?: string | null,
    viewableUserId?: string | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    viewableCanvasId?: string | null,
    viewableUserId?: string | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    userID: string,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    userID: string,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    userID: string,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    owned?:  {
      __typename: "ModelCanvasConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    owned?:  {
      __typename: "ModelCanvasConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    owned?:  {
      __typename: "ModelCanvasConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    editableCanvasId?: string | null,
    editableUserId?: string | null,
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
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      editableCanvasId?: string | null,
      editableUserId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEditablesQueryVariables = {
  filter?: ModelEditableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEditablesQuery = {
  syncEditables?:  {
    __typename: "ModelEditableConnection",
    items:  Array< {
      __typename: "Editable",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      editableCanvasId?: string | null,
      editableUserId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    viewableCanvasId?: string | null,
    viewableUserId?: string | null,
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
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      viewableCanvasId?: string | null,
      viewableUserId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncViewablesQueryVariables = {
  filter?: ModelViewableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncViewablesQuery = {
  syncViewables?:  {
    __typename: "ModelViewableConnection",
    items:  Array< {
      __typename: "Viewable",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      viewableCanvasId?: string | null,
      viewableUserId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncItemsQueryVariables = {
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncItemsQuery = {
  syncItems?:  {
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
    userID: string,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCanvasQueryVariables = {
  filter?: ModelCanvasFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCanvasQuery = {
  syncCanvas?:  {
    __typename: "ModelCanvasConnection",
    items:  Array< {
      __typename: "Canvas",
      id: string,
      name?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    owned?:  {
      __typename: "ModelCanvasConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateEditableSubscriptionVariables = {
  filter?: ModelSubscriptionEditableFilterInput | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    editableCanvasId?: string | null,
    editableUserId?: string | null,
  } | null,
};

export type OnUpdateEditableSubscriptionVariables = {
  filter?: ModelSubscriptionEditableFilterInput | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    editableCanvasId?: string | null,
    editableUserId?: string | null,
  } | null,
};

export type OnDeleteEditableSubscriptionVariables = {
  filter?: ModelSubscriptionEditableFilterInput | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    editableCanvasId?: string | null,
    editableUserId?: string | null,
  } | null,
};

export type OnCreateViewableSubscriptionVariables = {
  filter?: ModelSubscriptionViewableFilterInput | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    viewableCanvasId?: string | null,
    viewableUserId?: string | null,
  } | null,
};

export type OnUpdateViewableSubscriptionVariables = {
  filter?: ModelSubscriptionViewableFilterInput | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    viewableCanvasId?: string | null,
    viewableUserId?: string | null,
  } | null,
};

export type OnDeleteViewableSubscriptionVariables = {
  filter?: ModelSubscriptionViewableFilterInput | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    viewableCanvasId?: string | null,
    viewableUserId?: string | null,
  } | null,
};

export type OnCreateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCanvasSubscriptionVariables = {
  filter?: ModelSubscriptionCanvasFilterInput | null,
};

export type OnCreateCanvasSubscription = {
  onCreateCanvas?:  {
    __typename: "Canvas",
    id: string,
    name?: string | null,
    userID: string,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCanvasSubscriptionVariables = {
  filter?: ModelSubscriptionCanvasFilterInput | null,
};

export type OnUpdateCanvasSubscription = {
  onUpdateCanvas?:  {
    __typename: "Canvas",
    id: string,
    name?: string | null,
    userID: string,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCanvasSubscriptionVariables = {
  filter?: ModelSubscriptionCanvasFilterInput | null,
};

export type OnDeleteCanvasSubscription = {
  onDeleteCanvas?:  {
    __typename: "Canvas",
    id: string,
    name?: string | null,
    userID: string,
    items?:  {
      __typename: "ModelItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    owned?:  {
      __typename: "ModelCanvasConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    owned?:  {
      __typename: "ModelCanvasConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    owned?:  {
      __typename: "ModelCanvasConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
