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

  return (
    <div className="min-h-screen p-4 pt-20">
     <div className="max-w-6xl mx-auto font-serif">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">{t("chooseSubject")}</h1>
	<p className="text-lg text-muted-foreground mb-2">{t("selectSubject")}</p>
	<Badge variant="secondary" className="text-sm">
            {t("class")} {userProfile.classLevel} • {t("age")} {userProfile.age}
          </Badge>
        </div>

	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableSubjects.map((subject) => (
	    <Card
              key={subject.id}
	      className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 hover:border-primary/50 animate-bounce-gentle rounded-2xl border-popover-foreground border-dotted"
              onClick={() => setSelectedSubject(subject)}
            >
	      <CardHeader className="text-center pb-4 rounded-2xl shadow-lg">
