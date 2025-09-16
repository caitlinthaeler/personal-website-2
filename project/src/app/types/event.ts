import { Tag } from "./tag"

export interface EventPeriod {
    startDate: {
        year: number,
        month?: number,
        day?: number
    },
    endDate?: {
        year: number,
        month?: number,
        day?: number
    },
    duration?: string
}

export interface EventLink {
    name?: string,
    url: string,
    variant?: string,
}

export interface Event{
    title: string,
    company?: string,
    period: EventPeriod,
    description: string,
    points?: string[],
    thumbnail?: string,
    tags?: Tag[]
    links?: EventLink[]
}