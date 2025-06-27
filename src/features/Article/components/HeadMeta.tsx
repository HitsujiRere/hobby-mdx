import { lightFormat } from "date-fns";

export type HeadMetaProps = {
  createdAt: Date;
  updatedAt: Date;
};

export const HeadMeta = ({ createdAt, updatedAt }: HeadMetaProps) => {
  return (
    <p className="flex gap-4 text-foreground/70">
      <span>
        Created at <time>{lightFormat(createdAt, "yyyy-MM-dd")}</time>
      </span>
      <span>
        Updated at <time>{lightFormat(updatedAt, "yyyy-MM-dd")}</time>
      </span>
    </p>
  );
};
