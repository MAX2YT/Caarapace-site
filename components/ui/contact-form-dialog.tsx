'use client'

import React from 'react';
import ModernRetroButton from '@/components/ui/modern-retro-button';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Mail, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLenis } from '@/components/smooth-scroll-provider';

interface ContactFormDialogProps {
  trigger?: React.ReactNode;
  className?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const SERVICE_ID = 'service_7f70ecq';
const TEMPLATE_ID = 'template_tcf8w8e';
const PUBLIC_KEY = 'GXG-wpKq5ONaVJtfE';

export function ContactFormDialog({
  trigger,
  className,
  open: externalOpen,
  onOpenChange: externalOnOpenChange,
}: ContactFormDialogProps) {
  const lenis = useLenis();
  const [internalOpen, setInternalOpen] = React.useState(false);

  // Use external open state if provided, otherwise use internal
  const isOpen = externalOpen !== undefined ? externalOpen : internalOpen;

  const handleOpenChange = (open: boolean) => {
    // Stop/start Lenis based on dialog state
    if (open) {
      lenis?.stop();
    } else {
      lenis?.start();
    }

    // Update state
    if (externalOnOpenChange) {
      externalOnOpenChange(open);
    } else {
      setInternalOpen(open);
    }
  };

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    projectType: [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (type: string, checked: boolean) => {
    setFormData((prev) => {
      const currentTypes = prev.projectType;
      if (checked) {
        return { ...prev, projectType: [...currentTypes, type] };
      } else {
        return {
          ...prev,
          projectType: currentTypes.filter((t) => t !== type),
        };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // These variable names must match the template variables you set in EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || 'Not provided',
      message: formData.message,
      project_type: formData.projectType.join(', ') || 'Not specified',
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after success
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        projectType: [],
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setIsSubmitting(false);
      setError('Something went wrong. Please try again.');
    }
  };

  const projectTypeOptions = [
    'Custom Website',
    'Mobile App',
    'Web Application',
    'CRM/ERP System',
    'Digital Marketing',
    'Security Audit',
    'Consulting',
    'Other',
  ];

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="sm" className={className}>
            Contact Us
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto overscroll-contain bg-white border-[#BD0F46]/20 pb-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Let&apos;s Build Something Amazing Together
          </DialogTitle>
          <p className="text-gray-600 mt-2">
            Tell us about your project and we&apos;ll get back to you ASAP.
          </p>
        </DialogHeader>

        {isSubmitted ? (
          <div className="py-12 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Message Sent!
            </h3>
            <p className="text-gray-600">
              We&apos;ll be in touch with you shortly.
            </p>
          </div>
        ) : (
          <>
            {/* Contact Info - Button Style */}
            <div className="flex flex-col sm:flex-row gap-2 py-3 border-b border-gray-200">
              <a
                href="mailto:info@caarapace.com"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#BD0F46]/10 to-[#BD0F46]/5 hover:from-[#BD0F46]/20 hover:to-[#BD0F46]/10 border border-[#BD0F46]/20 hover:border-[#BD0F46]/40 rounded-lg transition-all duration-300 group"
              >
                <Mail className="w-4 h-4 text-[#BD0F46] group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-gray-800 group-hover:text-[#BD0F46] transition-colors">
                  info@caarapace.com
                </span>
              </a>
              <a
                href="tel:+918610305690"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#BD0F46]/10 to-[#BD0F46]/5 hover:from-[#BD0F46]/20 hover:to-[#BD0F46]/10 border border-[#BD0F46]/20 hover:border-[#BD0F46]/40 rounded-lg transition-all duration-300 group"
              >
                <Phone className="w-4 h-4 text-[#BD0F46] group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-gray-800 group-hover:text-[#BD0F46] transition-colors">
                  +91 86103 05690
                </span>
              </a>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-[#BD0F46] focus:ring-[#BD0F46]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-[#BD0F46] focus:ring-[#BD0F46]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-gray-300 focus:border-[#BD0F46] focus:ring-[#BD0F46]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell us about your project *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Describe your project idea, goals, and any specific requirements..."
                  className="min-h-[80px] border-gray-300 focus:border-[#BD0F46] focus:ring-[#BD0F46]"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-3">
                <Label>What services are you interested in?</Label>
                <div className="grid grid-cols-2 gap-2">
                  {projectTypeOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={option.replace(/\s/g, '-').toLowerCase()}
                        checked={formData.projectType.includes(option)}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange(option, checked as boolean)
                        }
                        className="data-[state=checked]:bg-[#BD0F46] data-[state=checked]:border-[#BD0F46]"
                      />
                      <Label
                        htmlFor={option.replace(/\s/g, '-').toLowerCase()}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {error && (
                <p className="text-sm text-red-500 text-center">{error}</p>
              )}

              <ModernRetroButton
                type="submit"
                label="Send Message"
                loadingLabel="Sending..."
                isLoading={isSubmitting}
                disabled={isSubmitting}
                fullWidth={true}
              />


            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
