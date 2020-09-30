function topSalary(salaries) {
    let name = null
    let max = 0
    for (let [key, value] of Object.entries(salaries)) {
      if (max < value) {
        max = value
        name = key
      }
    }return name
  }