"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { WelcomeHeader, TopRightHeader } from "@/components/welcome-header"
import { OnboardingFlow } from "@/components/onboarding-flow"
