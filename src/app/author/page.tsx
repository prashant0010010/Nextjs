import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"; 

const AuthorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8 text-justify">
      <div className="max-w-md w-full space-y-8 p-10 bg-white dark:bg-gray-800 rounded-xl shadow-md">
        {/* Author Image */}
        <div className="flex justify-center">
          <Image
            src="/img/prashant.png"  // Replace with actual image path
            alt="Prashant Subedi"
            className="w-32 h-32 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Author Name */}
        <h1 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          Prashant Subedi
        </h1>

        {/* Author Bio */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Prashant Subedi is a passionate blogger focused on SEO and e-commerce. 
          He started &quot;The E-com&quot; to help businesses optimize their SEO strategies and thrive in the e-commerce world.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
  {/* Social Media Links */}
  <a
    href="https://github.com/prashant0010010"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
  >
 <FaGithub size={24} />  </a>
  <a
    href="https://facebook.com/prashant.subedi09"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
  >
<FaFacebook size={24} />  </a>
  <a
    href="https://twitter.com/@sub09prashant"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
  >
 <FaTwitter size={24} />  </a>
</div>

        


        {/* Link to Articles */}
        <div className="text-center">
          <Link
            href="/articles"
            className="mt-4 inline-block text-blue-500 hover:underline text-sm"
          >
            Explore my articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthorPage;
