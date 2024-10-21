import React from 'react'
import { GitHubRepo } from '@/lib/definitions'
import Link from 'next/link';

const MainProjectsCard = ({repo}:{repo: GitHubRepo}) => {
  return ( 
    <div key={repo.id} className="bg-backgroundLight p-4 rounded-lg">
      <h2 className="text-2xl font-bold mt-4">{repo.name.replace(/[-_]/g, ' ')}</h2>
      <p className="text-gray-400 mt-2">Description: {repo.description || 'No description provided'}</p>
      <p className="text-gray-400 mt-2">Language: {repo.language || 'Not specified'}</p>
      <p className="text-gray-400 mt-2">Created on: {new Date(repo.created_at).toLocaleDateString()}</p>
      {/* <p className="text-gray-400 mt-2">Stars: {repo.stargazers_count}</p>
      <p className="text-gray-400 mt-2">Forks: {repo.forks_count}</p> */}
      <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
        <h6 className="text-sm text-primary font-bold mt-4">{repo.full_name}</h6>
      </Link>
    </div>
         
  )
}

export default MainProjectsCard

