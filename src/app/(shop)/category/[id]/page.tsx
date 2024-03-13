import { notFound } from "next/navigation";
import React from "react";

interface CategoryPageProps {
  params: {
    id: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { id } = params;

  if (id === "kids") {
    notFound();
  }

  return <div>CategoryPage</div>;
}
