import ProjectNode from './components/ProjectNode'
import SidePanel from './components/SidePanel'
import { NodeConnector } from './components/NodeConnector'
import type { Project } from './entities/projectNode'
import './App.css'
import { useEffect, useState } from 'react'

// load mock data 
import mockProjects from './mockData/mockProjects.json';
const Projects = mockProjects as Project[];

function App() {
  const [projects, setProjects] = useState<Project[]>(() => {
    const persistantProjects = localStorage.getItem("highrise-projects");
    return persistantProjects ? (JSON.parse(persistantProjects) as Project[]) : Projects;
  })

  function handlePositionChange(projectId: Project["id"], nextPosition: Project["position"]) {
    setProjects((currentProjects) =>
      currentProjects.map((project) =>
        project.id === projectId ? { ...project, position: nextPosition } : project
      )
    )
  }

  const [currProject, setcurrProject] = useState<Project | null>(() => {
    const lastProjectOnSideBar = localStorage.getItem("lastProjectOnSideBar");
    if (!lastProjectOnSideBar) return null;

    try {
      const savedProject = JSON.parse(lastProjectOnSideBar) as Project | null;
      return projects.find((project) => project.id === savedProject?.id) ?? null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    localStorage.setItem("highrise-projects", JSON.stringify(projects));
    localStorage.setItem("lastProjectOnSideBar", JSON.stringify(currProject))
  }, [projects, currProject]);

  return (
    <>
      {projects.map((project) => (
        <div key={project.id} onClick={() => { setcurrProject(project); }}>
          <ProjectNode
            project={project}
            onPositionChange={(nextPosition) => handlePositionChange(project.id, nextPosition)}
          />
          <NodeConnector
            from={{
              x: project.position.x + 16,
              y: project.position.y + 16
            }}
            to={{ x: 900, y: 600 }}
            color='gray'
          />
        </div >
      ))
      }

      {currProject && (
        <SidePanel
          project={currProject}
          onClose={() => setcurrProject(null)}
        >
        </SidePanel>
      )}

    </>
  );
}

export default App;
