/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRequest = /* GraphQL */ `
  subscription OnCreateRequest($filter: ModelSubscriptionRequestFilterInput) {
    onCreateRequest(filter: $filter) {
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
export const onUpdateRequest = /* GraphQL */ `
  subscription OnUpdateRequest($filter: ModelSubscriptionRequestFilterInput) {
    onUpdateRequest(filter: $filter) {
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
export const onDeleteRequest = /* GraphQL */ `
  subscription OnDeleteRequest($filter: ModelSubscriptionRequestFilterInput) {
    onDeleteRequest(filter: $filter) {
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
export const onCreateEditable = /* GraphQL */ `
  subscription OnCreateEditable($filter: ModelSubscriptionEditableFilterInput) {
    onCreateEditable(filter: $filter) {
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
export const onUpdateEditable = /* GraphQL */ `
  subscription OnUpdateEditable($filter: ModelSubscriptionEditableFilterInput) {
    onUpdateEditable(filter: $filter) {
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
export const onDeleteEditable = /* GraphQL */ `
  subscription OnDeleteEditable($filter: ModelSubscriptionEditableFilterInput) {
    onDeleteEditable(filter: $filter) {
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
export const onCreateViewable = /* GraphQL */ `
  subscription OnCreateViewable($filter: ModelSubscriptionViewableFilterInput) {
    onCreateViewable(filter: $filter) {
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
export const onUpdateViewable = /* GraphQL */ `
  subscription OnUpdateViewable($filter: ModelSubscriptionViewableFilterInput) {
    onUpdateViewable(filter: $filter) {
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
export const onDeleteViewable = /* GraphQL */ `
  subscription OnDeleteViewable($filter: ModelSubscriptionViewableFilterInput) {
    onDeleteViewable(filter: $filter) {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem($filter: ModelSubscriptionItemFilterInput) {
    onCreateItem(filter: $filter) {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem($filter: ModelSubscriptionItemFilterInput) {
    onUpdateItem(filter: $filter) {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem($filter: ModelSubscriptionItemFilterInput) {
    onDeleteItem(filter: $filter) {
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
export const onCreateCanvas = /* GraphQL */ `
  subscription OnCreateCanvas($filter: ModelSubscriptionCanvasFilterInput) {
    onCreateCanvas(filter: $filter) {
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
export const onUpdateCanvas = /* GraphQL */ `
  subscription OnUpdateCanvas($filter: ModelSubscriptionCanvasFilterInput) {
    onUpdateCanvas(filter: $filter) {
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
export const onDeleteCanvas = /* GraphQL */ `
  subscription OnDeleteCanvas($filter: ModelSubscriptionCanvasFilterInput) {
    onDeleteCanvas(filter: $filter) {
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
