import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WorkExperience } from "@/lib/definitions";

const ProjectCard = ({ work }: { work: WorkExperience }) => {
  console.log(work);

  return (
    <Card className="bg-secondBackgrond flex flex-col justify-center items-center p-4 m-9 w-5/6 card_fade_in">
      <CardHeader className="flex flex-col justify-center items-center text-center">
        <CardTitle className="text-main text-4xl">{work?.company}</CardTitle>
        <CardDescription className="text-main text-xl mt-2">
          {work?.jobTitle}
        </CardDescription>
        <CardDescription className="text-main text-xl mt-1">
          {work?.duration}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-main text-justify">
        <p>{work?.jobDescription}</p>
      </CardContent>
      {work?.projects.map((project) => (
        <CardContent key={project?.projectTitle} className="text-main mt-4">
          <CardTitle className="text-center text-2xl mb-2">
            {project?.projectTitle}
          </CardTitle>
          <CardDescription className="mb-2">
            <strong>Technologies:</strong>{" "}
            <span>{project.technologies.join(", ")}</span>
          </CardDescription>
          <CardDescription className="mb-2">
            <strong>Responsibilities:</strong> {project.responsibilities}
          </CardDescription>
          <CardDescription className="mb-2">
            <strong>Achievements:</strong> {project.achievements}
          </CardDescription>
          {project.image && (
            <div className="flex justify-center mt-4">
              <img
                src={project.image}
                alt={project.projectTitle}
                className="max-w-xs rounded-md"
              />
            </div>
          )}
          {project.url && (
            <div className="text-center mt-4">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Project Link
              </a>
            </div>
          )}
        </CardContent>
      ))}
      <CardFooter className="text-center mt-4">
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
