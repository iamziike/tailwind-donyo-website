"use client";

import clsx from "clsx";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./pagination";

interface Props {
  className?: string;
  totalPages: number;
  pageIndex: number;
}

const MAX_BUTTONS = 5;

const CustomPagination = ({ pageIndex, totalPages, className }: Props) => {
  const formatPageURL = (page: number) => {
    const search = new URLSearchParams();
    search.set("pageIndex", page?.toString());
    return "?" + search.toString();
  };

  const disableLinkIf = (condition: boolean) => {
    return clsx({ "pointer-events-none": condition });
  };

  const getNumberedButtons = () => {
    const buttons: { page: number; url: string }[] = [];
    const start = Math.max(1, pageIndex - 1);
    const end = Math.min(start + MAX_BUTTONS, totalPages);

    for (let i = start; i <= end; i++) {
      buttons.push({ page: i, url: formatPageURL(i) });
    }
    return buttons;
  };

  return (
    <Pagination className={clsx(className)}>
      <PaginationContent>
        <PaginationItem className={disableLinkIf(pageIndex === 1)}>
          <PaginationPrevious href={formatPageURL(pageIndex - 1)} />
        </PaginationItem>

        {getNumberedButtons().map((button) => (
          <PaginationItem
            key={button.page}
            className={clsx(disableLinkIf(pageIndex === button.page))}
          >
            <PaginationLink
              isActive={pageIndex === button.page}
              href={button.url}
            >
              {button.page}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem className={disableLinkIf(pageIndex === totalPages)}>
          <PaginationNext href={formatPageURL(pageIndex + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
