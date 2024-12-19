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
    <Card className="bg-secondBackgrond   flex flex-col justify-center items-center p-4 m-9 w-5/6 card_fade_in">
      <CardHeader className="flex flex-col justify-center items-center">
        <CardTitle className="text-main text-4xl">{work?.company}</CardTitle>
        <CardDescription className="text-main text-xl">
          {work?.jobTitle}
        </CardDescription>
        <CardDescription className="text-main text-xl">
          {work?.duration}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{work?.jobDescription}:</p>
      </CardContent>
      {work?.projects.map((project) => (
        <CardContent key={project?.projectTitle}>
          <CardTitle>{project?.projectTitle}</CardTitle>
          {/* <CardDescription>{project.technologies}</CardDescription> */}
        </CardContent>
      ))}
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
