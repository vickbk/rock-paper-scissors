export const GAMES = {
  default: {
    type: "default",
    image: "image-rules.svg",
    description:
      "Scissors cuts Paper, Paper covers Rock, Rock crushes Scissors",
    title: "Rock Paper Scissors",
  },
  advanced: {
    type: "advanced",
    image: "image-rules-bonus.svg",
    description:
      "Scissors cuts Paper, Paper covers Rock, Rock crushes Lizard, Lizard poisons Spock, Spock smashes Scissors, Scissors decapitates Lizard, Lizard eats Paper, Paper disproves Spock, Spock vaporizes Rock and as it always has, Rock crushes his Scissors",
    title: "Rock Paper Scissors Lizard Spock",
  },
} as const;
