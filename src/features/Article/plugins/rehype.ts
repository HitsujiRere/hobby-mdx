import rehypeAutolinkHeadings, {
  type Options as RehypeAutolinkHeadingsOptions,
} from "rehype-autolink-headings";
import rehypeImgSize, {
  type Options as RehypeImgSizeOptions,
} from "rehype-img-size";
import rehypeKatex from "rehype-katex";
import rehypeMdxImportMedia from "rehype-mdx-import-media";
import rehypeSlug from "rehype-slug";
import type { PluggableList } from "unified";
import { rehypeFigureCaption } from "./rehypeFigureCaption";

const rehypeImgSizeOptions: RehypeImgSizeOptions = {
  dir: "public",
};

const rehypeAutolinkHeadingsOptions: RehypeAutolinkHeadingsOptions = {
  properties: {
    className: ["mdx-header-link"],
  },
  content: undefined,
};

export const rehypePlugins: PluggableList = [
  rehypeFigureCaption,
  [rehypeImgSize, rehypeImgSizeOptions],
  rehypeKatex,
  rehypeMdxImportMedia,
  rehypeSlug,
  [rehypeAutolinkHeadings, rehypeAutolinkHeadingsOptions],
];
