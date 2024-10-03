import SimpleLayout from "@/components/SimpleLayout";
import React from "react";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "The E-commerce project done by the Author on SEO and other digital Marketing firlds",
};

const ProjectPage = () => {
  return (
    <SimpleLayout title="The E-Com projects." intro="">
      Projects under The E-Com are coming soon.
    </SimpleLayout>
  );
};

export default ProjectPage;
