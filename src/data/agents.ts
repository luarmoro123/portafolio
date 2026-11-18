// Agentes de IA de la animación de entrada (nombre y color).
export const agents = {
  planner: { name: 'planner-agent', color: '#fbbf24' },
  ui: { name: 'ui-agent', color: '#67e8f9' },
  content: { name: 'content-agent', color: '#f472b6' },
  data: { name: 'data-agent', color: '#a78bfa' },
  style: { name: 'style-agent', color: '#fb923c' },
  i18n: { name: 'i18n-agent', color: '#60a5fa' },
  security: { name: 'security-agent', color: '#f87171' },
  perf: { name: 'perf-agent', color: '#2dd4bf' },
  qa: { name: 'qa-agent', color: '#4ade80' },
} as const;

export type AgentKey = keyof typeof agents;
