{
type FrontendDeveloper={
    skills : string[]
    designation1: 'Frontend Developer'
}
type BackendDeveloper={
    skills : string[]
    designation2: 'Backend Developer'
}
type FullstackDeveloper = FrontendDeveloper & BackendDeveloper


const Developer : FullstackDeveloper={
    skills:['js','react', 'nodeJS'],
    designation1:'Frontend Developer',
    designation2:'Backend Developer'
}



//
}