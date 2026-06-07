import OpenAI from 'openai';

// Usar gpt-4o-mini como padrão (estável e econômico)
export const defaultModel = process.env.OPENAI_MODEL || 'gpt-4o-mini';

export function getOpenAIClient(): OpenAI {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY não configurada. Adicione no painel do Vercel.');
  }
  return new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
}
