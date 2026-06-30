"use client"

export function Dashboard() 
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle }from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SUBJECTS_BY_CLASS } from "@/lib/education-data"
import type { UserProfile } from "@/app/page"
import type { Subject } from "@/lib/education-data"
import { SubjectView } from "@/components/subject-view"
import { useLanguage } from "@/lib/language-context"
interface DashboardProps {
  userProfile: UserProfile
}

export function Dashboard({ userProfile }: DashboardProps) {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null)
  const { t } = useLanguage()

  const subjectGroup = userProfile.classLevel <= 8 ? "6-8" : "9-12"
  const availableSubjects = SUBJECTS_BY_CLASS[subjectGroup]

  if (selectedSubject) {
    return <SubjectView subject={selectedSubject} userProfile={userProfile} onBack={() => setSelectedSubject(null)} />
  }
