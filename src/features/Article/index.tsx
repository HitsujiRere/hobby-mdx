import fs from "node:fs/promises";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

export type ArticleProps = {
  id: string;
};

export const Article = async ({ id }: ArticleProps) => {
  const mdxpath = path.join(`src/contents/articles/${id}.mdx`);
  const data = await fs.readFile(mdxpath, { encoding: "utf-8" });
  const mdx = await compileMDX({
    source: data,
    options: {
      mdxOptions: {
        rehypePlugins: [rehypeKatex],
        remarkPlugins: [remarkMath, remarkGfm],
      },
      parseFrontmatter: true,
    },
    components: {},
  });

  return <div className="prose">{mdx.content}</div>;
};
