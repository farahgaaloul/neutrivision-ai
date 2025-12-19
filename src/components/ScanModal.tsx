import { useState, useRef } from "react";
import { X, Camera, Upload, Loader2, Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScanModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFoodDetected: (food: DetectedFood) => void;
}

export interface DetectedFood {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  confidence: number;
}

const SAMPLE_FOODS: DetectedFood[] = [
  { name: "Grilled Chicken Salad", calories: 320, protein: 35, carbs: 12, fat: 14, confidence: 94 },
  { name: "Avocado Toast", calories: 280, protein: 8, carbs: 28, fat: 16, confidence: 91 },
  { name: "Greek Yogurt Bowl", calories: 240, protein: 20, carbs: 25, fat: 8, confidence: 88 },
  { name: "Salmon with Quinoa", calories: 450, protein: 38, carbs: 32, fat: 18, confidence: 92 },
];

export const ScanModal = ({ isOpen, onClose, onFoodDetected }: ScanModalProps) => {
  const [stage, setStage] = useState<"upload" | "analyzing" | "result">("upload");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [detectedFood, setDetectedFood] = useState<DetectedFood | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string);
        simulateAnalysis();
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateAnalysis = () => {
    setStage("analyzing");
    setTimeout(() => {
      const randomFood = SAMPLE_FOODS[Math.floor(Math.random() * SAMPLE_FOODS.length)];
      setDetectedFood(randomFood);
      setStage("result");
    }, 2000);
  };

  const handleConfirm = () => {
    if (detectedFood) {
      onFoodDetected(detectedFood);
      handleClose();
    }
  };

  const handleClose = () => {
    setStage("upload");
    setSelectedImage(null);
    setDetectedFood(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-card rounded-t-3xl sm:rounded-3xl w-full max-w-md max-h-[85vh] overflow-hidden animate-slide-up shadow-lg">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-bold text-foreground">Scan Food</h2>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6">
          {stage === "upload" && (
            <div className="space-y-4">
              <div
                onClick={() => fileInputRef.current?.click()}
                className="aspect-square rounded-2xl border-2 border-dashed border-primary/30 bg-gradient-hero flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <Camera className="w-8 h-8 text-primary-foreground" />
                </div>
                <p className="text-foreground font-semibold">Tap to take a photo</p>
                <p className="text-sm text-muted-foreground mt-1">or upload from gallery</p>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleImageUpload}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors"
              >
                <Upload className="w-5 h-5" />
                Upload from Gallery
              </button>
            </div>
          )}

          {stage === "analyzing" && (
            <div className="aspect-square rounded-2xl overflow-hidden relative">
              {selectedImage && (
                <img src={selectedImage} alt="Food" className="w-full h-full object-cover" />
              )}
              <div className="absolute inset-0 bg-foreground/60 flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-card flex items-center justify-center mb-4">
                  <Loader2 className="w-10 h-10 text-primary animate-spin" />
                </div>
                <p className="text-primary-foreground font-semibold">Analyzing your food...</p>
                <p className="text-primary-foreground/70 text-sm mt-1">AI-powered recognition</p>
              </div>
            </div>
          )}

          {stage === "result" && detectedFood && (
            <div className="space-y-4">
              <div className="aspect-video rounded-2xl overflow-hidden relative">
                {selectedImage && (
                  <img src={selectedImage} alt="Food" className="w-full h-full object-cover" />
                )}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 bg-primary rounded-full">
                  <Sparkles className="w-4 h-4 text-primary-foreground" />
                  <span className="text-sm font-medium text-primary-foreground">
                    {detectedFood.confidence}% match
                  </span>
                </div>
              </div>

              <div className="bg-secondary rounded-2xl p-4">
                <h3 className="text-lg font-bold text-foreground mb-3">{detectedFood.name}</h3>
                <div className="grid grid-cols-4 gap-2">
                  <NutrientPill label="Calories" value={detectedFood.calories} unit="kcal" />
                  <NutrientPill label="Protein" value={detectedFood.protein} unit="g" color="text-protein" />
                  <NutrientPill label="Carbs" value={detectedFood.carbs} unit="g" color="text-carbs" />
                  <NutrientPill label="Fat" value={detectedFood.fat} unit="g" color="text-fat" />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStage("upload")}
                  className="flex-1 py-3 rounded-xl bg-muted text-foreground font-medium hover:bg-muted/80 transition-colors"
                >
                  Retake
                </button>
                <button
                  onClick={handleConfirm}
                  className="flex-1 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  Add to Log
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const NutrientPill = ({
  label,
  value,
  unit,
  color = "text-foreground",
}: {
  label: string;
  value: number;
  unit: string;
  color?: string;
}) => (
  <div className="text-center">
    <p className={cn("text-lg font-bold", color)}>{value}</p>
    <p className="text-xs text-muted-foreground">{unit}</p>
  </div>
);
