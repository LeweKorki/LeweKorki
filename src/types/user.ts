export interface User {
  _id?: string

  name: string
  fullname: string
  degree: string

  login: string
  dateOfBirth: string | Date
  password: string

  avatarFileID?: string
  bannerFileID?: string

  city: string
  contact: {
    email?: string
    fb?: string
  }

  aboutme?: string
  icons?: string[]
  majors?: Major[]
  sciences?: Science[]

  isTutor: boolean
}

export interface Tutor {
  _id?: string

  name: string
  fullname: string
  degree: string

  city: string
  contact: {
    email?: string
    fb?: string
  }

  aboutme: string[]
  icons: string[]
  majors: Major[]
  sciences: Science[]
}

interface Major {
  name: string
  since: string
  university: string
  img: string
  spec?: string
}

interface Science {
  img: string
  name: string
}

export interface UserRegisterReq {
  name: string
  fullname: string
  login: string
  email: string
  // DateOfBirth: string
  password: string
}

export interface UserRegisterDummy {
  confirmedpassword: string
  rodo: boolean
}

export interface UserRegisterError {
  T: string
  ID: number
}

export interface UserLoginReq {
  login: string
  password: string
}
