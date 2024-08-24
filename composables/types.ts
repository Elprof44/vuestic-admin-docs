
export type ColorThemes = {
  [key: string]: string
}


export type Project = {
  id: number
  project_name: string
  project_owner: Omit<User, 'projects'>
  team: Omit<User, 'projects'>[]
  status: 'important' | 'completed' | 'archived' | 'in progress'
  creation_date: string
}

export type EmptyProject = Omit<Project, 'id' | 'project_owner' | 'creation_date' | 'status'> & {
  project_owner: Project['project_owner'] | undefined
  status: Project['status'] | undefined
}


export type UserRole = 'fondateur' | 'senior' | 'junior'

export type User = {
  id: number
  fullname: string
  email: string
  username: string
  role: UserRole
  avatar: string
  projects: Project[]
  notes: string
  active: boolean
}

export enum PaymentSystemType {
  Visa = 'visa',
  MasterCard = 'mastercard',
}

export const paymentSystemTypeOptions = Object.values(PaymentSystemType)

export interface PaymentCard {
  id: string
  name: string
  isPrimary: boolean // show Primary badge
  paymentSystem: PaymentSystemType // Enum or union type for various payment systems
  cardNumberMasked: string // ****1679
  expirationDate: string // 09/24
}

export interface BillingAddress {
  id: string
  name: string
  isPrimary: boolean // show Primary badge
  street: string
  city: string
  state: string
  postalCode: string
  country: string
}
