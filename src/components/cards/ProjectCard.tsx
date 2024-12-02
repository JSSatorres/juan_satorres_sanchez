import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GitHubRepo } from "@/lib/definitions";
import Link from "next/link";

const ProjectCard = ({ repo }: { repo: GitHubRepo }) => {
  return (
    <Card className="bg-secondBackgrond flex flex-col justify-center items-center p-4  ">
      <CardHeader className="flex flex-col justify-center items-center">
        <CardTitle className="text-main ">
          {repo.name.replace(/[-_]/g, " ")}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-gray-600 mt-2">
          Description: {repo.description || "No description provided"}
        </p>
        <p className="text-gray-600 mt-2">
          Language: {repo.language || "Not specified"}
        </p>
        <p className="text-gray-600 mt-2">
          Created on: {new Date(repo.created_at).toLocaleDateString()}
        </p>
      </CardContent>

      <CardFooter>
        <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
          <h6 className="text-sm text-primary font-bold mt-4">
            {repo.full_name}
          </h6>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
