import Project from '@/components/project'
import SectionHeading from '@/components/section-heading'
import { projectsData } from '@/lib/data'
import React from 'react'

const AllProjectsPage = () => {
  return (
    <div className='flex flex-col space-y-6 p-6'>
      <SectionHeading>All Projects</SectionHeading>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {projectsData.sort((a, b) => (a.di || 0) - (b.di || 0)).map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))} 
      </div>
    </div>
  )
}

export default AllProjectsPage