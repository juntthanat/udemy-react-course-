
export default function AddTask({projects, projectIndex}){

    return (
        <div>
            <div>{projects[projectIndex].title}</div>
            <div>{projects[projectIndex].dueDate}</div>
            <div>{projects[projectIndex].description}</div>
        </div>
    )
}