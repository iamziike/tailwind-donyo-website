import { LOCATIONS_TO_VISIT } from "@/constants";

interface SelectFilter {
  type: "select";
  options: { label: string; value: string }[];
}

interface Input {
  type: "input";
}

export interface SelectOption {
  value: string;
  label: string;
}

export type Filter = (Input | SelectFilter) & {
  placeholder?: string;
  name: string;
  label: string;
};

export type CustomObject<
  T extends string | number | symbol = string,
  I = unknown
> = {
  [key in T]: I;
};

export interface ApiPaginatedResponse<T = null> {
  pageIndex: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  data: T;
}

export interface PageComponent<T = object> {
  searchParams: T;
}

export type LocationsToVisit = typeof LOCATIONS_TO_VISIT;

export type DefaultFilterTypes<T = object> = T & {
  pageIndex: string;
  pageSize: string;
  searchTerm: string;
};
