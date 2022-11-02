/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEditable = /* GraphQL */ `
  query GetEditable($id: ID!) {
    getEditable(id: $id) {
      id
      canvas {
        id
        name
        userID
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
export const listEditables = /* GraphQL */ `
  query ListEditables(
    $filter: ModelEditableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEditables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        createdAt
        updatedAt
        editableCanvasId
      }
      nextToken
    }
  }
`;
export const getViewable = /* GraphQL */ `
  query GetViewable($id: ID!) {
    getViewable(id: $id) {
      id
      canvas {
        id
        name
        userID
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
export const listViewables = /* GraphQL */ `
  query ListViewables(
    $filter: ModelViewableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listViewables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        createdAt
        updatedAt
        viewableCanvasId
      }
      nextToken
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      xloc
      yloc
      width
      height
      type
      content
      file
      canvasID
      createdAt
      updatedAt
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        xloc
        yloc
        width
        height
        type
        content
        file
        canvasID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCanvas = /* GraphQL */ `
  query GetCanvas($id: ID!) {
    getCanvas(id: $id) {
      id
      name
      items {
        nextToken
      }
      userID
      createdAt
      updatedAt
    }
  }
`;
export const listCanvas = /* GraphQL */ `
  query ListCanvas(
    $filter: ModelCanvasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCanvas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        userID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
