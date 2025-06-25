import type { Root } from "mdast";
import type { MdxJsxFlowElement } from "mdast-util-mdx-jsx";
import { visit } from "unist-util-visit";

export const remarkHeadMeta = () => {
  return (tree: Root) => {
    let h1Found = false;

    visit(tree, "heading", (node, index, parent) => {
      if (node.depth === 1 && !h1Found) {
        h1Found = true;

        if (parent && index !== undefined) {
          const headMetaNode: MdxJsxFlowElement = {
            type: "mdxJsxFlowElement",
            name: "HeadMeta",
            attributes: [],
            children: [],
          };

          parent.children.splice(index + 1, 0, headMetaNode);
        }
      }
    });
  };
};
