import { defineStore } from 'pinia';

export interface ContactForm {
  company: string;
  name: string;
  contact: string;
  email: string;
  homepage: string;
  request: string;
  privacy: boolean;
}

interface ContactFormState {
  isSending: boolean;
  message: string;
  success: boolean | null;
  valid: boolean;
  alertType: 'success' | 'error' | 'warning' | null;
}

export const useContactFormStore = defineStore('contactForm', {
  state: (): ContactFormState => ({
    isSending: false,
    message: '',
    success: null,
    valid: true,
    alertType: null,
  }),
  actions: {
    clearMessages() {
      this.message = '';
      this.alertType = null;
    },
    validateForm(form: ContactForm): boolean {
      this.clearMessages();
      const requiredFields = [form.company, form.name, form.contact, form.email, form.request, form.privacy];
      this.valid = requiredFields.every(field => field !== null && field !== '');
      if (!this.valid) {
        this.message = '양식의 필수 요소를 전부 입력해주세요.';
        this.alertType = 'warning';
      }
      return this.valid;
    },
    async submitForm(form: ContactForm) {
      if (!this.validateForm(form)) return;

      this.isSending = true;
      this.clearMessages();
      try {
        const response = await fetch('/api/sendMail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        });
        const data = await response.json();
        if (data.success) {
          this.success = true;
          this.message = '상담 신청에 성공했습니다. 빠른 시일 내로 연락드리겠습니다.';
          this.alertType = 'success';
        } else {
          this.success = false;
          this.message = '상담 신청에 실패했습니다. 다시 시도해주세요.';
          this.alertType = 'error';
        }
      } catch (error) {
        this.success = false;
        this.message = '상담 신청 중 문제가 발생했습니다. 다시 시도해주세요.';
        this.alertType = 'error';
        console.error('메일 전송 중 에러 발생:', error);
      } finally {
        this.isSending = false;
        form.company = '';
        form.name = '';
        form.contact = '';
        form.email = '';
        form.homepage = '';
        form.request = '';
        form.privacy = true;
      }
    },
  },
});
