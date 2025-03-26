import prisma from "@/lib/prisma";
import PropertyCard from "./components/PropertyCard";
import PropertyContainer from "./components/PropertyContainer";
import FilterSection from "./components/FilterSection";

export default async function Home({ searchParams }: { searchParams: { city?: string; minPrice?: string; maxPrice?: string } }) {
  const minPrice = searchParams.minPrice ? parseInt(searchParams.minPrice) : undefined;
  const maxPrice = searchParams.maxPrice ? parseInt(searchParams.maxPrice) : undefined;

  const properties = await prisma.property.findMany({
    where: {
      location: {
        city: searchParams.city || undefined,
      },
      price: {
        gte: minPrice,
        lte: maxPrice,
      },
    },
    select: {
      id: true,
      name: true,
      price: true,
      images: { select: { url: true } },
      location: { select: { city: true, state: true } },
    },
  });

  return (
    <div>
      <FilterSection />
      <PropertyContainer>
        {properties.map((property) => (
          <PropertyCard property={property} key={property.id} />
        ))}
      </PropertyContainer>
    </div>
  );
}