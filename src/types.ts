export interface ContributionDay {
  date: string
  count: number
  level: number
}

export interface ContributionsData {
  total: { [year: string]: number }
  contributions: ContributionDay[]
}
