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

interface Alert {
  type: 'success' | 'error' | 'warning';
  message: string;
}

interface ContactFormState {
  isSending: boolean;
  alerts: Alert[];
  alertType: 'success' | 'error' | 'warning' | null;
}

export const useContactFormStore = defineStore('contactForm', {
  state: (): ContactFormState => ({
    isSending: false,
    alerts: [],
    alertType: null,
  }),
  actions: {
    addAlert(type: Alert['type'], message: string) {
      this.alerts.push({ type, message });
      if (this.alerts.length > 1) {
        this.alerts.shift();
      }
    },
    async submitForm(form: ContactForm) {
      if (!this.validateForm(form)) return;

      this.isSending = true;
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
          this.addAlert('success', '상담 신청에 성공했습니다. 빠른 시일 내로 연락드리겠습니다.');
          this.alertType = 'success';
        } else {
          this.addAlert('error', '상담 신청에 실패했습니다. 다시 시도해주세요.');
          this.alertType = 'error';
        }
      } catch (error) {
        console.error('메일 전송 중 에러 발생:', error);
        this.addAlert('error', '상담 신청 중 문제가 발생했습니다. 다시 시도해주세요.');
        this.alertType = 'error';
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
    validateForm(form: ContactForm): boolean {
      const requiredFields = [form.company, form.name, form.contact, form.email, form.request, form.privacy];
      if (requiredFields.every(field => field)) {
        return true;
      } else {
        this.addAlert('warning', '양식의 필수 요소를 전부 입력해주세요.');
        this.alertType = 'warning';
        return false;
      }
    },
  },
});
