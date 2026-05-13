import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

type AlertState = {
  type: "success" | "error";
  message: string;
};

export const useContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [alert, setAlert] = useState<AlertState | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setAlert(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setAlert({
        type: "success",
        message: "Message sent successfully!",
      });

      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setAlert({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return { formRef, sendMessage, alert, isSubmitting };
};