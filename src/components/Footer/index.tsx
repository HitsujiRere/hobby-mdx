import { SiGithub } from "@icons-pack/react-simple-icons";
import { Twitter } from "~/assets/icons/twitter";
import { Button } from "~/components/ui/button";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center border-t border-t-border bg-sidebar px-4 py-8">
      <div className="flex gap-2">
        <Button variant="ghost" size="icon">
          <a
            href="https://github.com/HitsujiRere"
            target="_blank"
            rel="noopenner noreferrer"
          >
            <SiGithub className="size-6" />
          </a>
        </Button>
        <Button variant="ghost" size="icon">
          <a
            href="https://x.com/HitsujiRere"
            target="_blank"
            rel="noopenner noreferrer"
          >
            <Twitter className="size-6" />
          </a>
        </Button>
      </div>
      <p>Copyright © 2025 Hitsuji Rere</p>
    </footer>
  );
};
