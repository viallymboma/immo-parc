import { create } from 'zustand';

interface TaskState {
  taskId: string;
  title: string;
  description: string;
  xofPoints: number;
  createdAt: string;
  imageUrl: string | null;
  isSubmitted: boolean;
  submitTask: () => void;
  setTaskDetails: (details: Partial<TaskState>) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  taskId: '',
  title: 'YouTubeExigences de la tâche : Regardez la vidéo Aimez et abonnez-vous',
  description: '(Téléchargez des images de tâches en fonction du processus de tâche.)',
  xofPoints: 800,
  createdAt: '2024.11.20-01:12:01',
  imageUrl: null,
  isSubmitted: false,
  submitTask: () => set({ isSubmitted: true }),
  setTaskDetails: (details) => set((state) => ({ ...state, ...details })),
}));