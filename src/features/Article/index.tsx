import fs from "node:fs/promises";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

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
        rehypePlugins: [],
        remarkPlugins: [remarkGfm],
      },
      parseFrontmatter: true,
    },
    components: {},
  });

  return (
    <>
      <h1>{String(mdx.frontmatter.title)}</h1>
      {mdx.content}
    </>
  );
};
