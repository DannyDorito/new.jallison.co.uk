export interface RepositoryOwner {
  repositories: Repository
}

export interface Repository {
  nodes: RepositoryNode[]
}

export interface RepositoryNode {
  name: string,
  url: string,
  __typename: string
}
