/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRequest = /* GraphQL */ `
  query GetRequest($id: ID!) {
    getRequest(id: $id) {
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
export const listRequests = /* GraphQL */ `
  query ListRequests(
    $filter: ModelRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        code
        isEdit
        expire
        createdAt
        updatedAt
        requestCanvasId
      }
      nextToken
    }
  }
`;
export const getEditable = /* GraphQL */ `
  query GetEditable($id: ID!) {
    getEditable(id: $id) {
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
      layouts
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
        layouts
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
