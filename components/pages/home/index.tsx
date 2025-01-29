import CustomPagination from "@/components/ui/custom-pagination";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { getLocations } from "@/app/actions";
import { HomeFilterTypes } from "@/components/pages/home/home-filters";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CustomEmptyState from "@/components/ui/custom-empty-state";
import CustomImage from "@/components/ui/custom-image";

interface Props {
  filters: HomeFilterTypes;
}

const Home = async ({ filters }: Props) => {
  const pageIndex = Number(filters.pageIndex) || 1;
  const locations = await getLocations(pageIndex, {
    ...filters,
    pageSize: "12",
  });

  if (locations.data.length) {
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {locations?.data?.map((location) => (
            <Card
              key={location.id}
              className="flex flex-col rounded-md hover:bg-accent transition ease-in-out duration-300 cursor-pointer overflow-hidden"
            >
              <CardHeader className="p-0 overflow-hidden">
                <CustomImage
                  src={location.images[0]}
                  alt={location.name}
                  width={486}
                  height={231}
                  className="object-cover hover:scale-105 transition-transform ease duration-300"
                  style={{
                    height: "231px",
                    width: "100%",
                  }}
                />
              </CardHeader>
              <CardContent className="group px-4 py-5 space-y-4">
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>{location.name}</span>
                  <div className="items-center gap-2 hidden font-light">
                    Details <ArrowRight size={18} />
                  </div>
                </CardTitle>
                <CardDescription className="text-card-foreground leading-relaxed">
                  {location.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-end px-4 gap-2 opacity-60 text-sm flex-grow items-end">
                {location.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>

        <CustomPagination {...locations} className="pb-5 mb-0" />
      </>
    );
  }

  return <CustomEmptyState />;
};

export default Home;
