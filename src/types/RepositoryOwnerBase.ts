export interface RepositoryOwnerBase {
  repositoryOwner?: RepositoryOwner;
}

interface RepositoryOwner {
  repositories?: Repository;
}

interface Repository {
  nodes?: RepositoryNode[];
}

interface RepositoryNode {
  name: string;
  url: string;
  __typename?: string;
}
