import type { AdvancedOptions, DefaultOptions } from "./types/game-types";

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

export const GAME_RULES: {
  name: AdvancedOptions;
  beats: { name: AdvancedOptions; message: string }[];
}[] = [
  {
    name: "scissors",
    beats: [
      { name: "paper", message: "Scissors cuts Papper" },
      { name: "lizard", message: "Scissors decapitates Lizard" },
    ],
  },
  {
    name: "paper",
    beats: [
      { name: "rock", message: "Paper covers Rock" },
      { name: "spock", message: "Paper disproves Spock" },
    ],
  },
  {
    name: "rock",
    beats: [
      { name: "scissors", message: "Rock crushes Scissors" },
      { name: "lizard", message: "Rock crushes Lizard" },
    ],
  },
  {
    name: "lizard",
    beats: [
      { name: "spock", message: "Lizard poisons Spock" },
      { name: "paper", message: "Lizard eats Paper" },
    ],
  },
  {
    name: "spock",
    beats: [
      { name: "scissors", message: "Spock smashes Scissors" },
      { name: "rock", message: "Spock vaporizes Rock" },
    ],
  },
];

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export const GAME_CHOICES: {
  default: DefaultOptions[];
  advanced: AdvancedOptions[];
} = {
  default: ["rock", "paper", "scissors"],
  advanced: ["rock", "paper", "scissors", "lizard", "spock"],
};

export function getComputerChoice(gamestyle: "default" | "advanced") {
  const currentGame = GAME_CHOICES[gamestyle];
  return currentGame[getRandomInt(0, currentGame.length)];
}

export function getWinner({
  choice,
  computerChoice,
}: Record<"choice" | "computerChoice", AdvancedOptions>) {
  if (choice === computerChoice)
    return {
      message: "Draw",
      details: `No winner, you both chose ${choice}`,
    };
  const player = isWinner({ player: choice, opponent: computerChoice });
  if (player)
    return {
      message: "You Win",
      details: player.details,
    };
  const computer = isWinner({ player: computerChoice, opponent: choice });

  return {
    message: "You loose",
    details: computer && computer.details,
  };
}

export function isWinner({
  player,
  opponent,
}: Record<"player" | "opponent", AdvancedOptions>) {
  const playerChoice = GAME_RULES.find(({ name }) => name === player)!;
  const beatsResults = playerChoice.beats.find(({ name }) => name === opponent);
  if (beatsResults)
    return {
      details: beatsResults.message,
    };
  return false;
}
