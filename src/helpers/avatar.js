export const fullNameToInitials = (fullName) => {
  let [firstname, surname] = fullName.split(' ')
  firstname = firstname === null ? 'null' : firstname
  surname = surname === null ? 'null' : surname
  return firstname.charAt(0) + surname.charAt(0)
}

export const nameToInitials = (first, last) => {
  if (first && last) {
    return first.charAt(0) + last.charAt(0)
  } else {
    return ''
  }
}
