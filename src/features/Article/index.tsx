import fs from "node:fs/promises";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";
import { HeadMeta } from "./components/HeadMeta";
import { rehypePlugins } from "./plugins/rehype";
import { remarkPlugins } from "./plugins/remark";

export type ArticleProps = {
  id: string;
};

export const Article = async ({ id }: ArticleProps) => {
  const mdxpath = path.join(`src/contents/articles/${id}.mdx`);
  const mdx = await fs.readFile(mdxpath, { encoding: "utf-8" });

  const article = await compileMDX({
    source: mdx,
    options: {
      mdxOptions: {
        rehypePlugins: rehypePlugins,
        remarkPlugins: remarkPlugins,
      },
      parseFrontmatter: true,
    },
    components: {
      HeadMeta: HeadMeta,
    },
  });

  return (
    <article className="prose dark:prose-invert">{article.content}</article>
  );
};
