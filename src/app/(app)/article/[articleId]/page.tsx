import path from "node:path";
import fg from "fast-glob";
import { Suspense } from "react";
import { Article } from "@/features/Article";

export async function generateStaticParams() {
  const articles = await fg("src/contents/articles/*.mdx");

  return Promise.all(
    articles.map(async (article) => ({
      articleId: path.basename(article).split(".")[0],
    })),
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ articleId: string }>;
}) {
  const { articleId } = await params;
  return (
    <main className="container mx-auto">
      <Suspense fallback={<p>Loding...</p>}>
        <Article id={articleId} />
      </Suspense>
    </main>
  );
}

export const dynamicParams = false;
