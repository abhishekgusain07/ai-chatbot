// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'gpt-4o-mini',
    label: 'GPT 4o mini',
    apiIdentifier: 'gpt-4o-mini',
    description: 'Small model for fast, lightweight tasks',
  },
  {
    id: 'gpt-4o',
    label: 'GPT 4o',
    apiIdentifier: 'gpt-4o',
    description: 'For complex, multi-step tasks',
  },
  {
    id: "gemini-2.0-flash-exp",
    label: "Gemini 2.0",
    apiIdentifier: "gemini-2.0-flash-exp",
    description: "For complex, multi-step tasks",
  }
] as const;

export const DEFAULT_MODEL_NAME: string = 'gpt-4o-mini';
