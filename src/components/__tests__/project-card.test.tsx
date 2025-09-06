import { render, screen } from '@testing-library/react'
import { ProjectCard } from '../project-card'
import { GitHubRepo } from '@/types/github'

const mockRepo: GitHubRepo = {
  id: 1,
  name: 'test-repo',
  full_name: 'user/test-repo',
  description: 'A test repository',
  html_url: 'https://github.com/user/test-repo',
  homepage: 'https://test-repo.com',
  language: 'TypeScript',
  stargazers_count: 10,
  forks_count: 5,
  topics: ['react', 'typescript', 'nextjs'],
  created_at: '2023-01-01T00:00:00Z',
  updated_at: '2023-12-01T00:00:00Z',
  pushed_at: '2023-12-01T00:00:00Z',
  fork: false,
  archived: false,
  disabled: false,
  private: false,
  default_branch: 'main',
}

describe('ProjectCard', () => {
  it('renders repository information correctly', () => {
    render(<ProjectCard repo={mockRepo} />)
    
    expect(screen.getByText('test-repo')).toBeInTheDocument()
    expect(screen.getByText('A test repository')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument() // stars
    expect(screen.getByText('5')).toBeInTheDocument() // forks
  })

  it('renders pinned badge when isPinned is true', () => {
    render(<ProjectCard repo={mockRepo} isPinned={true} />)
    
    expect(screen.getByText('Pinned')).toBeInTheDocument()
  })

  it('renders topics as badges', () => {
    render(<ProjectCard repo={mockRepo} />)
    
    expect(screen.getByText('react')).toBeInTheDocument()
    expect(screen.getByText('typescript')).toBeInTheDocument()
    expect(screen.getByText('nextjs')).toBeInTheDocument()
  })

  it('renders links correctly', () => {
    render(<ProjectCard repo={mockRepo} />)
    
    const codeLink = screen.getByRole('link', { name: /code/i })
    const liveLink = screen.getByRole('link', { name: /live/i })
    
    expect(codeLink).toHaveAttribute('href', 'https://github.com/user/test-repo')
    expect(liveLink).toHaveAttribute('href', 'https://test-repo.com')
  })
})
