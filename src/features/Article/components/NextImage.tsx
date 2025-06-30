import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

export const NextImage = ({ className, ...props }: ImageProps) => {
  return <Image className={cn("mx-auto", className)} {...props} />;
};
