import React from 'react'
import styles from './podcastCard.module.css'
// import { useNavigate } from 'react-router-dom'

const ProjectCard = ({ project }) => {
  // const navigate = useNavigate()

  // const handleclick = (project) => {
  //   if (podcast) {
  //     navigate(`podcast/${podcast?.id}`)
  //   }
  // }
  console.log(project);

  return (

    <div className={`${styles.card} w-48 text-center`}>
      <div className={styles.cardImage}>
        {/* <img
          src={project?.img}
          alt={project?.name}
          onClick={() => handleclick(project)}
          className={`${styles.imgCard} w-20 h-20 mx-auto rounded-full cursor-pointer`}
        /> */}
      </div>
      <div className={`${styles.cardDescription} p-4 cursor-pointer rounded-md shadow-md bg-white`}>
        <h2 className='mt-10 text-base font-semibold uppercase'>{project?.title}</h2>
        <p className='mt-2 text-sm text-lowercase'>
          Description:
          {project?.description}
        </p>
        <p className='mt-2 text-sm text-lowercase'>
          Technologies:
          {project?.technologies}
        </p>
      </div>
    </div>

  )
}

export default ProjectCard
