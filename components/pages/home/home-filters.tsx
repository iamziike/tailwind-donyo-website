"use client";

import CustomFieldSelector from "../../ui/custom-field-selector";
import { Input } from "../../ui/input";
import { Search } from "lucide-react";
import { Button } from "../../ui/button";
import { Form, Formik } from "formik";
import { useRouter, useSearchParams } from "next/navigation";
import { removeUndefinedOrNull } from "@/lib/utils";
import { LOCATIONS_TO_VISIT } from "@/constants";
import { DefaultFilterTypes, Filter } from "@/types";

export const HOME_PAGE_FILTERS: Filter[] = [
  {
    type: "select",
    placeholder: "All Categories",
    label: "All Categories",
    name: "categories",
    options: LOCATIONS_TO_VISIT.flatMap((location) => location.tags)
      .filter((tag, index, self) => self.indexOf(tag) === index)
      .map((tag) => ({ label: tag, value: tag })),
  },
  {
    type: "select",
    placeholder: "Sort by",
    label: "Sort by",
    name: "sort",
    options: [],
  },
  {
    type: "select",
    placeholder: "All Locations",
    label: "All Locations",
    name: "locations",
    options: [],
  },
  {
    type: "select",
    placeholder: "All Languages",
    label: "All Languages",
    name: "languages",
    options: [],
  },
];

export interface HomeFilterTypes extends DefaultFilterTypes {
  categories: string;
  sort: string;
  locations: string;
  languages: string;
}

const HomeFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialFilters = {
    categories: searchParams.get("categories") || "",
    sort: searchParams.get("sort") || "",
    locations: searchParams.get("locations") || "",
    languages: searchParams.get("languages") || "",
    searchTerm: searchParams.get("searchTerm") || "",
  };

  return (
    <Formik
      initialValues={initialFilters}
      onReset={() => {
        router.push("/");
      }}
      onSubmit={(values) => {
        const formatedFilters = removeUndefinedOrNull(values);
        const query = new URLSearchParams(formatedFilters).toString();
        router.push(`?${query}`);
      }}
    >
      {({
        errors,
        setValues,
        values,
        submitForm,
        resetForm,
        handleReset,
        handleChange,
      }) => (
        <Form onReset={handleReset}>
          <div className="space-y-4 md:space-y-10">
            <div className="flex">
              <Input
                name="searchTerm"
                onChange={handleChange}
                value={values.searchTerm}
                className="rounded-e-none h-12 placeholder:opacity-70 focus-visible:ring-0 focus:border-2 focus:border-primary font-medium"
                placeholder="Search about websites or apps for travelling the World!"
                onKeyDown={(event) => {
                  // prevents focus from "leaving it after enter"
                  if (event.key.toLowerCase() === "enter") {
                    submitForm();
                    event.preventDefault();
                    event.isPropagationStopped();
                  }
                }}
              />
              <div
                className="bg-primary text-secondary flex items-center px-5 rounded-e cursor-pointer group"
                onClick={submitForm}
              >
                <Search
                  size={16}
                  className="group-active:scale-150 transition-transform"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="grid grid-cols-4 gap-4 w-full">
                {HOME_PAGE_FILTERS.map((filter) => {
                  const filterName = filter.name as keyof typeof initialFilters;

                  if (filter.type === "select") {
                    return (
                      <div
                        key={filter.name}
                        className="w-full col-span-4 sm:col-span-2 md:col-span-1"
                      >
                        <CustomFieldSelector
                          type="select"
                          placeholder={filter.placeholder}
                          options={filter.options || []}
                          value={values[filterName]}
                          error={errors[filterName]}
                          onChange={async (value) => {
                            setValues((prev) => {
                              return {
                                ...prev,
                                [filterName]: value?.value,
                              };
                            });

                            submitForm();
                          }}
                        />
                      </div>
                    );
                  }

                  return <div key={filter.name} />;
                })}
              </div>
              <Button
                variant="outline"
                type="reset"
                onClick={() => {
                  resetForm({
                    values: {
                      categories: "",
                      languages: "",
                      locations: "",
                      searchTerm: "",
                      sort: "",
                    },
                  });
                }}
              >
                Reset
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default HomeFilters;
