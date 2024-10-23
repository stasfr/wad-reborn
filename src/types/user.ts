export interface User {
  id: string
  email: string
  password: string
  name: string
  createdAt: string
  updatedAt: string
}

export interface ILoginRequestData {
  email: string
  password: string
}
