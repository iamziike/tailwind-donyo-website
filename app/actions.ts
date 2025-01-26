"use server";

import { waitFor } from "@/lib/utils";
import { HomeFilterTypes } from "@/components/pages/home/home-filters";
import { LOCATIONS_TO_VISIT } from "@/constants";
import { ApiPaginatedResponse, LocationsToVisit } from "@/types";

export const getLocations = async (
  pageIndex: number,
  searchParams?: HomeFilterTypes
): Promise<ApiPaginatedResponse<LocationsToVisit>> => {
  const pageSize = Number(searchParams?.pageSize) || 10;

  return new Promise(async (resolve) => {
    const pageToGet = (pageIndex - 1) * pageSize;
    const updatedLocations = LOCATIONS_TO_VISIT.filter((location) => {
      if (
        location.tags.includes(searchParams?.categories || "") &&
        [location.description, location.name, ...location.tags].some((value) =>
          value
            .toLowerCase()
            .includes(searchParams?.searchTerm?.toLowerCase() || "")
        )
      ) {
        return true;
      }

      if (
        !searchParams?.categories &&
        !searchParams?.searchTerm &&
        !searchParams?.locations &&
        !searchParams?.languages
      ) {
        return true;
      }
    });
    const locations = updatedLocations.slice(pageToGet, pageToGet + pageSize);

    await waitFor(2);
    resolve({
      pageIndex,
      pageSize,
      data: locations,
      totalPages: Math.ceil(updatedLocations.length / pageSize),
      totalItems: updatedLocations.length,
    });
  });
};
