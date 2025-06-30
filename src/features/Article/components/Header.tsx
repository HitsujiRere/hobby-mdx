import { lightFormat } from "date-fns";
import { Badge } from "@/components/ui/badge";

export type HeaderProps = {
  title: string;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
};

export const Header = ({ title, createdAt, updatedAt, tags }: HeaderProps) => {
  return (
    <header className="mx-auto mb-8 max-w-3xl">
      <h1 className="font-bold text-4xl">{title}</h1>
      <div className="mt-4 flex flex-wrap gap-x-4 text-foreground/80">
        <div>
          Created at <time>{lightFormat(createdAt, "yyyy-MM-dd")}</time>
        </div>
        <div>
          Updated at <time>{lightFormat(updatedAt, "yyyy-MM-dd")}</time>
        </div>
      </div>
      <div className="mt-2 flex gap-2">
        {tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </header>
  );
};
