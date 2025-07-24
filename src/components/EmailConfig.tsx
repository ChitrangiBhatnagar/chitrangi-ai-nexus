import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Save, Check } from "lucide-react";

interface EmailConfigProps {
  onSave?: () => void;
}

export const EmailConfig = ({ onSave }: EmailConfigProps) => {
  const [config, setConfig] = useState({
    serviceId: localStorage.getItem('emailjs_service_id') || '',
    templateId: localStorage.getItem('emailjs_template_id') || '',
    publicKey: localStorage.getItem('emailjs_public_key') || ''
  });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    localStorage.setItem('emailjs_service_id', config.serviceId);
    localStorage.setItem('emailjs_template_id', config.templateId);
    localStorage.setItem('emailjs_public_key', config.publicKey);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
    onSave?.();
  };

  return (
    <Card className="shadow-cyber border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5 text-primary" />
          EmailJS Configuration
        </CardTitle>
        <CardDescription>
          Configure your EmailJS credentials to enable contact form functionality.
          You can get these from your EmailJS dashboard.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="serviceId">Service ID</Label>
          <Input
            id="serviceId"
            placeholder="service_xxxxxxx"
            value={config.serviceId}
            onChange={(e) => setConfig(prev => ({ ...prev, serviceId: e.target.value }))}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="templateId">Template ID</Label>
          <Input
            id="templateId"
            placeholder="template_xxxxxxx"
            value={config.templateId}
            onChange={(e) => setConfig(prev => ({ ...prev, templateId: e.target.value }))}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="publicKey">Public Key</Label>
          <Input
            id="publicKey"
            placeholder="user_xxxxxxxxxxxxxxxx"
            value={config.publicKey}
            onChange={(e) => setConfig(prev => ({ ...prev, publicKey: e.target.value }))}
          />
        </div>
        
        <Button 
          onClick={handleSave} 
          variant="neural" 
          className="w-full"
          disabled={!config.serviceId || !config.templateId || !config.publicKey}
        >
          {saved ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Saved!
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Configuration
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};