export interface User {
  id: string
  email: string
  password: string
  name: string
  createdAt: string
  updatedAt: string
}

export interface signUpInput {
  email: string
  password: string
}
