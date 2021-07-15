function behaviour(mood) {
    if (mood === "happy") {
      return `${mood} Good job, you're doing great!`;
    } else if (mood ==="sad") {
      return ` Every cloud has a silver linin`;
    } else if (typeof mood ==="number") {
      return `${mood} Beep beep boop`;
    } else {
      return `${mood} I'm sorry, I'm still learning about feelings! :(`;
    }
  }
  
  console.log(behaviour("happy"));