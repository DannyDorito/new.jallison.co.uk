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
  stargazerCount: number | undefined;
  forkCount: number | undefined;
  watchers: Watchers;
}

export interface Watchers {
  totalCount: number;
}
