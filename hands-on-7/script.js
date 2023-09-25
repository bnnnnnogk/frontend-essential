const login = async (username, password) => {
  // * fill here...
  const userData = { username, password }

  try {
    const res = await fetch("https://api.learnhub.thanayut.in.th/auth/login", {
      // * fill here...
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      body: JSON.stringify({ username: username, password: password }),
    })

    const data = await res.json()

    if (!res.ok) {
      throw new Error(`${res.status} - ${data.message}`)
    }

    return data.accessToken
  } catch (err) {
    alert(err)
  }
}

const getMyInfo = async () => {
  const token = localStorage.getItem("token")

  try {
    const res = await fetch("https://api.learnhub.thanayut.in.th/auth/me", {
      // * fill here...
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })

    const data = await res.json()

    console.log(data)
  } catch (err) {
    alert(err)
  }
}

const main = () => {
  const usernameInput = document.getElementById("username")

  const passwordInput = document.getElementById("password")

  const submitButton = document.getElementById("submit")

  const getMyInfoButton = document.getElementById("get-info")

  //   getMyInfoButton.addEventListener("click", async (e) => {
  //     e.preventDefault()
  //     await getMyInfo()
  //   })

  getMyInfoButton.addEventListener("click", getMyInfo)

  submitButton.addEventListener("click", async (e) => {
    e.preventDefault()

    if (!passwordInput.value || !usernameInput.value) {
      alert("Please input something")
      return
    }

    // * fill here...?

    const accessToken = await login(usernameInput.value, passwordInput.value)
    if (!accessToken) return

    localStorage.setItem("token", accessToken)
  })
}

document.addEventListener("DOMContentLoaded", () => {
  main()
})
