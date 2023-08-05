import {
  UserRegisterReq,
  UserRegisterDummy,
  UserRegisterError,
} from '@/types/user'

const validateUser = (
  userData: UserRegisterReq,
  dummyData: UserRegisterDummy
): UserRegisterError[] => {
  const fields = Object.keys(userData)

  const Errors: UserRegisterError[] = []
  // ErrorsID:
  // 0 - Too short value
  // 1 - Invalid value
  // 2 - Values doesn't match
  // 3 - Value must be true
  // 4 - Too young

  userData.name.length == 0 && Errors.push({ T: fields[0], ID: 0 })
  userData.fullname.length == 0 && Errors.push({ T: fields[1], ID: 0 })
  userData.login.length < 4 && Errors.push({ T: fields[2], ID: 0 })
  userData.email.length == 0 && Errors.push({ T: fields[3], ID: 0 })
  // new Date().getFullYear() - Number(userData.DateOfBirth.substring(0, 4)) <
  // 14 && Errors.push({ T: fields[4], ID: 4 })
  userData.password.length < 8 && Errors.push({ T: fields[6], ID: 0 })
  userData.password != dummyData.confirmedpassword &&
    Errors.push({ T: fields[6], ID: 2 })
  dummyData.rodo == false && Errors.push({ T: 'Rodo', ID: 3 })

  return Errors
}

export default validateUser
