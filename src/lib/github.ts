import { GitHubRepo, GitHubUser } from '@/types/github'
import { siteConfig } from '../../site.config'

const GITHUB_API_BASE = 'https://api.github.com'
const GITHUB_TOKEN = process.env.GITHUB_TOKEN

export async function fetchUserRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    }

    if (GITHUB_TOKEN) {
      headers['Authorization'] = `token ${GITHUB_TOKEN}`
    }

    const response = await fetch(
      `${GITHUB_API_BASE}/users/${username}/repos?per_page=100&sort=updated`,
      { headers }
    )

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const repos: GitHubRepo[] = await response.json()
    
    // Filter out forks, archived, and disabled repos
    return repos.filter(repo => 
      !repo.fork && 
      !repo.archived && 
      !repo.disabled &&
      !repo.private
    )
  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
    return []
  }
}

export async function fetchUser(username: string): Promise<GitHubUser | null> {
  try {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    }

    if (GITHUB_TOKEN) {
      headers['Authorization'] = `token ${GITHUB_TOKEN}`
    }

    const response = await fetch(
      `${GITHUB_API_BASE}/users/${username}`,
      { headers }
    )

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching GitHub user:', error)
    return null
  }
}

export function sortRepos(repos: GitHubRepo[], sortBy: 'stars' | 'updated' | 'name'): GitHubRepo[] {
  const pinnedRepos = siteConfig.pinnedRepos
  
  return repos.sort((a, b) => {
    // Pinned repos first
    const aPinned = pinnedRepos.includes(a.name as any)
    const bPinned = pinnedRepos.includes(b.name as any)
    
    if (aPinned && !bPinned) return -1
    if (!aPinned && bPinned) return 1
    
    // Then sort by selected criteria
    switch (sortBy) {
      case 'stars':
        return b.stargazers_count - a.stargazers_count
      case 'updated':
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      case 'name':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })
}

export function filterRepos(
  repos: GitHubRepo[], 
  searchTerm: string, 
  selectedTags: string[]
): GitHubRepo[] {
  return repos.filter(repo => {
    // Search filter
    const matchesSearch = !searchTerm || 
      repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase()))
    
    // Tags filter
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.some(tag => repo.topics.includes(tag))
    
    return matchesSearch && matchesTags
  })
}

export function getAllTopics(repos: GitHubRepo[]): string[] {
  const topics = new Set<string>()
  repos.forEach(repo => {
    repo.topics.forEach(topic => topics.add(topic))
  })
  return Array.from(topics).sort()
}
