/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEditable = /* GraphQL */ `
  subscription OnCreateEditable($filter: ModelSubscriptionEditableFilterInput) {
    onCreateEditable(filter: $filter) {
      id
      canvas {
        id
        name
        userID
        items {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        username
        owned {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      editableCanvasId
      editableUserId
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
        items {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        username
        owned {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      editableCanvasId
      editableUserId
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
        items {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        username
        owned {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      editableCanvasId
      editableUserId
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
        items {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        username
        owned {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      viewableCanvasId
      viewableUserId
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
        items {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        username
        owned {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      viewableCanvasId
      viewableUserId
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
        items {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        username
        owned {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      viewableCanvasId
      viewableUserId
    }
  }
`;
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem($filter: ModelSubscriptionItemFilterInput) {
    onCreateItem(filter: $filter) {
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
  subscription OnUpdateItem($filter: ModelSubscriptionItemFilterInput) {
    onUpdateItem(filter: $filter) {
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
  subscription OnDeleteItem($filter: ModelSubscriptionItemFilterInput) {
    onDeleteItem(filter: $filter) {
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
  subscription OnCreateCanvas($filter: ModelSubscriptionCanvasFilterInput) {
    onCreateCanvas(filter: $filter) {
      id
      name
      userID
      items {
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
      userID
      items {
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
      userID
      items {
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      username
      owned {
        items {
          id
          name
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      username
      owned {
        items {
          id
          name
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      username
      owned {
        items {
          id
          name
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
