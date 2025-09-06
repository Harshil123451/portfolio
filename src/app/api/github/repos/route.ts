import { NextRequest, NextResponse } from 'next/server'
import { fetchUserRepos } from '@/lib/github'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const username = searchParams.get('username') || 'Harshil123451'
    
    const repos = await fetchUserRepos(username)
    
    return NextResponse.json(repos, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch (error) {
    console.error('GitHub API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch repositories' },
      { status: 500 }
    )
  }
}
