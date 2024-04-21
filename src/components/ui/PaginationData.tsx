"use client";

import { PageData, PageInfo } from "@/graphql/generated";
import { cn } from "@/utils/cn";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export interface PaginationDataProps {
  perPage: number;
  pageData?: PageData;
  pageInfo?: PageInfo;
}

const PaginationData = ({
  pageInfo,
  pageData,
  perPage,
}: PaginationDataProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onClickNextPress = useCallback(() => {
    if (pageInfo?.hasNextPage) {
      router.push(`${pathname}?after=${pageInfo?.endCursor}`);
    }
  }, [router, pageInfo, pathname]);

  const onClickPreviousPress = useCallback(() => {
    if (pageInfo?.hasPreviousPage) {
      router.push(
        `${pathname}?first=null&before=${pageInfo?.startCursor}&last=${perPage}`
      );
    }
  }, [router, pathname, pageInfo, perPage]);

  return (
    <div className="w-full flex flex-row justify-between text-sm mb-4">
      <div className="flex gap-2">
        <label>Showing</label>
        <label className="font-bold">
          {(pageData?.offset ?? 0) + 1} -{" "}
          {Math.min(
            (pageData?.limit ?? 0) * ((pageData?.offset ?? 0) + 1),
            pageData?.count ?? 0
          )}
        </label>
        <label>of</label>
        <label className="font-bold">{pageData?.count}</label>
      </div>
      <div className="flex gap-8">
        <div
          className={cn(
            pageInfo?.hasPreviousPage
              ? "cursor-pointer"
              : "cursor-not-allowed text-primary-50",
            "flex items-center gap-2 select-none"
          )}
          onClick={onClickPreviousPress}
        >
          <FaChevronLeft />
          Previous
        </div>

        <div
          className={cn(
            pageInfo?.hasNextPage
              ? "cursor-pointer"
              : "cursor-not-allowed text-primary-50",
            "flex items-center gap-2 select-none"
          )}
          onClick={onClickNextPress}
        >
          Next
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
};

export default PaginationData;
