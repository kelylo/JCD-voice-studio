
export enum AppStep {
  DRAFT = 'DRAFT',
  REFINE = 'REFINE',
  VOICE = 'VOICE',
  STUDIO = 'STUDIO'
}

export enum RefinementStyle {
  INSPIRATIONAL = 'Inspirational',
  SERMON = 'Sermon',
  DEVOTIONAL = 'Devotional',
  TESTIMONY = 'Testimony',
  CALM = 'Calm',
  ENERGETIC = 'Energetic'
}

export interface VoiceOption {
  id: string;
  name: string;
  description: string;
  gender: 'male' | 'female';
  style: string;
}

export interface ProjectState {
  originalText: string;
  refinedText: string;
  selectedStyle: RefinementStyle;
  selectedVoice: string;
  audioBlob: Blob | null;
  audioUrl: string | null;
  transcription: string;
}
