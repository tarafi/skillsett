"use client";

import { useFormState, useFormStatus } from "react-dom";
import { generateSummaryAction } from "@/app/condenser/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Wand2 } from "lucide-react";

const initialState = {
  message: "",
  summary: null,
  errors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Condensing...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-5 w-5" />
          Generate Summary
        </>
      )}
    </Button>
  );
}

export default function CondenserForm() {
  const [state, formAction] = useFormState(generateSummaryAction, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
    
  useEffect(() => {
    if (state.message === "success" && state.summary) {
      toast({
        title: "Summary Generated!",
        description: "Your condensed content is ready below.",
      });
      formRef.current?.reset();
    } else if (state.message && state.message !== "success") {
       toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <div className="space-y-8">
      <form ref={formRef} action={formAction} className="space-y-4">
        <div>
          <Label htmlFor="content" className="text-lg font-semibold">
            Your Content
          </Label>
          <Textarea
            id="content"
            name="content"
            placeholder="Paste your long text here..."
            rows={10}
            className="mt-2"
            required
          />
          {state.errors?.content && (
            <p className="text-sm font-medium text-destructive mt-2">
              {state.errors.content[0]}
            </p>
          )}
        </div>
        <SubmitButton />
      </form>

      {state.summary && (
        <Card className="bg-primary/5">
          <CardHeader>
            <CardTitle className="text-primary flex items-center gap-2">
              <Wand2 />
              Condensed Summary
            </CardTitle>
            <CardDescription>
              Here is the AI-generated summary of your content.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg italic">{state.summary}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
