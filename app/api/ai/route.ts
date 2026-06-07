import { NextRequest, NextResponse } from 'next/server';
import { getOpenAIClient, defaultModel } from '@/lib/openai';
import { fixedContext, aiInstructions } from '@/lib/ai/prompts';
import type { AIMode } from '@/types/zuppi';

// List of allowed AI modes. Ensure that the API validates only these values.
const validModes: AIMode[] = [
  'radar',
  'challenge',
  'match',
  'career',
  'impact',
  'pitch',
  'proposal',
  'validator',
  'evidence',
  'lgpd',
];

/**
 * Unified AI endpoint. Instead of using a dynamic route segment, this endpoint
 * accepts the desired AI `mode` and the user `prompt` in the request body.
 * This design avoids type mismatches during build time and keeps the API
 * surface flat, making it easier to consume from the client.
 */
export async function POST(req: NextRequest) {
  let mode: AIMode | undefined;
  let prompt = '';
  try {
    // Attempt to parse the incoming JSON body. Unknown fields will be ignored.
    const body = await req.json();
    mode = body?.mode as AIMode;
    prompt = body?.prompt?.toString().trim() || '';
  } catch {
    // Ignore JSON parse errors; validation below will handle missing data.
  }

  // Validate the requested mode.
  if (!mode || !validModes.includes(mode)) {
    return NextResponse.json(
      { ok: false, error: 'Modo inválido.' },
      { status: 400 },
    );
  }

  // Validate the prompt text.
  if (!prompt) {
    return NextResponse.json(
      { ok: false, error: 'Prompt vazio.' },
      { status: 400 },
    );
  }

  try {
    const openai = getOpenAIClient();
    const completion = await openai.chat.completions.create({
      model: defaultModel,
      max_tokens: 1200,
      temperature: 0.7,
      messages: [
        {
          role: 'system',
          content: `${fixedContext}\n\n${aiInstructions[mode]}`,
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    });
    const text = completion.choices[0]?.message?.content ?? 'Sem resposta.';
    return NextResponse.json({ ok: true, text });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Erro interno.';
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}