import React from "react";
import { GitHubRepo } from "@/lib/definitions";
import Link from "next/link";

const MainProjectsCard = ({ repo }: { repo: GitHubRepo }) => {
  return (
    <div
      key={repo.id}
      className="bg-backgroundLight p-8 rounded-lg shadow-md w-full mb-8"
    >
      <h2 className="text-3xl font-bold mt-4 text-primary">
        {repo.name.replace(/[-_]/g, " ")}
      </h2>
      <p className="text-gray-600 mt-4 text-lg">
        Description: {repo.description || "No description provided"}
      </p>
      <p className="text-gray-600 mt-2 text-md">
        Primary Language: {repo.language || "Not specified"}
      </p>
      <p className="text-gray-600 mt-2 text-md">
        Created on: {new Date(repo.created_at).toLocaleDateString()}
      </p>
      <p className="text-gray-600 mt-2 text-md">
        Technologies Used: React, Node.js, CSS, MongoDB, Express.js
      </p>
      <p className="text-gray-600 mt-2 text-md">
        Why These Technologies: These technologies were chosen for scalability,
        ease of development, and modern practices in web development.
      </p>
      <p className="text-gray-600 mt-2 text-md">
        Live Demo: You can test the project{" "}
        <Link
          href="/demo-url"
          target="_blank"
          className="text-blue-600 underline"
        >
          here
        </Link>
        .
      </p>

      <div className="mt-4 flex gap-4">
        <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            View on GitHub
          </button>
        </Link>
        <Link href="/demo-url" target="_blank" rel="noopener noreferrer">
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            View Demo
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MainProjectsCard;
