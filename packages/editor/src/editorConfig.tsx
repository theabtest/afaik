import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { ListItemNode, ListNode } from "@lexical/list";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { AutocompleteNode } from "./nodes/AutocompleteNode";
import { EmojiNode } from "./nodes/EmojiNode";
import { MentionNode } from "./nodes/MentionNode";
import ExampleTheme from "./themes/ExampleTheme";

const editorConfig = {
  namespace: "editor",
  // The editor theme
  theme: ExampleTheme,
  // Handling of errors during update
  onError(error: any) {
    throw error;
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    EmojiNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
    AutocompleteNode,
    MentionNode,
  ],
};

export default editorConfig;
