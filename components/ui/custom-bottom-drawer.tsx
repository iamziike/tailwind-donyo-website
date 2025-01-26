"use client";

import * as React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface Props {
  trigger: React.ReactElement;
  header?: Partial<{
    text: string;
    description: string;
  }>;
  children: React.ReactElement;
  footer?: React.ReactElement;
}

export const CustomBottomDrawerCloseControl = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  return <DrawerClose asChild>{children}</DrawerClose>;
};

const CustomBottomDrawer = ({ trigger, header, children, footer }: Props) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        {(header?.text || header?.description) && (
          <DrawerHeader>
            <DrawerTitle hidden={!header?.text}>{header?.text}</DrawerTitle>
            <DrawerDescription hidden={!header?.description}>
              {header?.description}
            </DrawerDescription>
          </DrawerHeader>
        )}

        <div className="pb-0">{children}</div>

        {footer && <DrawerFooter>{footer}</DrawerFooter>}
      </DrawerContent>
    </Drawer>
  );
};

export default CustomBottomDrawer;
