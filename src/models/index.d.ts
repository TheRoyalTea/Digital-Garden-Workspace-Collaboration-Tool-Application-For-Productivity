import { ModelInit, MutableModel } from "@aws-amplify/datastore";

export enum ItemType {
  MARKDOWN = "MARKDOWN",
  CODE = "CODE",
  LINK = "LINK"
}

type EditableMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CanvasMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ViewableMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Editable {
  readonly id: string;
  readonly canvas?: Canvas | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly editableCanvasId?: string | null;
  constructor(init: ModelInit<Editable, EditableMetaData>);
  static copyOf(source: Editable, mutator: (draft: MutableModel<Editable, EditableMetaData>) => MutableModel<Editable, EditableMetaData> | void): Editable;
}

export declare class Canvas {
  readonly id: string;
  readonly name?: string | null;
  readonly items?: (Item | null)[] | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Canvas, CanvasMetaData>);
  static copyOf(source: Canvas, mutator: (draft: MutableModel<Canvas, CanvasMetaData>) => MutableModel<Canvas, CanvasMetaData> | void): Canvas;
}

export declare class Item {
  readonly id: string;
  readonly xloc?: number | null;
  readonly yloc?: number | null;
  readonly width?: number | null;
  readonly height?: number | null;
  readonly type?: ItemType | keyof typeof ItemType | null;
  readonly content?: string | null;
  readonly file?: string | null;
  readonly canvasID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Item, ItemMetaData>);
  static copyOf(source: Item, mutator: (draft: MutableModel<Item, ItemMetaData>) => MutableModel<Item, ItemMetaData> | void): Item;
}

export declare class Viewable {
  readonly id: string;
  readonly canvas?: Canvas | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly viewableCanvasId?: string | null;
  constructor(init: ModelInit<Viewable, ViewableMetaData>);
  static copyOf(source: Viewable, mutator: (draft: MutableModel<Viewable, ViewableMetaData>) => MutableModel<Viewable, ViewableMetaData> | void): Viewable;
}