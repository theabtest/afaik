import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Editor from "./Editor";

const Full = styled(motion.div)`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;

  .other h2 {
    font-size: 18px;
    color: #444;
    margin-bottom: 7px;
  }

  .other a {
    color: #777;
    text-decoration: underline;
    font-size: 14px;
  }

  .other ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  h1 {
    font-size: 24px;
    color: #333;
  }

  .ltr {
    text-align: left;
  }

  .rtl {
    text-align: right;
  }

  .editor-container {
    background: #fff;
    margin: 20px auto 20px auto;
    border-radius: 2px;
    max-width: 600px;
    color: #000;
    position: relative;
    line-height: 20px;
    font-weight: 400;
    text-align: left;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .editor-input {
    min-height: 150px;
    resize: none;
    font-size: 15px;
    caret-color: rgb(5, 5, 5);
    position: relative;
    tab-size: 1;
    outline: 0;
    padding: 15px 10px;
    caret-color: #444;
    overflow: auto;
  }

  .editor-placeholder {
    color: #999;
    overflow: hidden;
    position: absolute;
    text-overflow: ellipsis;
    top: 15px;
    left: 10px;
    font-size: 15px;
    user-select: none;
    display: inline-block;
    pointer-events: none;
  }

  .editor-paragraph {
    margin: 0 0 15px 0;
    position: relative;
  }

  .tree-view-output {
    display: block;
    background: #222;
    color: #fff;
    padding: 5px;
    font-size: 12px;
    white-space: pre-wrap;
    margin: 1px auto 0 auto;
    max-height: 250px;
    position: relative;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    overflow: hidden;
    line-height: 14px;
    width: 100%;
    overflow: auto;
  }

  pre::-webkit-scrollbar {
    background: transparent;
    width: 10px;
  }

  pre::-webkit-scrollbar-thumb {
    background: #999;
  }

  .debug-timetravel-panel {
    overflow: hidden;
    padding: 0 0 10px 0;
    margin: auto;
    display: flex;
  }

  .debug-timetravel-panel-slider {
    padding: 0;
    flex: 8;
  }

  .debug-timetravel-panel-button {
    padding: 0;
    border: 0;
    background: none;
    flex: 1;
    color: #fff;
    font-size: 12px;
  }

  .debug-timetravel-panel-button:hover {
    text-decoration: underline;
  }

  .debug-timetravel-button {
    border: 0;
    padding: 0;
    font-size: 12px;
    top: 10px;
    right: 15px;
    position: absolute;
    background: none;
    color: #fff;
  }

  .debug-timetravel-button:hover {
    text-decoration: underline;
  }

  .emoji {
    color: transparent;
    background-size: 16px 16px;
    background-position: center;
    background-repeat: no-repeat;
    vertical-align: middle;
    margin: 0 -1px;
  }

  .emoji-inner {
    padding: 0 0.15em;
  }

  .emoji-inner::selection {
    color: transparent;
    background-color: rgba(150, 150, 150, 0.4);
  }

  .emoji-inner::moz-selection {
    color: transparent;
    background-color: rgba(150, 150, 150, 0.4);
  }

  .draggable-block-menu {
    border-radius: 4px;
    padding: 2px 1px;
    cursor: grab;
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    will-change: transform;
  }

  .draggable-block-menu .icon {
    width: 16px;
    height: 16px;
    opacity: 0.3;
    background-image: url(../../images/icons/draggable-block-menu.svg);
  }

  .draggable-block-menu:active {
    cursor: grabbing;
  }

  .draggable-block-menu:hover {
    background-color: #efefef;
  }

  .draggable-block-target-line {
    pointer-events: none;
    background: deepskyblue;
    height: 4px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    will-change: transform;
  }
`;

export default function UI() {
  return (
    <Full>
      <Editor />
    </Full>
  );
}
