import React, { useState } from 'react'
import styles from './podcastList.module.css'
import projectsData from '../../assets/data/proyects.json'
import ProjectCard from '../ProjectCard'
// import usePodcasts from '../../hook/useGetAllPodcast'
// import Search from '../Search/Search'

const ProyectsList = () => {
  const [search, setSearch] = useState('')
  // // const podcasts = usePodcasts()

  const handleChange = (inputData) => {
    // setSearch(inputData)
    console.log(search);
  }

  // const filteredPodcasts = podcasts.filter((projec) =>
  //   podcast.name.toLowerCase().includes(search.toLowerCase()) ||
  //   podcast.author.toLowerCase().includes(search.toLowerCase())
  // )

  return (
    <>
      {/* <Search handleChange={handleChange} /> */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mx-3'>
        {projectsData && projectsData.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </>
  )
}

export default ProyectsList
