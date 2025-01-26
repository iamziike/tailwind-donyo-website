import CustomLoading from "@/components/ui/custom-loading";
import Home from "@/components/pages/home";
import { Suspense } from "react";
import { PageComponent } from "@/types";
import HomeFilters, {
  HomeFilterTypes,
} from "@/components/pages/home/home-filters";

const Page = async ({ ...props }: PageComponent<HomeFilterTypes>) => {
  const searchParams = await props.searchParams;
  const suspenseKey = new URLSearchParams({ ...searchParams })?.toString();

  return (
    <main className="space-y-10">
      <h2 className="text-4xl mt-8 text-center font-bold mx-auto">
        🎉Up-to-date World <br className="lg:hidden" />
        information{" "}
        <span className="text-purple-600 text-gradient_indigo-purple font-semibold">
          For a Global Tourist!
        </span>
      </h2>
      <h3 className="opacity-40 text-lg text-center">
        Search about websites or apps for travelling the World!
      </h3>
      <HomeFilters />
      <Suspense key={suspenseKey} fallback={<CustomLoading />}>
        <Home filters={searchParams} />
      </Suspense>
    </main>
  );
};

export default Page;

