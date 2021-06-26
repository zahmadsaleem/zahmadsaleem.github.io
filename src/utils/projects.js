import { projects } from "@/data/data";

export function filterProjects(projectPrefix) {
    return projects.filter(i => i.projectid.includes(projectPrefix));
}

export function projectById(id){
    return projects.find(x=> x.projectid === id);
}