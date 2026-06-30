"use client"

import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

interface LoginFormProps {
	 onSuccess?: () => void
	 defaultTab?: "login" | "register"
}

export function LoginForm({ onSuccess, defaultTab = "login" }: LoginFormProps) {
	 const { login, register: registerUser } = useAuth()
	 const [isLoading, setIsLoading] = useState(false)
	 const [error, setError] = useState<string>("")
	 const [tab, setTab] = useState<"login" | "register">(defaultTab)

	 const [formData, setFormData] = useState({
		 email: "",
		  name: "",
		  confirmPassword:"",
})


const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	 const { name, value } = e.target
         setFormData((prev) => ({ ...prev, [name]: value }))
}


 const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)
