import Link from "next/link";
import React from "react";

const Breadcrumb = ({page}:{page:string}) => {
  return (
    <div className="flex gap-3">
      <Link href={"/"} className="text-muted-foreground">
        Home
      </Link>{" "}
      / <span>{page}</span>
    </div>
  );
};

export default Breadcrumb;
