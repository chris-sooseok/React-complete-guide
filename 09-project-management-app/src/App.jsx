import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  // used to manage the overall states of projects and tasks
  // ? selectedProjectId is used to decide which content to display
  const [projectsState, setProjectsState] = useState({selectedProjectId: undefined, projects: [], tasks: []});

  function handleAddTask(text) {
      setProjectsState((prevState) => {
        const taskId =   Math.random();
        const newTask = {text: text, projectId: prevState.selectedProjectId, id: taskId};
        return {...prevState, tasks: [newTask, ...prevState.tasks]};
      }
    );
  }

  function handleDeleteTask(id) {
      setProjectsState((prevState) => {
        return {...prevState, tasks: prevState.tasks.filter((task) => task.id !== id)};
      }
    );
  }

  // ? while rendering the sidebar, each project will be passed an id 
  function handleSelectProject(projectId) {
      setProjectsState((prevState) => {
        return {...prevState, selectedProjectId: projectId};
      }
    );
  }

  // ? setting null will display the new project form
  function handleStartAddProjet() {
      setProjectsState((prevState) => {
        return {...prevState, selectedProjectId: null};
      }
    );
  }


  function handleCancelAddProject() {
      setProjectsState((prevState) => {
        return {...prevState, selectedProjectId: undefined};
      }
    );
  }

  function handleAddProject(projectData) {
      setProjectsState((prevState) => {
        const projectId = Math.random();
        const newProject = {...projectData, id: projectId};
        return {...prevState, selectedProjectId: undefined, projects: [...prevState.projects, newProject]};
      }
    );
  }

  function handleDeleteProject() {
      setProjectsState((prevState) => {
        return {...prevState, selectedProjectId: undefined, projects: prevState.projects.filter(
            (project) => project.id !== prevState.selectedProjectId
          )
        };
      }
    );
  }

  // ? if selectedProjectId is set to some id, fetch the project from projectsState
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  // ? content will display selected project
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );
  // ? Based on projectState, display different content either new project form, or no project exist page.
  if (projectsState.selectedProjectId === null) {
    content = ( <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />);
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProjet} />;
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProjet}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
