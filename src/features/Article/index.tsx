import fs from "node:fs/promises";
import path from "node:path";
import { fromPromise } from "neverthrow";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import * as z from "zod/v4";
import { HeadMeta } from "./components/HeadMeta";
import { NextImage } from "./components/NextImage";
import { rehypePlugins } from "./plugins/rehype";
import { remarkPlugins } from "./plugins/remark";

const schema = z.object({
  title: z.string(),
  created_at: z.iso.date(),
  updated_at: z.iso.date(),
});

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

  const article = await compileMDX({
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

  const frontmatter = await schema.parseAsync(article.frontmatter);

  const title = frontmatter.title;
  const createdAt = new Date(frontmatter.created_at);
  const updatedAt = new Date(frontmatter.updated_at);

  return (
    <article className="prose dark:prose-invert mx-auto max-w-3xl">
      <h1>{title}</h1>
      <HeadMeta createdAt={createdAt} updatedAt={updatedAt} />

      {article.content}
    </article>
  );
};
