export type Progress = {
    week: number,
    value: number | null,
}

export type Employee = {
    id: number,
    name: string,
    progress: Progress[]
}

export type Position = {
    name: string,
    employees: Employee[]
}

export type Organization = {
    name: string,
    isOpen: boolean,
    progress: Progress[]
    positions: Position[]
}