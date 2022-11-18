/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRequest = /* GraphQL */ `
  mutation CreateRequest(
    $input: CreateRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    createRequest(input: $input, condition: $condition) {
      id
      code
      isEdit
      expire
      canvas {
        id
        name
        userID
        layouts
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      requestCanvasId
    }
  }
`;
export const updateRequest = /* GraphQL */ `
  mutation UpdateRequest(
    $input: UpdateRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    updateRequest(input: $input, condition: $condition) {
      id
      code
      isEdit
      expire
      canvas {
        id
        name
        userID
        layouts
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      requestCanvasId
    }
  }
`;
export const deleteRequest = /* GraphQL */ `
  mutation DeleteRequest(
    $input: DeleteRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    deleteRequest(input: $input, condition: $condition) {
      id
      code
      isEdit
      expire
      canvas {
        id
        name
        userID
        layouts
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      requestCanvasId
    }
  }
`;
export const createEditable = /* GraphQL */ `
  mutation CreateEditable(
    $input: CreateEditableInput!
    $condition: ModelEditableConditionInput
  ) {
    createEditable(input: $input, condition: $condition) {
      id
      canvas {
        id
        name
        userID
        layouts
        createdAt
        updatedAt
      }
      userID
      createdAt
      updatedAt
      editableCanvasId
    }
  }
`;
export const updateEditable = /* GraphQL */ `
  mutation UpdateEditable(
    $input: UpdateEditableInput!
    $condition: ModelEditableConditionInput
  ) {
    updateEditable(input: $input, condition: $condition) {
      id
      canvas {
        id
        name
        userID
        layouts
        createdAt
        updatedAt
      }
      userID
      createdAt
      updatedAt
      editableCanvasId
    }
  }
`;
export const deleteEditable = /* GraphQL */ `
  mutation DeleteEditable(
    $input: DeleteEditableInput!
    $condition: ModelEditableConditionInput
  ) {
    deleteEditable(input: $input, condition: $condition) {
      id
      canvas {
        id
        name
        userID
        layouts
        createdAt
        updatedAt
      }
      userID
      createdAt
      updatedAt
      editableCanvasId
    }
  }
`;
export const createViewable = /* GraphQL */ `
  mutation CreateViewable(
    $input: CreateViewableInput!
    $condition: ModelViewableConditionInput
  ) {
    createViewable(input: $input, condition: $condition) {
      id
      canvas {
        id
        name
        userID
        layouts
        createdAt
        updatedAt
      }
      userID
      createdAt
      updatedAt
      viewableCanvasId
    }
  }
`;
export const updateViewable = /* GraphQL */ `
  mutation UpdateViewable(
    $input: UpdateViewableInput!
    $condition: ModelViewableConditionInput
  ) {
    updateViewable(input: $input, condition: $condition) {
      id
      canvas {
        id
        name
        userID
        layouts
        createdAt
        updatedAt
      }
      userID
      createdAt
      updatedAt
      viewableCanvasId
    }
  }
`;
export const deleteViewable = /* GraphQL */ `
  mutation DeleteViewable(
    $input: DeleteViewableInput!
    $condition: ModelViewableConditionInput
  ) {
    deleteViewable(input: $input, condition: $condition) {
      id
      canvas {
        id
        name
        userID
        layouts
        createdAt
        updatedAt
      }
      userID
      createdAt
      updatedAt
      viewableCanvasId
    }
  }
`;
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
      id
      type
      content
      file
      canvasID
      createdAt
      updatedAt
    }
  }
`;
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
      id
      type
      content
      file
      canvasID
      createdAt
      updatedAt
    }
  }
`;
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
      id
      type
      content
      file
      canvasID
      createdAt
      updatedAt
    }
  }
`;
export const createCanvas = /* GraphQL */ `
  mutation CreateCanvas(
    $input: CreateCanvasInput!
    $condition: ModelCanvasConditionInput
  ) {
    createCanvas(input: $input, condition: $condition) {
      id
      name
      items {
        nextToken
      }
      userID
      layouts
      createdAt
      updatedAt
    }
  }
`;
export const updateCanvas = /* GraphQL */ `
  mutation UpdateCanvas(
    $input: UpdateCanvasInput!
    $condition: ModelCanvasConditionInput
  ) {
    updateCanvas(input: $input, condition: $condition) {
      id
      name
      items {
        nextToken
      }
      userID
      layouts
      createdAt
      updatedAt
    }
  }
`;
export const deleteCanvas = /* GraphQL */ `
  mutation DeleteCanvas(
    $input: DeleteCanvasInput!
    $condition: ModelCanvasConditionInput
  ) {
    deleteCanvas(input: $input, condition: $condition) {
      id
      name
      items {
        nextToken
      }
      userID
      layouts
      createdAt
      updatedAt
    }
  }
`;
