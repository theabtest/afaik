import { EditorConfig, TextNode } from "lexical";

export class EmojiNode extends TextNode {
  private __className: any;
  static getType() {
    return "emoji";
  }

  static clone(node: { __className: any; __text: any; __key: any }) {
    return new EmojiNode(node.__className, node.__text, node.__key);
  }

  constructor(className: any, text: string, key: string | undefined) {
    super(text, key);
    this.__className = className;
  }

  createDOM(config: EditorConfig) {
    const dom = document.createElement("span");
    const inner = super.createDOM(config);
    dom.className = this.__className;
    inner.className = "emoji-inner";
    dom.appendChild(inner);
    return dom;
  }

  updateDOM(
    prevNode: TextNode,
    dom: { firstChild: any },
    config: EditorConfig
  ) {
    const inner = dom.firstChild;
    if (inner === null) {
      return true;
    }
    super.updateDOM(prevNode, inner, config);
    return false;
  }
}

export function $isEmojiNode(node: any) {
  return node instanceof EmojiNode;
}

export function $createEmojiNode(className: string, emojiText: string) {
  return new EmojiNode(className, emojiText, undefined).setMode("token");
}
