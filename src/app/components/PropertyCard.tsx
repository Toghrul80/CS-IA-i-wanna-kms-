import { Card, Image } from "@heroui/react";
import { Prisma } from "@prisma/client";
import Link from "next/link";
import React from "react";

interface Props {
  property: Prisma.PropertyGetPayload<{
    select: {
      id: true;
      name: true;
      price: true;
      images: {
        select: {
          url: true;
        };
      };
      location: {
        select: {
          city: true;
          state: true;
        };
      };
    };
  }>;
}

const PropertyCard = ({ property }: Props) => {
  return (
    <Card className="w-72 flex flex-col hover:scale-105" shadow="md">
      <Image
        radius="none"
        src={property.images[0].url}
        className="object-fill w-96 h-48"
      />
      <div className="p-4">
        <p className="text-primary-600 text-xl font-bold">{property.name}</p>
        <p className="text-slate-600">
          {property.location?.city}, {property.location?.state}
        </p>
      </div>
      <div className="bg-gradient-to-br from-slate-50 to-slate-200 p-4 flex justify-between">
        <p>{`$${property.price.toLocaleString()}`}</p>
        <Link
          className="hover:text-primary-500 transition-colors"
          href={`/property/${property.id}`}
        >
          View Details
        </Link>
      </div>
    </Card>
  );
};

export default PropertyCard;
