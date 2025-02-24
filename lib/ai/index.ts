import { openai } from '@ai-sdk/openai';
import { google } from "@ai-sdk/google";


import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';

import { customMiddleware } from './custom-middleware';

export const customModel = (apiIdentifier: string) => {
  if(apiIdentifier.startsWith('gemini')){
    const model = google(apiIdentifier);
    // Cast the model to ensure type compatibility with LanguageModelV1
    return wrapLanguageModel({
      model: model as any,
      middleware: customMiddleware,
    });
  }
  return wrapLanguageModel({
    model: openai(apiIdentifier),
    middleware: customMiddleware,
  });
};

export const imageGenerationModel = openai.image('dall-e-3');
