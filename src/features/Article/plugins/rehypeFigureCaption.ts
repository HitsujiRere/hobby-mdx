import type { Element, ElementContent, Root } from "hast";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";

export const rehypeFigureCaption: Plugin<[], Root> = () => (tree: Root) => {
  visit(tree, "element", (node, index, parent) => {
    if (node.tagName !== "p" || node.children.every((node) => !isImage(node))) {
      return;
    }

    if (parent !== undefined && index !== undefined) {
      // Wrap image in figure
      node.tagName = "figure";

      // Wrap captions in figcaption
      const figcaption = createFigcaption(
        node.children.filter((node) => !isImage(node)),
      );

      node.children = [...node.children.filter(isImage), figcaption];
    }
  });
};

const isImage = (node: ElementContent) => {
  return node.type === "element" && node.tagName === "img";
};

const createFigcaption = (children: ElementContent[]): Element => {
  return {
    type: "element",
    tagName: "figcaption",
    children: children,
    properties: {},
  };
};
