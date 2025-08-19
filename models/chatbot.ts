export type BotOptions = {
    label: string;
    nextStep: string;
}

export type BotStep = {
    id: string;
    message: string;
    options: BotOptions[];
    expectsInput?: boolean
}

export type BotFlow = Record<string, BotStep>