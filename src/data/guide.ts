/**
 * AI Model Guide, basic version.
 * Edit this file to update the guide. Change CHECKED_ON every time you review it.
 */

export const CHECKED_ON = '8 October 2026';

export interface Tool {
  id: string;
  name: string;
  maker: string;
  country: string;
  url: string;
  free: string;
  note?: string;
}

export const TOOLS: Tool[] = [
  { id: 'chatgpt', name: 'ChatGPT', maker: 'OpenAI', country: 'USA', url: 'https://chatgpt.com', free: 'Yes, with limits' },
  { id: 'copilot', name: 'Microsoft Copilot', maker: 'Microsoft', country: 'USA', url: 'https://copilot.microsoft.com', free: 'Yes. Inside Word, Excel and Teams it needs a paid licence' },
  { id: 'claude', name: 'Claude', maker: 'Anthropic', country: 'USA', url: 'https://claude.ai', free: 'Yes, with limits' },
  { id: 'gemini', name: 'Gemini', maker: 'Google', country: 'USA', url: 'https://gemini.google.com', free: 'Yes, with limits' },
  { id: 'mistral', name: 'Mistral Vibe', maker: 'Mistral AI', country: 'France', url: 'https://mistral.ai', free: 'Yes, with limits', note: 'Called Le Chat until May 2026' },
  { id: 'perplexity', name: 'Perplexity', maker: 'Perplexity AI', country: 'USA', url: 'https://www.perplexity.ai', free: 'Yes, with limits' },
  { id: 'deepl', name: 'DeepL', maker: 'DeepL', country: 'Germany', url: 'https://www.deepl.com', free: 'Yes, with limits' },
  { id: 'firefly', name: 'Adobe Firefly', maker: 'Adobe', country: 'USA', url: 'https://firefly.adobe.com', free: 'A few free images a month' },
];

export interface Use {
  task: string;
  first: string;       // tool id to try first
  also: string[];      // other tool ids that work well
  watch: string;       // one thing to be careful about
}

export const USES: Use[] = [
  { task: 'Write an email or a short text', first: 'chatgpt', also: ['copilot', 'claude'], watch: 'Take out names, phone numbers and email addresses before you paste.' },
  { task: 'Make a picture for social media or a flyer', first: 'chatgpt', also: ['gemini', 'firefly'], watch: 'Check the spelling of any words in the picture. Adobe says Firefly is made for commercial use.' },
  { task: 'Summarise a meeting', first: 'copilot', also: ['gemini'], watch: 'Tell everyone before you record. Copilot in Teams and Gemini in Google Meet both need a paid business plan.' },
  { task: 'Work with a spreadsheet', first: 'chatgpt', also: ['claude', 'copilot'], watch: 'Use totals, not rows with customer names.' },
  { task: 'Read a long document, like a contract or a report', first: 'claude', also: ['gemini'], watch: 'Ask it which page it is quoting, then look at that page yourself.' },
  { task: 'Excel formulas, small scripts and automations', first: 'claude', also: ['chatgpt'], watch: 'Try it on a copy of the file first.' },
  { task: 'Find facts or rules, with sources', first: 'perplexity', also: ['chatgpt'], watch: 'Open the sources. Sometimes a source does not say what the AI claims.' },
  { task: 'Translate', first: 'deepl', also: ['chatgpt'], watch: 'Check names, numbers and product terms.' },
  { task: 'Turn a photo of paper notes into text', first: 'chatgpt', also: ['gemini', 'claude'], watch: 'Do not photograph pages with personal data on them.' },
  { task: 'Brainstorm ideas', first: 'chatgpt', also: ['claude', 'gemini'], watch: 'The first ideas are usually the obvious ones. Ask for ten more.' },
  { task: 'Keep your data with a European company', first: 'mistral', also: [], watch: 'A European company is a good start. Still check the data settings of your plan.' },
];
