function updateProfileInfo(profileData) {
  const photo = document.getElementById("profile.photo")
  photo.src = profileData.photo
  photo.alt = profileData.name

  const name = document.getElementById("profile.name")
  name.innerText = profileData.name

  const job = document.getElementById("profile.job")
  job.innerText = profileData.job

  const local = document.getElementById("profile.local")
  local.innerText = profileData.local

  const tel = document.getElementById("profile.phone")
  tel.innerText = profileData.phone
  tel.href = `tel:${profileData.phone}`

  const email = document.getElementById("profile.email")
  email.innerText = profileData.email
  email.href = `mailto:${profileData.email}`
}

function updateSoftSkills(profileData) {
  const softSkills = document.getElementById("profile.skills.softSkills")

  softSkills.innerHTML = profileData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("")
}

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById("profile.skills.hardSkills")

  hardSkills.innerHTML = profileData.skills.hardSkills
    .map(
      (skill) => `<li><li>
                  <img
                    src="${skill.logo}"
                    alt="${skill.name}"
                    title="${skill.name}"
                  /></li>`
    )
    .join("")
}

function updateLanguages(profileData) {
  const languages = document.getElementById("profile.languages")
  languages.innerHTML = profileData.languages
    .map((languages) => `<li>${languages}</li>`)
    .join("")
}

function updatePortfolio(profileData) {
  const portfolio = document.getElementById("profile.portfolio")
  portfolio.innerHTML = profileData.portfolio
    .map((project) => {
      return `<li>
              <span class="title">${project.name}</span
              ><a href="${project.url}">${project.url}</a>
            </li>`
    })
    .join("")
}

;(async () => {
  const profileData = await fetchProfileData()
  updateProfileInfo(profileData)
  updateSoftSkills(profileData)
  updateHardSkills(profileData)
  updateLanguages(profileData)
  updatePortfolio(profileData)
})()
