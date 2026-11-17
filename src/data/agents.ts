// Agentes de IA de la animación de entrada (nombre y color).
export const agents = {
  planner: { name: 'planner-agent', color: '#fbbf24' },
  ui: { name: 'ui-agent', color: '#67e8f9' },
  content: { name: 'content-agent', color: '#f472b6' },
  data: { name: 'data-agent', color: '#a78bfa' },
  qa: { name: 'qa-agent', color: '#4ade80' },
} as const;

export type AgentKey = keyof typeof agents;
