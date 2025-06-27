import fs from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { HeadMeta } from "./components/HeadMeta";
import { NextImage } from "./components/NextImage";
import { rehypePlugins } from "./plugins/rehype";
import { remarkPlugins } from "./plugins/remark";
import { fromPromise } from "neverthrow";

export type ArticleProps = {
  id: string;
};

export const Article = async ({ id }: ArticleProps) => {
  const mdxpath = path.join(`src/contents/articles/${id}.mdx`);
  const mdx = await fromPromise(
    fs.readFile(mdxpath, { encoding: "utf-8" }),
    () => {},
  );

  if (mdx.isErr()) {
    return notFound();
  }

  const { content, frontmatter } = await compileMDX({
    source: mdx.value,
    options: {
      mdxOptions: {
        rehypePlugins: rehypePlugins,
        remarkPlugins: remarkPlugins,
      },
      parseFrontmatter: true,
    },
    components: {
      img: NextImage,
    },
  });

  const title = String(frontmatter.title);
  const createdAt = new Date(String(frontmatter.created_at));
  const updatedAt = new Date(String(frontmatter.updated_at));

  return (
    <article className="prose dark:prose-invert">
      <h1>{title}</h1>
      <HeadMeta createdAt={createdAt} updatedAt={updatedAt} />

      {content}
    </article>
  );
};
