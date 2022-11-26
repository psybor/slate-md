import { Descendant, BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';

export type BlockQuoteElementType = {
  type: 'block-quote';
  children: Descendant[];
};

export type UnorderedListElementType = {
  type: 'unordered-list';
  level: number;
  children: Descendant[];
};

export type OrderedListElementType = {
  type: 'ordered-list';
  level: number;
  children: Descendant[];
};

export type ListItemElementType = { type: 'list-item'; children: Descendant[] };

export type EditableVoidElementType = {
  type: 'editable-void';
  children: EmptyText[];
};

export type HeadingOneElementType = {
  type: 'heading-one';
  children: Descendant[];
};

export type HeadingTwoElementType = {
  type: 'heading-two';
  children: Descendant[];
};

export type HeadingThreeElementType = {
  type: 'heading-three';
  children: Descendant[];
};

export type ImageElementType = {
  type: 'image';
  url: string;
  children: EmptyText[];
};

export type LinkElementType = {
  type: 'link';
  url: string;
  children: Descendant[];
};

export type ParagraphElementType = {
  type: 'paragraph';
  children: Descendant[];
};

type CustomElement =
  | HeadingOneElementType
  | HeadingTwoElementType
  | HeadingThreeElementType
  | BlockQuoteElementType
  | UnorderedListElementType
  | OrderedListElementType
  | ListItemElementType
  | EditableVoidElementType
  | ImageElementType
  | LinkElementType
  | ParagraphElementType;

export type CustomText = {
  bold?: boolean;
  italic?: boolean;
  del?: boolean;
  text: string;
};

export type EmptyText = {
  text: string;
};

export type CustomEditor = BaseEditor & ReactEditor;

declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText | EmptyText;
  }
}
