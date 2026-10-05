import ProjectNode from './components/ProjectNode'
import SidePanel from './components/SidePanel'
import { NodeConnector } from './components/NodeConnector'
import type { Project } from './entities/projectNode'
import './App.css'
import { useEffect, useState } from 'react'

const Projects: Project[] = [
  {
    id: 1,
    name: "2D Ratthew Render",
    group: "Personal Project",
    tickets: 0,
    position: { x: 0, y: 0 }
  },
  {
    id: 2,
    name: "Portfolio Project",
    group: "Personal Project",
    tickets: 3,
    position: { x: 0, y: 20 }
  },
  {
    id: 3,
    name: "Commerce Nexus",
    group: "FWD:DYNAMICS",
    tickets: 3,
    position: { x: 0, y: 30 }
  },
  {
    id: 4,
    name: "Code Path",
    group: "Code Ninjas",
    tickets: 3,
    position: { x: 0, y: 50 }
  },
  {
    id: 5,
    name: "Lunaris",
    group: "Personal Project",
    tickets: 3,
    position: { x: 0, y: 70 }
  },
  {
    id: 6,
    name: "FernBudget",
    group: "Personal Project",
    tickets: 3,
    position: { x: 0, y: 90 }
  },
  {
    id: 7,
    name: "Spell Sprint",
    group: "Personal Project",
    tickets: 3,
    position: { x: 0, y: 110 }
  },
  {
    id: 8,
    name: "Bloody Rails",
    group: "Personal Project",
    tickets: 3,
    position: { x: 0, y: 130 }
  },
]

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

  useEffect(() => {
    localStorage.setItem("highrise-projects", JSON.stringify(projects));
  }, [projects]);

  return (
    <>
      {projects.map((project) => (
        <div key={project.id} onClick={() => console.log(project)}>
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
        </div>
      ))}


      {/* Side Panel Component */}
      <SidePanel />

    </>
  )
}

export default App
