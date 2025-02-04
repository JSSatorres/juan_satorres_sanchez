import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { WorkExperience } from "@/lib/definitions"

const ExperienceCard = ({ work }: { work: WorkExperience }) => {
  return (
    <Card className="card flex flex-col  card_fade_in">
      <CardHeader className="text-main flex flex-col justify-center items-center text-center">
        <CardTitle className="text-main text-4xl mb-4">
          {work?.company}
        </CardTitle>
        <CardDescription className="text-primary  text-xl mt-5">
          {work?.jobTitle}
        </CardDescription>
        <CardDescription className="text-primary  text-xl mt-1">
          {work?.duration}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-justify w-full">
        <p>{work?.jobDescription}</p>
      </CardContent>
      {work?.projects.map((project) => (
        <CardContent
          key={project?.projectTitle}
          className="text-main mt-4 w-full"
        >
          <CardTitle className="text-left text-2xl mb-2">
            {project?.projectTitle}
          </CardTitle>
          <CardDescription className="mb-2">
            <strong>Technologies:</strong>
            <span>{project.technologies.join(", ")}</span>
          </CardDescription>
          <CardDescription className="mb-2">
            <strong>Responsibilities:</strong> {project.responsibilities}
          </CardDescription>
          <CardDescription className="mb-2">
            <strong>Achievements:</strong> {project.achievements}
          </CardDescription>
          {project?.image && (
            <div className="flex justify-center mt-4">
              <img
                src={project.image}
                alt={project.projectTitle}
                className="max-w-xs rounded-md"
              />
            </div>
          )}
        </CardContent>
      ))}
    </Card>
  )
}

export default ExperienceCard
