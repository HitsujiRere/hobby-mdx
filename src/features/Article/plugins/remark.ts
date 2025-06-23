import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkToc, { type Options as RemarkTocOptions } from "remark-toc";
import type { PluggableList } from "unified";

const remarkTocOptions: RemarkTocOptions = {
  maxDepth: 3,
  heading: "目次",
};

export const remarkPlugins: PluggableList = [
  remarkMath,
  remarkGfm,
  [remarkToc, remarkTocOptions],
];
