import { render, screen, fireEvent } from '@testing-library/react'
import { FilterBar } from '../filter-bar'

const mockProps = {
  searchTerm: '',
  setSearchTerm: jest.fn(),
  selectedTags: [],
  setSelectedTags: jest.fn(),
  sortBy: 'stars' as const,
  setSortBy: jest.fn(),
  availableTags: ['react', 'typescript', 'nextjs'],
}

describe('FilterBar', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders search input', () => {
    render(<FilterBar {...mockProps} />)
    
    expect(screen.getByPlaceholderText('Search projects...')).toBeInTheDocument()
  })

  it('renders available tags', () => {
    render(<FilterBar {...mockProps} />)
    
    expect(screen.getByText('react')).toBeInTheDocument()
    expect(screen.getByText('typescript')).toBeInTheDocument()
    expect(screen.getByText('nextjs')).toBeInTheDocument()
  })

  it('calls setSearchTerm when typing in search input', () => {
    render(<FilterBar {...mockProps} />)
    
    const searchInput = screen.getByPlaceholderText('Search projects...')
    fireEvent.change(searchInput, { target: { value: 'test' } })
    
    expect(mockProps.setSearchTerm).toHaveBeenCalledWith('test')
  })

  it('calls setSelectedTags when clicking on a tag', () => {
    render(<FilterBar {...mockProps} />)
    
    const tag = screen.getByText('react')
    fireEvent.click(tag)
    
    expect(mockProps.setSelectedTags).toHaveBeenCalledWith(['react'])
  })

  it('calls setSortBy when changing sort option', () => {
    render(<FilterBar {...mockProps} />)
    
    const sortSelect = screen.getByDisplayValue('Stars')
    fireEvent.change(sortSelect, { target: { value: 'updated' } })
    
    expect(mockProps.setSortBy).toHaveBeenCalledWith('updated')
  })

  it('shows clear filters button when filters are active', () => {
    render(
      <FilterBar 
        {...mockProps} 
        searchTerm="test" 
        selectedTags={['react']} 
      />
    )
    
    expect(screen.getByText('Clear Filters')).toBeInTheDocument()
  })

  it('calls clear functions when clear filters is clicked', () => {
    render(
      <FilterBar 
        {...mockProps} 
        searchTerm="test" 
        selectedTags={['react']} 
      />
    )
    
    const clearButton = screen.getByText('Clear Filters')
    fireEvent.click(clearButton)
    
    expect(mockProps.setSearchTerm).toHaveBeenCalledWith('')
    expect(mockProps.setSelectedTags).toHaveBeenCalledWith([])
    expect(mockProps.setSortBy).toHaveBeenCalledWith('stars')
  })
})
