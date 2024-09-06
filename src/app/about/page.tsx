import Container from "@/components/Container";
import React from "react";
import portraitImage from "@/img/portrait.jpg";
import Image from "next/image";

const AboutPage = () => {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12 text-justify">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="The E-com Team"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 text-left">
            About The E-com: Your Ultimate Guide to E-Commerce, SEO, and Digital Marketing
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Welcome to <a href="/home"> <strong>The E-com</strong> </a>, your go-to resource for all things e-commerce, SEO, and digital marketing. We started with a passion for helping businesses thrive in the online marketplace, and today, we continue to empower entrepreneurs, marketers, and e-commerce enthusiasts with the latest strategies and insights.
            </p>
            <p>
              Our journey began with a simple idea: to demystify e-commerce and make SEO and digital marketing accessible to everyone. Whether you're launching your first online store or looking to scale your existing business, we provide the tools, tips, and resources you need to succeed.
            </p>
            <p>
              At <strong>The E-com</strong>, we understand the power of SEO in driving traffic and sales. Our expert team is dedicated to delivering actionable advice on optimizing your website, boosting your search rankings, and enhancing your digital marketing efforts.
            </p>
            <p>
              Join us on our mission to make e-commerce easier and more profitable for everyone. Explore our blog, dive into our product reviews, and stay ahead of the curve with our in-depth guides and strategies. Together, we can turn your e-commerce dreams into reality.
            </p>
            <p>
              You can Know more about the author <a href="/author"><strong>by clicking here </strong></a>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutPage;
