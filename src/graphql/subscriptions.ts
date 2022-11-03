/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEditable = /* GraphQL */ `
  subscription OnCreateEditable {
    onCreateEditable {
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
export const onUpdateEditable = /* GraphQL */ `
  subscription OnUpdateEditable {
    onUpdateEditable {
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
export const onDeleteEditable = /* GraphQL */ `
  subscription OnDeleteEditable {
    onDeleteEditable {
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
export const onCreateViewable = /* GraphQL */ `
  subscription OnCreateViewable {
    onCreateViewable {
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
export const onUpdateViewable = /* GraphQL */ `
  subscription OnUpdateViewable {
    onUpdateViewable {
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
export const onDeleteViewable = /* GraphQL */ `
  subscription OnDeleteViewable {
    onDeleteViewable {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
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
export const onCreateCanvas = /* GraphQL */ `
  subscription OnCreateCanvas {
    onCreateCanvas {
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
export const onUpdateCanvas = /* GraphQL */ `
  subscription OnUpdateCanvas {
    onUpdateCanvas {
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
export const onDeleteCanvas = /* GraphQL */ `
  subscription OnDeleteCanvas {
    onDeleteCanvas {
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
