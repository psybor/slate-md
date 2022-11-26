import React, { FC, useMemo } from 'react';

import {
  createEditor,
  Editor as SlateEditor,
  Element as SlateElement,
  Text,
  Transforms,
  Descendant,
} from 'slate';
import { Slate, Editable, withReact, useSlate } from 'slate-react';
import {
  EditableProps,
  RenderElementProps,
} from 'slate-react/dist/components/editable';
import {
  Toolbar,
  RichIcon,
  H1Element,
  DefaultElement,
  H2Element,
  H3Element,
  LinkElement,
  ToolbarBtn,
} from '../components';
import '../assets/font_1347995_8606dsxwtx7/iconfont';
import '../styles/index.scss';

export interface Props extends EditableProps {}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Editor component. Neat!
 */

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [
      { text: 'X' },
      {
        type: 'link',
        url: 'https://baidu.com',
        children: [{ text: 'ENGLISH' }],
      },
      { text: 'X' },
    ],
  },
  {
    type: 'heading-one',
    children: [{ text: '测试一下！' }],
  },
  {
    type: 'heading-two',
    children: [{ text: '测试二下！' }],
  },
  {
    type: 'heading-three',
    children: [{ text: '测试三下！' }],
  },
];

const LIST_TYPES = ['numbered-list', 'bulleted-list'];
const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify'];

const isMarkActive = (editor, format) => {
  const marks = SlateEditor.marks(editor);
  return marks ? marks[format] === true : false;
};

const isBlockActive = (editor, format, blockType = 'type') => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    SlateEditor.nodes(editor, {
      at: SlateEditor.unhangRange(editor, selection),
      match: (n) =>
        !SlateEditor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n[blockType] === format,
    })
  );

  return !!match;
};

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    SlateEditor.removeMark(editor, format);
  } else {
    SlateEditor.addMark(editor, format, true);
  }
};

const toggleBlock = (editor, format) => {};

const renderElement = (props: RenderElementProps) => {
  // @ts-ignore
  switch (props.element.type) {
    case 'heading-one':
      return <H1Element {...props} />;
    case 'heading-two':
      return <H2Element {...props} />;
    case 'heading-three':
      return <H3Element {...props} />;
    case 'link':
      return <LinkElement {...props} />;
    default:
      return <DefaultElement {...props} />;
  }
};

const MarkButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <ToolbarBtn
      active={isMarkActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <RichIcon type={icon} />
    </ToolbarBtn>
  );
};

const BlockButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <ToolbarBtn
      active={isBlockActive(
        editor,
        format,
        TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type'
      )}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      <RichIcon type={icon} />
    </ToolbarBtn>
  );
};

export const Editor: FC<Props> = (props) => {
  // 创建一个不会在渲染中变化的 Slate 编辑器对象。
  const editor = useMemo(() => withReact(createEditor()), []);
  const { onKeyDown, ...rest } = props;
  const _onKeyDown = (ev) => {
    if (ev.key === ' ') {
      console.log('ev:::, ev.key:', ev.key);
    }
    if (!ev.ctrlKey) {
      return;
    }
    if (ev.key === 'b') {
      ev.preventDefault();
      // @ts-ignore
      const [match] = SlateEditor.nodes(editor, {
        // @ts-ignore
        match: (n) => n.type === 'bold',
      });
      debugger;
      Transforms.setNodes(
        editor,
        {
          // @ts-ignore
          bold: true,
        },
        {
          match: (n) => Text.isText(n),
          split: true,
        }
      );
    }
    onKeyDown?.(ev);
  };
  return (
    <Slate editor={editor} value={initialValue}>
      <Toolbar>
        <MarkButton format="bold" icon="iconmd-bold" />
        <MarkButton format="italic" icon="icon-md-italic" />
        <MarkButton format="italic" icon="icon-md-italic" />
        <BlockButton format="heading-one" icon="icon-md-h1" />
        <BlockButton format="heading-two" icon="icon-md-h2" />
        <BlockButton format="heading-three" icon="icon-md-h3" />
      </Toolbar>
      <Editable
        renderElement={renderElement}
        onKeyDown={_onKeyDown}
        {...rest}
      />
    </Slate>
  );
};
