"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { WelcomeHeader, TopRightHeader } from "@/components/welcome-header"
import { OnboardingFlow } from "@/components/onboarding-flow"
import { Dashboard } from "@/components/dashboard"
import { UserProfile } from "@/components/user-profile"

export interface UserProfile {
  name: string
