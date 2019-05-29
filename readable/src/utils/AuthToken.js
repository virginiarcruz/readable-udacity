// Manage Authorization token related operations

export function initOrGetToken() {

  let token = localStorage.getItem("auth-token")

  if (token == null) {
    token = Math.random().toString(26).substring(4)
    localStorage.setItem("auth-token", token)
  }

  return token
}
