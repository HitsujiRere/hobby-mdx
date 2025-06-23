import rehypeAutolinkHeadings, {
  type Options as RehypeAutolinkHeadingsOptions,
} from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import type { PluggableList } from "unified";

const rehypeAutolinkHeadingsOptions: RehypeAutolinkHeadingsOptions = {
  properties: {
    className: ["mdx-header-link"],
  },
  content: undefined,
};

export const rehypePlugins: PluggableList = [
  rehypeKatex,
  rehypeSlug,
  [rehypeAutolinkHeadings, rehypeAutolinkHeadingsOptions],
];
