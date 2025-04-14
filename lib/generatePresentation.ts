import { getOpenAIClient } from './openai';

export async function generatePresentation(topic: string) {
  const openai = getOpenAIClient();
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are a helpful assistant who writes presentations.' },
      { role: 'user', content: `Create a 5-slide presentation on: ${topic}` }
    ]
  });

  const content = response.choices[0].message.content;
  const slides = content.split('Slide ').slice(1).map((block) => {
    const [titleLine, ...rest] = block.trim().split('
');
    const title = titleLine.replace(/^\d+:\s*/, '');
    const bullets = rest.filter((line) => line.trim().startsWith('-')).map((b) => b.slice(1).trim());
    return { title, bullets };
  });

  return slides;
}