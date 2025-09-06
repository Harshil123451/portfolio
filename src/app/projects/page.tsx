"use client"

import * as React from "react"
import { motion } from "framer-motion"

import { Section } from "@/components/section"
import { ProjectCard } from "@/components/project-card"
import { FilterBar } from "@/components/filter-bar"
import { fetchUserRepos, sortRepos, filterRepos, getAllTopics } from "@/lib/github"
import { GitHubRepo } from "@/types/github"

export default function ProjectsPage() {
  const [repos, setRepos] = React.useState<GitHubRepo[]>([])
  const [filteredRepos, setFilteredRepos] = React.useState<GitHubRepo[]>([])
  const [loading, setLoading] = React.useState(true)
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedTags, setSelectedTags] = React.useState<string[]>([])
  const [sortBy, setSortBy] = React.useState<"stars" | "updated" | "name">("stars")
  const [availableTags, setAvailableTags] = React.useState<string[]>([])

  React.useEffect(() => {
    async function loadRepos() {
      try {
        const fetchedRepos = await fetchUserRepos("Harshil123451")
        setRepos(fetchedRepos)
        setAvailableTags(getAllTopics(fetchedRepos))
      } catch (error) {
        console.error("Failed to load repositories:", error)
      } finally {
        setLoading(false)
      }
    }

    loadRepos()
  }, [])

  React.useEffect(() => {
    let filtered = filterRepos(repos, searchTerm, selectedTags)
    filtered = sortRepos(filtered, sortBy)
    setFilteredRepos(filtered)
  }, [repos, searchTerm, selectedTags, sortBy])

  if (loading) {
    return (
      <div className="min-h-screen">
        <Section>
          <div className="text-center mb-12">
            <div className="h-8 bg-muted animate-pulse rounded w-64 mx-auto mb-4" />
            <div className="h-4 bg-muted animate-pulse rounded w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="h-64 bg-muted animate-pulse rounded-lg" />
            ))}
          </div>
        </Section>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Section>
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold font-serif mb-4"
          >
            My Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A comprehensive collection of my work across AI, embedded systems, web development, and more
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <FilterBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            sortBy={sortBy}
            setSortBy={setSortBy}
            availableTags={availableTags}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {filteredRepos.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredRepos.length} of {repos.length} projects
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRepos.map((repo, index) => (
                  <ProjectCard
                    key={repo.id}
                    repo={repo}
                    isPinned={["meditrack", "student-hub", "bp-face-app", "fpga-cnn"].includes(repo.name as any)}
                    delay={index * 0.05}
                  />
                ))}
              </div>
            </>
          )}
        </motion.div>
      </Section>
    </div>
  )
}
