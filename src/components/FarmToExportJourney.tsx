import { useState, useEffect } from "react";
import { MapPin, Clipboard, Search, Factory, FileText, Ship, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import traceabilityData from "@/data/traceability.json";
import { trackJourneyStepClick, trackJourneyToggle } from "@/lib/analytics";

interface TraceabilityStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const FarmToExportJourney = () => {
  const { traceabilitySteps } = traceabilityData;
  const [activeStep, setActiveStep] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(true);

  const iconMap = {
    MapPin,
    Clipboard,
    Search,
    Factory,
    FileText,
    Ship,
    CheckCircle,
  };

  useEffect(() => {
    if (!isAnimating) return;

    const stepDuration = 3000; // 3 seconds per step
    const progressInterval = 50; // Update every 50ms
    const totalSteps = traceabilitySteps.length;

    let currentProgress = 0;
    let currentStep = 0;

    const progressTimer = setInterval(() => {
      currentProgress += (100 / (stepDuration / progressInterval));
      
      if (currentProgress >= 100) {
        currentProgress = 0;
        currentStep = (currentStep + 1) % totalSteps;
        setActiveStep(currentStep);
      }
      
      setProgress(currentProgress);
    }, progressInterval);

    return () => clearInterval(progressTimer);
  }, [isAnimating, traceabilitySteps.length]);

  const handleStepClick = (stepId: number) => {
    const step = traceabilitySteps[stepId];
    trackJourneyStepClick(step?.title || "", step?.id || stepId);
    setIsAnimating(false);
    setActiveStep(stepId);
    setProgress(0);
  };

  const toggleAnimation = () => {
    const newState = !isAnimating;
    trackJourneyToggle(newState ? "resume" : "pause");
    setIsAnimating(newState);
    setProgress(0);
  };

  return (
    <div className="space-y-8">
      {/* Control Panel */}
      <div className="text-center">
        <button
          onClick={toggleAnimation}
          className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-montserrat font-semibold hover:bg-accent/90 transition-colors shadow-lg"
        >
          {isAnimating ? "Pause Tracking" : "Resume Tracking"}
        </button>
      </div>

      {/* Progress Bar */}
      <div className="relative">
        <div className="h-2 bg-primary-foreground/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-accent via-accent/80 to-accent transition-all duration-300 ease-linear"
            style={{ width: `${((activeStep * 100) + progress) / traceabilitySteps.length}%` }}
          />
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="relative">
        {/* Connection Lines */}
        <div className="absolute top-16 left-0 right-0 h-1 bg-primary-foreground/20 hidden lg:block" />
        
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {traceabilitySteps.map((step: TraceabilityStep, index: number) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            const isActive = activeStep === index;
            const isPast = activeStep > index;
            const isFuture = activeStep < index;

            return (
              <div
                key={step.id}
                onClick={() => handleStepClick(index)}
                className="cursor-pointer group"
              >
                <Card
                  className={`h-full transition-all duration-500 transform ${
                    isActive
                      ? "scale-105 shadow-xl border-accent bg-gradient-to-br from-accent/10 to-primary/5"
                      : isPast
                      ? "border-accent/30 bg-background/50"
                      : "border-border/50 hover:border-accent/30 bg-background"
                  }`}
                >
                  <CardContent className="p-6">
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isActive
                            ? "bg-accent scale-110 shadow-lg"
                            : isPast
                            ? "bg-accent/60"
                            : "bg-primary-foreground/10"
                        }`}
                      >
                        {isPast ? (
                          <CheckCircle className="h-6 w-6 text-accent-foreground" />
                        ) : (
                          <Icon
                            className={`h-6 w-6 transition-colors ${
                              isActive ? "text-accent-foreground" : "text-accent"
                            }`}
                          />
                        )}
                      </div>
                      <span
                        className={`font-montserrat font-bold text-2xl transition-colors ${
                          isActive
                            ? "text-accent"
                            : isPast
                            ? "text-accent/60"
                            : "text-muted-foreground"
                        }`}
                      >
                        {String(step.id).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Step Content */}
                    <div className="space-y-2">
                      <h3
                        className={`font-montserrat font-semibold text-lg transition-colors ${
                          isActive ? "text-accent" : "text-primary"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`font-lato text-sm transition-colors ${
                          isActive
                            ? "text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>

                    {/* Status Indicator */}
                    <div className="mt-4 pt-4 border-t border-border/30">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full transition-all duration-500 ${
                            isActive
                              ? "bg-accent animate-pulse"
                              : isPast
                              ? "bg-accent/60"
                              : "bg-muted-foreground"
                          }`}
                        />
                        <span className="font-lato text-xs text-muted-foreground">
                          {isActive
                            ? "In Progress"
                            : isPast
                            ? "Completed"
                            : "Pending"}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Animated Connector for Active Step */}
                {isActive && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-accent to-transparent animate-pulse" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Real-time Status Display */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-accent/20">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
            <div>
              <p className="font-montserrat font-semibold text-primary">
                Current Status: {traceabilitySteps[activeStep]?.title}
              </p>
              <p className="font-lato text-sm text-muted-foreground">
                {traceabilitySteps[activeStep]?.description}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-montserrat font-bold text-2xl text-accent">
              {Math.round(((activeStep + (progress / 100)) / traceabilitySteps.length) * 100)}%
            </p>
            <p className="font-lato text-xs text-muted-foreground">Complete</p>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 flex-wrap text-sm font-lato">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-accent rounded-full" />
          <span className="text-muted-foreground">Active</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-accent/60" />
          <span className="text-muted-foreground">Completed</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-muted-foreground rounded-full" />
          <span className="text-muted-foreground">Pending</span>
        </div>
      </div>
    </div>
  );
};

export default FarmToExportJourney;
