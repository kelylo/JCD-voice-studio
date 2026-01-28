
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { AppStep, ProjectState, RefinementStyle } from './types';
import { JCDLogo, COLORS, VOICE_OPTIONS, UPLIFTING_MESSAGES, GUIDE_ACTIONS, PREMADE_STORIES } from './constants';
import kelyloGuide from './kelylo.svg';
import * as gemini from './services/geminiService';

// --- Sub-components ---

const ProgressBar: React.FC<{ currentStep: AppStep }> = ({ currentStep }) => {
  const steps = [AppStep.DRAFT, AppStep.REFINE, AppStep.VOICE, AppStep.STUDIO];
  const currentIndex = steps.indexOf(currentStep);
  
  return (
    <div className="w-full max-w-2xl mx-auto mb-10">
      <div className="flex justify-between items-center mb-2">
        {steps.map((step, i) => (
          <div key={step} className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              i <= currentIndex ? 'bg-[#2e6417] text-white shadow-lg shadow-[#2e6417]/20 scale-110' : 'bg-gray-200 text-gray-500'
            }`}>
              {i < currentIndex ? <i className="fas fa-check text-[10px]"></i> : (i + 1)}
            </div>
            <span className={`text-[9px] uppercase tracking-widest mt-2 font-bold ${
              i <= currentIndex ? 'text-[#2e6417]' : 'text-gray-400'
            }`}>{step}</span>
          </div>
        ))}
      </div>
      <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#2e6417] to-[#3a7c20] transition-all duration-300 ease-out" 
          style={{ width: `${(currentIndex / (steps.length - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
};

const LoadingOverlay: React.FC<{ active: boolean }> = ({ active }) => {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => {
      setMsgIndex(prev => (prev + 1) % UPLIFTING_MESSAGES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [active]);


  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#fffff6]/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300">
      <div className="relative mb-8">
        <div className="w-24 h-24 border-4 border-[#2e6417]/10 rounded-full"></div>
        <div className="absolute inset-0 w-24 h-24 border-4 border-transparent border-t-[#2e6417] rounded-full animate-spin"></div>
        <div className="absolute inset-2 w-20 h-20 border-4 border-transparent border-b-[#3a7c20] rounded-full animate-spin duration-[2000ms]"></div>
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <img
            src={kelyloGuide}
            alt="Loading"
            className="opacity-30 animate-pulse"
            style={{
              width: '40vw',
              height: '40vw',
              maxWidth: 360,
              maxHeight: 360,
              minWidth: 160,
              minHeight: 160
            }}
          />
        </div>
      </div>
      <h3 className="text-xl sm:text-2xl font-serif text-[#2e6417] mb-2 tracking-tight">Processing</h3>
      <p className="text-sm sm:text-base text-gray-600 font-medium transition-all duration-500 animate-in slide-in-from-bottom-2 px-4">
        {UPLIFTING_MESSAGES[msgIndex]}
      </p>
    </div>
  );
};

type GuideSize = 'sm' | 'md';

const GuideWidget: React.FC<{
  step: AppStep;
  state: ProjectState;
  position: { x: number; y: number };
  size: GuideSize;
  onPositionChange: (pos: { x: number; y: number }) => void;
  onSizeChange: (size: GuideSize) => void;
}> = ({ step, state, position, size, onPositionChange, onSizeChange }) => {
  const [msgIndex, setMsgIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [hoverHint, setHoverHint] = useState('Move your mouse to get tips.');
  const draggingRef = useRef(false);
  const offsetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const hoverEl = target.closest('[data-kelylo]') as HTMLElement | null;
      if (hoverEl?.dataset.kelylo) {
        setHoverHint(hoverEl.dataset.kelylo);
        return;
      }

      let hint = 'Follow the steps and keep going.';
      if (target.tagName === 'TEXTAREA') hint = 'Type your message here.';
      else if (target.tagName === 'BUTTON') hint = 'Click to proceed.';
      else if (target.tagName === 'SELECT') hint = 'Choose a different option here.';
      else if (target.tagName === 'A') hint = 'Open a link.';

      setHoverHint(hint);
    };

    const handleDragMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      onPositionChange({
        x: e.clientX - offsetRef.current.x,
        y: e.clientY - offsetRef.current.y
      });
    };

    const handleDragUp = () => {
      draggingRef.current = false;
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('pointermove', handleDragMove);
    window.addEventListener('pointerup', handleDragUp);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('pointermove', handleDragMove);
      window.removeEventListener('pointerup', handleDragUp);
    };
  }, [onPositionChange]);

  const getStepGuidance = () => {
    if (step === AppStep.DRAFT) {
      if (!state.originalText.trim()) return "Start by writing your script.";
      return "Now click ‘Refine Script’ to continue.";
    }
    if (step === AppStep.REFINE) {
      return "Review and edit the refined text, then continue to Voice.";
    }
    if (step === AppStep.VOICE) {
      return "Pick a voice, then generate the audio.";
    }
    return "Job done. Now preview, download, or start over.";
  };

  const sizeClasses = size === 'sm'
    ? 'text-[12px] w-64'
    : 'text-[13px] w-72';

  const currentGuide = GUIDE_ACTIONS[msgIndex];

  return (
    <div
      className="fixed z-40 hidden sm:block"
      style={{
        left: position.x,
        top: position.y,
        pointerEvents: 'auto'
      }}
    >
      <div
        className={`bg-white/90 backdrop-blur-md border border-gray-100 shadow-xl rounded-2xl ${sizeClasses} p-3 flex gap-3 items-start select-none cursor-move`}
        style={{ boxShadow: '0 10px 30px rgba(46,100,23,0.12)' }}
        onPointerDown={(e) => {
          draggingRef.current = true;
          offsetRef.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y
          };
        }}
      >
        <img
          src={kelyloGuide}
          alt="Guide"
          className="w-9 h-9 rounded-lg border border-gray-100 object-contain"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="text-[#2e6417] font-black uppercase tracking-widest text-[9px]">Guide</span>
            <button
              className="text-gray-400 hover:text-[#2e6417] transition-colors"
              onClick={() => setOpen(prev => !prev)}
              aria-label="Guide settings"
              data-kelylo="Open guide settings."
            >
              <i className="fas fa-sliders-h text-[10px]"></i>
            </button>
          </div>
          <p className="mt-1 text-gray-500 font-black uppercase tracking-widest text-[9px]">{currentGuide.action}</p>
          <p className="mt-1 text-gray-600 font-medium">{currentGuide.motivation}</p>
          <p className="mt-1 text-gray-400">{currentGuide.next}</p>
          <p className="mt-1 text-[#2e6417] font-semibold">{getStepGuidance()}</p>
          <p className="mt-1 text-[#2e6417]/70 text-[11px]">{hoverHint}</p>

          {open && (
            <div className="mt-2 pt-2 border-t border-gray-100 flex items-center gap-2">
              <span className="text-[9px] uppercase tracking-widest text-gray-400 font-black">Size</span>
              <button
                className={`px-2 py-1 rounded-full text-[9px] font-black ${size === 'sm' ? 'bg-[#2e6417]/10 text-[#2e6417]' : 'text-gray-400'}`}
                onClick={() => onSizeChange('sm')}
                data-kelylo="Set the guide size to small."
              >
                Small
              </button>
              <button
                className={`px-2 py-1 rounded-full text-[9px] font-black ${size === 'md' ? 'bg-[#2e6417]/10 text-[#2e6417]' : 'text-gray-400'}`}
                onClick={() => onSizeChange('md')}
                data-kelylo="Set the guide size to medium."
              >
                Medium
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CustomAudioPlayer: React.FC<{ url: string }> = ({ url }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime;
    const dur = audioRef.current.duration;
    setCurrentTime(current);
    setProgress((current / dur) * 100);
  };

  const handleLoadedMetadata = () => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
  };

  const handleScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const val = parseFloat(e.target.value);
    const newTime = (val / 100) * duration;
    audioRef.current.currentTime = newTime;
    setProgress(val);
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-100 flex flex-col gap-6">
      <audio 
        ref={audioRef} 
        src={url} 
        onPlay={() => setIsPlaying(true)} 
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />
      
      <div className="flex items-center gap-6">
        <button 
          onClick={togglePlay}
          className="w-16 h-16 bg-[#2e6417] text-white rounded-full flex items-center justify-center text-xl shadow-lg shadow-[#2e6417]/20 hover:scale-105 transition-all"
        >
          <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play ml-1'}`}></i>
        </button>
        
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex justify-between text-[10px] font-black text-gray-400 uppercase tracking-widest">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
          <input 
            type="range" 
            className="audio-scrubber w-full"
            min="0"
            max="100"
            value={progress}
            onChange={handleScrub}
          />
        </div>
      </div>

      <div className={`flex items-center justify-center gap-1 h-8 ${isPlaying ? 'wave-active' : ''}`}>
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="wave-bar" 
            style={{ 
              height: isPlaying ? 'auto' : `${Math.random() * 10 + 5}px`,
              animationDelay: `${i * 0.05}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [step, setStep] = useState<AppStep>(AppStep.DRAFT);
  const [state, setState] = useState<ProjectState>({
    originalText: '',
    refinedText: '',
    selectedStyle: RefinementStyle.INSPIRATIONAL,
    selectedVoice: 'Kore',
    audioBlob: null,
    audioUrl: null,
    transcription: ''
  });
  const [loading, setLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [guidePosition, setGuidePosition] = useState({ x: 0, y: 0 });
  const [guideSize, setGuideSize] = useState<GuideSize>('md');
  const [history, setHistory] = useState<{ id: string; title: string; detail?: string; time: string }[]>([]);

  useEffect(() => {
    const width = guideSize === 'sm' ? 256 : 288;
    const height = 140;
    setGuidePosition({
      x: Math.max(16, window.innerWidth - width - 16),
      y: Math.max(16, window.innerHeight - height - 16)
    });
  }, [guideSize]);

  // Guide position now updates based on hovered elements (handled in GuideWidget)

  const goToStep = useCallback((targetStep: AppStep) => setStep(targetStep), []);

  const handleRefine = useCallback(async () => {
    if (!state.originalText.trim() || loading) return;
    setLoading(true);
    const refined = await gemini.refineScript(state.originalText, state.selectedStyle);
    setState(prev => ({ ...prev, refinedText: refined }));
    setLoading(false);
    goToStep(AppStep.REFINE);
    setHistory(prev => ([
      { id: `refine-${Date.now()}`, title: 'Refined script', detail: state.selectedStyle, time: new Date().toLocaleTimeString() },
      ...prev
    ]));
  }, [state.originalText, state.selectedStyle, loading, goToStep]);

  const handleGenerateVoice = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    try {
      const blob = await gemini.generateSpeech(state.refinedText, state.selectedVoice);
      const url = URL.createObjectURL(blob);
      setState(prev => ({ ...prev, audioBlob: blob, audioUrl: url }));
      setLoading(false);
      goToStep(AppStep.STUDIO);
      setHistory(prev => ([
        { id: `audio-${Date.now()}`, title: 'Generated audio', detail: state.selectedVoice, time: new Date().toLocaleTimeString() },
        ...prev
      ]));
    } catch (err) {
      setLoading(false);
      alert("Voice generation failed. Please check your connection.");
    }
  }, [state.refinedText, state.selectedVoice, loading, goToStep]);

  const handleStartOver = useCallback(() => {
    if (state.audioUrl) URL.revokeObjectURL(state.audioUrl);
    setState({
      originalText: '',
      refinedText: '',
      selectedStyle: RefinementStyle.INSPIRATIONAL,
      selectedVoice: 'Kore',
      audioBlob: null,
      audioUrl: null,
      transcription: ''
    });
    setStep(AppStep.DRAFT);
    setHistory(prev => ([
      { id: `reset-${Date.now()}`, title: 'Started over', time: new Date().toLocaleTimeString() },
      ...prev
    ]));
  }, [state.audioUrl]);

  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard.writeText(text);
    setHistory(prev => ([
      { id: `copy-${Date.now()}`, title: 'Copied text', time: new Date().toLocaleTimeString() },
      ...prev
    ]));
  }, []);

  const downloadAudio = useCallback(() => {
    if (!state.audioUrl) return;
    const a = document.createElement('a');
    a.href = state.audioUrl;
    a.download = `jcd-voice-${Date.now()}.wav`;
    a.click();
    setHistory(prev => ([
      { id: `download-audio-${Date.now()}`, title: 'Downloaded audio', time: new Date().toLocaleTimeString() },
      ...prev
    ]));
  }, [state.audioUrl]);

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMod = e.ctrlKey || e.metaKey;
      const isShift = e.shiftKey;

      if (isMod && e.key === 'Enter') {
        e.preventDefault();
        if (step === AppStep.DRAFT) handleRefine();
        else if (step === AppStep.REFINE) goToStep(AppStep.VOICE);
        else if (step === AppStep.VOICE) handleGenerateVoice();
      }

      if (isMod && isShift && e.key.toLowerCase() === 'c') {
        e.preventDefault();
        const textToCopy = step === AppStep.DRAFT ? state.originalText : state.refinedText;
        copyToClipboard(textToCopy);
      }

      if (e.key === 'Escape') {
        if (step === AppStep.REFINE) goToStep(AppStep.DRAFT);
        if (step === AppStep.VOICE) goToStep(AppStep.REFINE);
      }

      if (isMod && isShift && e.key.toLowerCase() === 'r') {
        e.preventDefault();
        handleStartOver();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [step, state, handleRefine, handleGenerateVoice, handleStartOver, copyToClipboard, goToStep]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#2e6417]/20 selection:text-[#2e6417]">
      <LoadingOverlay active={loading} />
      <GuideWidget
        step={step}
        state={state}
        position={guidePosition}
        size={guideSize}
        onPositionChange={setGuidePosition}
        onSizeChange={setGuideSize}
      />
      {/* Mobile Guide Info */}
      <div className="sm:hidden fixed bottom-4 left-4 right-4 z-30 bg-white/95 backdrop-blur-md border border-gray-100 shadow-lg rounded-2xl p-3">
        <div className="flex gap-2 items-start">
          <img src={kelyloGuide} alt="Guide" className="w-8 h-8 rounded-lg border border-gray-100 object-contain flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-[#2e6417] font-semibold text-xs line-clamp-2">\n              {step === AppStep.DRAFT && !state.originalText.trim() && "Start by writing your script."}
              {step === AppStep.DRAFT && state.originalText.trim() && "Now click 'Refine Script' to continue."}
              {step === AppStep.REFINE && "Review and edit the refined text, then continue to Voice."}
              {step === AppStep.VOICE && "Pick a voice, then generate the audio."}
              {step === AppStep.STUDIO && "Job done. Now preview, download, or start over."}
            </p>
          </div>
        </div>
      </div>
      <header className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <button
            className="w-9 h-9 rounded-xl border border-gray-200 text-gray-500 hover:text-[#2e6417] hover:border-[#2e6417]/30 transition-colors"
            onClick={() => setIsMenuOpen(prev => !prev)}
            data-kelylo="Toggle the main menu."
            aria-label="Toggle menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
          <div
            className="hover:scale-110 transition-transform cursor-pointer"
            onClick={handleStartOver}
            data-kelylo="Start over and reset the project."
          >
            <JCDLogo className="w-9 h-9" />
          </div>
          <h1 className="text-xl font-bold text-[#2e6417] tracking-tight hidden sm:block">JCD VOICE STUDIO <span className="text-[10px] bg-[#2e6417]/10 px-1.5 py-0.5 rounded text-[#2e6417] font-bold ml-1 uppercase">v2</span></h1>
        </div>
        
        <div className="hidden md:flex items-center gap-2 glass-pill px-4 py-2 rounded-full border border-gray-100">
          <a href="https://www.youtube.com/@JesusChosenDiary" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-red-600 transition-colors px-2 text-[10px] font-black uppercase tracking-widest" data-kelylo="Open the YouTube channel in a new tab.">
            <i className="fab fa-youtube mr-2"></i>YouTube
          </a>
          <div className="w-px h-4 bg-gray-200"></div>
          <a href="https://buymeacoffee.com/jcdfamily" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#2e6417] transition-colors px-2 text-[10px] font-black uppercase tracking-widest" data-kelylo="Support the project on Buy Me a Coffee.">
            <i className="fas fa-mug-hot mr-2"></i>Support
          </a>
          <div className="w-px h-4 bg-gray-200"></div>
          <a href="https://www.instagram.com/jesuschosendiary?igsh=M282Zm5oazlzMjBo" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-pink-600 transition-colors px-2 text-[10px] font-black uppercase tracking-widest" data-kelylo="Open the Instagram profile.">
            <i className="fab fa-instagram mr-2"></i>Instagram
          </a>
        </div>

        <div className="flex items-center gap-3">
           <div className="flex items-center gap-2 bg-green-50 text-[#2e6417] px-3 py-1.5 rounded-full text-[9px] font-black border border-green-100 tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Live API
           </div>
        </div>
      </header>

      {/* Menu bar beneath header */}
      {isMenuOpen && (
        <nav className="sticky top-[73px] z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4">
            <div className="flex flex-col gap-6">
              {/* Sections */}
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Sections</div>
                <div className="flex flex-col gap-2">
                  <a href="#features" onClick={() => setIsMenuOpen(false)} className="px-3 py-2 rounded-xl hover:bg-gray-50 text-gray-700 text-[11px] font-black uppercase tracking-widest transition-colors" data-kelylo="See the features we offer.">
                    <i className="fas fa-star mr-2"></i>Features
                  </a>
                  <a href="#quick-access" onClick={() => setIsMenuOpen(false)} className="px-3 py-2 rounded-xl hover:bg-gray-50 text-gray-700 text-[11px] font-black uppercase tracking-widest transition-colors" data-kelylo="Open quick access downloads.">
                    <i className="fas fa-bolt mr-2"></i>Quick Access
                  </a>
                  <a href="#about" onClick={() => setIsMenuOpen(false)} className="px-3 py-2 rounded-xl hover:bg-gray-50 text-gray-700 text-[11px] font-black uppercase tracking-widest transition-colors" data-kelylo="Learn about us.">
                    <i className="fas fa-info-circle mr-2"></i>About Us
                  </a>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Quick Actions</div>
                <div className="flex flex-col gap-2">
                  <button onClick={() => { handleStartOver(); setIsMenuOpen(false); }} className="px-3 py-2 rounded-xl hover:bg-gray-50 text-gray-700 text-[11px] font-black uppercase tracking-widest text-left transition-colors" data-kelylo="Start fresh and reset everything.">
                    <i className="fas fa-redo mr-2"></i>Start Over
                  </button>
                  <a href="#quick-access" onClick={() => setIsMenuOpen(false)} className="px-3 py-2 rounded-xl hover:bg-gray-50 text-gray-700 text-[11px] font-black uppercase tracking-widest transition-colors" data-kelylo="View your work history.">
                    <i className="fas fa-history mr-2"></i>Session History
                  </a>
                </div>
              </div>

              {/* Connect */}
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Connect</div>
                <div className="flex flex-col gap-2">
                  <a href="https://www.youtube.com/@JesusChosenDiary" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-xl hover:bg-gray-50 flex items-center gap-2 text-gray-700 text-[11px] font-black uppercase tracking-widest transition-colors" data-kelylo="Open the YouTube channel.">
                    <i className="fab fa-youtube text-red-600"></i>YouTube
                  </a>
                  <a href="https://buymeacoffee.com/jcdfamily" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-xl hover:bg-gray-50 flex items-center gap-2 text-gray-700 text-[11px] font-black uppercase tracking-widest transition-colors" data-kelylo="Support us on Buy Me a Coffee.">
                    <i className="fas fa-mug-hot text-yellow-600"></i>Buy Me a Coffee
                  </a>
                  <a href="https://www.instagram.com/jesuschosendiary?igsh=M282Zm5oazlzMjBo" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-xl hover:bg-gray-50 flex items-center gap-2 text-gray-700 text-[11px] font-black uppercase tracking-widest transition-colors" data-kelylo="Open Instagram profile.">
                    <i className="fab fa-instagram text-pink-600"></i>Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Shortcuts Modal */}
      {showShortcuts && (
        <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4" onClick={() => setShowShortcuts(false)}>
          <div className="bg-white rounded-2xl p-4 sm:p-6 max-w-md w-full shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()} data-kelylo="Learn keyboard shortcuts to work faster.">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-black text-[#2e6417] uppercase tracking-tight">Keyboard Shortcuts</h3>
              <button onClick={() => setShowShortcuts(false)} className="text-gray-400 hover:text-[#2e6417]" data-kelylo="Close shortcuts guide.">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Proceed to next step</span>
                <kbd className="px-2 py-1 bg-gray-100 rounded text-[10px] font-mono">Ctrl + Enter</kbd>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Copy current text</span>
                <kbd className="px-2 py-1 bg-gray-100 rounded text-[10px] font-mono">Ctrl + Shift + C</kbd>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Go back one step</span>
                <kbd className="px-2 py-1 bg-gray-100 rounded text-[10px] font-mono">Esc</kbd>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Start over</span>
                <kbd className="px-2 py-1 bg-gray-100 rounded text-[10px] font-mono">Ctrl + Shift + R</kbd>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black mb-2">Tip</p>
              <p className="text-sm text-gray-600">Use these shortcuts to speed up your workflow and stay focused.</p>
            </div>
          </div>
        </div>
      )}

      <main className="flex-1 container mx-auto px-4 py-6 sm:py-8 max-w-4xl">
        <ProgressBar currentStep={step} />

        <section id="features" className="mb-10" data-kelylo="Overview of key features in this studio.">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-2">Features</h3>
            <ul className="text-sm text-gray-600 space-y-2 mb-4">
              <li>• Draft to refined script with tone control.</li>
              <li>• Multiple faith‑focused voices for audio generation.</li>
              <li>• Studio playback with download and copy tools.</li>
              <li>• Smart guide (Kelylo) with hover tips and encouragement.</li>
              <li>• Randomized premade stories for instant inspiration.</li>
              <li>• Keyboard shortcuts for faster workflow.</li>
            </ul>
            <div className="flex flex-wrap gap-3 pt-3 border-t border-gray-100">
              <button
                onClick={() => setShowShortcuts(true)}
                className="px-4 py-2 rounded-full bg-[#2e6417]/10 text-[#2e6417] text-[10px] font-black uppercase tracking-widest hover:bg-[#2e6417]/20 transition-colors"
                data-kelylo="View all keyboard shortcuts."
              >
                <i className="fas fa-keyboard mr-2"></i>Shortcuts
              </button>
              <button
                onClick={() => {
                  const shortcuts = `JCD VOICE STUDIO - KEYBOARD SHORTCUTS GUIDE\n\n` +
                    `Ctrl + Enter: Proceed to next step\n` +
                    `Ctrl + Shift + C: Copy current text\n` +
                    `Esc: Go back one step\n` +
                    `Ctrl + Shift + R: Start over\n\n` +
                    `These shortcuts help you work faster and stay focused on creating great content.\n\n` +
                    `Visit: JCD Voice Studio v2`;
                  const blob = new Blob([shortcuts], { type: 'text/plain' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'jcd-shortcuts-guide.txt';
                  a.click();
                  URL.revokeObjectURL(url);
                }}
                className="px-4 py-2 rounded-full bg-gray-50 text-gray-600 text-[10px] font-black uppercase tracking-widest hover:bg-gray-100 transition-colors"
                data-kelylo="Download shortcuts guide as text file."
              >
                <i className="fas fa-download mr-2"></i>Download Guide
              </button>
            </div>
          </div>
        </section>

        <section id="quick-access" className="mb-10" data-kelylo="Quick access downloads for your text and audio.">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-2">Quick Access</h3>
            <p className="text-sm text-gray-500 mb-4">See your draft, refined text, and session history.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 rounded-2xl p-4" data-kelylo="Your current draft text.">
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Draft</div>
                <p className="text-sm text-gray-600 whitespace-pre-wrap line-clamp-6">{state.originalText || 'No draft yet.'}</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4" data-kelylo="Your current refined text.">
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Refined</div>
                <p className="text-sm text-gray-600 whitespace-pre-wrap line-clamp-6">{state.refinedText || 'No refined text yet.'}</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-4 mb-4" data-kelylo="Your recent activity history.">
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">History</div>
              <ul className="text-sm text-gray-600 space-y-1 max-h-28 overflow-auto">
                {history.length === 0 && <li>No history yet.</li>}
                {history.map(item => (
                  <li key={item.id}>
                    <span className="font-semibold">{item.title}</span>{item.detail ? ` · ${item.detail}` : ''} · {item.time}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => {
                  const blob = new Blob([state.originalText || ''], { type: 'text/plain' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = `jcd-draft-${Date.now()}.txt`;
                  a.click();
                  URL.revokeObjectURL(url);
                  setHistory(prev => ([
                    { id: `download-draft-${Date.now()}`, title: 'Downloaded draft', time: new Date().toLocaleTimeString() },
                    ...prev
                  ]));
                }}
                className="px-4 py-2 rounded-full bg-gray-50 text-gray-600 text-[10px] font-black uppercase tracking-widest"
                data-kelylo="Download the original draft as a TXT file."
              >
                Download Draft
              </button>
              <button
                onClick={() => {
                  const blob = new Blob([state.refinedText || ''], { type: 'text/plain' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = `jcd-refined-${Date.now()}.txt`;
                  a.click();
                  URL.revokeObjectURL(url);
                  setHistory(prev => ([
                    { id: `download-refined-${Date.now()}`, title: 'Downloaded refined', time: new Date().toLocaleTimeString() },
                    ...prev
                  ]));
                }}
                className="px-4 py-2 rounded-full bg-gray-50 text-gray-600 text-[10px] font-black uppercase tracking-widest"
                data-kelylo="Download the refined script as a TXT file."
              >
                Download Refined
              </button>
              <button
                onClick={downloadAudio}
                disabled={!state.audioUrl}
                className="px-4 py-2 rounded-full bg-[#2e6417] text-white text-[10px] font-black uppercase tracking-widest disabled:opacity-50"
                data-kelylo="Download the generated audio (WAV)."
              >
                Download Audio
              </button>
            </div>
          </div>
        </section>

        <section id="about" className="mb-10" data-kelylo="Learn about JCD Voice Studio and our mission.">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-2">About Us</h3>
            <p className="text-sm text-gray-600">
              JCD Voice Studio helps creators craft faith‑centered scripts and turn them into inspiring audio. We combine
              thoughtful refinement, guided encouragement, and voice synthesis so your message can reach listeners with
              clarity and warmth.
            </p>
          </div>
        </section>

        {/* Step: DRAFT */}
        {step === AppStep.DRAFT && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Write your script</h2>
                  <p className="text-gray-500 text-sm">Words that carry the spirit. Character limit: 2000.</p>
                </div>
                <div className="text-right">
                  <span className={`text-[10px] font-black tracking-tighter ${state.originalText.length > 1800 ? 'text-red-500' : 'text-gray-300'}`}>
                    {state.originalText.length} / 2000
                  </span>
                </div>
              </div>

              <textarea 
                className="w-full h-72 p-8 rounded-3xl bg-gray-50/50 border-2 border-transparent focus:bg-white focus:border-[#2e6417]/20 focus:ring-8 focus:ring-[#2e6417]/5 outline-none transition-all text-xl leading-relaxed resize-none placeholder:text-gray-300 font-medium"
                placeholder="Share the message God has put on your heart..."
                value={state.originalText}
                autoFocus
                onChange={(e) => setState(prev => ({ ...prev, originalText: e.target.value.slice(0, 2000) }))}
                data-kelylo="Type your script here."
              />

              <div className="flex flex-wrap items-center gap-4 mt-10">
                <button 
                  onClick={handleRefine}
                  disabled={!state.originalText.trim() || loading}
                  className="px-10 py-5 bg-gradient-to-r from-[#2e6417] to-[#3a7c20] text-white rounded-full font-black shadow-xl shadow-[#2e6417]/20 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
                  data-kelylo="Refine your draft with AI."
                >
                  <i className="fas fa-magic"></i>
                  Refine Script
                </button>
                <button 
                  onClick={() => setState(prev => ({ ...prev, originalText: '' }))}
                  className="px-6 py-4 text-gray-400 font-bold hover:text-red-500 transition-colors text-xs uppercase tracking-widest"
                  data-kelylo="Clear the draft text."
                >
                  Clear All
                </button>
                <button 
                  onClick={() => {
                    const random = PREMADE_STORIES[Math.floor(Math.random() * PREMADE_STORIES.length)];
                    if (random) {
                      setState(prev => ({ ...prev, originalText: random.text }));
                      setHistory(prev => ([
                        { id: `example-${Date.now()}`, title: 'Loaded example', detail: random.title, time: new Date().toLocaleTimeString() },
                        ...prev
                      ]));
                    }
                  }}
                  className="px-6 py-3 text-[#2e6417] font-black text-[10px] uppercase tracking-widest border-2 border-[#2e6417]/10 rounded-full hover:bg-[#2e6417]/5 transition-all"
                  data-kelylo="Load a random premade story into the editor."
                >
                  Load Example
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step: REFINE */}
        {step === AppStep.REFINE && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-2 duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Draft</h4>
                <div className="text-gray-400 leading-relaxed text-sm whitespace-pre-wrap">{state.originalText}</div>
              </div>

              <div className="bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-50 flex flex-col relative group">
                <h4 className="text-[10px] font-black text-[#2e6417] uppercase tracking-widest mb-4">Refined Output</h4>
                <textarea 
                  className="w-full flex-1 p-0 bg-transparent border-none outline-none focus:ring-0 text-[#1a1a2e] leading-relaxed whitespace-pre-wrap text-xl resize-none font-serif font-medium"
                  value={state.refinedText}
                  onChange={(e) => setState(prev => ({ ...prev, refinedText: e.target.value }))}
                  data-kelylo="Edit the refined text here."
                />
                <button 
                  onClick={() => copyToClipboard(state.refinedText)}
                  className="absolute bottom-4 right-4 p-3 bg-gray-50 text-gray-400 hover:text-[#2e6417] rounded-full transition-all"
                  data-kelylo="Copy the refined text to clipboard."
                >
                  <i className="far fa-copy"></i>
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">Tone Selection</h4>
              <div className="flex flex-wrap gap-2 mb-10">
                {Object.values(RefinementStyle).map(styleVal => (
                  <button 
                    key={styleVal}
                    onClick={() => setState(prev => ({ ...prev, selectedStyle: styleVal }))}
                    className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                      state.selectedStyle === styleVal ? 'bg-[#2e6417] text-white shadow-lg' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                    }`}
                    data-kelylo={`Set the refinement tone to ${styleVal}.`}
                  >
                    {styleVal}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-gray-50">
                <button 
                  onClick={() => goToStep(AppStep.VOICE)}
                  className="px-10 py-5 bg-[#2e6417] text-white rounded-full font-black shadow-xl hover:scale-105 transition-all flex items-center gap-3"
                  data-kelylo="Continue to voice selection."
                >
                  Next Step
                  <i className="fas fa-arrow-right"></i>
                </button>
                <button onClick={handleRefine} className="px-6 py-4 text-[#2e6417] font-black text-[10px] uppercase tracking-widest" data-kelylo="Refine the text again with the current tone.">
                  Refine Again
                </button>
                <button onClick={() => goToStep(AppStep.DRAFT)} className="px-6 py-4 text-gray-400 font-black text-[10px] uppercase tracking-widest" data-kelylo="Go back to the draft editor.">
                  Back to Draft
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step: VOICE */}
        {step === AppStep.VOICE && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-2 duration-300">
             <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-2xl">
               <div className="mb-10">
                 <h2 className="text-3xl font-bold text-gray-900 mb-2">Voices of Faith</h2>
                 <p className="text-gray-500 text-sm">Every voice has a purpose. Choose one that resonates with your script.</p>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {VOICE_OPTIONS.map(voice => (
                   <button 
                    key={voice.name + voice.id}
                    onClick={() => setState(prev => ({ ...prev, selectedVoice: voice.id }))}
                    className={`p-6 rounded-3xl border-2 transition-all text-left flex items-center gap-5 ${
                      state.selectedVoice === voice.id ? 'border-[#2e6417] bg-green-50/30' : 'border-gray-50 hover:border-gray-200'
                    }`}
                    data-kelylo={`Select the ${voice.name} voice.`}
                   >
                     <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-lg ${
                        state.selectedVoice === voice.id ? 'bg-[#2e6417] text-white' : 'bg-gray-100 text-gray-400'
                     }`}>
                       <i className={`fas ${voice.gender === 'female' ? 'fa-female' : 'fa-male'}`}></i>
                     </div>
                     <div className="flex-1">
                       <span className="font-black text-gray-800 tracking-tight block">{voice.name}</span>
                       <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">{voice.style} style</span>
                     </div>
                   </button>
                 ))}
               </div>

               <div className="flex gap-6 mt-12 pt-10 border-t border-gray-50">
                 <button 
                    onClick={handleGenerateVoice}
                    className="px-12 py-5 bg-[#2e6417] text-white rounded-full font-black shadow-2xl hover:scale-105 transition-all flex items-center gap-3"
                    data-kelylo="Generate audio using the selected voice."
                  >
                    <i className="fas fa-volume-up"></i>
                    Generate Audio
                  </button>
                  <button onClick={() => goToStep(AppStep.REFINE)} className="text-gray-400 font-black text-[10px] uppercase tracking-widest" data-kelylo="Go back to refine the text.">
                    Back
                  </button>
               </div>
             </div>
          </div>
        )}

        {/* Step: STUDIO */}
        {step === AppStep.STUDIO && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-gray-50 text-center flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#2e6417] to-[#3a7c20] rounded-[2rem] flex items-center justify-center mb-8 shadow-xl shadow-[#2e6417]/20 rotate-6">
                <i className="fas fa-check text-white text-3xl"></i>
              </div>
              
              <h2 className="text-4xl font-serif font-black text-gray-900 mb-2">Studio Master</h2>
              <p className="text-gray-400 mb-10 max-w-sm text-sm font-medium">Your inspirational message is now ready for the world.</p>

              {state.audioUrl && (
                <div className="w-full max-w-xl mb-12">
                   <CustomAudioPlayer url={state.audioUrl} />
                </div>
              )}

              <div className="flex flex-wrap justify-center gap-4 w-full max-w-xl">
                <button 
                  onClick={downloadAudio}
                  className="flex-1 px-8 py-6 bg-gradient-to-r from-[#2e6417] to-[#3a7c20] text-white rounded-3xl font-black shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
                  data-kelylo="Download the audio as a WAV file."
                >
                  <i className="fas fa-download text-xl"></i>
                  <span>Download WAV</span>
                </button>
                <button 
                  onClick={() => copyToClipboard(state.refinedText)}
                  className="flex-1 px-8 py-6 bg-white text-[#2e6417] border-2 border-[#2e6417]/10 rounded-3xl font-black hover:bg-green-50/50 transition-all flex items-center justify-center gap-3"
                  data-kelylo="Copy the final script to clipboard."
                >
                  <i className="far fa-file-alt"></i>
                  <span>Copy Script</span>
                </button>
              </div>

              <div className="mt-16 pt-8 border-t border-gray-100 w-full flex justify-center">
                <button onClick={handleStartOver} className="text-[#2e6417] font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 bg-gray-50 px-8 py-3 rounded-full hover:bg-gray-100 transition-all" data-kelylo="Start a new recording from scratch.">
                  <i className="fas fa-plus"></i>
                  New Recording
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="py-12 text-center text-[10px] font-black uppercase tracking-widest text-gray-300">
         <div className="flex flex-wrap items-center justify-center gap-4 mb-3">
           <a href="https://www.youtube.com/@JesusChosenDiary" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-red-600" data-kelylo="Open the YouTube channel.">
             YouTube
           </a>
           <a href="https://buymeacoffee.com/jcdfamily" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#2e6417]" data-kelylo="Support us on Buy Me a Coffee.">
             Buy Me a Coffee
           </a>
           <a href="https://www.instagram.com/jesuschosendiary?igsh=M282Zm5oazlzMjBo" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-pink-600" data-kelylo="Open Instagram profile.">
             Instagram
           </a>
         </div>
         <p>© {new Date().getFullYear()} Jesus Chosen Diary Studio • V2</p>
      </footer>
    </div>
  );
}
