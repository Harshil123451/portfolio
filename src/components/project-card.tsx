"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Github, Star, GitFork, Calendar } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GitHubRepo } from "@/types/github"
import { formatRelativeTime, getLanguageColor } from "@/lib/utils"

interface ProjectCardProps {
  repo: GitHubRepo
  isPinned?: boolean
  delay?: number
}

export function ProjectCard({ repo, isPinned = false, delay = 0 }: ProjectCardProps) {
  const languageColor = getLanguageColor(repo.language || "")

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-lg mb-2 flex items-center gap-2">
                {repo.name}
                {isPinned && (
                  <Badge variant="secondary" className="text-xs">
                    Pinned
                  </Badge>
                )}
              </CardTitle>
              <CardDescription className="line-clamp-2">
                {repo.description || "No description available"}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1">
          {/* Language */}
          {repo.language && (
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: languageColor }}
              />
              <span className="text-sm text-muted-foreground">
                {repo.language}
              </span>
            </div>
          )}

          {/* Topics */}
          {repo.topics.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-4">
              {repo.topics.slice(0, 3).map((topic) => (
                <Badge key={topic} variant="outline" className="text-xs">
                  {topic}
                </Badge>
              ))}
              {repo.topics.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{repo.topics.length - 3}
                </Badge>
              )}
            </div>
          )}

          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              <span>{repo.stargazers_count}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork className="h-4 w-4" />
              <span>{repo.forks_count}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formatRelativeTime(repo.updated_at)}</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex gap-2">
          <Button asChild variant="outline" size="sm" className="flex-1">
            <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
          {repo.homepage && (
            <Button asChild size="sm" className="flex-1">
              <Link href={repo.homepage} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
