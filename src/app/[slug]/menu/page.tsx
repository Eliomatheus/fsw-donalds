import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

interface RestaurantMenuPageProps {
  params: Promise<{ slug: string }>;
  searachParams: Promise<{ consumptionMethod: string }>;
}

const isConsumptionMethodValid = (consumptionMethod: string) => {
  return ["DINE_IN", "TAKEAWAY"].includes(consumptionMethod.toUpperCase());
};

const RestaurantMenuPage = async ({
  params,
  searachParams,
}: RestaurantMenuPageProps) => {
  const { slug } = await params;
  const { consumptionMethod } = await searachParams;
  if (!isConsumptionMethodValid(consumptionMethod)) {
    return notFound;
  }
  const restaurant = await db.restaurant.findUnique({ where: { slug } });
  return (
    <h1>
      Menu{slug} {consumptionMethod}
    </h1>
  );
};

export default RestaurantMenuPage;
