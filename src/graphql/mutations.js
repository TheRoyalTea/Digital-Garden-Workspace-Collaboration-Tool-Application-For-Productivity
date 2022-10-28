/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
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
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
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
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
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
export const createCanvas = /* GraphQL */ `
  mutation CreateCanvas(
    $input: CreateCanvasInput!
    $condition: ModelCanvasConditionInput
  ) {
    createCanvas(input: $input, condition: $condition) {
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
export const updateCanvas = /* GraphQL */ `
  mutation UpdateCanvas(
    $input: UpdateCanvasInput!
    $condition: ModelCanvasConditionInput
  ) {
    updateCanvas(input: $input, condition: $condition) {
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
export const deleteCanvas = /* GraphQL */ `
  mutation DeleteCanvas(
    $input: DeleteCanvasInput!
    $condition: ModelCanvasConditionInput
  ) {
    deleteCanvas(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
