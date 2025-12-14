export type DefaultOptions = "rock" | "paper" | "scissors";
export type AdvancedOptions = DefaultOptions | "spock" | "lizard";
export type GameChoices = [React.ReactNode, AdvancedOptions][];
