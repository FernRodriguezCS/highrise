import { useEffect, useState } from 'react';
import './App.css'
import ProjectNode from './components/ProjectNode'
import type { Project } from './entities/projectNode'

const ExampleProject: Project = {
  id: 1,
  name: "Portfolio Site",
  group: "Personal Project",
  tickets: 3,
  position:{ x: 0, y: 0 }
};

const ExampleProject2: Project = {
  id: 2,
  name: "2D Ratthew Render",
  group: "Personal Project",
  tickets: 3,
  position:{ x: 0, y: 0 }
};

const ExampleProject3: Project = {
  id: 3,
  name: "CommerceNexus",
  group: "FWD:DYNAMICS",
  tickets: 9,
  position:{ x: 100, y: 0 }
};

const ExampleProject4: Project = {
  id: 4,
  name: "CodePath",
  group: "Code Ninjas",
  tickets: 4,
  position:{ x: 100, y: 100 }
};

const ExampleProject5: Project = {
  id: 5,
  name: "Lunaris",
  group: "Personal Project",
  tickets: undefined,
  position:{ x: 300, y: 150 }
};

const ExampleProject6: Project = {
  id: 5,
  name: "FernBudget",
  group: "Personal Project",
  tickets: undefined,
  position:{ x: 200, y: 100 }
};

const ExampleProject7: Project = {
  id: 5,
  name: "Spell Sprint",
  group: "Personal Project",
  tickets: undefined,
  position:{ x: 500, y: 800 }
};

const ExampleProject8: Project = {
  id: 5,
  name: "Bloody Rails",
  group: "Personal Project",
  tickets: 100,
  position:{ x: 350, y: 600 }
};


const PROJECT_STORAGE_KEY = "highrise-example-project";

function App() {
  const [project, setProject] = useState<Project>(() => {
    const savedProject = localStorage.getItem(PROJECT_STORAGE_KEY);
    if(!savedProject) return ExampleProject;

    try{
      return JSON.parse(savedProject) as Project;
    }catch{
      return ExampleProject;
    }
  });

  useEffect(() => {
    localStorage.setItem(PROJECT_STORAGE_KEY, JSON.stringify(project));
  }, [project]);

  return (
    <>
      <ProjectNode
       project={project} 
       onPositionChange={(position) => 
        setProject((current) => ({...current,position}))
      }
       />

      <ProjectNode
      project={ExampleProject2}
      onPositionChange={(position) => 
        setProject((current) => ({...current,position}))
      }
      />

      <ProjectNode
      project={ExampleProject3}
      onPositionChange={(position) => 
        setProject((current) => ({...current,position}))
      }
      />

      <ProjectNode
      project={ExampleProject4}
      onPositionChange={(position) => 
        setProject((current) => ({...current,position}))
      }
      />

      <ProjectNode
      project={ExampleProject5}
      onPositionChange={(position) => 
        setProject((current) => ({...current,position}))
      }
      />

      <ProjectNode
      project={ExampleProject6}
      onPositionChange={(position) => 
        setProject((current) => ({...current,position}))
      }
      />  

       <ProjectNode
      project={ExampleProject7}
      onPositionChange={(position) => 
        setProject((current) => ({...current,position}))
      }
      />  

       <ProjectNode
      project={ExampleProject8}
      onPositionChange={(position) => 
        setProject((current) => ({...current,position}))
      }
      />    
    </>
  )
}

export default App
