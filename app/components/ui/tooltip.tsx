import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import React, { ReactNode } from "react";

const ToolTip = ({
  children,
  content,
}: {
  children: ReactNode;
  content: string;
}) => {
  return (
    <TooltipProvider>
      <Tooltip >
        <TooltipTrigger className="cursor-pointer">{children}</TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ToolTip;
